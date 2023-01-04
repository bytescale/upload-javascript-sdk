/**
 *
 * @export
 */
export const PutFolderRequest = {} as const;
export type PutFolderRequest = typeof PutFolderRequest[keyof typeof PutFolderRequest];

export function PutFolderRequestFromJSON(json: any): PutFolderRequest {
  return json as PutFolderRequest;
}

export function PutFolderRequestToJSON(value?: PutFolderRequest | null): any {
  return value as any;
}
