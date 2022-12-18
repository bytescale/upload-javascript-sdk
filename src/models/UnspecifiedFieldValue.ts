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
 * This data type specifies no update is to be performed.
 * @export
 * @interface UnspecifiedFieldValue
 */
export interface UnspecifiedFieldValue {
  /**
   * This field is always `false`.
   * @type {boolean}
   * @memberof UnspecifiedFieldValue
   */
  set: UnspecifiedFieldValueSetEnum;
}

/**
 * @export
 */
export const UnspecifiedFieldValueSetEnum = {
  False: false
} as const;
export type UnspecifiedFieldValueSetEnum = typeof UnspecifiedFieldValueSetEnum[keyof typeof UnspecifiedFieldValueSetEnum];

export function UnspecifiedFieldValueFromJSON(json: any): UnspecifiedFieldValue {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    set: json["set"]
  };
}

export function UnspecifiedFieldValueToJSON(value?: UnspecifiedFieldValue | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    set: value.set
  };
}
