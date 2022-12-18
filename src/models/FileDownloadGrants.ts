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
 * Permissions relating to the downloading of files at this path.
 * @export
 * @interface FileDownloadGrants
 */
export interface FileDownloadGrants {
  /**
   * An array of transformation URL slug patterns.
   *
   * This array specifies which transformation slugs can be used when downloading files from this location.
   *
   * - Use `"*"` to allow all file downloads.
   *
   * - Use `"raw"` to allow raw/original file downloads.
   *
   * - Use a `*` suffix to allow transformation prefixes. For example: `"thumbnail-*"` will allow `thumbnail-sm` and `thumbnail-lg`.
   *
   * - Use any other value to allow specific transformations. For example: `"thumbnail"` will allow `thumbnail` downloads only.
   *
   * - Use an empty array to indicate no file downloads are allowed.
   * @type {Array<string>}
   * @memberof FileDownloadGrants
   */
  downloadFile: Array<string>;
}

export function FileDownloadGrantsFromJSON(json: any): FileDownloadGrants {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    downloadFile: json["downloadFile"]
  };
}

export function FileDownloadGrantsToJSON(value?: FileDownloadGrants | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    downloadFile: value.downloadFile
  };
}
