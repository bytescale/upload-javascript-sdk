/**
 *
 * @export
 */
export const DeleteFolderScope = {} as const;
export type DeleteFolderScope = typeof DeleteFolderScope[keyof typeof DeleteFolderScope];

export function DeleteFolderScopeFromJSON(json: any): DeleteFolderScope {
  return json as DeleteFolderScope;
}

export function DeleteFolderScopeToJSON(value?: DeleteFolderScope | null): any {
  return value as any;
}
