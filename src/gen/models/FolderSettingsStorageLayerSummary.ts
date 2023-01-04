/**
 *
 * @export
 */
export const FolderSettingsStorageLayerSummary = {} as const;
export type FolderSettingsStorageLayerSummary =
  typeof FolderSettingsStorageLayerSummary[keyof typeof FolderSettingsStorageLayerSummary];

export function FolderSettingsStorageLayerSummaryFromJSON(json: any): FolderSettingsStorageLayerSummary {
  return json as FolderSettingsStorageLayerSummary;
}

export function FolderSettingsStorageLayerSummaryToJSON(value?: FolderSettingsStorageLayerSummary | null): any {
  return value as any;
}
