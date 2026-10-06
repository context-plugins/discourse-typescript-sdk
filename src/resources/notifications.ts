import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Get the notifications that belong to the current user
   *
   * @returns notifications
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getNotifications(options?: RequestOptions): ApiPromise<NotificationsJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/notifications.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: notificationsJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Mark notifications as read
   *
   * @returns notifications marked read
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  markNotificationsAsRead(
    request: Notifications.MarkNotificationsAsReadRequest,
    options?: RequestOptions,
  ): ApiPromise<NotificationsMarkReadJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/notifications/mark-read.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => notificationsMarkReadJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: notificationsMarkReadJsonResponseSchema },
        errorFactory: ApiError,
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
