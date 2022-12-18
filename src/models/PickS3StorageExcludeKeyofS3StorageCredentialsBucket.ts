/**
 *
 * @export
 */
export const PickS3StorageExcludeKeyofS3StorageCredentialsBucket = {} as const;
export type PickS3StorageExcludeKeyofS3StorageCredentialsBucket = typeof PickS3StorageExcludeKeyofS3StorageCredentialsBucket[keyof typeof PickS3StorageExcludeKeyofS3StorageCredentialsBucket];

export function PickS3StorageExcludeKeyofS3StorageCredentialsBucketFromJSON(
  json: any
): PickS3StorageExcludeKeyofS3StorageCredentialsBucket {
  return json as PickS3StorageExcludeKeyofS3StorageCredentialsBucket;
}

export function PickS3StorageExcludeKeyofS3StorageCredentialsBucketToJSON(
  value?: PickS3StorageExcludeKeyofS3StorageCredentialsBucket | null
): any {
  return value as any;
}
