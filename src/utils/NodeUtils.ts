import type * as stream from "stream";
import type * as buffer from "buffer";
import { BlobLike } from "./Model";

/**
 * Provides access to Node.js built-in libraries. Should only be called when we're certain we're running in Node.js.
 *
 * We import lazily to support browsers, which don't have these modules, but also won't call these methods so won't trigger the imports.
 */
export class NodeUtils {
  static async createStream(): Promise<stream.Readable> {
    const streamModule = ((await import("stream")) as any).default as typeof stream;
    const Readable = streamModule.Readable;
    const readable = new Readable();
    readable._read = () => {}; // _read is required but you can noop it
    return readable;
  }

  static async createBlob(sources: string[], options?: buffer.BlobOptions): Promise<BlobLike> {
    const bufferModule = ((await import("buffer")) as any).default as typeof buffer;
    const B = bufferModule.Blob;
    return new B(sources, options);
  }
}
