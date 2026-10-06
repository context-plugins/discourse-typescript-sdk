import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { postsJsonRequestSchema, type PostsJsonRequest } from "../models/posts-json-request.js";
import { postsJsonResponse1Schema, type PostsJsonResponse1 } from "../models/posts-json-response1.js";
import {
  topicsPrivateMessagesJsonResponseSchema,
  type TopicsPrivateMessagesJsonResponse,
} from "../models/topics-private-messages-json-response.js";
import {
  topicsPrivateMessagesSentJsonResponseSchema,
  type TopicsPrivateMessagesSentJsonResponse,
} from "../models/topics-private-messages-sent-json-response.js";
import type { Servers } from "../servers.js";

export class PrivateMessages {
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
    request: PrivateMessages.CreateTopicPostPmRequest,
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
   * Get a list of private messages sent for a user
   *
   * @returns private messages
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserSentPrivateMessages(
    request: PrivateMessages.GetUserSentPrivateMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<TopicsPrivateMessagesSentJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/topics/private-messages-sent/{username}.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: topicsPrivateMessagesSentJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a list of private messages for a user
   *
   * @returns private messages
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUserPrivateMessages(
    request: PrivateMessages.ListUserPrivateMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<TopicsPrivateMessagesJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/topics/private-messages/{username}.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: topicsPrivateMessagesJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace PrivateMessages {
  export type CreateTopicPostPmRequest = {
    apiKey: string;
    apiUsername: string;
    body?: PostsJsonRequest;
  };

  export type GetUserSentPrivateMessagesRequest = {
    username: string;
  };

  export type ListUserPrivateMessagesRequest = {
    username: string;
  };
}
