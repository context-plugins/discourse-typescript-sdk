import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  invitesCreateMultipleJsonRequestSchema,
  type InvitesCreateMultipleJsonRequest,
} from "../models/invites-create-multiple-json-request.js";
import {
  invitesCreateMultipleJsonResponseSchema,
  type InvitesCreateMultipleJsonResponse,
} from "../models/invites-create-multiple-json-response.js";
import { invitesJsonRequestSchema, type InvitesJsonRequest } from "../models/invites-json-request.js";
import { invitesJsonResponseSchema, type InvitesJsonResponse } from "../models/invites-json-response.js";
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
import type { Servers } from "../servers.js";

export class Invites {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  createInvite(
    request: Invites.CreateInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<InvitesJsonResponse, ResponseError> {
    return this.#rawClient.execute<InvitesJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/invites.json"),
        auth: noneAuth,
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => invitesJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: invitesJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createMultipleInvites(
    request: Invites.CreateMultipleInvitesRequest,
    options?: RequestOptions,
  ): ApiPromise<InvitesCreateMultipleJsonResponse, ResponseError> {
    return this.#rawClient.execute<InvitesCreateMultipleJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/invites/create-multiple.json"),
        auth: noneAuth,
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => invitesCreateMultipleJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: invitesCreateMultipleJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  inviteGroupToTopic(
    request: Invites.InviteGroupToTopicRequest,
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
    request: Invites.InviteToTopicRequest,
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
}

export namespace Invites {
  export type CreateInviteRequest = {
    apiKey: string;
    apiUsername: string;
    body?: InvitesJsonRequest;
  };

  export type CreateMultipleInvitesRequest = {
    apiKey: string;
    apiUsername: string;
    body?: InvitesCreateMultipleJsonRequest;
  };

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
}
