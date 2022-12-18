/**
 *
 * @export
 */
export const S3Storage = {} as const;
export type S3Storage = typeof S3Storage[keyof typeof S3Storage];

export function S3StorageFromJSON(json: any): S3Storage {
  return json as S3Storage;
}

export function S3StorageToJSON(value?: S3Storage | null): any {
  return value as any;
}
