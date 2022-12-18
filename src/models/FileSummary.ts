/**
 *
 * @export
 */
export const FileSummary = {} as const;
export type FileSummary = typeof FileSummary[keyof typeof FileSummary];

export function FileSummaryFromJSON(json: any): FileSummary {
  return json as FileSummary;
}

export function FileSummaryToJSON(value?: FileSummary | null): any {
  return value as any;
}
