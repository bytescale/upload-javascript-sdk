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
import type { PickS3StorageExcludeKeyofS3StorageCredentialsBucket } from "./PickS3StorageExcludeKeyofS3StorageCredentialsBucket";
// @ts-ignore
import {
  PickS3StorageExcludeKeyofS3StorageCredentialsBucketFromJSON,
  PickS3StorageExcludeKeyofS3StorageCredentialsBucketToJSON
} from "./PickS3StorageExcludeKeyofS3StorageCredentialsBucket";
// @ts-ignore
import type { S3StorageCredentials } from "./S3StorageCredentials";
// @ts-ignore
import { S3StorageCredentialsFromJSON, S3StorageCredentialsToJSON } from "./S3StorageCredentials";

/**
 * Storage layer used for storing files in custom S3 buckets, as opposed to Upload's built-in storage.
 *
 * This is a read/write storage layer.
 * @export
 * @interface S3Storage
 */
export interface S3Storage {
  /**
   *
   * @type {PickS3StorageExcludeKeyofS3StorageCredentialsBucket}
   * @memberof S3Storage
   */
  bucket: PickS3StorageExcludeKeyofS3StorageCredentialsBucket;
  /**
   *
   * @type {S3StorageCredentials}
   * @memberof S3Storage
   */
  credentials: S3StorageCredentials;
  /**
   * The type of this storage layer.
   * @type {string}
   * @memberof S3Storage
   */
  type: S3StorageTypeEnum;
  /**
   * If `true` then writes S3 objects with full `filePath` as key, prefixed with the `objectKeyPrefix`.
   *
   * If `false` then writes S3 objects using a relative `filePath` in relation to folder's path, prefixed with the `objectKeyPrefix`.
   * @type {boolean}
   * @memberof S3Storage
   */
  useAbsolutePaths: boolean;
  /**
   * If `true` then raw file downloads are routed directly via the Upload CDN's edge nodes to the custom S3 bucket.
   *
   * If `false` then raw file downloads are routes via Upload's transformation pipelines, adding some latency to raw file downloads only.
   *
   * Note: if set to `true` then you must configure a "AWS::S3::BucketPolicy" for your S3 bucket, permitting access to Upload's CloudFront distribution. Alternatively, your S3 bucket must allow public file downloads.
   * @type {boolean}
   * @memberof S3Storage
   */
  useDirectRawFileDelivery: boolean;
  /**
   * Only applicable if `useDirectRawFileDelivery` is set to `true`.
   * @type {boolean}
   * @memberof S3Storage
   */
  useOriginAccessIdentity: boolean;
  /**
   * Enables S3 transfer acceleration, providing improved file upload speeds for larger files.
   *
   * Note: this setting must also be enabled on the S3 bucket.
   * @type {boolean}
   * @memberof S3Storage
   */
  useTransferAcceleration: boolean;
}

/**
 * @export
 */
export const S3StorageTypeEnum = {
  S3: "S3"
} as const;
export type S3StorageTypeEnum = typeof S3StorageTypeEnum[keyof typeof S3StorageTypeEnum];

export function S3StorageFromJSON(json: any): S3Storage {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    bucket: PickS3StorageExcludeKeyofS3StorageCredentialsBucketFromJSON(json["bucket"]),
    credentials: S3StorageCredentialsFromJSON(json["credentials"]),
    type: json["type"],
    useAbsolutePaths: json["useAbsolutePaths"],
    useDirectRawFileDelivery: json["useDirectRawFileDelivery"],
    useOriginAccessIdentity: json["useOriginAccessIdentity"],
    useTransferAcceleration: json["useTransferAcceleration"]
  };
}

export function S3StorageToJSON(value?: S3Storage | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    bucket: PickS3StorageExcludeKeyofS3StorageCredentialsBucketToJSON(value.bucket),
    credentials: S3StorageCredentialsToJSON(value.credentials),
    type: value.type,
    useAbsolutePaths: value.useAbsolutePaths,
    useDirectRawFileDelivery: value.useDirectRawFileDelivery,
    useOriginAccessIdentity: value.useOriginAccessIdentity,
    useTransferAcceleration: value.useTransferAcceleration
  };
}
