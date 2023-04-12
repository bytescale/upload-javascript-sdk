/* tslint:disable */
/* eslint-disable */

/**
 *
 * @export
 */
export const AccountJobStatus = {
  Pending: "Pending",
  Running: "Running",
  Rollback: "Rollback",
  Failed: "Failed",
  Succeeded: "Succeeded",
  Cancelling: "Cancelling",
  Cancelled: "Cancelled"
} as const;
export type AccountJobStatus = typeof AccountJobStatus[keyof typeof AccountJobStatus];

/**
 * Job type.
 * @export
 */
export const AccountJobType = {
  DeleteFolderBatchJob: "DeleteFolderBatchJob",
  DeleteFileBatchJob: "DeleteFileBatchJob",
  CopyFolderJob: "CopyFolderJob"
} as const;
export type AccountJobType = typeof AccountJobType[keyof typeof AccountJobType];

/**
 * Response body from an API endpoint that performs work asynchronously (i.e. does not complete the work immediately).
 * @export
 * @interface AsyncResponse
 */
export interface AsyncResponse {
  /**
   * Link to the documentation that describes how to get a job's status from its job ID.
   * @type {string}
   * @memberof AsyncResponse
   */
  jobDocs: AsyncResponseJobDocsEnum;
  /**
   * Job ID.
   * @type {string}
   * @memberof AsyncResponse
   */
  jobId: string;
  /**
   *
   * @type {AccountJobType}
   * @memberof AsyncResponse
   */
  jobType: AccountJobType;
  /**
   * URL for the job's status.
   *
   * You can `GET` this URL to retrieve the job's status.
   *
   * You must authorize your `GET` request with a ```secret_*``` API key when accessing the URL.
   * @type {string}
   * @memberof AsyncResponse
   */
  jobUrl: string;
}

/**
 * @export
 */
export const AsyncResponseJobDocsEnum = {
  HttpsUploadIoDocsUploadApiJobsGetJob: "https://upload.io/docs/upload-api/jobs/GetJob"
} as const;
export type AsyncResponseJobDocsEnum = typeof AsyncResponseJobDocsEnum[keyof typeof AsyncResponseJobDocsEnum];

/**
 * AWS Region.
 * @export
 */
export const AwsRegion = {
  UsEast2: "us-east-2",
  UsEast1: "us-east-1",
  UsWest1: "us-west-1",
  UsWest2: "us-west-2",
  AfSouth1: "af-south-1",
  ApEast1: "ap-east-1",
  ApSoutheast3: "ap-southeast-3",
  ApSouth1: "ap-south-1",
  ApNortheast3: "ap-northeast-3",
  ApNortheast2: "ap-northeast-2",
  ApSoutheast1: "ap-southeast-1",
  ApSoutheast2: "ap-southeast-2",
  ApNortheast1: "ap-northeast-1",
  CaCentral1: "ca-central-1",
  EuCentral1: "eu-central-1",
  EuWest1: "eu-west-1",
  EuWest2: "eu-west-2",
  EuSouth1: "eu-south-1",
  EuWest3: "eu-west-3",
  EuNorth1: "eu-north-1",
  MeSouth1: "me-south-1",
  SaEast1: "sa-east-1"
} as const;
export type AwsRegion = typeof AwsRegion[keyof typeof AwsRegion];

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
   *
   * @type {MultipartUploadProtocol}
   * @memberof BeginMultipartUploadRequest
   */
  protocol?: MultipartUploadProtocol;
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
/**
 * Response body for BeginMultipartUpload.
 * @export
 * @interface BeginMultipartUploadResponse
 */
export interface BeginMultipartUploadResponse {
  /**
   *
   * @type {FileDetails}
   * @memberof BeginMultipartUploadResponse
   */
  file: FileDetails;
  /**
   * The ID for the multipart file upload.
   * @type {string}
   * @memberof BeginMultipartUploadResponse
   */
  uploadId: string;
  /**
   *
   * @type {BeginMultipartUploadResponseUploadParts}
   * @memberof BeginMultipartUploadResponse
   */
  uploadParts: BeginMultipartUploadResponseUploadParts;
}
/**
 *
 * @export
 * @interface BeginMultipartUploadResponseUploadParts
 */
export interface BeginMultipartUploadResponseUploadParts {
  /**
   *
   * @type {UploadPart}
   * @memberof BeginMultipartUploadResponseUploadParts
   */
  first: UploadPart;
  /**
   * The number of parts the file will be uploaded with.
   * @type {number}
   * @memberof BeginMultipartUploadResponseUploadParts
   */
  count: number;
}
/**
 * Request body for CompleteUploadPart.
 * @export
 * @interface CompleteUploadPartRequest
 */
export interface CompleteUploadPartRequest {
  /**
   * File ETag.
   * @type {string}
   * @memberof CompleteUploadPartRequest
   */
  etag: string;
}
/**
 * Request body for CopyFile.
 * @export
 * @interface CopyFileRequest
 */
export interface CopyFileRequest {
  /**
   *
   * @type {TagCondition}
   * @memberof CopyFileRequest
   */
  condition?: TagCondition;
  /**
   * Absolute path to a file. Must begin with a `/`.
   * @type {string}
   * @memberof CopyFileRequest
   */
  destination: string;
  /**
   * Absolute path to a file. Must begin with a `/`.
   * @type {string}
   * @memberof CopyFileRequest
   */
  source: string;
}
/**
 * Response body for CopyFile.
 * @export
 * @interface CopyFileResponse
 */
export interface CopyFileResponse {
  /**
   *
   * @type {FileCopyStatus}
   * @memberof CopyFileResponse
   */
  status: FileCopyStatus;
}
/**
 * Request body for CopyFolder.
 *
 * You can use ListFolder to preview the operation: set `dryRun=true` with ```recursive```, ```includeFiles```, ```includeOverriddenStorage``` and ```includeVirtualFolders``` set to match the values you're using here. Leave all other flags unset.
 * @export
 * @interface CopyFolderRequest
 */
export interface CopyFolderRequest {
  /**
   *
   * @type {TagCondition}
   * @memberof CopyFolderRequest
   */
  condition?: TagCondition;
  /**
   * If `true` then files will be included.
   *
   * Default: true
   * @type {boolean}
   * @memberof CopyFolderRequest
   */
  copyFiles?: boolean;
  /**
   * If `true` then traverses folders with overridden storage settings at this level and below, else skips files from these folders.
   *
   * If the current folder inherits its storage settings from an ancestor folder that has overridden storage settings, then files from the current folder will be included in this operation, regardless of this flag.
   *
   * You can ignore this setting if your account does not use folders with overridden storage settings (e.g. custom AWS S3 buckets).
   *
   * Default: true
   * @type {boolean}
   * @memberof CopyFolderRequest
   */
  copyOverriddenStorage?: boolean;
  /**
   * If `true` then virtual folders will be included.
   *
   * Virtual folders are folders that have been created with the PutFolder operation, and may be empty.
   *
   * Default: true
   * @type {boolean}
   * @memberof CopyFolderRequest
   */
  copyVirtualFolders?: boolean;
  /**
   * Absolute path to a folder. Must begin with a `/`. Should not end with a `/`.
   * @type {string}
   * @memberof CopyFolderRequest
   */
  destination: string;
  /**
   * If `true` then iterates sub-folders recursively.
   *
   * Default: false
   * @type {boolean}
   * @memberof CopyFolderRequest
   */
  recursive?: boolean;
  /**
   * Absolute path to a folder. Must begin with a `/`. Should not end with a `/`.
   * @type {string}
   * @memberof CopyFolderRequest
   */
  source: string;
}
/**
 * Request body for DeleteFileBatch.
 * @export
 * @interface DeleteFileBatchRequest
 */
export interface DeleteFileBatchRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof DeleteFileBatchRequest
   */
  files: Array<string>;
}
/**
 * Request body for DeleteFolderBatch.
 * @export
 * @interface DeleteFolderBatchRequest
 */
export interface DeleteFolderBatchRequest {
  /**
   * Folders to delete.
   * @type {Array<DeleteFolderRequest>}
   * @memberof DeleteFolderBatchRequest
   */
  folders: Array<DeleteFolderRequest>;
}
/**
 * Request body for DeleteFolder.
 *
 * Please note:
 *
 * - If the folder has overridden storage settings, then no files will be deleted.
 *
 * - If the folder has inherited storage settings, then its files will be deleted if `deleteFiles` is `true`.
 *
 * - If the folder contains sub-folders that have overridden storage settings, then their files will not be deleted, regardless of `deleteFiles`.
 *
 * You can use ListFolder to preview the operation: set `dryRun=true` with ```recursive```, ```includeFiles``` and ```includeVirtualFolders``` set to match the values you're using here. Leave all other flags unset.
 * @export
 * @interface DeleteFolderRequest
 */
export interface DeleteFolderRequest {
  /**
   * If `true` then files will be included.
   *
   * Default: true
   * @type {boolean}
   * @memberof DeleteFolderRequest
   */
  deleteFiles?: boolean;
  /**
   * If `true` then virtual folders will be included.
   *
   * Virtual folders are folders that have been created with the PutFolder operation, and may be empty.
   *
   * Default: true
   * @type {boolean}
   * @memberof DeleteFolderRequest
   */
  deleteVirtualFolders?: boolean;
  /**
   * Absolute path to a folder. Must begin with a `/`. Should not end with a `/`.
   * @type {string}
   * @memberof DeleteFolderRequest
   */
  folderPath: string;
  /**
   * If `true` then iterates sub-folders recursively.
   *
   * Default: false
   * @type {boolean}
   * @memberof DeleteFolderRequest
   */
  recursive?: boolean;
}
/**
 * An object containing a `fileName` and/or `folderPath`.
 *
 * Both fields are optional: omitted fields will use the API key's default values, which are configured per API key via the Upload Dashboard.
 *
 * Supports path variables.
 * @export
 * @interface DynamicFilePath
 */
export interface DynamicFilePath {
  /**
   * The file name to upload the file with.
   *
   * Must not contain `/`.
   *
   * Supports path variables.
   * @type {string}
   * @memberof DynamicFilePath
   */
  fileName?: string;
  /**
   * The file name to upload the file with.
   *
   * Must not contain `/`.
   *
   * Supports path variables.
   * @type {string}
   * @memberof DynamicFilePath
   */
  fileNameFallback?: string;
  /**
   * If `true` then path variables like `{UTC_DATE}` in the `fileName` will be replaced. You can escape `{` characters with a `\`.
   *
   * If `false` then path variables like `{UTC_DATE}` in the `fileName` will be taken literally.
   *
   * Default: true
   * @type {boolean}
   * @memberof DynamicFilePath
   */
  fileNameVariablesEnabled?: boolean;
  /**
   * The path to upload the file to (excluding the file's name).
   *
   * Must begin with `/` but should not end with `/`.
   *
   * Supports path variables.
   * @type {string}
   * @memberof DynamicFilePath
   */
  folderPath?: string;
  /**
   * If `true` then path variables like `{UTC_DATE}` in the `folderPath` will be replaced. You can escape `{` characters with a `\`.
   *
   * If `false` then path variables like `{UTC_DATE}` in the `folderPath` will be taken literally.
   *
   * Default: true
   * @type {boolean}
   * @memberof DynamicFilePath
   */
  folderPathVariablesEnabled?: boolean;
}
/**
 * Response body for all error responses.
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
  /**
   *
   * @type {ErrorResponseError}
   * @memberof ErrorResponse
   */
  error: ErrorResponseError;
}
/**
 *
 * @export
 * @interface ErrorResponseError
 */
export interface ErrorResponseError {
  /**
   * Human-readable error message.
   * @type {string}
   * @memberof ErrorResponseError
   */
  message: string;
  /**
   * Additional machine-readable details relating to the error.
   * @type {{ [key: string]: any; }}
   * @memberof ErrorResponseError
   */
  details?: { [key: string]: any };
  /**
   * Machine-readable error code.
   * @type {string}
   * @memberof ErrorResponseError
   */
  code: string;
}

/**
 * The result of the CopyFile operation.
 * @export
 */
export const FileCopyStatus = {
  Copied: "Copied",
  FileNotFound: "FileNotFound",
  SkippedDueToCondition: "SkippedDueToCondition"
} as const;
export type FileCopyStatus = typeof FileCopyStatus[keyof typeof FileCopyStatus];

/**
 * Contains full information about a file, including its file metadata, file tags, original file name, and MIME type.
 * @export
 * @interface FileDetails
 */
export interface FileDetails {
  /**
   * Your account ID.
   *
   * This is visible on the settings page:
   *
   * https://upload.io/dashboard/settings
   * @type {string}
   * @memberof FileDetails
   */
  accountId: string;
  /**
   * The file metadata specified in the original upload request as a JSON object.
   * @type {{ [key: string]: any; }}
   * @memberof FileDetails
   */
  metadata: { [key: string]: any };
  /**
   * File MIME type.
   * @type {string}
   * @memberof FileDetails
   */
  mime: string;
  /**
   *
   * @type {string}
   * @memberof FileDetails
   */
  originalFileName: string | null;
  /**
   *
   * @type {Array<string>}
   * @memberof FileDetails
   */
  tags: Array<string>;
  /**
   * Absolute path to a file. Must begin with a `/`.
   * @type {string}
   * @memberof FileDetails
   */
  filePath: string;
  /**
   * URL for a raw file hosted on the Upload CDN.
   * @type {string}
   * @memberof FileDetails
   */
  fileUrl: string;
  /**
   * Epoch milliseconds (since midnight 1 January 1970, UTC).
   * @type {number}
   * @memberof FileDetails
   */
  lastModified: number;
  /**
   * Size in bytes.
   * @type {number}
   * @memberof FileDetails
   */
  size: number;
}
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
/**
 * The path to upload the file to.
 * @export
 * @interface FilePathDefinition
 */
export interface FilePathDefinition {
  /**
   * The file name to upload the file with.
   *
   * Must not contain `/`.
   *
   * Supports path variables.
   * @type {string}
   * @memberof FilePathDefinition
   */
  fileName?: string;
  /**
   * The file name to upload the file with.
   *
   * Must not contain `/`.
   *
   * Supports path variables.
   * @type {string}
   * @memberof FilePathDefinition
   */
  fileNameFallback?: string;
  /**
   * If `true` then path variables like `{UTC_DATE}` in the `fileName` will be replaced. You can escape `{` characters with a `\`.
   *
   * If `false` then path variables like `{UTC_DATE}` in the `fileName` will be taken literally.
   *
   * Default: true
   * @type {boolean}
   * @memberof FilePathDefinition
   */
  fileNameVariablesEnabled?: boolean;
  /**
   * The path to upload the file to (excluding the file's name).
   *
   * Must begin with `/` but should not end with `/`.
   *
   * Supports path variables.
   * @type {string}
   * @memberof FilePathDefinition
   */
  folderPath?: string;
  /**
   * If `true` then path variables like `{UTC_DATE}` in the `folderPath` will be replaced. You can escape `{` characters with a `\`.
   *
   * If `false` then path variables like `{UTC_DATE}` in the `folderPath` will be taken literally.
   *
   * Default: true
   * @type {boolean}
   * @memberof FilePathDefinition
   */
  folderPathVariablesEnabled?: boolean;
}
/**
 * Summary information about a file (a subset of the FileDetails type).
 * @export
 * @interface FileSummary
 */
export interface FileSummary {
  /**
   * Absolute path to a file. Must begin with a `/`.
   * @type {string}
   * @memberof FileSummary
   */
  filePath: string;
  /**
   * URL for a raw file hosted on the Upload CDN.
   * @type {string}
   * @memberof FileSummary
   */
  fileUrl: string;
  /**
   * Epoch milliseconds (since midnight 1 January 1970, UTC).
   * @type {number}
   * @memberof FileSummary
   */
  lastModified: number;
  /**
   * Size in bytes.
   * @type {number}
   * @memberof FileSummary
   */
  size: number;
  /**
   *
   * @type {string}
   * @memberof FileSummary
   */
  type: FileSummaryTypeEnum;
}

/**
 * @export
 */
export const FileSummaryTypeEnum = {
  File: "File"
} as const;
export type FileSummaryTypeEnum = typeof FileSummaryTypeEnum[keyof typeof FileSummaryTypeEnum];

/**
 *
 * @export
 * @interface FolderDetails
 */
export interface FolderDetails {
  /**
   * Absolute path to a folder. Must begin with a `/`. Should not end with a `/`.
   * @type {string}
   * @memberof FolderDetails
   */
  folderPath: string;
  /**
   *
   * @type {FolderSettingsStorageLayerSummary}
   * @memberof FolderDetails
   */
  settings: FolderSettingsStorageLayerSummary;
  /**
   *
   * @type {string}
   * @memberof FolderDetails
   */
  type: FolderDetailsTypeEnum;
  /**
   *
   * @type {boolean}
   * @memberof FolderDetails
   */
  virtual: boolean;
  /**
   *
   * @type {FolderSettingsInherited}
   * @memberof FolderDetails
   */
  settingsInherited: FolderSettingsInherited;
}

/**
 * @export
 */
export const FolderDetailsTypeEnum = {
  Folder: "Folder"
} as const;
export type FolderDetailsTypeEnum = typeof FolderDetailsTypeEnum[keyof typeof FolderDetailsTypeEnum];

/**
 * The FolderSettings inherited by the current path.
 *
 * If the folder defines its own `settings`, then those will take effect instead of these inherited settings.
 *
 * Each inherited setting contains a `folderPath` field to indicate which folder the setting was inherited from.
 *
 * Note: if the requester has insufficient privileges to read a setting, that setting's value will be `null`.
 * @export
 * @interface FolderSettingsInherited
 */
export interface FolderSettingsInherited {
  /**
   *
   * @type {WithFolderPathPublicPermissionsArray}
   * @memberof FolderSettingsInherited
   */
  publicPermissions: WithFolderPathPublicPermissionsArray | null;
  /**
   *
   * @type {WithFolderPathStorageLayerSummary}
   * @memberof FolderSettingsInherited
   */
  storageLayer: WithFolderPathStorageLayerSummary | null;
}
/**
 *
 * @export
 * @interface FolderSettingsStorageLayerSummary
 */
export interface FolderSettingsStorageLayerSummary {
  /**
   *
   * @type {string}
   * @memberof FolderSettingsStorageLayerSummary
   */
  description: string | null;
  /**
   *
   * @type {Array<PublicPermissions>}
   * @memberof FolderSettingsStorageLayerSummary
   */
  publicPermissions: Array<PublicPermissions> | null;
  /**
   *
   * @type {FolderSettingsStorageLayerSummaryStorageLayer}
   * @memberof FolderSettingsStorageLayerSummary
   */
  storageLayer: FolderSettingsStorageLayerSummaryStorageLayer | null;
}
/**
 *
 * @export
 * @interface FolderSettingsStorageLayerSummaryStorageLayer
 */
export interface FolderSettingsStorageLayerSummaryStorageLayer {
  /**
   * The type of this storage layer.
   * @type {string}
   * @memberof FolderSettingsStorageLayerSummaryStorageLayer
   */
  type: FolderSettingsStorageLayerSummaryStorageLayerTypeEnum;
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
   * @memberof FolderSettingsStorageLayerSummaryStorageLayer
   */
  baseUrl: string | null;
  /**
   *
   * @type {PickS3StorageExcludeKeyofS3StorageCredentialsBucket}
   * @memberof FolderSettingsStorageLayerSummaryStorageLayer
   */
  bucket: PickS3StorageExcludeKeyofS3StorageCredentialsBucket;
  /**
   * If `true` then writes S3 objects with full `filePath` as key, prefixed with the `objectKeyPrefix`.
   *
   * If `false` then writes S3 objects using a relative `filePath` in relation to folder's path, prefixed with the `objectKeyPrefix`.
   * @type {boolean}
   * @memberof FolderSettingsStorageLayerSummaryStorageLayer
   */
  useAbsolutePaths: boolean;
  /**
   * If `true` then raw file downloads are routed directly via the Upload CDN's edge nodes to the custom S3 bucket.
   *
   * If `false` then raw file downloads are routes via Upload's transformation pipelines, adding some latency to raw file downloads only.
   *
   * Note: if set to `true` then you must configure a "AWS::S3::BucketPolicy" for your S3 bucket, permitting access to Upload's CloudFront distribution. Alternatively, your S3 bucket must allow public file downloads.
   * @type {boolean}
   * @memberof FolderSettingsStorageLayerSummaryStorageLayer
   */
  useDirectRawFileDelivery: boolean;
  /**
   * Only applicable if `useDirectRawFileDelivery` is set to `true`.
   * @type {boolean}
   * @memberof FolderSettingsStorageLayerSummaryStorageLayer
   */
  useOriginAccessIdentity: boolean;
  /**
   * Enables S3 transfer acceleration, providing improved file upload speeds for larger files.
   *
   * Note: this setting must also be enabled on the S3 bucket.
   * @type {boolean}
   * @memberof FolderSettingsStorageLayerSummaryStorageLayer
   */
  useTransferAcceleration: boolean;
}

/**
 * @export
 */
export const FolderSettingsStorageLayerSummaryStorageLayerTypeEnum = {
  S3: "S3"
} as const;
export type FolderSettingsStorageLayerSummaryStorageLayerTypeEnum =
  typeof FolderSettingsStorageLayerSummaryStorageLayerTypeEnum[keyof typeof FolderSettingsStorageLayerSummaryStorageLayerTypeEnum];

/**
 * Summary information about a folder (a subset of the FolderDetails type).
 * @export
 * @interface FolderSummary
 */
export interface FolderSummary {
  /**
   * Absolute path to a folder. Must begin with a `/`. Should not end with a `/`.
   * @type {string}
   * @memberof FolderSummary
   */
  folderPath: string;
  /**
   *
   * @type {FolderSettingsStorageLayerSummary}
   * @memberof FolderSummary
   */
  settings: FolderSettingsStorageLayerSummary;
  /**
   *
   * @type {string}
   * @memberof FolderSummary
   */
  type: FolderSummaryTypeEnum;
  /**
   *
   * @type {boolean}
   * @memberof FolderSummary
   */
  virtual: boolean;
}

/**
 * @export
 */
export const FolderSummaryTypeEnum = {
  Folder: "Folder"
} as const;
export type FolderSummaryTypeEnum = typeof FolderSummaryTypeEnum[keyof typeof FolderSummaryTypeEnum];

/**
 * Storage layer used for all files uploaded via the Upload API V1 (legacy version).
 *
 * This is a read/write storage layer.
 * @export
 * @interface InternalStorageV1
 */
export interface InternalStorageV1 {
  /**
   * The type of this storage layer.
   * @type {string}
   * @memberof InternalStorageV1
   */
  type: InternalStorageV1TypeEnum;
}

/**
 * @export
 */
export const InternalStorageV1TypeEnum = {
  InternalStorageV1: "InternalStorageV1"
} as const;
export type InternalStorageV1TypeEnum = typeof InternalStorageV1TypeEnum[keyof typeof InternalStorageV1TypeEnum];

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

/**
 * Summary information about an asynchronous background job (for example, a folder deletion).
 * @export
 * @interface JobSummary
 */
export interface JobSummary {
  /**
   * Your account ID.
   *
   * This is visible on the settings page:
   *
   * https://upload.io/dashboard/settings
   * @type {string}
   * @memberof JobSummary
   */
  accountId: string;
  /**
   * The total number of completed attempts at running the job, both failed and successful.
   * @type {number}
   * @memberof JobSummary
   */
  attempts: number;
  /**
   * Epoch milliseconds (since midnight 1 January 1970, UTC).
   * @type {number}
   * @memberof JobSummary
   */
  created: number;
  /**
   *
   * @type {JobSummaryError}
   * @memberof JobSummary
   */
  error: JobSummaryError | null;
  /**
   * Job ID.
   * @type {string}
   * @memberof JobSummary
   */
  jobId: string;
  /**
   *
   * @type {AccountJobType}
   * @memberof JobSummary
   */
  jobType: AccountJobType;
  /**
   * Epoch milliseconds (since midnight 1 January 1970, UTC).
   * @type {number}
   * @memberof JobSummary
   */
  lastUpdated: number;
  /**
   * An arbitrary JSON object.
   * @type {{ [key: string]: any; }}
   * @memberof JobSummary
   */
  payload: { [key: string]: any };
  /**
   *
   * @type {AccountJobStatus}
   * @memberof JobSummary
   */
  status: AccountJobStatus;
}
/**
 *
 * @export
 * @interface JobSummaryError
 */
export interface JobSummaryError {
  /**
   * Human-readable error message.
   * @type {string}
   * @memberof JobSummaryError
   */
  message: string;
  /**
   * Additional machine-readable details relating to the error.
   * @type {any}
   * @memberof JobSummaryError
   */
  details?: any | null;
  /**
   * Machine-readable error code.
   * @type {string}
   * @memberof JobSummaryError
   */
  code: string;
}
/**
 * Response body for ListFolderDescendants.
 * @export
 * @interface ListFolderResponse
 */
export interface ListFolderResponse {
  /**
   * Absolute path to a file or folder. Must begin with a `/`.
   * @type {string}
   * @memberof ListFolderResponse
   */
  cursor: string;
  /**
   *
   * @type {FolderSummary}
   * @memberof ListFolderResponse
   */
  folder: FolderSummary;
  /**
   * If `true` then paging has completed.
   * @type {boolean}
   * @memberof ListFolderResponse
   */
  isPaginationComplete: boolean;
  /**
   * Summary information about each of the folder's descendants (files and folders).
   * @type {Array<ObjectSummary>}
   * @memberof ListFolderResponse
   */
  items: Array<ObjectSummary>;
}
/**
 * Response body for ListRecentJobs.
 * @export
 * @interface ListRecentJobsResponse
 */
export interface ListRecentJobsResponse {
  /**
   *
   * @type {Array<JobSummary>}
   * @memberof ListRecentJobsResponse
   */
  items: Array<JobSummary>;
}

/**
 * Multipart file upload protocol version.
 *
 * - `1.0`: this protocol version automatically downgrades to single part uploads when files are below a certain size. When this protocol is used for small files, the file exists immediately after the `PUT` request to the `uploadUrl` completes. This protocol requires more client-side code to implement, and has a known issue whereby file TTLs are ignored if the client code fails to call CompleteUploadPart.
 *
 * - `1.1`: this protocol version uses multipart uploads for all files. When this protocol is used, files only exist after the last CompleteUploadPart request is made. This protocol simplifies client code, and fixes a known issue in the `2.0` protocol for file TTLs (described above).
 * @export
 */
export const MultipartUploadProtocol = {
  _0: "1.0",
  _1: "1.1"
} as const;
export type MultipartUploadProtocol = typeof MultipartUploadProtocol[keyof typeof MultipartUploadProtocol];

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
   * @type {string}
   * @memberof ObjectSummary
   */
  type: ObjectSummaryTypeEnum;
  /**
   *
   * @type {boolean}
   * @memberof ObjectSummary
   */
  virtual: boolean;
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
  Children: "Children",
  Grandchildren: "Grandchildren+",
  This: "This"
} as const;
export type PathPermissionScope = typeof PathPermissionScope[keyof typeof PathPermissionScope];

/**
 * From T, pick a set of properties whose keys are in the union K
 * @export
 * @interface PickS3StorageExcludeKeyofS3StorageCredentials
 */
export interface PickS3StorageExcludeKeyofS3StorageCredentials {
  /**
   * The type of this storage layer.
   * @type {string}
   * @memberof PickS3StorageExcludeKeyofS3StorageCredentials
   */
  type: PickS3StorageExcludeKeyofS3StorageCredentialsTypeEnum;
  /**
   *
   * @type {PickS3StorageExcludeKeyofS3StorageCredentialsBucket}
   * @memberof PickS3StorageExcludeKeyofS3StorageCredentials
   */
  bucket: PickS3StorageExcludeKeyofS3StorageCredentialsBucket;
  /**
   * If `true` then writes S3 objects with full `filePath` as key, prefixed with the `objectKeyPrefix`.
   *
   * If `false` then writes S3 objects using a relative `filePath` in relation to folder's path, prefixed with the `objectKeyPrefix`.
   * @type {boolean}
   * @memberof PickS3StorageExcludeKeyofS3StorageCredentials
   */
  useAbsolutePaths: boolean;
  /**
   * If `true` then raw file downloads are routed directly via the Upload CDN's edge nodes to the custom S3 bucket.
   *
   * If `false` then raw file downloads are routes via Upload's transformation pipelines, adding some latency to raw file downloads only.
   *
   * Note: if set to `true` then you must configure a "AWS::S3::BucketPolicy" for your S3 bucket, permitting access to Upload's CloudFront distribution. Alternatively, your S3 bucket must allow public file downloads.
   * @type {boolean}
   * @memberof PickS3StorageExcludeKeyofS3StorageCredentials
   */
  useDirectRawFileDelivery: boolean;
  /**
   * Only applicable if `useDirectRawFileDelivery` is set to `true`.
   * @type {boolean}
   * @memberof PickS3StorageExcludeKeyofS3StorageCredentials
   */
  useOriginAccessIdentity: boolean;
  /**
   * Enables S3 transfer acceleration, providing improved file upload speeds for larger files.
   *
   * Note: this setting must also be enabled on the S3 bucket.
   * @type {boolean}
   * @memberof PickS3StorageExcludeKeyofS3StorageCredentials
   */
  useTransferAcceleration: boolean;
}

/**
 * @export
 */
export const PickS3StorageExcludeKeyofS3StorageCredentialsTypeEnum = {
  S3: "S3"
} as const;
export type PickS3StorageExcludeKeyofS3StorageCredentialsTypeEnum =
  typeof PickS3StorageExcludeKeyofS3StorageCredentialsTypeEnum[keyof typeof PickS3StorageExcludeKeyofS3StorageCredentialsTypeEnum];

/**
 *
 * @export
 * @interface PickS3StorageExcludeKeyofS3StorageCredentialsBucket
 */
export interface PickS3StorageExcludeKeyofS3StorageCredentialsBucket {
  /**
   * AWS S3 Object Key.
   * @type {string}
   * @memberof PickS3StorageExcludeKeyofS3StorageCredentialsBucket
   */
  objectKeyPrefix: string;
  /**
   *
   * @type {AwsRegion}
   * @memberof PickS3StorageExcludeKeyofS3StorageCredentialsBucket
   */
  bucketRegion: AwsRegion;
  /**
   * AWS S3 Bucket Name.
   * @type {string}
   * @memberof PickS3StorageExcludeKeyofS3StorageCredentialsBucket
   */
  bucketName: string;
}
/**
 * Permissions applied to anonymous users who attempt to download files from a folder.
 *
 * Each folder can declare these permissions via its FolderSettings object.
 * @export
 * @interface PublicPermissions
 */
export interface PublicPermissions {
  /**
   *
   * @type {PublicPermissionsGrants}
   * @memberof PublicPermissions
   */
  permissions: PublicPermissionsGrants;
  /**
   *
   * @type {PathPermissionScope}
   * @memberof PublicPermissions
   */
  scope: PathPermissionScope;
}
/**
 * Permissions applied to anonymous users who attempt to download files from a folder.
 *
 * Each folder can declare these permissions via its FolderSettings object.
 * @export
 * @interface PublicPermissionsGrants
 */
export interface PublicPermissionsGrants {
  /**
   *
   * @type {FileDownloadGrants}
   * @memberof PublicPermissionsGrants
   */
  file: FileDownloadGrants;
}
/**
 * Request body for PutFolder.
 * @export
 * @interface PutFolderRequest
 */
export interface PutFolderRequest {
  /**
   * You must specify `true` if the `folderPath` ends with a `/`.
   *
   * This prevents the accidental creation of folders that produce file paths with double forward-slashes in them.
   *
   * Default: false
   * @type {boolean}
   * @memberof PutFolderRequest
   */
  allowUnnamedFolder?: boolean;
  /**
   * Absolute path to a folder. Must begin with a `/`. Should not end with a `/`.
   * @type {string}
   * @memberof PutFolderRequest
   */
  folderPath: string;
  /**
   *
   * @type {PatchFolderSettings}
   * @memberof PutFolderRequest
   */
  folderSettings?: PatchFolderSettings;
}
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

/**
 *
 * @export
 * @interface S3StorageCredentials
 */
export interface S3StorageCredentials {
  /**
   * AWS Secret Access Key.
   * @type {string}
   * @memberof S3StorageCredentials
   */
  awsSecretKey: string;
  /**
   * AWS Access Key.
   * @type {string}
   * @memberof S3StorageCredentials
   */
  awsAccessKey: string;
}
/**
 * This data type specifies the field must be updated.
 * @export
 * @interface SpecifiedFieldValueFolderDescriptionOrNull
 */
export interface SpecifiedFieldValueFolderDescriptionOrNull {
  /**
   * This field is always `true`.
   * @type {boolean}
   * @memberof SpecifiedFieldValueFolderDescriptionOrNull
   */
  set: SpecifiedFieldValueFolderDescriptionOrNullSetEnum;
  /**
   * The value to set into the field.
   * @type {string}
   * @memberof SpecifiedFieldValueFolderDescriptionOrNull
   */
  value: string | null;
}

/**
 * @export
 */
export const SpecifiedFieldValueFolderDescriptionOrNullSetEnum = {
  True: true
} as const;
export type SpecifiedFieldValueFolderDescriptionOrNullSetEnum =
  typeof SpecifiedFieldValueFolderDescriptionOrNullSetEnum[keyof typeof SpecifiedFieldValueFolderDescriptionOrNullSetEnum];

/**
 * This data type specifies the field must be updated.
 * @export
 * @interface SpecifiedFieldValuePublicPermissionsArrayOrNull
 */
export interface SpecifiedFieldValuePublicPermissionsArrayOrNull {
  /**
   * This field is always `true`.
   * @type {boolean}
   * @memberof SpecifiedFieldValuePublicPermissionsArrayOrNull
   */
  set: SpecifiedFieldValuePublicPermissionsArrayOrNullSetEnum;
  /**
   * The value to set into the field.
   * @type {Array<PublicPermissions>}
   * @memberof SpecifiedFieldValuePublicPermissionsArrayOrNull
   */
  value: Array<PublicPermissions> | null;
}

/**
 * @export
 */
export const SpecifiedFieldValuePublicPermissionsArrayOrNullSetEnum = {
  True: true
} as const;
export type SpecifiedFieldValuePublicPermissionsArrayOrNullSetEnum =
  typeof SpecifiedFieldValuePublicPermissionsArrayOrNullSetEnum[keyof typeof SpecifiedFieldValuePublicPermissionsArrayOrNullSetEnum];

/**
 * This data type specifies the field must be updated.
 * @export
 * @interface SpecifiedFieldValueStorageLayerUpdateOrNull
 */
export interface SpecifiedFieldValueStorageLayerUpdateOrNull {
  /**
   * This field is always `true`.
   * @type {boolean}
   * @memberof SpecifiedFieldValueStorageLayerUpdateOrNull
   */
  set: SpecifiedFieldValueStorageLayerUpdateOrNullSetEnum;
  /**
   *
   * @type {SpecifiedFieldValueStorageLayerUpdateOrNullValue}
   * @memberof SpecifiedFieldValueStorageLayerUpdateOrNull
   */
  value: SpecifiedFieldValueStorageLayerUpdateOrNullValue | null;
}

/**
 * @export
 */
export const SpecifiedFieldValueStorageLayerUpdateOrNullSetEnum = {
  True: true
} as const;
export type SpecifiedFieldValueStorageLayerUpdateOrNullSetEnum =
  typeof SpecifiedFieldValueStorageLayerUpdateOrNullSetEnum[keyof typeof SpecifiedFieldValueStorageLayerUpdateOrNullSetEnum];

/**
 * The value to set into the field.
 * @export
 * @interface SpecifiedFieldValueStorageLayerUpdateOrNullValue
 */
export interface SpecifiedFieldValueStorageLayerUpdateOrNullValue {
  /**
   * The type of this storage layer.
   * @type {string}
   * @memberof SpecifiedFieldValueStorageLayerUpdateOrNullValue
   */
  type: SpecifiedFieldValueStorageLayerUpdateOrNullValueTypeEnum;
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
   * @memberof SpecifiedFieldValueStorageLayerUpdateOrNullValue
   */
  baseUrl: string | null;
  /**
   *
   * @type {PickS3StorageExcludeKeyofS3StorageCredentialsBucket}
   * @memberof SpecifiedFieldValueStorageLayerUpdateOrNullValue
   */
  bucket: PickS3StorageExcludeKeyofS3StorageCredentialsBucket;
  /**
   *
   * @type {S3StorageCredentials}
   * @memberof SpecifiedFieldValueStorageLayerUpdateOrNullValue
   */
  credentials: S3StorageCredentials;
  /**
   * If `true` then writes S3 objects with full `filePath` as key, prefixed with the `objectKeyPrefix`.
   *
   * If `false` then writes S3 objects using a relative `filePath` in relation to folder's path, prefixed with the `objectKeyPrefix`.
   * @type {boolean}
   * @memberof SpecifiedFieldValueStorageLayerUpdateOrNullValue
   */
  useAbsolutePaths: boolean;
  /**
   * If `true` then raw file downloads are routed directly via the Upload CDN's edge nodes to the custom S3 bucket.
   *
   * If `false` then raw file downloads are routes via Upload's transformation pipelines, adding some latency to raw file downloads only.
   *
   * Note: if set to `true` then you must configure a "AWS::S3::BucketPolicy" for your S3 bucket, permitting access to Upload's CloudFront distribution. Alternatively, your S3 bucket must allow public file downloads.
   * @type {boolean}
   * @memberof SpecifiedFieldValueStorageLayerUpdateOrNullValue
   */
  useDirectRawFileDelivery: boolean;
  /**
   * Only applicable if `useDirectRawFileDelivery` is set to `true`.
   * @type {boolean}
   * @memberof SpecifiedFieldValueStorageLayerUpdateOrNullValue
   */
  useOriginAccessIdentity: boolean;
  /**
   * Enables S3 transfer acceleration, providing improved file upload speeds for larger files.
   *
   * Note: this setting must also be enabled on the S3 bucket.
   * @type {boolean}
   * @memberof SpecifiedFieldValueStorageLayerUpdateOrNullValue
   */
  useTransferAcceleration: boolean;
}

/**
 * @export
 */
export const SpecifiedFieldValueStorageLayerUpdateOrNullValueTypeEnum = {
  S3: "S3"
} as const;
export type SpecifiedFieldValueStorageLayerUpdateOrNullValueTypeEnum =
  typeof SpecifiedFieldValueStorageLayerUpdateOrNullValueTypeEnum[keyof typeof SpecifiedFieldValueStorageLayerUpdateOrNullValueTypeEnum];

/**
 * Storage layer summary information, describing an existing folder's storage layer.
 *
 * This data type does not contain credentials.
 * @export
 * @interface StorageLayerSummary
 */
export interface StorageLayerSummary {
  /**
   * The type of this storage layer.
   * @type {string}
   * @memberof StorageLayerSummary
   */
  type: StorageLayerSummaryTypeEnum;
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
   * @memberof StorageLayerSummary
   */
  baseUrl: string | null;
  /**
   *
   * @type {PickS3StorageExcludeKeyofS3StorageCredentialsBucket}
   * @memberof StorageLayerSummary
   */
  bucket: PickS3StorageExcludeKeyofS3StorageCredentialsBucket;
  /**
   * If `true` then writes S3 objects with full `filePath` as key, prefixed with the `objectKeyPrefix`.
   *
   * If `false` then writes S3 objects using a relative `filePath` in relation to folder's path, prefixed with the `objectKeyPrefix`.
   * @type {boolean}
   * @memberof StorageLayerSummary
   */
  useAbsolutePaths: boolean;
  /**
   * If `true` then raw file downloads are routed directly via the Upload CDN's edge nodes to the custom S3 bucket.
   *
   * If `false` then raw file downloads are routes via Upload's transformation pipelines, adding some latency to raw file downloads only.
   *
   * Note: if set to `true` then you must configure a "AWS::S3::BucketPolicy" for your S3 bucket, permitting access to Upload's CloudFront distribution. Alternatively, your S3 bucket must allow public file downloads.
   * @type {boolean}
   * @memberof StorageLayerSummary
   */
  useDirectRawFileDelivery: boolean;
  /**
   * Only applicable if `useDirectRawFileDelivery` is set to `true`.
   * @type {boolean}
   * @memberof StorageLayerSummary
   */
  useOriginAccessIdentity: boolean;
  /**
   * Enables S3 transfer acceleration, providing improved file upload speeds for larger files.
   *
   * Note: this setting must also be enabled on the S3 bucket.
   * @type {boolean}
   * @memberof StorageLayerSummary
   */
  useTransferAcceleration: boolean;
}

/**
 * @export
 */
export const StorageLayerSummaryTypeEnum = {
  S3: "S3"
} as const;
export type StorageLayerSummaryTypeEnum = typeof StorageLayerSummaryTypeEnum[keyof typeof StorageLayerSummaryTypeEnum];

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

/**
 * Expresses a condition that matches files by their tags.
 * @export
 * @interface TagCondition
 */
export interface TagCondition {
  /**
   *
   * @type {TagCondition}
   * @memberof TagCondition
   */
  left: TagCondition;
  /**
   *
   * @type {TagCondition}
   * @memberof TagCondition
   */
  right: TagCondition;
  /**
   *
   * @type {string}
   * @memberof TagCondition
   */
  type: TagConditionTypeEnum;
  /**
   * File tag scope, e.g. for a transformation definition, a CDN download access token, or an API key's tag whitelist.
   * @type {string}
   * @memberof TagCondition
   */
  equals: string;
  /**
   *
   * @type {TagCondition}
   * @memberof TagCondition
   */
  condition: TagCondition;
  /**
   *
   * @type {Array<string>}
   * @memberof TagCondition
   */
  any: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof TagCondition
   */
  all: Array<string>;
}

/**
 * @export
 */
export const TagConditionTypeEnum = {
  All: "All"
} as const;
export type TagConditionTypeEnum = typeof TagConditionTypeEnum[keyof typeof TagConditionTypeEnum];

/**
 *
 * @export
 * @interface TagConditionAll
 */
export interface TagConditionAll {
  /**
   *
   * @type {Array<string>}
   * @memberof TagConditionAll
   */
  all: Array<string>;
  /**
   *
   * @type {string}
   * @memberof TagConditionAll
   */
  type: TagConditionAllTypeEnum;
}

/**
 * @export
 */
export const TagConditionAllTypeEnum = {
  All: "All"
} as const;
export type TagConditionAllTypeEnum = typeof TagConditionAllTypeEnum[keyof typeof TagConditionAllTypeEnum];

/**
 *
 * @export
 * @interface TagConditionAnd
 */
export interface TagConditionAnd {
  /**
   *
   * @type {TagCondition}
   * @memberof TagConditionAnd
   */
  left: TagCondition;
  /**
   *
   * @type {TagCondition}
   * @memberof TagConditionAnd
   */
  right: TagCondition;
  /**
   *
   * @type {string}
   * @memberof TagConditionAnd
   */
  type: TagConditionAndTypeEnum;
}

/**
 * @export
 */
export const TagConditionAndTypeEnum = {
  And: "And"
} as const;
export type TagConditionAndTypeEnum = typeof TagConditionAndTypeEnum[keyof typeof TagConditionAndTypeEnum];

/**
 *
 * @export
 * @interface TagConditionAny
 */
export interface TagConditionAny {
  /**
   *
   * @type {Array<string>}
   * @memberof TagConditionAny
   */
  any: Array<string>;
  /**
   *
   * @type {string}
   * @memberof TagConditionAny
   */
  type: TagConditionAnyTypeEnum;
}

/**
 * @export
 */
export const TagConditionAnyTypeEnum = {
  Any: "Any"
} as const;
export type TagConditionAnyTypeEnum = typeof TagConditionAnyTypeEnum[keyof typeof TagConditionAnyTypeEnum];

/**
 *
 * @export
 * @interface TagConditionEquals
 */
export interface TagConditionEquals {
  /**
   * File tag scope, e.g. for a transformation definition, a CDN download access token, or an API key's tag whitelist.
   * @type {string}
   * @memberof TagConditionEquals
   */
  equals: string;
  /**
   *
   * @type {string}
   * @memberof TagConditionEquals
   */
  type: TagConditionEqualsTypeEnum;
}

/**
 * @export
 */
export const TagConditionEqualsTypeEnum = {
  Equals: "Equals"
} as const;
export type TagConditionEqualsTypeEnum = typeof TagConditionEqualsTypeEnum[keyof typeof TagConditionEqualsTypeEnum];

/**
 *
 * @export
 * @interface TagConditionNot
 */
export interface TagConditionNot {
  /**
   *
   * @type {TagCondition}
   * @memberof TagConditionNot
   */
  condition: TagCondition;
  /**
   *
   * @type {string}
   * @memberof TagConditionNot
   */
  type: TagConditionNotTypeEnum;
}

/**
 * @export
 */
export const TagConditionNotTypeEnum = {
  Not: "Not"
} as const;
export type TagConditionNotTypeEnum = typeof TagConditionNotTypeEnum[keyof typeof TagConditionNotTypeEnum];

/**
 *
 * @export
 * @interface TagConditionOr
 */
export interface TagConditionOr {
  /**
   *
   * @type {TagCondition}
   * @memberof TagConditionOr
   */
  left: TagCondition;
  /**
   *
   * @type {TagCondition}
   * @memberof TagConditionOr
   */
  right: TagCondition;
  /**
   *
   * @type {string}
   * @memberof TagConditionOr
   */
  type: TagConditionOrTypeEnum;
}

/**
 * @export
 */
export const TagConditionOrTypeEnum = {
  Or: "Or"
} as const;
export type TagConditionOrTypeEnum = typeof TagConditionOrTypeEnum[keyof typeof TagConditionOrTypeEnum];

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
export type UnspecifiedFieldValueSetEnum =
  typeof UnspecifiedFieldValueSetEnum[keyof typeof UnspecifiedFieldValueSetEnum];

/**
 *
 * @export
 * @interface UpdatableFieldFolderDescriptionOrNull
 */
export interface UpdatableFieldFolderDescriptionOrNull {
  /**
   * This field is always `true`.
   * @type {boolean}
   * @memberof UpdatableFieldFolderDescriptionOrNull
   */
  set: UpdatableFieldFolderDescriptionOrNullSetEnum;
  /**
   * The value to set into the field.
   * @type {string}
   * @memberof UpdatableFieldFolderDescriptionOrNull
   */
  value: string | null;
}

/**
 * @export
 */
export const UpdatableFieldFolderDescriptionOrNullSetEnum = {
  True: true
} as const;
export type UpdatableFieldFolderDescriptionOrNullSetEnum =
  typeof UpdatableFieldFolderDescriptionOrNullSetEnum[keyof typeof UpdatableFieldFolderDescriptionOrNullSetEnum];

/**
 *
 * @export
 * @interface UpdatableFieldPublicPermissionsArrayOrNull
 */
export interface UpdatableFieldPublicPermissionsArrayOrNull {
  /**
   * This field is always `true`.
   * @type {boolean}
   * @memberof UpdatableFieldPublicPermissionsArrayOrNull
   */
  set: UpdatableFieldPublicPermissionsArrayOrNullSetEnum;
  /**
   * The value to set into the field.
   * @type {Array<PublicPermissions>}
   * @memberof UpdatableFieldPublicPermissionsArrayOrNull
   */
  value: Array<PublicPermissions> | null;
}

/**
 * @export
 */
export const UpdatableFieldPublicPermissionsArrayOrNullSetEnum = {
  True: true
} as const;
export type UpdatableFieldPublicPermissionsArrayOrNullSetEnum =
  typeof UpdatableFieldPublicPermissionsArrayOrNullSetEnum[keyof typeof UpdatableFieldPublicPermissionsArrayOrNullSetEnum];

/**
 *
 * @export
 * @interface UpdatableFieldStorageLayerUpdateOrNull
 */
export interface UpdatableFieldStorageLayerUpdateOrNull {
  /**
   * This field is always `true`.
   * @type {boolean}
   * @memberof UpdatableFieldStorageLayerUpdateOrNull
   */
  set: UpdatableFieldStorageLayerUpdateOrNullSetEnum;
  /**
   *
   * @type {SpecifiedFieldValueStorageLayerUpdateOrNullValue}
   * @memberof UpdatableFieldStorageLayerUpdateOrNull
   */
  value: SpecifiedFieldValueStorageLayerUpdateOrNullValue | null;
}

/**
 * @export
 */
export const UpdatableFieldStorageLayerUpdateOrNullSetEnum = {
  True: true
} as const;
export type UpdatableFieldStorageLayerUpdateOrNullSetEnum =
  typeof UpdatableFieldStorageLayerUpdateOrNullSetEnum[keyof typeof UpdatableFieldStorageLayerUpdateOrNullSetEnum];

/**
 * Represents a part of a file to be uploaded as part of a multipart file upload.
 *
 * Specifies the 'range' of the file that needs uploading, together with an 'uploadUrl' of where to PUT those bytes to.
 *
 * The PUT request to the `uploadUrl` will return an etag response header, which must be provided in a subsequent CompleteUploadPart request.
 *
 * See: basic file uploads, multipart file uploads.
 * @export
 * @interface UploadPart
 */
export interface UploadPart {
  /**
   *
   * @type {UploadPartRange}
   * @memberof UploadPart
   */
  range: UploadPartRange;
  /**
   * The ID for the multipart file upload.
   * @type {string}
   * @memberof UploadPart
   */
  uploadId: string;
  /**
   * Index of an uploadable file part.
   *
   * Can be used as the `uploadPartIndex` parameter in the GetUploadPart and CompleteUploadPart operations.
   * @type {number}
   * @memberof UploadPart
   */
  uploadPartIndex: number;
  /**
   * Pre-signed upload URL for this part.
   *
   * You are required to issue a `PUT` to this URL, with the file's bytes as the request body (limited to the range indicated by this upload part).
   *
   * The `PUT` request will return an `etag` response header, which must be provided in a subsequent CompleteUploadPart request.
   * @type {string}
   * @memberof UploadPart
   */
  uploadUrl: string;
}
/**
 * Identifies the UploadPart indexes that still need uploading for an active multipart file upload.
 * @export
 * @interface UploadPartList
 */
export interface UploadPartList {
  /**
   * Indexes of the remaining parts to upload.
   *
   * These indexes can be used as the `uploadPartIndex` parameter in the GetUploadPart and CompleteUploadPart endpoints.
   * @type {Array<number>}
   * @memberof UploadPartList
   */
  remainingUploadParts: Array<number>;
}
/**
 * Specifies the range in the file the UploadPart represents.
 * @export
 * @interface UploadPartRange
 */
export interface UploadPartRange {
  /**
   * Position in the file the last byte of this part corresponds to. Value is -1 when the part is empty (i.e. for
   * uploading empty files).
   * @type {number}
   * @memberof UploadPartRange
   */
  inclusiveEnd: number;
  /**
   * Position in the file the first byte of this part corresponds to.
   * @type {number}
   * @memberof UploadPartRange
   */
  inclusiveStart: number;
}
/**
 * Storage layer used for serving files from external HTTP origins.
 *
 * This is a read-only storage layer.
 * @export
 * @interface WebStorage
 */
export interface WebStorage {
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
   * @memberof WebStorage
   */
  baseUrl: string | null;
  /**
   * The type of this storage layer.
   * @type {string}
   * @memberof WebStorage
   */
  type: WebStorageTypeEnum;
}

/**
 * @export
 */
export const WebStorageTypeEnum = {
  Web: "Web"
} as const;
export type WebStorageTypeEnum = typeof WebStorageTypeEnum[keyof typeof WebStorageTypeEnum];

/**
 *
 * @export
 * @interface WithFolderPathPublicPermissionsArray
 */
export interface WithFolderPathPublicPermissionsArray {
  /**
   * Absolute path to a folder. Must begin with a `/`. Should not end with a `/`.
   * @type {string}
   * @memberof WithFolderPathPublicPermissionsArray
   */
  folderPath: string;
  /**
   *
   * @type {Array<PublicPermissions>}
   * @memberof WithFolderPathPublicPermissionsArray
   */
  value: Array<PublicPermissions>;
}
/**
 *
 * @export
 * @interface WithFolderPathStorageLayerSummary
 */
export interface WithFolderPathStorageLayerSummary {
  /**
   * Absolute path to a folder. Must begin with a `/`. Should not end with a `/`.
   * @type {string}
   * @memberof WithFolderPathStorageLayerSummary
   */
  folderPath: string;
  /**
   *
   * @type {StorageLayerSummary}
   * @memberof WithFolderPathStorageLayerSummary
   */
  value: StorageLayerSummary;
}
