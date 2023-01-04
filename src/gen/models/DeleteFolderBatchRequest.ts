/**
 *
 * @export
 */
export const DeleteFolderBatchRequest = {} as const;
export type DeleteFolderBatchRequest = typeof DeleteFolderBatchRequest[keyof typeof DeleteFolderBatchRequest];

export function DeleteFolderBatchRequestFromJSON(json: any): DeleteFolderBatchRequest {
  return json as DeleteFolderBatchRequest;
}

export function DeleteFolderBatchRequestToJSON(value?: DeleteFolderBatchRequest | null): any {
  return value as any;
}
