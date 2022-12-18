/**
 *
 * @export
 */
export const BeginMultipartUploadResponseUploadParts = {} as const;
export type BeginMultipartUploadResponseUploadParts = typeof BeginMultipartUploadResponseUploadParts[keyof typeof BeginMultipartUploadResponseUploadParts];

export function BeginMultipartUploadResponseUploadPartsFromJSON(json: any): BeginMultipartUploadResponseUploadParts {
  return json as BeginMultipartUploadResponseUploadParts;
}

export function BeginMultipartUploadResponseUploadPartsToJSON(
  value?: BeginMultipartUploadResponseUploadParts | null
): any {
  return value as any;
}
