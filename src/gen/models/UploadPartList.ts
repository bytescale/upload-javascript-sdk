/**
 *
 * @export
 */
export const UploadPartList = {} as const;
export type UploadPartList = typeof UploadPartList[keyof typeof UploadPartList];

export function UploadPartListFromJSON(json: any): UploadPartList {
  return json as UploadPartList;
}

export function UploadPartListToJSON(value?: UploadPartList | null): any {
  return value as any;
}
