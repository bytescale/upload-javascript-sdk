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

// @ts-ignore
import type { FilePathDefinition } from "./FilePathDefinition";
// @ts-ignore
import { FilePathDefinitionFromJSON, FilePathDefinitionToJSON } from "./FilePathDefinition";

/**
 * Request body for BeginMultipartUpload.
 * @export
 * @interface BeginMultipartUploadRequest
 */
export interface BeginMultipartUploadRequest {
  /**
   * The file metadata specified in the original upload request as a JSON object.
   * @type {{ [key: string]: any; }}
   * @memberof BeginMultipartUploadRequest
   */
  metadata?: { [key: string]: any };
  /**
   * File MIME type.
   * @type {string}
   * @memberof BeginMultipartUploadRequest
   */
  mime?: string;
  /**
   * The file's original name on the user's device.
   * @type {string}
   * @memberof BeginMultipartUploadRequest
   */
  originalFileName?: string;
  /**
   *
   * @type {FilePathDefinition}
   * @memberof BeginMultipartUploadRequest
   */
  path?: FilePathDefinition;
  /**
   * Size in bytes.
   * @type {number}
   * @memberof BeginMultipartUploadRequest
   */
  size: number;
  /**
   * The file tags to store against the file.
   *
   * When you associate file tags with a file, Upload checks which rules match the tags (if any) and applies those rules to the upload request:
   *
   * Rules can include max file size checks, traffic limit checks, rate limit checks, and so forth. These are configured in the Upload Dashboard.
   * @type {Array<string>}
   * @memberof BeginMultipartUploadRequest
   */
  tags?: Array<string>;
}

export function BeginMultipartUploadRequestFromJSON(json: any): BeginMultipartUploadRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    metadata: !exists(json, "metadata") ? undefined : json["metadata"],
    mime: !exists(json, "mime") ? undefined : json["mime"],
    originalFileName: !exists(json, "originalFileName") ? undefined : json["originalFileName"],
    path: !exists(json, "path") ? undefined : FilePathDefinitionFromJSON(json["path"]),
    size: json["size"],
    tags: !exists(json, "tags") ? undefined : json["tags"]
  };
}

export function BeginMultipartUploadRequestToJSON(value?: BeginMultipartUploadRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    metadata: value.metadata,
    mime: value.mime,
    originalFileName: value.originalFileName,
    path: FilePathDefinitionToJSON(value.path),
    size: value.size,
    tags: value.tags
  };
}
