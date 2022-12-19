import { BeginMultipartUploadRequest } from "../../src";
import { CancellationToken } from "./CancellationToken";
import { UploadSource } from "./UploadSource";

export interface UploadRequest extends Omit<BeginMultipartUploadRequest, "size"> {
  accountId: string;
  cancellationToken?: CancellationToken;
  data: UploadSource;
  maxConcurrentUploadParts?: number;

  /**
   * Only required if 'data' is a 'ReadableStream'.
   */
  size?: number;
}
