import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  postActionsJsonRequestSchema,
  type PostActionsJsonRequest,
} from "../models/post-actions-json-request.js";
import {
  postActionsJsonResponseSchema,
  type PostActionsJsonResponse,
} from "../models/post-actions-json-response.js";
import { postsJsonRequestSchema, type PostsJsonRequest } from "../models/posts-json-request.js";
import { postsJsonRequest1Schema, type PostsJsonRequest1 } from "../models/posts-json-request1.js";
import { postsJsonRequest2Schema, type PostsJsonRequest2 } from "../models/posts-json-request2.js";
import { postsJsonResponseSchema, type PostsJsonResponse } from "../models/posts-json-response.js";
import { postsJsonResponse1Schema, type PostsJsonResponse1 } from "../models/posts-json-response1.js";
import { postsJsonResponse2Schema, type PostsJsonResponse2 } from "../models/posts-json-response2.js";
import { postsJsonResponse3Schema, type PostsJsonResponse3 } from "../models/posts-json-response3.js";
import {
  postsLockedJsonRequestSchema,
  type PostsLockedJsonRequest,
} from "../models/posts-locked-json-request.js";
import {
  postsLockedJsonResponseSchema,
  type PostsLockedJsonResponse,
} from "../models/posts-locked-json-response.js";
import {
  postsRepliesJsonResponseSchema,
  type PostsRepliesJsonResponse,
} from "../models/posts-replies-json-response.js";
import type { Servers } from "../servers.js";

export class Posts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
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
    request: Posts.CreateTopicPostPmRequest,
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
   * delete a single post
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePost(request: Posts.DeletePostRequest, options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/posts/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => postsJsonRequest2Schema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a single post
   *
   * @remarks
   * This endpoint can be used to get the number of likes on a post using the `actions_summary`
   * property in the response. `actions_summary` responses with the id of `2` signify a `like`. If
   * there are no `actions_summary` items with the id of `2`, that means there are 0 likes. Other
   * ids likely refer to various different flag types.
   *
   * @returns single reviewable post
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPost(request: Posts.GetPostRequest, options?: RequestOptions): ApiPromise<PostsJsonResponse2, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/posts/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: postsJsonResponse2Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List latest posts across topics
   *
   * @returns latest posts
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPosts(
    request: Posts.ListPostsRequest,
    options?: RequestOptions,
  ): ApiPromise<PostsJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/posts.json"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "before", value: request.before, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: postsJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Lock a post from being edited
   *
   * @returns post updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  lockPost(
    request: Posts.LockPostRequest,
    options?: RequestOptions,
  ): ApiPromise<PostsLockedJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/posts/{id}/locked.json"),
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
          schema: s.optional(s.lazy(() => postsLockedJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: postsLockedJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Like a post and other actions
   *
   * @returns post updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  performPostAction(
    request: Posts.PerformPostActionRequest,
    options?: RequestOptions,
  ): ApiPromise<PostActionsJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/post_actions.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => postActionsJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: postActionsJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List replies to a post
   *
   * @returns post replies
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postReplies(
    request: Posts.PostRepliesRequest,
    options?: RequestOptions,
  ): ApiPromise<PostsRepliesJsonResponse[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/posts/{id}/replies.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => postsRepliesJsonResponseSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a single post
   *
   * @returns post updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePost(
    request: Posts.UpdatePostRequest,
    options?: RequestOptions,
  ): ApiPromise<PostsJsonResponse3, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/posts/{id}.json"),
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
          schema: s.optional(s.lazy(() => postsJsonRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: postsJsonResponse3Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Posts {
  export type CreateTopicPostPmRequest = {
    apiKey: string;
    apiUsername: string;
    body?: PostsJsonRequest;
  };

  export type DeletePostRequest = {
    id: number;
    apiKey: string;
    apiUsername: string;
    body?: PostsJsonRequest2;
  };

  export type GetPostRequest = {
    id: string;
  };

  export type ListPostsRequest = {
    /** Load posts with an id lower than this value. Useful for pagination. */
    before?: number;
  };

  export type LockPostRequest = {
    id: string;
    apiKey: string;
    apiUsername: string;
    body?: PostsLockedJsonRequest;
  };

  export type PerformPostActionRequest = {
    apiKey: string;
    apiUsername: string;
    body?: PostActionsJsonRequest;
  };

  export type PostRepliesRequest = {
    id: string;
  };

  export type UpdatePostRequest = {
    id: string;
    apiKey: string;
    apiUsername: string;
    body?: PostsJsonRequest1;
  };
}
