/**
 *
 * @export
 */
export const ErrorResponse = {} as const;
export type ErrorResponse = typeof ErrorResponse[keyof typeof ErrorResponse];

export function ErrorResponseFromJSON(json: any): ErrorResponse {
  return json as ErrorResponse;
}

export function ErrorResponseToJSON(value?: ErrorResponse | null): any {
  return value as any;
}
