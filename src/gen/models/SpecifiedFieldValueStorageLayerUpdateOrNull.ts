/**
 *
 * @export
 */
export const SpecifiedFieldValueStorageLayerUpdateOrNull = {} as const;
export type SpecifiedFieldValueStorageLayerUpdateOrNull =
  typeof SpecifiedFieldValueStorageLayerUpdateOrNull[keyof typeof SpecifiedFieldValueStorageLayerUpdateOrNull];

export function SpecifiedFieldValueStorageLayerUpdateOrNullFromJSON(
  json: any
): SpecifiedFieldValueStorageLayerUpdateOrNull {
  return json as SpecifiedFieldValueStorageLayerUpdateOrNull;
}

export function SpecifiedFieldValueStorageLayerUpdateOrNullToJSON(
  value?: SpecifiedFieldValueStorageLayerUpdateOrNull | null
): any {
  return value as any;
}
