/**
 *
 * @export
 */
export const UploadPart = {} as const;
export type UploadPart = typeof UploadPart[keyof typeof UploadPart];

export function UploadPartFromJSON(json: any): UploadPart {
  return json as UploadPart;
}

export function UploadPartToJSON(value?: UploadPart | null): any {
  return value as any;
}
