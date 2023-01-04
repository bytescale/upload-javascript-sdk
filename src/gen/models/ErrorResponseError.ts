/**
 *
 * @export
 */
export const ErrorResponseError = {} as const;
export type ErrorResponseError = typeof ErrorResponseError[keyof typeof ErrorResponseError];

export function ErrorResponseErrorFromJSON(json: any): ErrorResponseError {
  return json as ErrorResponseError;
}

export function ErrorResponseErrorToJSON(value?: ErrorResponseError | null): any {
  return value as any;
}
