/**
 *
 * @export
 */
export const BeginMultipartUploadRequest = {} as const;
export type BeginMultipartUploadRequest = typeof BeginMultipartUploadRequest[keyof typeof BeginMultipartUploadRequest];

export function BeginMultipartUploadRequestFromJSON(json: any): BeginMultipartUploadRequest {
  return json as BeginMultipartUploadRequest;
}

export function BeginMultipartUploadRequestToJSON(value?: BeginMultipartUploadRequest | null): any {
  return value as any;
}
