/**
 *
 * @export
 */
export const DeleteFileBatchRequest = {} as const;
export type DeleteFileBatchRequest = typeof DeleteFileBatchRequest[keyof typeof DeleteFileBatchRequest];

export function DeleteFileBatchRequestFromJSON(json: any): DeleteFileBatchRequest {
  return json as DeleteFileBatchRequest;
}

export function DeleteFileBatchRequestToJSON(value?: DeleteFileBatchRequest | null): any {
  return value as any;
}
