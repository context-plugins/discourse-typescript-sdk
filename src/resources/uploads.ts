import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  uploadsAbortMultipartJsonRequestSchema,
  type UploadsAbortMultipartJsonRequest,
} from "../models/uploads-abort-multipart-json-request.js";
import {
  uploadsAbortMultipartJsonResponseSchema,
  type UploadsAbortMultipartJsonResponse,
} from "../models/uploads-abort-multipart-json-response.js";
import {
  uploadsBatchPresignMultipartPartsJsonRequestSchema,
  type UploadsBatchPresignMultipartPartsJsonRequest,
} from "../models/uploads-batch-presign-multipart-parts-json-request.js";
import {
  uploadsBatchPresignMultipartPartsJsonResponseSchema,
  type UploadsBatchPresignMultipartPartsJsonResponse,
} from "../models/uploads-batch-presign-multipart-parts-json-response.js";
import {
  uploadsCompleteExternalUploadJsonRequestSchema,
  type UploadsCompleteExternalUploadJsonRequest,
} from "../models/uploads-complete-external-upload-json-request.js";
import {
  uploadsCompleteExternalUploadJsonResponseSchema,
  type UploadsCompleteExternalUploadJsonResponse,
} from "../models/uploads-complete-external-upload-json-response.js";
import {
  uploadsCompleteMultipartJsonRequestSchema,
  type UploadsCompleteMultipartJsonRequest,
} from "../models/uploads-complete-multipart-json-request.js";
import {
  uploadsCompleteMultipartJsonResponseSchema,
  type UploadsCompleteMultipartJsonResponse,
} from "../models/uploads-complete-multipart-json-response.js";
import {
  uploadsCreateMultipartJsonRequestSchema,
  type UploadsCreateMultipartJsonRequest,
} from "../models/uploads-create-multipart-json-request.js";
import {
  uploadsCreateMultipartJsonResponseSchema,
  type UploadsCreateMultipartJsonResponse,
} from "../models/uploads-create-multipart-json-response.js";
import {
  uploadsGeneratePresignedPutJsonRequestSchema,
  type UploadsGeneratePresignedPutJsonRequest,
} from "../models/uploads-generate-presigned-put-json-request.js";
import {
  uploadsGeneratePresignedPutJsonResponseSchema,
  type UploadsGeneratePresignedPutJsonResponse,
} from "../models/uploads-generate-presigned-put-json-response.js";
import { uploadsJsonResponseSchema, type UploadsJsonResponse } from "../models/uploads-json-response.js";
import type { Servers } from "../servers.js";

export class Uploads {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  abortMultipart(
    request: Uploads.AbortMultipartRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadsAbortMultipartJsonResponse, ResponseError> {
    return this.#rawClient.execute<UploadsAbortMultipartJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/uploads/abort-multipart.json"),
        auth: noneAuth,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => uploadsAbortMultipartJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: uploadsAbortMultipartJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  batchPresignMultipartParts(
    request: Uploads.BatchPresignMultipartPartsRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadsBatchPresignMultipartPartsJsonResponse, ResponseError> {
    return this.#rawClient.execute<UploadsBatchPresignMultipartPartsJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/uploads/batch-presign-multipart-parts.json"),
        auth: noneAuth,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => uploadsBatchPresignMultipartPartsJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: uploadsBatchPresignMultipartPartsJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  completeExternalUpload(
    request: Uploads.CompleteExternalUploadRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadsCompleteExternalUploadJsonResponse, ResponseError> {
    return this.#rawClient.execute<UploadsCompleteExternalUploadJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/uploads/complete-external-upload.json"),
        auth: noneAuth,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => uploadsCompleteExternalUploadJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: uploadsCompleteExternalUploadJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  completeMultipart(
    request: Uploads.CompleteMultipartRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadsCompleteMultipartJsonResponse, ResponseError> {
    return this.#rawClient.execute<UploadsCompleteMultipartJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/uploads/complete-multipart.json"),
        auth: noneAuth,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => uploadsCompleteMultipartJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: uploadsCompleteMultipartJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createMultipartUpload(
    request: Uploads.CreateMultipartUploadRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadsCreateMultipartJsonResponse, ResponseError> {
    return this.#rawClient.execute<UploadsCreateMultipartJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/uploads/create-multipart.json"),
        auth: noneAuth,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => uploadsCreateMultipartJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: uploadsCreateMultipartJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createUpload(options?: RequestOptions): ApiPromise<UploadsJsonResponse, ResponseError> {
    return this.#rawClient.execute<UploadsJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/uploads.json"),
        auth: noneAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uploadsJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  generatePresignedPut(
    request: Uploads.GeneratePresignedPutRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadsGeneratePresignedPutJsonResponse, ResponseError> {
    return this.#rawClient.execute<UploadsGeneratePresignedPutJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/uploads/generate-presigned-put.json"),
        auth: noneAuth,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => uploadsGeneratePresignedPutJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: uploadsGeneratePresignedPutJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Uploads {
  export type AbortMultipartRequest = {
    body?: UploadsAbortMultipartJsonRequest;
  };

  export type BatchPresignMultipartPartsRequest = {
    body?: UploadsBatchPresignMultipartPartsJsonRequest;
  };

  export type CompleteExternalUploadRequest = {
    body?: UploadsCompleteExternalUploadJsonRequest;
  };

  export type CompleteMultipartRequest = {
    body?: UploadsCompleteMultipartJsonRequest;
  };

  export type CreateMultipartUploadRequest = {
    body?: UploadsCreateMultipartJsonRequest;
  };

  export type GeneratePresignedPutRequest = {
    body?: UploadsGeneratePresignedPutJsonRequest;
  };
}
