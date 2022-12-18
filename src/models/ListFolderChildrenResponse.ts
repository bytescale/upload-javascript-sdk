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
import type { FolderSummary } from "./FolderSummary";
// @ts-ignore
import { FolderSummaryFromJSON, FolderSummaryToJSON } from "./FolderSummary";
// @ts-ignore
import type { ObjectSummary } from "./ObjectSummary";
// @ts-ignore
import { ObjectSummaryFromJSON, ObjectSummaryToJSON } from "./ObjectSummary";

/**
 * Response body for ListFolderChildren.
 * @export
 * @interface ListFolderChildrenResponse
 */
export interface ListFolderChildrenResponse {
  /**
   * Summary information about each of the folder's children (files and folders).
   * @type {Array<ObjectSummary>}
   * @memberof ListFolderChildrenResponse
   */
  children: Array<ObjectSummary>;
  /**
   * Cursor (aka continuation token) for listing folder children.
   * @type {string}
   * @memberof ListFolderChildrenResponse
   */
  cursor: string;
  /**
   *
   * @type {FolderSummary}
   * @memberof ListFolderChildrenResponse
   */
  parent: FolderSummary;
}

export function ListFolderChildrenResponseFromJSON(json: any): ListFolderChildrenResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    children: (json["children"] as Array<any>).map(ObjectSummaryFromJSON),
    cursor: json["cursor"],
    parent: FolderSummaryFromJSON(json["parent"])
  };
}

export function ListFolderChildrenResponseToJSON(value?: ListFolderChildrenResponse | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    children: (value.children as Array<any>).map(ObjectSummaryToJSON),
    cursor: value.cursor,
    parent: FolderSummaryToJSON(value.parent)
  };
}
