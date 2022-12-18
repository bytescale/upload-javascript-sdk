/**
 *
 * @export
 */
export const WebStorage = {} as const;
export type WebStorage = typeof WebStorage[keyof typeof WebStorage];

export function WebStorageFromJSON(json: any): WebStorage {
  return json as WebStorage;
}

export function WebStorageToJSON(value?: WebStorage | null): any {
  return value as any;
}
