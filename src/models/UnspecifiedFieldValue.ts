/**
 *
 * @export
 */
export const UnspecifiedFieldValue = {} as const;
export type UnspecifiedFieldValue = typeof UnspecifiedFieldValue[keyof typeof UnspecifiedFieldValue];

export function UnspecifiedFieldValueFromJSON(json: any): UnspecifiedFieldValue {
  return json as UnspecifiedFieldValue;
}

export function UnspecifiedFieldValueToJSON(value?: UnspecifiedFieldValue | null): any {
  return value as any;
}
