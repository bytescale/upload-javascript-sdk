/**
 *
 * @export
 */
export const AwsRegion = {} as const;
export type AwsRegion = typeof AwsRegion[keyof typeof AwsRegion];

export function AwsRegionFromJSON(json: any): AwsRegion {
  return json as AwsRegion;
}

export function AwsRegionToJSON(value?: AwsRegion | null): any {
  return value as any;
}
