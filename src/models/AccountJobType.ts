/**
 *
 * @export
 */
export const AccountJobType = {} as const;
export type AccountJobType = typeof AccountJobType[keyof typeof AccountJobType];

export function AccountJobTypeFromJSON(json: any): AccountJobType {
  return json as AccountJobType;
}

export function AccountJobTypeToJSON(value?: AccountJobType | null): any {
  return value as any;
}
