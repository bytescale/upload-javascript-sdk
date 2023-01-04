/**
 *
 * @export
 */
export const UploadPartRange = {} as const;
export type UploadPartRange = typeof UploadPartRange[keyof typeof UploadPartRange];

export function UploadPartRangeFromJSON(json: any): UploadPartRange {
  return json as UploadPartRange;
}

export function UploadPartRangeToJSON(value?: UploadPartRange | null): any {
  return value as any;
}
