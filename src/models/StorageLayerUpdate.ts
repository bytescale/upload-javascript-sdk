/**
 *
 * @export
 */
export const StorageLayerUpdate = {} as const;
export type StorageLayerUpdate = typeof StorageLayerUpdate[keyof typeof StorageLayerUpdate];

export function StorageLayerUpdateFromJSON(json: any): StorageLayerUpdate {
  return json as StorageLayerUpdate;
}

export function StorageLayerUpdateToJSON(value?: StorageLayerUpdate | null): any {
  return value as any;
}
