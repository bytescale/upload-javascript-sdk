/**
 *
 * @export
 */
export const UpdatableFieldPublicPermissionsArrayOrNull = {} as const;
export type UpdatableFieldPublicPermissionsArrayOrNull =
  typeof UpdatableFieldPublicPermissionsArrayOrNull[keyof typeof UpdatableFieldPublicPermissionsArrayOrNull];

export function UpdatableFieldPublicPermissionsArrayOrNullFromJSON(
  json: any
): UpdatableFieldPublicPermissionsArrayOrNull {
  return json as UpdatableFieldPublicPermissionsArrayOrNull;
}

export function UpdatableFieldPublicPermissionsArrayOrNullToJSON(
  value?: UpdatableFieldPublicPermissionsArrayOrNull | null
): any {
  return value as any;
}
