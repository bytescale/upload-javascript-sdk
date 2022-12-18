/**
 *
 * @export
 */
export const PatchFolderSettings = {} as const;
export type PatchFolderSettings = typeof PatchFolderSettings[keyof typeof PatchFolderSettings];

export function PatchFolderSettingsFromJSON(json: any): PatchFolderSettings {
  return json as PatchFolderSettings;
}

export function PatchFolderSettingsToJSON(value?: PatchFolderSettings | null): any {
  return value as any;
}
