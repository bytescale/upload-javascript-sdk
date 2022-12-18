/**
 *
 * @export
 */
export const WithFolderPathStorageLayerSummary = {} as const;
export type WithFolderPathStorageLayerSummary = typeof WithFolderPathStorageLayerSummary[keyof typeof WithFolderPathStorageLayerSummary];

export function WithFolderPathStorageLayerSummaryFromJSON(json: any): WithFolderPathStorageLayerSummary {
  return json as WithFolderPathStorageLayerSummary;
}

export function WithFolderPathStorageLayerSummaryToJSON(value?: WithFolderPathStorageLayerSummary | null): any {
  return value as any;
}
