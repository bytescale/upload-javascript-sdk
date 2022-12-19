import { BlobLike } from "./BlobLike";
import { ChunkedStream } from "../utils/ChunkedStream";

export type UploadSource = NodeJS.ReadableStream | BlobLike | Buffer | string;

export type UploadSourceProcessed = ChunkedStream | BlobLike | Buffer;
