/**
 *
 * @export
 */
export const CompleteUploadPartRequest = {} as const;
export type CompleteUploadPartRequest = typeof CompleteUploadPartRequest[keyof typeof CompleteUploadPartRequest];

export function CompleteUploadPartRequestFromJSON(json: any): CompleteUploadPartRequest {
  return json as CompleteUploadPartRequest;
}

export function CompleteUploadPartRequestToJSON(value?: CompleteUploadPartRequest | null): any {
  return value as any;
}
