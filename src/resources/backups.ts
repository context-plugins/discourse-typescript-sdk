import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  adminBackupsJsonRequestSchema,
  type AdminBackupsJsonRequest,
} from "../models/admin-backups-json-request.js";
import {
  adminBackupsJsonResponseSchema,
  type AdminBackupsJsonResponse,
} from "../models/admin-backups-json-response.js";
import {
  adminBackupsJsonResponse1Schema,
  type AdminBackupsJsonResponse1,
} from "../models/admin-backups-json-response1.js";
import type { Servers } from "../servers.js";

export class Backups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create backup
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBackup(
    request: Backups.CreateBackupRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminBackupsJsonResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin/backups.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adminBackupsJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: adminBackupsJsonResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Download backup
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadBackup(
    request: Backups.DownloadBackupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin/backups/{filename}"),
        auth: noneAuth,
        pathParams: [{ name: "filename", value: request.filename, schema: s.string() }],
        query: [{ name: "token", value: request.token, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List backups
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBackups(options?: RequestOptions): ApiPromise<AdminBackupsJsonResponse[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin/backups.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => adminBackupsJsonResponseSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Send download backup email
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendDownloadBackupEmail(
    request: Backups.SendDownloadBackupEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/admin/backups/{filename}"),
        auth: noneAuth,
        pathParams: [{ name: "filename", value: request.filename, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Backups {
  export type CreateBackupRequest = {
    body?: AdminBackupsJsonRequest;
  };

  export type DownloadBackupRequest = {
    filename: string;
    token: string;
  };

  export type SendDownloadBackupEmailRequest = {
    filename: string;
  };
}
