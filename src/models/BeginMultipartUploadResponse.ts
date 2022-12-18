/**
 *
 * @export
 */
export const BeginMultipartUploadResponse = {} as const;
export type BeginMultipartUploadResponse = typeof BeginMultipartUploadResponse[keyof typeof BeginMultipartUploadResponse];

export function BeginMultipartUploadResponseFromJSON(json: any): BeginMultipartUploadResponse {
  return json as BeginMultipartUploadResponse;
}

export function BeginMultipartUploadResponseToJSON(value?: BeginMultipartUploadResponse | null): any {
  return value as any;
}
