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
import type { UpdatableFieldFolderDescriptionOrNull } from "./UpdatableFieldFolderDescriptionOrNull";
// @ts-ignore
import {
  UpdatableFieldFolderDescriptionOrNullFromJSON,
  UpdatableFieldFolderDescriptionOrNullToJSON
} from "./UpdatableFieldFolderDescriptionOrNull";
// @ts-ignore
import type { UpdatableFieldPublicPermissionsArrayOrNull } from "./UpdatableFieldPublicPermissionsArrayOrNull";
// @ts-ignore
import {
  UpdatableFieldPublicPermissionsArrayOrNullFromJSON,
  UpdatableFieldPublicPermissionsArrayOrNullToJSON
} from "./UpdatableFieldPublicPermissionsArrayOrNull";
// @ts-ignore
import type { UpdatableFieldStorageLayerUpdateOrNull } from "./UpdatableFieldStorageLayerUpdateOrNull";
// @ts-ignore
import {
  UpdatableFieldStorageLayerUpdateOrNullFromJSON,
  UpdatableFieldStorageLayerUpdateOrNullToJSON
} from "./UpdatableFieldStorageLayerUpdateOrNull";

/**
 * Specifies the folder settings to use when creating or updating a folder.
 * @export
 * @interface PatchFolderSettings
 */
export interface PatchFolderSettings {
  /**
   *
   * @type {UpdatableFieldFolderDescriptionOrNull}
   * @memberof PatchFolderSettings
   */
  description: UpdatableFieldFolderDescriptionOrNull;
  /**
   *
   * @type {UpdatableFieldPublicPermissionsArrayOrNull}
   * @memberof PatchFolderSettings
   */
  publicPermissions: UpdatableFieldPublicPermissionsArrayOrNull;
  /**
   *
   * @type {UpdatableFieldStorageLayerUpdateOrNull}
   * @memberof PatchFolderSettings
   */
  storageLayer: UpdatableFieldStorageLayerUpdateOrNull;
}

export function PatchFolderSettingsFromJSON(json: any): PatchFolderSettings {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    description: UpdatableFieldFolderDescriptionOrNullFromJSON(json["description"]),
    publicPermissions: UpdatableFieldPublicPermissionsArrayOrNullFromJSON(json["publicPermissions"]),
    storageLayer: UpdatableFieldStorageLayerUpdateOrNullFromJSON(json["storageLayer"])
  };
}

export function PatchFolderSettingsToJSON(value?: PatchFolderSettings | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    description: UpdatableFieldFolderDescriptionOrNullToJSON(value.description),
    publicPermissions: UpdatableFieldPublicPermissionsArrayOrNullToJSON(value.publicPermissions),
    storageLayer: UpdatableFieldStorageLayerUpdateOrNullToJSON(value.storageLayer)
  };
}
