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
import type { FileSummary } from "./FileSummary";
// @ts-ignore
import { FileSummaryFromJSON, FileSummaryToJSON } from "./FileSummary";
// @ts-ignore
import type { FolderSettingsStorageLayerSummary } from "./FolderSettingsStorageLayerSummary";
// @ts-ignore
import {
  FolderSettingsStorageLayerSummaryFromJSON,
  FolderSettingsStorageLayerSummaryToJSON
} from "./FolderSettingsStorageLayerSummary";
// @ts-ignore
import type { FolderStatus } from "./FolderStatus";
// @ts-ignore
import { FolderStatusFromJSON, FolderStatusToJSON } from "./FolderStatus";
// @ts-ignore
import type { FolderSummary } from "./FolderSummary";
// @ts-ignore
import { FolderSummaryFromJSON, FolderSummaryToJSON } from "./FolderSummary";

/**
 * Summary information about a file or folder.
 * @export
 * @interface ObjectSummary
 */
export interface ObjectSummary {
  /**
   * Absolute path to a folder. Must begin with a `/`. Should not end with a `/`.
   * @type {string}
   * @memberof ObjectSummary
   */
  folderPath: string;
  /**
   *
   * @type {FolderSettingsStorageLayerSummary}
   * @memberof ObjectSummary
   */
  settings: FolderSettingsStorageLayerSummary;
  /**
   *
   * @type {FolderStatus}
   * @memberof ObjectSummary
   */
  status: FolderStatus;
  /**
   *
   * @type {string}
   * @memberof ObjectSummary
   */
  type: ObjectSummaryTypeEnum;
  /**
   * Absolute path to a file. Must begin with a `/`.
   * @type {string}
   * @memberof ObjectSummary
   */
  filePath: string;
  /**
   * URL for a raw file hosted on the Upload CDN.
   * @type {string}
   * @memberof ObjectSummary
   */
  fileUrl: string;
  /**
   * Epoch milliseconds (since midnight 1 January 1970, UTC).
   * @type {number}
   * @memberof ObjectSummary
   */
  lastModified: number;
  /**
   * Size in bytes.
   * @type {number}
   * @memberof ObjectSummary
   */
  size: number;
}

/**
 * @export
 */
export const ObjectSummaryTypeEnum = {
  File: "File"
} as const;
export type ObjectSummaryTypeEnum = typeof ObjectSummaryTypeEnum[keyof typeof ObjectSummaryTypeEnum];

export function ObjectSummaryFromJSON(json: any): ObjectSummary {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    folderPath: json["folderPath"],
    settings: FolderSettingsStorageLayerSummaryFromJSON(json["settings"]),
    status: FolderStatusFromJSON(json["status"]),
    type: json["type"],
    filePath: json["filePath"],
    fileUrl: json["fileUrl"],
    lastModified: json["lastModified"],
    size: json["size"]
  };
}

export function ObjectSummaryToJSON(value?: ObjectSummary | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    folderPath: value.folderPath,
    settings: FolderSettingsStorageLayerSummaryToJSON(value.settings),
    status: FolderStatusToJSON(value.status),
    type: value.type,
    filePath: value.filePath,
    fileUrl: value.fileUrl,
    lastModified: value.lastModified,
    size: value.size
  };
}
