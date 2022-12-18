/**
 *
 * @export
 */
export const AccountJobStatus = {} as const;
export type AccountJobStatus = typeof AccountJobStatus[keyof typeof AccountJobStatus];

export function AccountJobStatusFromJSON(json: any): AccountJobStatus {
  return json as AccountJobStatus;
}

export function AccountJobStatusToJSON(value?: AccountJobStatus | null): any {
  return value as any;
}
