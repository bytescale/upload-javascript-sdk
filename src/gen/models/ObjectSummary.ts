/**
 *
 * @export
 */
export const ObjectSummary = {} as const;
export type ObjectSummary = typeof ObjectSummary[keyof typeof ObjectSummary];

export function ObjectSummaryFromJSON(json: any): ObjectSummary {
  return json as ObjectSummary;
}

export function ObjectSummaryToJSON(value?: ObjectSummary | null): any {
  return value as any;
}
