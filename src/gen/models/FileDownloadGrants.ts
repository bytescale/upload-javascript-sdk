/**
 *
 * @export
 */
export const FileDownloadGrants = {} as const;
export type FileDownloadGrants = typeof FileDownloadGrants[keyof typeof FileDownloadGrants];

export function FileDownloadGrantsFromJSON(json: any): FileDownloadGrants {
  return json as FileDownloadGrants;
}

export function FileDownloadGrantsToJSON(value?: FileDownloadGrants | null): any {
  return value as any;
}
