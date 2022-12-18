/* tslint:disable */
/* eslint-disable */
/**
 * upload-api
 * Upload API
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: hello@upload.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// @ts-ignore
import { exists, mapValues } from "../runtime";

/**
 * Default storage layer used for files uploaded via the Upload API V2 (latest version).
 *
 * This is a read/write storage layer.
 * @export
 * @interface InternalStorageV2
 */
export interface InternalStorageV2 {
  /**
   * The type of this storage layer.
   * @type {string}
   * @memberof InternalStorageV2
   */
  type: InternalStorageV2TypeEnum;
}

/**
 * @export
 */
export const InternalStorageV2TypeEnum = {
  InternalStorageV2: "InternalStorageV2"
} as const;
export type InternalStorageV2TypeEnum = typeof InternalStorageV2TypeEnum[keyof typeof InternalStorageV2TypeEnum];

export function InternalStorageV2FromJSON(json: any): InternalStorageV2 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: json["type"]
  };
}

export function InternalStorageV2ToJSON(value?: InternalStorageV2 | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    type: value.type
  };
}
