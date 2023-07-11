import type stream from "stream";

export class InteropUtils {
  static async createStream(): Promise<stream.Readable> {
    // We import "stream" lazily to support browsers, which don't have this module, but also won't call this method so won't trigger the import.
    const streamModule = ((await import("stream")) as any).default as typeof stream;
    const Readable = streamModule.Readable;
    const readable = new Readable();
    readable._read = () => {}; // _read is required but you can noop it
    return readable;
  }
}
