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
import type { InternalStorageV2 } from "./InternalStorageV2";
// @ts-ignore
import { InternalStorageV2FromJSON, InternalStorageV2ToJSON } from "./InternalStorageV2";
// @ts-ignore
import type { PickS3StorageExcludeKeyofS3StorageCredentialsBucket } from "./PickS3StorageExcludeKeyofS3StorageCredentialsBucket";
// @ts-ignore
import {
  PickS3StorageExcludeKeyofS3StorageCredentialsBucketFromJSON,
  PickS3StorageExcludeKeyofS3StorageCredentialsBucketToJSON
} from "./PickS3StorageExcludeKeyofS3StorageCredentialsBucket";
// @ts-ignore
import type { S3Storage } from "./S3Storage";
// @ts-ignore
import { S3StorageFromJSON, S3StorageToJSON } from "./S3Storage";
// @ts-ignore
import type { S3StorageCredentials } from "./S3StorageCredentials";
// @ts-ignore
import { S3StorageCredentialsFromJSON, S3StorageCredentialsToJSON } from "./S3StorageCredentials";
// @ts-ignore
import type { WebStorage } from "./WebStorage";
// @ts-ignore
import { WebStorageFromJSON, WebStorageToJSON } from "./WebStorage";

/**
 * Data type used to update or create a folder's storage layer.
 *
 * This data type may contain credentials.
 * @export
 * @interface StorageLayerUpdate
 */
export interface StorageLayerUpdate {
  /**
   * The type of this storage layer.
   * @type {string}
   * @memberof StorageLayerUpdate
   */
  type: StorageLayerUpdateTypeEnum;
  /**
   * Base URL to proxy requests to. Should contain a trailing `/`.
   *
   * If `baseUrl` is set to `null`, then this folder will behave as an open reverse proxy.
   *
   * *Example 1:* if the `baseUrl` is `null` and the folder you're configuring the storage layer on is:
   *
   * `https://upcdn.io/abc1234/raw/demo`
   *
   * Then you can issue requests such as:
   *
   * `https://upcdn.io/abc1234/raw/demo/https://images.unsplash.com/example.jpg`
   *
   * *Example 2:* if the `baseUrl` is:
   *
   * `https://images.unsplash.com/`
   *
   * And the folder you're configuring the storage layer on is:
   *
   * `https://upcdn.io/abc1234/raw/demo`
   *
   * Then you can issue requests such as:
   *
   * `https://upcdn.io/abc1234/raw/demo/test/example.jpg`
   *
   * Which will be routed to the URL:
   *
   * `https://images.unsplash.com/test/example.jpg`
   * @type {string}
   * @memberof StorageLayerUpdate
   */
  baseUrl: string | null;
  /**
   *
   * @type {PickS3StorageExcludeKeyofS3StorageCredentialsBucket}
   * @memberof StorageLayerUpdate
   */
  bucket: PickS3StorageExcludeKeyofS3StorageCredentialsBucket;
  /**
   *
   * @type {S3StorageCredentials}
   * @memberof StorageLayerUpdate
   */
  credentials: S3StorageCredentials;
  /**
   * If `true` then writes S3 objects with full `filePath` as key, prefixed with the `objectKeyPrefix`.
   *
   * If `false` then writes S3 objects using a relative `filePath` in relation to folder's path, prefixed with the `objectKeyPrefix`.
   * @type {boolean}
   * @memberof StorageLayerUpdate
   */
  useAbsolutePaths: boolean;
  /**
   * If `true` then raw file downloads are routed directly via the Upload CDN's edge nodes to the custom S3 bucket.
   *
   * If `false` then raw file downloads are routes via Upload's transformation pipelines, adding some latency to raw file downloads only.
   *
   * Note: if set to `true` then you must configure a "AWS::S3::BucketPolicy" for your S3 bucket, permitting access to Upload's CloudFront distribution. Alternatively, your S3 bucket must allow public file downloads.
   * @type {boolean}
   * @memberof StorageLayerUpdate
   */
  useDirectRawFileDelivery: boolean;
  /**
   * Only applicable if `useDirectRawFileDelivery` is set to `true`.
   * @type {boolean}
   * @memberof StorageLayerUpdate
   */
  useOriginAccessIdentity: boolean;
  /**
   * Enables S3 transfer acceleration, providing improved file upload speeds for larger files.
   *
   * Note: this setting must also be enabled on the S3 bucket.
   * @type {boolean}
   * @memberof StorageLayerUpdate
   */
  useTransferAcceleration: boolean;
}

/**
 * @export
 */
export const StorageLayerUpdateTypeEnum = {
  S3: "S3"
} as const;
export type StorageLayerUpdateTypeEnum = typeof StorageLayerUpdateTypeEnum[keyof typeof StorageLayerUpdateTypeEnum];

export function StorageLayerUpdateFromJSON(json: any): StorageLayerUpdate {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: json["type"],
    baseUrl: json["baseUrl"],
    bucket: PickS3StorageExcludeKeyofS3StorageCredentialsBucketFromJSON(json["bucket"]),
    credentials: S3StorageCredentialsFromJSON(json["credentials"]),
    useAbsolutePaths: json["useAbsolutePaths"],
    useDirectRawFileDelivery: json["useDirectRawFileDelivery"],
    useOriginAccessIdentity: json["useOriginAccessIdentity"],
    useTransferAcceleration: json["useTransferAcceleration"]
  };
}

export function StorageLayerUpdateToJSON(value?: StorageLayerUpdate | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    type: value.type,
    baseUrl: value.baseUrl,
    bucket: PickS3StorageExcludeKeyofS3StorageCredentialsBucketToJSON(value.bucket),
    credentials: S3StorageCredentialsToJSON(value.credentials),
    useAbsolutePaths: value.useAbsolutePaths,
    useDirectRawFileDelivery: value.useDirectRawFileDelivery,
    useOriginAccessIdentity: value.useOriginAccessIdentity,
    useTransferAcceleration: value.useTransferAcceleration
  };
}
