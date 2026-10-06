import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Create an invite
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInvite(
    request: Invites.CreateInviteRequest,
    options?: RequestOptions,
  ): ApiPromise<InvitesJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/invites.json"),
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
          schema: s.optional(s.lazy(() => invitesJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: invitesJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create multiple invites
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMultipleInvites(
    request: Invites.CreateMultipleInvitesRequest,
    options?: RequestOptions,
  ): ApiPromise<InvitesCreateMultipleJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/invites/create-multiple.json"),
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
          schema: s.optional(s.lazy(() => invitesCreateMultipleJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: invitesCreateMultipleJsonResponseSchema },
        errorFactory: ApiError,
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
    request: Invites.InviteGroupToTopicRequest,
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
    request: Invites.InviteToTopicRequest,
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
