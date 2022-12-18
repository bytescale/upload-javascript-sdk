/**
 *
 * @export
 */
export const SpecifiedFieldValuePublicPermissionsArrayOrNull = {} as const;
export type SpecifiedFieldValuePublicPermissionsArrayOrNull = typeof SpecifiedFieldValuePublicPermissionsArrayOrNull[keyof typeof SpecifiedFieldValuePublicPermissionsArrayOrNull];

export function SpecifiedFieldValuePublicPermissionsArrayOrNullFromJSON(
  json: any
): SpecifiedFieldValuePublicPermissionsArrayOrNull {
  return json as SpecifiedFieldValuePublicPermissionsArrayOrNull;
}

export function SpecifiedFieldValuePublicPermissionsArrayOrNullToJSON(
  value?: SpecifiedFieldValuePublicPermissionsArrayOrNull | null
): any {
  return value as any;
}
