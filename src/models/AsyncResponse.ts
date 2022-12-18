/**
 *
 * @export
 */
export const AsyncResponse = {} as const;
export type AsyncResponse = typeof AsyncResponse[keyof typeof AsyncResponse];

export function AsyncResponseFromJSON(json: any): AsyncResponse {
  return json as AsyncResponse;
}

export function AsyncResponseToJSON(value?: AsyncResponse | null): any {
  return value as any;
}
