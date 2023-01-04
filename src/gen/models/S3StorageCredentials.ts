/**
 *
 * @export
 */
export const S3StorageCredentials = {} as const;
export type S3StorageCredentials = typeof S3StorageCredentials[keyof typeof S3StorageCredentials];

export function S3StorageCredentialsFromJSON(json: any): S3StorageCredentials {
  return json as S3StorageCredentials;
}

export function S3StorageCredentialsToJSON(value?: S3StorageCredentials | null): any {
  return value as any;
}
