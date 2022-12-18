/**
 *
 * @export
 */
export const DeleteFolderRequest = {} as const;
export type DeleteFolderRequest = typeof DeleteFolderRequest[keyof typeof DeleteFolderRequest];

export function DeleteFolderRequestFromJSON(json: any): DeleteFolderRequest {
  return json as DeleteFolderRequest;
}

export function DeleteFolderRequestToJSON(value?: DeleteFolderRequest | null): any {
  return value as any;
}
