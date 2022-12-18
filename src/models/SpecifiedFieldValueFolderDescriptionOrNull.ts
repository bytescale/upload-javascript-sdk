/**
 *
 * @export
 */
export const SpecifiedFieldValueFolderDescriptionOrNull = {} as const;
export type SpecifiedFieldValueFolderDescriptionOrNull = typeof SpecifiedFieldValueFolderDescriptionOrNull[keyof typeof SpecifiedFieldValueFolderDescriptionOrNull];

export function SpecifiedFieldValueFolderDescriptionOrNullFromJSON(
  json: any
): SpecifiedFieldValueFolderDescriptionOrNull {
  return json as SpecifiedFieldValueFolderDescriptionOrNull;
}

export function SpecifiedFieldValueFolderDescriptionOrNullToJSON(
  value?: SpecifiedFieldValueFolderDescriptionOrNull | null
): any {
  return value as any;
}
