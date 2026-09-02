import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createTopicPostPm(
    request: Posts.CreateTopicPostPmRequest,
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

  deletePost(
    request: Posts.DeletePostRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/posts/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => postsJsonRequest2Schema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getPost(
    request: Posts.GetPostRequest,
    options?: RequestOptions,
  ): ApiPromise<PostsJsonResponse2, ResponseError> {
    return this.#rawClient.execute<PostsJsonResponse2, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/posts/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: postsJsonResponse2Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listPosts(
    request: Posts.ListPostsRequest,
    options?: RequestOptions,
  ): ApiPromise<PostsJsonResponse, ResponseError> {
    return this.#rawClient.execute<PostsJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/posts.json"),
        auth: noneAuth,
        query: [{ name: "before", value: request.before, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: postsJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  lockPost(
    request: Posts.LockPostRequest,
    options?: RequestOptions,
  ): ApiPromise<PostsLockedJsonResponse, ResponseError> {
    return this.#rawClient.execute<PostsLockedJsonResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/posts/{id}/locked.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => postsLockedJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: postsLockedJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  performPostAction(
    request: Posts.PerformPostActionRequest,
    options?: RequestOptions,
  ): ApiPromise<PostActionsJsonResponse, ResponseError> {
    return this.#rawClient.execute<PostActionsJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/post_actions.json"),
        auth: noneAuth,
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => postActionsJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: postActionsJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  postReplies(
    request: Posts.PostRepliesRequest,
    options?: RequestOptions,
  ): ApiPromise<PostsRepliesJsonResponse[], ResponseError> {
    return this.#rawClient.execute<PostsRepliesJsonResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/posts/{id}/replies.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => postsRepliesJsonResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updatePost(
    request: Posts.UpdatePostRequest,
    options?: RequestOptions,
  ): ApiPromise<PostsJsonResponse3, ResponseError> {
    return this.#rawClient.execute<PostsJsonResponse3, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/posts/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => postsJsonRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: postsJsonResponse3Schema },
        errorFactory: ResponseError,
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
