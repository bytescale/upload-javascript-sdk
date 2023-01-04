/**
 *
 * @export
 */
export const ListFolderChildrenResponse = {} as const;
export type ListFolderChildrenResponse = typeof ListFolderChildrenResponse[keyof typeof ListFolderChildrenResponse];

export function ListFolderChildrenResponseFromJSON(json: any): ListFolderChildrenResponse {
  return json as ListFolderChildrenResponse;
}

export function ListFolderChildrenResponseToJSON(value?: ListFolderChildrenResponse | null): any {
  return value as any;
}
