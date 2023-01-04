/**
 *
 * @export
 */
export const PathPermissionScope = {} as const;
export type PathPermissionScope = typeof PathPermissionScope[keyof typeof PathPermissionScope];

export function PathPermissionScopeFromJSON(json: any): PathPermissionScope {
  return json as PathPermissionScope;
}

export function PathPermissionScopeToJSON(value?: PathPermissionScope | null): any {
  return value as any;
}
