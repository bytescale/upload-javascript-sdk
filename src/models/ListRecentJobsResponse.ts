/**
 *
 * @export
 */
export const ListRecentJobsResponse = {} as const;
export type ListRecentJobsResponse = typeof ListRecentJobsResponse[keyof typeof ListRecentJobsResponse];

export function ListRecentJobsResponseFromJSON(json: any): ListRecentJobsResponse {
  return json as ListRecentJobsResponse;
}

export function ListRecentJobsResponseToJSON(value?: ListRecentJobsResponse | null): any {
  return value as any;
}
