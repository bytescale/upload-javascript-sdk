/**
 *
 * @export
 */
export const StorageLayerSummary = {} as const;
export type StorageLayerSummary = typeof StorageLayerSummary[keyof typeof StorageLayerSummary];

export function StorageLayerSummaryFromJSON(json: any): StorageLayerSummary {
  return json as StorageLayerSummary;
}

export function StorageLayerSummaryToJSON(value?: StorageLayerSummary | null): any {
  return value as any;
}
