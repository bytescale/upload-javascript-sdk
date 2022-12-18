/**
 *
 * @export
 */
export const DynamicFilePath = {} as const;
export type DynamicFilePath = typeof DynamicFilePath[keyof typeof DynamicFilePath];

export function DynamicFilePathFromJSON(json: any): DynamicFilePath {
  return json as DynamicFilePath;
}

export function DynamicFilePathToJSON(value?: DynamicFilePath | null): any {
  return value as any;
}
