/**
 *
 * @export
 */
export const FolderSummary = {} as const;
export type FolderSummary = typeof FolderSummary[keyof typeof FolderSummary];

export function FolderSummaryFromJSON(json: any): FolderSummary {
  return json as FolderSummary;
}

export function FolderSummaryToJSON(value?: FolderSummary | null): any {
  return value as any;
}
