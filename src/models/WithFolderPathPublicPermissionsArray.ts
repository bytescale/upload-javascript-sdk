/**
 *
 * @export
 */
export const WithFolderPathPublicPermissionsArray = {} as const;
export type WithFolderPathPublicPermissionsArray =
  typeof WithFolderPathPublicPermissionsArray[keyof typeof WithFolderPathPublicPermissionsArray];

export function WithFolderPathPublicPermissionsArrayFromJSON(json: any): WithFolderPathPublicPermissionsArray {
  return json as WithFolderPathPublicPermissionsArray;
}

export function WithFolderPathPublicPermissionsArrayToJSON(value?: WithFolderPathPublicPermissionsArray | null): any {
  return value as any;
}
