/**
 * Supported implementations:
 * - Node.js 'buffer.Blob', e.g. 'new buffer.Blob([JSON.stringify({someValue: 42})], {type: "application/json"})'
 * - Browser 'Blob', e.g. 'new Blob([JSON.stringify({someValue: 42})], {type: "application/json"})'
 * - Browser 'File', e.g. from a <input type="file" onchange="...">
 */
import { BeginMultipartUploadRequest } from "../gen";
import { ChunkedStream } from "./ChunkedStream";

export interface BlobLike {
  readonly name?: string;
  readonly size: number;
  readonly type?: string;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  slice: (start?: number, end?: number) => BlobLike;
}

export interface CancellationToken {
  isCancelled: boolean;
}

export class CancelledError extends Error {
  override name: "CancelledError" = "CancelledError";

  constructor(public msg?: string) {
    super(msg);
  }
}

export type UploadSource = NodeJS.ReadableStream | BlobLike | Buffer | string;

export interface UploadManagerParams extends Omit<BeginMultipartUploadRequest, "size" | "protocol"> {
  accountId: string;
  cancellationToken?: CancellationToken;
  data: UploadSource;
  maxConcurrentUploadParts?: number;

  /**
   * Only required if 'data' is a 'ReadableStream'.
   */
  size?: number;
}

export type UploadSourceProcessed = ChunkedStream | BlobLike | Buffer;
