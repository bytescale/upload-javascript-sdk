/**
 *
 * @export
 */
export const FileDetails = {} as const;
export type FileDetails = typeof FileDetails[keyof typeof FileDetails];

export function FileDetailsFromJSON(json: any): FileDetails {
  return json as FileDetails;
}

export function FileDetailsToJSON(value?: FileDetails | null): any {
  return value as any;
}
