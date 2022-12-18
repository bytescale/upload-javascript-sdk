/**
 *
 * @export
 */
export const JobSummaryError = {} as const;
export type JobSummaryError = typeof JobSummaryError[keyof typeof JobSummaryError];

export function JobSummaryErrorFromJSON(json: any): JobSummaryError {
  return json as JobSummaryError;
}

export function JobSummaryErrorToJSON(value?: JobSummaryError | null): any {
  return value as any;
}
