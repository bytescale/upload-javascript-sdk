/**
 *
 * @export
 */
export const InternalStorageV1 = {} as const;
export type InternalStorageV1 = typeof InternalStorageV1[keyof typeof InternalStorageV1];

export function InternalStorageV1FromJSON(json: any): InternalStorageV1 {
  return json as InternalStorageV1;
}

export function InternalStorageV1ToJSON(value?: InternalStorageV1 | null): any {
  return value as any;
}
