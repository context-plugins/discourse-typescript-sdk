import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createBackup(
    request: Backups.CreateBackupRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminBackupsJsonResponse1, ResponseError> {
    return this.#rawClient.execute<AdminBackupsJsonResponse1, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/admin/backups.json"),
        auth: noneAuth,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adminBackupsJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: adminBackupsJsonResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  downloadBackup(
    request: Backups.DownloadBackupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/admin/backups/{filename}"),
        auth: noneAuth,
        pathParams: [{ name: "filename", value: request.filename, schema: s.string() }],
        query: [{ name: "token", value: request.token, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getBackups(options?: RequestOptions): ApiPromise<AdminBackupsJsonResponse[], ResponseError> {
    return this.#rawClient.execute<AdminBackupsJsonResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/admin/backups.json"),
        auth: noneAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => adminBackupsJsonResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  sendDownloadBackupEmail(
    request: Backups.SendDownloadBackupEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/admin/backups/{filename}"),
        auth: noneAuth,
        pathParams: [{ name: "filename", value: request.filename, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
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
