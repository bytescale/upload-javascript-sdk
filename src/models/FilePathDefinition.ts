/**
 *
 * @export
 */
export const FilePathDefinition = {} as const;
export type FilePathDefinition = typeof FilePathDefinition[keyof typeof FilePathDefinition];

export function FilePathDefinitionFromJSON(json: any): FilePathDefinition {
  return json as FilePathDefinition;
}

export function FilePathDefinitionToJSON(value?: FilePathDefinition | null): any {
  return value as any;
}
