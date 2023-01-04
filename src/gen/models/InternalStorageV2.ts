/**
 *
 * @export
 */
export const InternalStorageV2 = {} as const;
export type InternalStorageV2 = typeof InternalStorageV2[keyof typeof InternalStorageV2];

export function InternalStorageV2FromJSON(json: any): InternalStorageV2 {
  return json as InternalStorageV2;
}

export function InternalStorageV2ToJSON(value?: InternalStorageV2 | null): any {
  return value as any;
}
