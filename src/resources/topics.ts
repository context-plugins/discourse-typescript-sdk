import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { latestJsonResponseSchema, type LatestJsonResponse } from "../models/latest-json-response.js";
import { postsJsonRequestSchema, type PostsJsonRequest } from "../models/posts-json-request.js";
import { postsJsonResponse1Schema, type PostsJsonResponse1 } from "../models/posts-json-response1.js";
import {
  tChangeTimestampJsonRequestSchema,
  type TChangeTimestampJsonRequest,
} from "../models/tchange-timestamp-json-request.js";
import {
  tChangeTimestampJsonResponseSchema,
  type TChangeTimestampJsonResponse,
} from "../models/tchange-timestamp-json-response.js";
import {
  tInviteGroupJsonRequestSchema,
  type TInviteGroupJsonRequest,
} from "../models/tinvite-group-json-request.js";
import {
  tInviteGroupJsonResponseSchema,
  type TInviteGroupJsonResponse,
} from "../models/tinvite-group-json-response.js";
import { tInviteJsonRequestSchema, type TInviteJsonRequest } from "../models/tinvite-json-request.js";
import { tInviteJsonResponseSchema, type TInviteJsonResponse } from "../models/tinvite-json-response.js";
import { tJsonRequestSchema, type TJsonRequest } from "../models/tjson-request.js";
import { tJsonResponseSchema, type TJsonResponse } from "../models/tjson-response.js";
import { tJsonResponse1Schema, type TJsonResponse1 } from "../models/tjson-response1.js";
import {
  tNotificationsJsonRequestSchema,
  type TNotificationsJsonRequest,
} from "../models/tnotifications-json-request.js";
import {
  tNotificationsJsonResponseSchema,
  type TNotificationsJsonResponse,
} from "../models/tnotifications-json-response.js";
import { topJsonResponseSchema, type TopJsonResponse } from "../models/top-json-response.js";
import { tPostsJsonResponseSchema, type TPostsJsonResponse } from "../models/tposts-json-response.js";
import { tStatusJsonRequestSchema, type TStatusJsonRequest } from "../models/tstatus-json-request.js";
import { tStatusJsonResponseSchema, type TStatusJsonResponse } from "../models/tstatus-json-response.js";
import { tTimerJsonRequestSchema, type TTimerJsonRequest } from "../models/ttimer-json-request.js";
import { tTimerJsonResponseSchema, type TTimerJsonResponse } from "../models/ttimer-json-response.js";
import type { Servers } from "../servers.js";

export class Topics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  bookmarkTopic(
    request: Topics.BookmarkTopicRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/t/{id}/bookmark.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createTopicPostPm(
    request: Topics.CreateTopicPostPmRequest,
    options?: RequestOptions,
  ): ApiPromise<PostsJsonResponse1, ResponseError> {
    return this.#rawClient.execute<PostsJsonResponse1, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/posts.json"),
        auth: noneAuth,
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => postsJsonRequestSchema)) },
      },
      {
        success: { kind: "json", schema: postsJsonResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createTopicTimer(
    request: Topics.CreateTopicTimerRequest,
    options?: RequestOptions,
  ): ApiPromise<TTimerJsonResponse, ResponseError> {
    return this.#rawClient.execute<TTimerJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/t/{id}/timer.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tTimerJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tTimerJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getSpecificPostsFromTopic(
    request: Topics.GetSpecificPostsFromTopicRequest,
    options?: RequestOptions,
  ): ApiPromise<TPostsJsonResponse, ResponseError> {
    return this.#rawClient.execute<TPostsJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/t/{id}/posts.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tPostsJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getTopic(
    request: Topics.GetTopicRequest,
    options?: RequestOptions,
  ): ApiPromise<TJsonResponse, ResponseError> {
    return this.#rawClient.execute<TJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/t/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getTopicByExternalId(
    request: Topics.GetTopicByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Topics.GetTopicByExternalIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/t/external_id/{external_id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "external_id", value: request.externalId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Topics.GetTopicByExternalIdError,
      },
      options,
    );
  }

  inviteGroupToTopic(
    request: Topics.InviteGroupToTopicRequest,
    options?: RequestOptions,
  ): ApiPromise<TInviteGroupJsonResponse, ResponseError> {
    return this.#rawClient.execute<TInviteGroupJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/t/{id}/invite-group.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tInviteGroupJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tInviteGroupJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  inviteToTopic(
    request: Topics.InviteToTopicRequest,
    options?: RequestOptions,
  ): ApiPromise<TInviteJsonResponse, ResponseError> {
    return this.#rawClient.execute<TInviteJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/t/{id}/invite.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tInviteJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tInviteJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listLatestTopics(
    request: Topics.ListLatestTopicsRequest,
    options?: RequestOptions,
  ): ApiPromise<LatestJsonResponse, ResponseError> {
    return this.#rawClient.execute<LatestJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/latest.json"),
        auth: noneAuth,
        query: [
          { name: "order", value: request.order, schema: s.optional(s.string()) },
          { name: "ascending", value: request.ascending, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: latestJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTopTopics(
    request: Topics.ListTopTopicsRequest,
    options?: RequestOptions,
  ): ApiPromise<TopJsonResponse, ResponseError> {
    return this.#rawClient.execute<TopJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/top.json"),
        auth: noneAuth,
        query: [
          { name: "period", value: request.period, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.number()) },
        ],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: topJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  removeTopic(
    request: Topics.RemoveTopicRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/t/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  setNotificationLevel(
    request: Topics.SetNotificationLevelRequest,
    options?: RequestOptions,
  ): ApiPromise<TNotificationsJsonResponse, ResponseError> {
    return this.#rawClient.execute<TNotificationsJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/t/{id}/notifications.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tNotificationsJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tNotificationsJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateTopic(
    request: Topics.UpdateTopicRequest,
    options?: RequestOptions,
  ): ApiPromise<TJsonResponse1, ResponseError> {
    return this.#rawClient.execute<TJsonResponse1, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/t/-/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => tJsonRequestSchema)) },
      },
      {
        success: { kind: "json", schema: tJsonResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateTopicStatus(
    request: Topics.UpdateTopicStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<TStatusJsonResponse, ResponseError> {
    return this.#rawClient.execute<TStatusJsonResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/t/{id}/status.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tStatusJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tStatusJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateTopicTimestamp(
    request: Topics.UpdateTopicTimestampRequest,
    options?: RequestOptions,
  ): ApiPromise<TChangeTimestampJsonResponse, ResponseError> {
    return this.#rawClient.execute<TChangeTimestampJsonResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/t/{id}/change-timestamp.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tChangeTimestampJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tChangeTimestampJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Topics {
  export type BookmarkTopicRequest = {
    id: string;
    apiKey: string;
    apiUsername: string;
  };

  export type CreateTopicPostPmRequest = {
    apiKey: string;
    apiUsername: string;
    body?: PostsJsonRequest;
  };

  export type CreateTopicTimerRequest = {
    id: string;
    apiKey: string;
    apiUsername: string;
    body?: TTimerJsonRequest;
  };

  export type GetSpecificPostsFromTopicRequest = {
    id: string;
    apiKey: string;
    apiUsername: string;
  };

  export type GetTopicRequest = {
    id: string;
    apiKey: string;
    apiUsername: string;
  };

  export type GetTopicByExternalIdRequest = {
    externalId: string;
  };

  export class GetTopicByExternalIdError extends ResponseError<Declared<"error301", undefined>> {
    static readonly errors: ErrorDecoders<GetTopicByExternalIdError> = [
      { on: 301, kind: "error301", decode: { kind: "empty" } },
    ];
  }

  export type InviteGroupToTopicRequest = {
    id: string;
    apiKey: string;
    apiUsername: string;
    body?: TInviteGroupJsonRequest;
  };

  export type InviteToTopicRequest = {
    id: string;
    apiKey: string;
    apiUsername: string;
    body?: TInviteJsonRequest;
  };

  export type ListLatestTopicsRequest = {
    order?: string;
    ascending?: string;
    perPage?: number;
    apiKey: string;
    apiUsername: string;
  };

  export type ListTopTopicsRequest = {
    period?: string;
    perPage?: number;
    apiKey: string;
    apiUsername: string;
  };

  export type RemoveTopicRequest = {
    id: string;
    apiKey: string;
    apiUsername: string;
  };

  export type SetNotificationLevelRequest = {
    id: string;
    apiKey: string;
    apiUsername: string;
    body?: TNotificationsJsonRequest;
  };

  export type UpdateTopicRequest = {
    id: string;
    apiKey: string;
    apiUsername: string;
    body?: TJsonRequest;
  };

  export type UpdateTopicStatusRequest = {
    id: string;
    apiKey: string;
    apiUsername: string;
    body?: TStatusJsonRequest;
  };

  export type UpdateTopicTimestampRequest = {
    id: string;
    apiKey: string;
    apiUsername: string;
    body?: TChangeTimestampJsonRequest;
  };
}
