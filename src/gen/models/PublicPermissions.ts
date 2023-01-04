/**
 *
 * @export
 */
export const PublicPermissions = {} as const;
export type PublicPermissions = typeof PublicPermissions[keyof typeof PublicPermissions];

export function PublicPermissionsFromJSON(json: any): PublicPermissions {
  return json as PublicPermissions;
}

export function PublicPermissionsToJSON(value?: PublicPermissions | null): any {
  return value as any;
}
