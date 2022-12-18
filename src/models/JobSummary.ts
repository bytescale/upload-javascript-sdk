/**
 *
 * @export
 */
export const JobSummary = {} as const;
export type JobSummary = typeof JobSummary[keyof typeof JobSummary];

export function JobSummaryFromJSON(json: any): JobSummary {
  return json as JobSummary;
}

export function JobSummaryToJSON(value?: JobSummary | null): any {
  return value as any;
}
