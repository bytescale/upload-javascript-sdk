/**
 *
 * @export
 */
export const PickS3StorageExcludeKeyofS3StorageCredentials = {} as const;
export type PickS3StorageExcludeKeyofS3StorageCredentials =
  typeof PickS3StorageExcludeKeyofS3StorageCredentials[keyof typeof PickS3StorageExcludeKeyofS3StorageCredentials];

export function PickS3StorageExcludeKeyofS3StorageCredentialsFromJSON(
  json: any
): PickS3StorageExcludeKeyofS3StorageCredentials {
  return json as PickS3StorageExcludeKeyofS3StorageCredentials;
}

export function PickS3StorageExcludeKeyofS3StorageCredentialsToJSON(
  value?: PickS3StorageExcludeKeyofS3StorageCredentials | null
): any {
  return value as any;
}
