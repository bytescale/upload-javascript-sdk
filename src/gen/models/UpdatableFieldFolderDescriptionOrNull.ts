/**
 *
 * @export
 */
export const UpdatableFieldFolderDescriptionOrNull = {} as const;
export type UpdatableFieldFolderDescriptionOrNull =
  typeof UpdatableFieldFolderDescriptionOrNull[keyof typeof UpdatableFieldFolderDescriptionOrNull];

export function UpdatableFieldFolderDescriptionOrNullFromJSON(json: any): UpdatableFieldFolderDescriptionOrNull {
  return json as UpdatableFieldFolderDescriptionOrNull;
}

export function UpdatableFieldFolderDescriptionOrNullToJSON(value?: UpdatableFieldFolderDescriptionOrNull | null): any {
  return value as any;
}
