/**
 *
 * @export
 */
export const FolderSettingsStorageLayerSummaryStorageLayer = {} as const;
export type FolderSettingsStorageLayerSummaryStorageLayer = typeof FolderSettingsStorageLayerSummaryStorageLayer[keyof typeof FolderSettingsStorageLayerSummaryStorageLayer];

export function FolderSettingsStorageLayerSummaryStorageLayerFromJSON(
  json: any
): FolderSettingsStorageLayerSummaryStorageLayer {
  return json as FolderSettingsStorageLayerSummaryStorageLayer;
}

export function FolderSettingsStorageLayerSummaryStorageLayerToJSON(
  value?: FolderSettingsStorageLayerSummaryStorageLayer | null
): any {
  return value as any;
}
