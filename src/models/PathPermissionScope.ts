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

/**
 * Specifies the level in the file tree, relative to the path, that these permissions apply.
 *
 * - `"This"`: Permissions apply to the current path only.
 *
 * - `"Children"`: Permissions apply to the children (files and folders) of this path only.
 *
 * - `"Grandchildren+"`: Permissions apply to the grandchildren (files and folders) of this path and their descendants only.
 * @export
 */
export const PathPermissionScope = {
  This: "This",
  Children: "Children",
  Grandchildren: "Grandchildren+"
} as const;
export type PathPermissionScope = typeof PathPermissionScope[keyof typeof PathPermissionScope];

export function PathPermissionScopeFromJSON(json: any): PathPermissionScope {
  return json as PathPermissionScope;
}

export function PathPermissionScopeToJSON(value?: PathPermissionScope | null): any {
  return value as any;
}
