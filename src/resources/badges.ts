import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  adminBadgesJsonRequestSchema,
  type AdminBadgesJsonRequest,
} from "../models/admin-badges-json-request.js";
import {
  adminBadgesJsonRequest1Schema,
  type AdminBadgesJsonRequest1,
} from "../models/admin-badges-json-request1.js";
import {
  adminBadgesJsonResponseSchema,
  type AdminBadgesJsonResponse,
} from "../models/admin-badges-json-response.js";
import {
  adminBadgesJsonResponse1Schema,
  type AdminBadgesJsonResponse1,
} from "../models/admin-badges-json-response1.js";
import {
  adminBadgesJsonResponse2Schema,
  type AdminBadgesJsonResponse2,
} from "../models/admin-badges-json-response2.js";
import {
  userBadgesJsonResponseSchema,
  type UserBadgesJsonResponse,
} from "../models/user-badges-json-response.js";
import type { Servers } from "../servers.js";

export class Badges {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * List badges
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminListBadges(options?: RequestOptions): ApiPromise<AdminBadgesJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin/badges.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminBadgesJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create badge
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBadge(
    request: Badges.CreateBadgeRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminBadgesJsonResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin/badges.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adminBadgesJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: adminBadgesJsonResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete badge
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBadge(request: Badges.DeleteBadgeRequest, options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/admin/badges/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
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

  /**
   * List badges for a user
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUserBadges(
    request: Badges.ListUserBadgesRequest,
    options?: RequestOptions,
  ): ApiPromise<UserBadgesJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/user-badges/{username}.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userBadgesJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update badge
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBadge(
    request: Badges.UpdateBadgeRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminBadgesJsonResponse2, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/admin/badges/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adminBadgesJsonRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: adminBadgesJsonResponse2Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Badges {
  export type CreateBadgeRequest = {
    body?: AdminBadgesJsonRequest;
  };

  export type DeleteBadgeRequest = {
    id: number;
  };

  export type ListUserBadgesRequest = {
    username: string;
  };

  export type UpdateBadgeRequest = {
    id: number;
    body?: AdminBadgesJsonRequest1;
  };
}
