import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  notificationsJsonResponseSchema,
  type NotificationsJsonResponse,
} from "../models/notifications-json-response.js";
import {
  notificationsMarkReadJsonRequestSchema,
  type NotificationsMarkReadJsonRequest,
} from "../models/notifications-mark-read-json-request.js";
import {
  notificationsMarkReadJsonResponseSchema,
  type NotificationsMarkReadJsonResponse,
} from "../models/notifications-mark-read-json-response.js";
import type { Servers } from "../servers.js";

export class Notifications {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  getNotifications(options?: RequestOptions): ApiPromise<NotificationsJsonResponse, ResponseError> {
    return this.#rawClient.execute<NotificationsJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/notifications.json"),
        auth: noneAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: notificationsJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  markNotificationsAsRead(
    request: Notifications.MarkNotificationsAsReadRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationsMarkReadJsonResponse, ResponseError> {
    return this.#rawClient.execute<NotificationsMarkReadJsonResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/notifications/mark-read.json"),
        auth: noneAuth,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => notificationsMarkReadJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: notificationsMarkReadJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Notifications {
  export type MarkNotificationsAsReadRequest = {
    body?: NotificationsMarkReadJsonRequest;
  };
}
