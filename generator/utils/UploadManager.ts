import { BeginMultipartUploadResponse, DefaultConfig, FileDetails, UploadApi, UploadPart } from "../../src";
import { Readable } from "stream";
import * as buffer from "buffer";
import { ChunkedStream } from "./ChunkedStream";
import { BlobLike, CancelledError, UploadRequest, UploadSource, UploadSourceProcessed } from "./Model";

export class UploadManager {
  private readonly defaultMaxConcurrentUploadParts = 4;
  private readonly uploadApi: UploadApi;

  constructor(private readonly configuration = DefaultConfig) {
    this.uploadApi = new UploadApi(configuration);
  }

  async upload(request: UploadRequest): Promise<FileDetails> {
    const data = this.processUploadSource(request.data);
    const chunkedStream = this.getChunkedStream(data);
    const uploadInfo = await this.beginUpload(request, data);
    this.checkIfCancelled(request);
    const maxConcurrency = this.calculateMaxConcurrency(request, data);
    const partCount = uploadInfo.uploadParts.count;
    const parts = [...Array(partCount).keys()];
    await Promise.all([
      chunkedStream?.runChunkPipeline(),
      this.mapAsync(parts, maxConcurrency, async part => await this.uploadPart(request, data, part, uploadInfo))
    ]);
    return uploadInfo.file;
  }

  private checkIfCancelled(request: UploadRequest): void {
    if (request.cancellationToken?.isCancelled === true) {
      throw new CancelledError("Upload cancelled by user.");
    }
  }

  private async beginUpload(
    request: UploadRequest,
    data: UploadSourceProcessed
  ): Promise<BeginMultipartUploadResponse> {
    const size = this.calculateSize(request, data);
    const mime = this.calculateMime(request, data);
    const originalFileName = this.calculateOriginalFileName(request, data);
    return await this.uploadApi.beginMultipartUpload({
      accountId: request.accountId,
      beginMultipartUploadRequest: {
        metadata: request.metadata,
        mime,
        originalFileName,
        path: request.path,
        size,
        tags: request.tags
      }
    });
  }

  private async uploadPart(
    request: UploadRequest,
    data: UploadSourceProcessed,
    partIndex: number,
    uploadInfo: BeginMultipartUploadResponse
  ): Promise<void> {
    this.checkIfCancelled(request);
    const part = await this.getUploadPart(request, partIndex, uploadInfo);
    this.checkIfCancelled(request);
    const etag = await this.putUploadPart(part, data, uploadInfo);
    this.checkIfCancelled(request);
    await this.uploadApi.completeUploadPart({
      accountId: request.accountId,
      uploadId: uploadInfo.uploadId,
      uploadPartIndex: partIndex,
      completeUploadPartRequest: {
        etag
      }
    });
  }

  /**
   * Returns etag for the part.
   */
  private async putUploadPart(
    part: UploadPart,
    data: UploadSourceProcessed,
    uploadInfo: BeginMultipartUploadResponse
  ): Promise<string> {
    const fetchApi = this.configuration.fetchApi ?? fetch;
    const isMultipart = uploadInfo.uploadParts.count > 1;

    // Headers only need setting for single-part uploads, as they're already set by the Upload API for multipart uploads.
    let headers: HeadersInit | undefined;
    if (!isMultipart) {
      headers = { "content-type": uploadInfo.file.mime };
      if (uploadInfo.file.originalFileName !== null) {
        headers = {
          ...headers,
          "content-disposition": `inline; filename="${encodeURIComponent(
            uploadInfo.file.originalFileName
          )}"; filename*=UTF-8''${encodeURIComponent(uploadInfo.file.originalFileName)}`
        };
      }
    }

    const response = await fetchApi(part.uploadUrl, {
      method: "PUT",
      headers,
      body: this.coerceRequestBody(await this.makeRequestBody(part, data))
    });

    const etag = response.headers.get("etag") ?? undefined;
    if (etag === undefined) {
      throw new Error("No 'etag' response header found in upload part response.");
    }

    return etag;
  }

  private coerceRequestBody(data: NodeJS.ReadableStream | Buffer | BlobLike): BodyInit {
    return data as any; // node-fetch supports 'NodeJS.ReadableStream'
  }

  private async makeRequestBody(
    part: UploadPart,
    data: UploadSourceProcessed
  ): Promise<NodeJS.ReadableStream | Buffer | BlobLike> {
    const slicedData = this.sliceDataForRequest(data, part);
    const isNodeJs = this.isNodeJs();

    // node-fetch requires 'NodeJS.ReadableStream' for the body.
    // browser fetch supports blobs and buffers.
    return await this.foldDataRaw<Promise<NodeJS.ReadableStream | Buffer | BlobLike>>(slicedData, {
      ifBuffer: async buffer => (isNodeJs ? this.bufferToStream(buffer) : buffer),
      ifBlob: async blob => (isNodeJs ? this.bufferToStream(await this.blobToBuffer(blob)) : blob),
      ifNodeJsStream: async stream => stream
    });
  }

  private bufferToStream(buffer: ArrayBuffer): NodeJS.ReadableStream {
    const readable = new Readable();
    readable._read = () => {}; // _read is required but you can noop it
    readable.push(buffer);
    readable.push(null);
    return readable;
  }

  /**
   * Only expected to be called in Node.js environments, and as such, we can assume 'BlobLike' is not a DOM 'File' object.
   */
  private async blobToBuffer(blob: BlobLike): Promise<ArrayBuffer> {
    // DOM Blob and Node.js Blob both have 'arrayBuffer' with the same signature...
    if ((blob as Partial<buffer.Blob>).arrayBuffer !== undefined) {
      return await (blob as buffer.Blob).arrayBuffer();
    }
    throw new Error("The provided 'data' field was treated as a BLOB, but it does not have an 'arrayBuffer' method.");
  }

  private sliceDataForRequest(data: UploadSourceProcessed, part: UploadPart): UploadSource {
    if (part.range.inclusiveEnd === -1) {
      return "";
    }

    const start = part.range.inclusiveStart;
    const endExclusive = part.range.inclusiveEnd + 1;
    const partSize = endExclusive - start;

    return this.foldData<UploadSource>(data, {
      ifBlob: (blob): UploadSource => blob.slice(start, endExclusive),
      ifBuffer: (buffer): UploadSource => buffer.subarray(start, endExclusive),
      ifNodeJsStream: (stream): UploadSource => stream.take(partSize) // Assumes stream is read using one worker (which it is).
    });
  }

  private isNodeJs(): boolean {
    return typeof process !== "undefined" && process.versions !== undefined && process.versions.node !== undefined;
  }

  private async getUploadPart(
    request: UploadRequest,
    partIndex: number,
    uploadInfo: BeginMultipartUploadResponse
  ): Promise<UploadPart> {
    if (partIndex === 0) {
      return uploadInfo.uploadParts.first;
    }
    return await this.uploadApi.getUploadPart({
      uploadId: uploadInfo.uploadId,
      accountId: request.accountId,
      uploadPartIndex: partIndex
    });
  }

  private calculateSize(request: UploadRequest, data: UploadSourceProcessed): number {
    return this.foldData(data, {
      ifBlob: blob => blob.size,
      ifBuffer: buffer => buffer.length,
      ifNodeJsStream: _ => {
        if (request.size === undefined) {
          throw new Error("You must include the 'size' parameter when using a stream for the 'data' parameter.");
        }
        return request.size;
      }
    });
  }

  private calculateMime(request: UploadRequest, data: UploadSourceProcessed): string | undefined {
    return (
      request.mime ??
      this.foldData(data, {
        ifBlob: blob => blob.type,
        ifBuffer: _ => undefined,
        ifNodeJsStream: _ => undefined
      })
    );
  }

  private calculateOriginalFileName(request: UploadRequest, data: UploadSourceProcessed): string | undefined {
    return (
      request.originalFileName ??
      this.foldData(data, {
        ifBlob: blob => blob.name,
        ifBuffer: _ => undefined,
        ifNodeJsStream: _ => undefined
      })
    );
  }

  private calculateMaxConcurrency(request: UploadRequest, data: UploadSourceProcessed): number {
    return (
      this.foldData(data, {
        ifBlob: _ => request.maxConcurrentUploadParts,
        ifBuffer: _ => request.maxConcurrentUploadParts,
        ifNodeJsStream: _ => 1 // Uploading from a stream concurrently is more complex, as would require buffering parts in memory, so we serialize.
      }) ?? this.defaultMaxConcurrentUploadParts
    );
  }

  private getChunkedStream(data: UploadSourceProcessed): ChunkedStream | undefined {
    return this.foldData<ChunkedStream | undefined>(data, {
      ifBlob: _ => undefined,
      ifBuffer: _ => undefined,
      ifNodeJsStream: x => x
    });
  }

  private foldData<T>(
    data: UploadSourceProcessed,
    handle: {
      ifBlob: (blob: BlobLike) => T;
      ifBuffer: (buffer: Buffer) => T;
      ifNodeJsStream: (stream: ChunkedStream) => T;
    }
  ): T {
    if (data instanceof ChunkedStream) {
      return handle.ifNodeJsStream(data);
    }
    if ((data as Partial<Buffer>).subarray !== undefined) {
      return handle.ifBuffer(data as Buffer);
    }
    if ((data as Partial<BlobLike>).slice !== undefined) {
      return handle.ifBlob(data as BlobLike);
    }

    throw new Error(`Unsupported type for 'data' parameter. Please provide a String, Blob, or Readable (Node.js).`);
  }

  private foldDataRaw<T>(
    data: UploadSource,
    handle: {
      ifBlob: (blob: BlobLike) => T;
      ifBuffer: (buffer: Buffer) => T;
      ifNodeJsStream: (stream: NodeJS.ReadableStream) => T;
    }
  ): T {
    if (typeof data === "string") {
      return handle.ifBlob(this.stringToBlob(data));
    }
    if ((data as Partial<NodeJS.ReadableStream>).on !== undefined) {
      return handle.ifNodeJsStream(data as NodeJS.ReadableStream);
    }
    if ((data as Partial<Buffer>).subarray !== undefined) {
      return handle.ifBuffer(data as Buffer);
    }
    if ((data as Partial<BlobLike>).slice !== undefined) {
      return handle.ifBlob(data as BlobLike);
    }
    throw new Error(`Unsupported type for 'data' parameter. Please provide a String, Blob, or Readable (Node.js).`);
  }

  private processUploadSource(data: UploadSource): UploadSourceProcessed {
    if (typeof data === "string") {
      return this.stringToBlob(data);
    }
    if ((data as Partial<NodeJS.ReadableStream>).on !== undefined) {
      return new ChunkedStream(data as NodeJS.ReadableStream);
    }
    if ((data as Partial<Buffer>).subarray !== undefined) {
      return data as Buffer;
    }
    if ((data as Partial<BlobLike>).slice !== undefined) {
      return data as BlobLike;
    }

    throw new Error(`Unsupported type for 'data' parameter. Please provide a String, Blob, or Readable (Node.js).`);
  }

  private stringToBlob(data: string): BlobLike {
    const B = globalThis.Blob ?? buffer.Blob;
    return new B([data], { type: "text/plain" });
  }

  private async mapAsync<T>(items: T[], concurrency: number, callback: (item: T) => Promise<void>): Promise<void> {
    const workQueue = [...items];
    await Promise.all(
      [...Array(concurrency).keys()].map(async () => {
        while (workQueue.length > 0) {
          const work = workQueue.pop();
          if (work !== undefined) {
            await callback(work);
          }
        }
      })
    );
  }
}
