/**
 *
 * @export
 */
export const UpdatableFieldStorageLayerUpdateOrNull = {} as const;
export type UpdatableFieldStorageLayerUpdateOrNull = typeof UpdatableFieldStorageLayerUpdateOrNull[keyof typeof UpdatableFieldStorageLayerUpdateOrNull];

export function UpdatableFieldStorageLayerUpdateOrNullFromJSON(json: any): UpdatableFieldStorageLayerUpdateOrNull {
  return json as UpdatableFieldStorageLayerUpdateOrNull;
}

export function UpdatableFieldStorageLayerUpdateOrNullToJSON(
  value?: UpdatableFieldStorageLayerUpdateOrNull | null
): any {
  return value as any;
}
