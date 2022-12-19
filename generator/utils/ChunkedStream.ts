import type { Readable } from "stream";

interface Consumer {
  bytesRemaining: number;
  stream: Readable;
}

export class ChunkedStream {
  private buffer: Buffer = Buffer.alloc(0);
  private consumer: Consumer | undefined;
  private isSourceFinished = false;

  constructor(private readonly source: NodeJS.ReadableStream) {}

  /**
   * Promise resolves when the entire stream has finished processing, or an error occurs.
   * You must call 'take' a sufficient number of times after calling this method in order for this promise to resolve.
   */
  async runChunkPipeline(): Promise<void> {
    return await new Promise((resolve, reject) => {
      const onError = (error: any): void => {
        removeListeners();
        reject(error);
      };
      const onEnd = (): void => {
        this.isSourceFinished = true;
        removeListeners();
        resolve();
      };
      const onData = (buffer: Buffer): void => {
        try {
          if (this.consumer === undefined) {
            console.warn(
              "Stream yielded data while paused. The data will be buffered, but excessive buffering can cause memory issues."
            );
            this.buffer = Buffer.concat([this.buffer, buffer]);
            return;
          }
          if (this.consumer.bytesRemaining <= 0) {
            throw new Error("Consumer requires zero bytes, so should not be consuming from the stream.");
          }
          if (this.buffer.byteLength > 0) {
            throw new Error(
              "Buffer was expected to be empty (as it should have been flushed to the consumer when '.take' was called)."
            );
          }

          const splitResult = this.splitBuffer(buffer, this.consumer.bytesRemaining);
          if (splitResult === undefined) {
            return; // Received empty data.
          }

          const [consumed, remaining] = splitResult;
          this.buffer = remaining;
          this.consumer.bytesRemaining -= consumed.byteLength;
          this.consumer.stream.push(consumed);
          if (this.consumer.bytesRemaining === 0) {
            this.finishStream(this.consumer.stream);
            this.source.pause();
          }
        } catch (e) {
          removeListeners();
          reject(e);
        }
      };

      const removeListeners = (): void => {
        this.source.removeListener("data", onData);
        this.source.removeListener("error", onError);
        this.source.removeListener("end", onEnd);
      };

      this.source.on("data", onData);
      this.source.on("error", onError);
      this.source.on("end", onEnd);

      this.source.pause(); // Resumed when 'take' is called.
    });
  }

  /**
   * Only call 'take' after the previously returned stream has been fully consumed.
   */
  take(bytes: number): NodeJS.ReadableStream {
    if (bytes <= 0) {
      return this.emptyStream();
    }

    const readable = this.createStream();
    const consumedFromBuffer = this.consumeFromBuffer(bytes);
    const consumedFromBufferLength = consumedFromBuffer?.length ?? 0;
    const bytesToConsumeFromStream = bytes - consumedFromBufferLength;

    if (consumedFromBuffer !== undefined) {
      readable.push(consumedFromBuffer);
    }

    if (bytesToConsumeFromStream > 0) {
      if (this.isSourceFinished) {
        throw new Error(
          `Stream finished processing earlier than expected. The "size" parameter is likely larger than the stream's actual contents.`
        );
      }

      this.consumer = {
        bytesRemaining: bytesToConsumeFromStream,
        stream: readable
      };
      this.source.resume();
    } else {
      this.finishStream(readable);
    }

    return readable;
  }

  private consumeFromBuffer(bytes: number): Buffer | undefined {
    const splitResult = this.splitBuffer(this.buffer, bytes);
    if (splitResult === undefined) {
      return undefined;
    }

    const [consumed, remaining] = splitResult;
    this.buffer = remaining;
    return consumed;
  }

  private splitBuffer(buffer: Buffer, maxBytes: number): [Buffer, Buffer] | undefined {
    if (buffer.byteLength === 0) {
      return undefined;
    }

    const bytesToConsume = Math.min(maxBytes, buffer.byteLength);
    if (bytesToConsume === buffer.byteLength) {
      return [buffer, Buffer.alloc(0)]; // Optimization
    }

    const consumed = buffer.subarray(0, bytesToConsume);
    const remaining = buffer.subarray(bytesToConsume);
    return [consumed, remaining];
  }

  private createStream(): Readable {
    // We import "stream" lazily to support browsers, which won't have this module available.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Readable = require("stream").Readable;
    const readable = new Readable();
    readable._read = () => {}; // _read is required but you can noop it
    return readable;
  }

  private emptyStream(): NodeJS.ReadableStream {
    const readable = this.createStream();
    this.finishStream(readable);
    return readable;
  }

  private finishStream(readable: Readable): void {
    readable.push(null);
  }
}