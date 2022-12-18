/**
 *
 * @export
 */
export const SpecifiedFieldValueStorageLayerUpdateOrNullValue = {} as const;
export type SpecifiedFieldValueStorageLayerUpdateOrNullValue = typeof SpecifiedFieldValueStorageLayerUpdateOrNullValue[keyof typeof SpecifiedFieldValueStorageLayerUpdateOrNullValue];

export function SpecifiedFieldValueStorageLayerUpdateOrNullValueFromJSON(
  json: any
): SpecifiedFieldValueStorageLayerUpdateOrNullValue {
  return json as SpecifiedFieldValueStorageLayerUpdateOrNullValue;
}

export function SpecifiedFieldValueStorageLayerUpdateOrNullValueToJSON(
  value?: SpecifiedFieldValueStorageLayerUpdateOrNullValue | null
): any {
  return value as any;
}
