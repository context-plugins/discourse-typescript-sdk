import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Bookmark topic
   *
   * @returns topic updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bookmarkTopic(
    request: Topics.BookmarkTopicRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/t/{id}/bookmark.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
   * Creates a new topic, a new post, or a private message
   *
   * @returns post created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTopicPostPm(
    request: Topics.CreateTopicPostPmRequest,
    options?: RequestOptions,
  ): ApiPromise<PostsJsonResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/posts.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => postsJsonRequestSchema)) },
      },
      {
        success: { kind: "json", schema: postsJsonResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create topic timer
   *
   * @returns topic updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTopicTimer(
    request: Topics.CreateTopicTimerRequest,
    options?: RequestOptions,
  ): ApiPromise<TTimerJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/t/{id}/timer.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tTimerJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tTimerJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get specific posts from a topic
   *
   * @returns specific posts
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSpecificPostsFromTopic(
    request: Topics.GetSpecificPostsFromTopicRequest,
    options?: RequestOptions,
  ): ApiPromise<TPostsJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/t/{id}/posts.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tPostsJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a single topic
   *
   * @returns specific posts
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTopic(request: Topics.GetTopicRequest, options?: RequestOptions): ApiPromise<TJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/t/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get topic by external_id
   *
   * @throws {@link Topics.GetTopicByExternalIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTopicByExternalId(
    request: Topics.GetTopicByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Topics.GetTopicByExternalIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/t/external_id/{external_id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "external_id", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Topics.GetTopicByExternalIdError,
      },
      options,
    );
  }

  /**
   * Invite group to topic
   *
   * @returns invites to a PM
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  inviteGroupToTopic(
    request: Topics.InviteGroupToTopicRequest,
    options?: RequestOptions,
  ): ApiPromise<TInviteGroupJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/t/{id}/invite-group.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tInviteGroupJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tInviteGroupJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Invite to topic
   *
   * @returns topic updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  inviteToTopic(
    request: Topics.InviteToTopicRequest,
    options?: RequestOptions,
  ): ApiPromise<TInviteJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/t/{id}/invite.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tInviteJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tInviteJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get the latest topics
   *
   * @returns topic updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLatestTopics(
    request: Topics.ListLatestTopicsRequest,
    options?: RequestOptions,
  ): ApiPromise<LatestJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/latest.json"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "order", value: request.order, schema: s.optional(s.string()) },
          { name: "ascending", value: request.ascending, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: latestJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get the top topics filtered by period
   *
   * @returns response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTopTopics(
    request: Topics.ListTopTopicsRequest,
    options?: RequestOptions,
  ): ApiPromise<TopJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/top.json"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "period", value: request.period, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: topJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove a topic
   *
   * @returns specific posts
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeTopic(request: Topics.RemoveTopicRequest, options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/t/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
   * Set notification level
   *
   * @returns topic updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setNotificationLevel(
    request: Topics.SetNotificationLevelRequest,
    options?: RequestOptions,
  ): ApiPromise<TNotificationsJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/t/{id}/notifications.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tNotificationsJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tNotificationsJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a topic
   *
   * @returns topic updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTopic(
    request: Topics.UpdateTopicRequest,
    options?: RequestOptions,
  ): ApiPromise<TJsonResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/t/-/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => tJsonRequestSchema)) },
      },
      {
        success: { kind: "json", schema: tJsonResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update the status of a topic
   *
   * @returns topic updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTopicStatus(
    request: Topics.UpdateTopicStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<TStatusJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/t/{id}/status.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tStatusJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tStatusJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update topic timestamp
   *
   * @returns topic updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTopicTimestamp(
    request: Topics.UpdateTopicTimestampRequest,
    options?: RequestOptions,
  ): ApiPromise<TChangeTimestampJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/t/{id}/change-timestamp.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tChangeTimestampJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tChangeTimestampJsonResponseSchema },
        errorFactory: ApiError,
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

  export class GetTopicByExternalIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error301", undefined>>;

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
    /**
     * Enum: `default`, `created`, `activity`, `views`, `posts`, `category`, `likes`, `op_likes`,
     * `posters`
     */
    order?: string;
    /** Defaults to `desc`, add `ascending=true` to sort asc */
    ascending?: string;
    /** Maximum number of topics returned, between 1-100 */
    perPage?: number;
    apiKey: string;
    apiUsername: string;
  };

  export type ListTopTopicsRequest = {
    /** Enum: `all`, `yearly`, `quarterly`, `monthly`, `weekly`, `daily` */
    period?: string;
    /** Maximum number of topics returned, between 1-100 */
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
