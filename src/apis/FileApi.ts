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
import * as runtime from "../runtime";
import type {
  // @ts-ignore
  AsyncResponse,
  // @ts-ignore
  DeleteFileBatchRequest,
  // @ts-ignore
  ErrorResponse,
  // @ts-ignore
  FileDetails
} from "../models";

export interface DeleteFileRequest {
  accountId: string;
  filePath: string;
}

export interface DeleteFileBatchOperationRequest {
  accountId: string;
  deleteFileBatchRequest: DeleteFileBatchRequest;
}

export interface DownloadFileRequest {
  accountId: string;
  filePath: string;
  auth?: boolean;
  cache?: boolean;
  download?: boolean;
  version?: string;
}

export interface GetFileDetailsRequest {
  accountId: string;
  filePath: string;
}

export interface ProcessFileRequest {
  accountId: string;
  filePath: string;
  transformation: string;
  auth?: boolean;
  cache?: boolean;
  download?: boolean;
  version?: string;
  artifact?: string;
}

/**
 *
 */
export class FileApi extends runtime.BaseAPI {
  /**
   * Synchronously deletes a single file.
   */
  private async deleteFileRaw(
    requestParameters: DeleteFileRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling deleteFile."
      );
    }

    if (requestParameters.filePath === null || requestParameters.filePath === undefined) {
      throw new runtime.RequiredError(
        "filePath",
        "Required parameter requestParameters.filePath was null or undefined when calling deleteFile."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.filePath !== undefined) {
      queryParameters["filePath"] = requestParameters.filePath;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey("Authorization")}`; // authorization-header authentication
    }

    const response = await this.request(
      {
        path: `/v2/accounts/{accountId}/files`.replace(
          `{${"accountId"}}`,
          encodeURIComponent(String(requestParameters.accountId))
        ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Synchronously deletes a single file.
   */
  async deleteFile(
    requestParameters: DeleteFileRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.deleteFileRaw(requestParameters, initOverrides);
  }

  /**
   * Asynchronously deletes multiple files.
   */
  private async deleteFileBatchRaw(
    requestParameters: DeleteFileBatchOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<AsyncResponse>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling deleteFileBatch."
      );
    }

    if (requestParameters.deleteFileBatchRequest === null || requestParameters.deleteFileBatchRequest === undefined) {
      throw new runtime.RequiredError(
        "deleteFileBatchRequest",
        "Required parameter requestParameters.deleteFileBatchRequest was null or undefined when calling deleteFileBatch."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey("Authorization")}`; // authorization-header authentication
    }

    const response = await this.request(
      {
        path: `/v2/accounts/{accountId}/files/batch`.replace(
          `{${"accountId"}}`,
          encodeURIComponent(String(requestParameters.accountId))
        ),
        method: "DELETE",
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.deleteFileBatchRequest
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Asynchronously deletes multiple files.
   */
  async deleteFileBatch(
    requestParameters: DeleteFileBatchOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<AsyncResponse> {
    const response = await this.deleteFileBatchRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * To download files: navigate to a file URL in your browser.  Authorization is only required when the file is private — public files can be downloaded via the URL in any browser.
   */
  private async downloadFileRaw(
    requestParameters: DownloadFileRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Blob>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling downloadFile."
      );
    }

    if (requestParameters.filePath === null || requestParameters.filePath === undefined) {
      throw new runtime.RequiredError(
        "filePath",
        "Required parameter requestParameters.filePath was null or undefined when calling downloadFile."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.auth !== undefined) {
      queryParameters["_auth"] = requestParameters.auth;
    }

    if (requestParameters.cache !== undefined) {
      queryParameters["_cache"] = requestParameters.cache;
    }

    if (requestParameters.download !== undefined) {
      queryParameters["_download"] = requestParameters.download;
    }

    if (requestParameters.version !== undefined) {
      queryParameters["_version"] = requestParameters.version;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey("Authorization")}`; // authorization-header authentication
    }

    const response = await this.request(
      {
        path: `/{accountId}/raw/{filePath}`
          .replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters.accountId)))
          .replace(`{${"filePath"}}`, encodeURIComponent(String(requestParameters.filePath))),
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    );

    return new runtime.BlobApiResponse(response);
  }

  /**
   * To download files: navigate to a file URL in your browser.  Authorization is only required when the file is private — public files can be downloaded via the URL in any browser.
   */
  async downloadFile(
    requestParameters: DownloadFileRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Blob> {
    const response = await this.downloadFileRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Retrieves the full details for a file.
   */
  private async getFileDetailsRaw(
    requestParameters: GetFileDetailsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<FileDetails>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling getFileDetails."
      );
    }

    if (requestParameters.filePath === null || requestParameters.filePath === undefined) {
      throw new runtime.RequiredError(
        "filePath",
        "Required parameter requestParameters.filePath was null or undefined when calling getFileDetails."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.filePath !== undefined) {
      queryParameters["filePath"] = requestParameters.filePath;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey("Authorization")}`; // authorization-header authentication
    }

    const response = await this.request(
      {
        path: `/v2/accounts/{accountId}/files/details`.replace(
          `{${"accountId"}}`,
          encodeURIComponent(String(requestParameters.accountId))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response);
  }

  /**
   * Retrieves the full details for a file.
   */
  async getFileDetails(
    requestParameters: GetFileDetailsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<FileDetails> {
    const response = await this.getFileDetailsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * To process files: replace \"raw\" in your file URLs with a transformation, e.g. \"thumbnail\".  To manage your transformations: https://upload.io/dashboard/transformations  Authorization is only required when the file is private — public files can be transformed via the URL in any browser.
   */
  private async processFileRaw(
    requestParameters: ProcessFileRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Blob>> {
    if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
      throw new runtime.RequiredError(
        "accountId",
        "Required parameter requestParameters.accountId was null or undefined when calling processFile."
      );
    }

    if (requestParameters.filePath === null || requestParameters.filePath === undefined) {
      throw new runtime.RequiredError(
        "filePath",
        "Required parameter requestParameters.filePath was null or undefined when calling processFile."
      );
    }

    if (requestParameters.transformation === null || requestParameters.transformation === undefined) {
      throw new runtime.RequiredError(
        "transformation",
        "Required parameter requestParameters.transformation was null or undefined when calling processFile."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.auth !== undefined) {
      queryParameters["_auth"] = requestParameters.auth;
    }

    if (requestParameters.cache !== undefined) {
      queryParameters["_cache"] = requestParameters.cache;
    }

    if (requestParameters.download !== undefined) {
      queryParameters["_download"] = requestParameters.download;
    }

    if (requestParameters.version !== undefined) {
      queryParameters["_version"] = requestParameters.version;
    }

    if (requestParameters.artifact !== undefined) {
      queryParameters["_artifact"] = requestParameters.artifact;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey("Authorization")}`; // authorization-header authentication
    }

    const response = await this.request(
      {
        path: `/{accountId}/{transformation}/{filePath}`
          .replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters.accountId)))
          .replace(`{${"filePath"}}`, encodeURIComponent(String(requestParameters.filePath)))
          .replace(`{${"transformation"}}`, encodeURIComponent(String(requestParameters.transformation))),
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      },
      initOverrides
    );

    return new runtime.BlobApiResponse(response);
  }

  /**
   * To process files: replace \"raw\" in your file URLs with a transformation, e.g. \"thumbnail\".  To manage your transformations: https://upload.io/dashboard/transformations  Authorization is only required when the file is private — public files can be transformed via the URL in any browser.
   */
  async processFile(
    requestParameters: ProcessFileRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Blob> {
    const response = await this.processFileRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
