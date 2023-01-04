/**
 *
 * @export
 */
export const FolderSettingsInherited = {} as const;
export type FolderSettingsInherited = typeof FolderSettingsInherited[keyof typeof FolderSettingsInherited];

export function FolderSettingsInheritedFromJSON(json: any): FolderSettingsInherited {
  return json as FolderSettingsInherited;
}

export function FolderSettingsInheritedToJSON(value?: FolderSettingsInherited | null): any {
  return value as any;
}
