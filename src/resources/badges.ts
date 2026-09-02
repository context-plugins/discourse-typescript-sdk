import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  adminListBadges(options?: RequestOptions): ApiPromise<AdminBadgesJsonResponse, ResponseError> {
    return this.#rawClient.execute<AdminBadgesJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/admin/badges.json"),
        auth: noneAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminBadgesJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createBadge(
    request: Badges.CreateBadgeRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminBadgesJsonResponse1, ResponseError> {
    return this.#rawClient.execute<AdminBadgesJsonResponse1, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/admin/badges.json"),
        auth: noneAuth,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adminBadgesJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: adminBadgesJsonResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteBadge(
    request: Badges.DeleteBadgeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/admin/badges/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listUserBadges(
    request: Badges.ListUserBadgesRequest,
    options?: RequestOptions,
  ): ApiPromise<UserBadgesJsonResponse, ResponseError> {
    return this.#rawClient.execute<UserBadgesJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/user-badges/{username}.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userBadgesJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateBadge(
    request: Badges.UpdateBadgeRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminBadgesJsonResponse2, ResponseError> {
    return this.#rawClient.execute<AdminBadgesJsonResponse2, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/admin/badges/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adminBadgesJsonRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: adminBadgesJsonResponse2Schema },
        errorFactory: ResponseError,
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
