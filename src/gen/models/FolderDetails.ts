/**
 *
 * @export
 */
export const FolderDetails = {} as const;
export type FolderDetails = typeof FolderDetails[keyof typeof FolderDetails];

export function FolderDetailsFromJSON(json: any): FolderDetails {
  return json as FolderDetails;
}

export function FolderDetailsToJSON(value?: FolderDetails | null): any {
  return value as any;
}
