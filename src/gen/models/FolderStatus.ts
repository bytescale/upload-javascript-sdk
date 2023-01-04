/**
 *
 * @export
 */
export const FolderStatus = {} as const;
export type FolderStatus = typeof FolderStatus[keyof typeof FolderStatus];

export function FolderStatusFromJSON(json: any): FolderStatus {
  return json as FolderStatus;
}

export function FolderStatusToJSON(value?: FolderStatus | null): any {
  return value as any;
}
