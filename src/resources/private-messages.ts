import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createTopicPostPm(
    request: PrivateMessages.CreateTopicPostPmRequest,
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

  getUserSentPrivateMessages(
    request: PrivateMessages.GetUserSentPrivateMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<TopicsPrivateMessagesSentJsonResponse, ResponseError> {
    return this.#rawClient.execute<TopicsPrivateMessagesSentJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/topics/private-messages-sent/{username}.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: topicsPrivateMessagesSentJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listUserPrivateMessages(
    request: PrivateMessages.ListUserPrivateMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<TopicsPrivateMessagesJsonResponse, ResponseError> {
    return this.#rawClient.execute<TopicsPrivateMessagesJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/topics/private-messages/{username}.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: topicsPrivateMessagesJsonResponseSchema },
        errorFactory: ResponseError,
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
