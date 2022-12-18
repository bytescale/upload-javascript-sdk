/**
 *
 * @export
 */
export const PublicPermissionsGrants = {} as const;
export type PublicPermissionsGrants = typeof PublicPermissionsGrants[keyof typeof PublicPermissionsGrants];

export function PublicPermissionsGrantsFromJSON(json: any): PublicPermissionsGrants {
  return json as PublicPermissionsGrants;
}

export function PublicPermissionsGrantsToJSON(value?: PublicPermissionsGrants | null): any {
  return value as any;
}
