/**
 * Supported implementations:
 * - Node.js 'buffer.Blob', e.g. 'new buffer.Blob([JSON.stringify({someValue: 42})], {type: "application/json"})'
 * - Browser 'Blob', e.g. 'new Blob([JSON.stringify({someValue: 42})], {type: "application/json"})'
 * - Browser 'File', e.g. from a <input type="file" onchange="...">
 */
export interface BlobLike {
  readonly name?: string;
  readonly size: number;
  readonly type?: string;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  slice: (start?: number, end?: number) => BlobLike;
}
