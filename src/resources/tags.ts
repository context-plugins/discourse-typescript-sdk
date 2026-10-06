import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { tagGroupsJsonRequestSchema, type TagGroupsJsonRequest } from "../models/tag-groups-json-request.js";
import {
  tagGroupsJsonRequest1Schema,
  type TagGroupsJsonRequest1,
} from "../models/tag-groups-json-request1.js";
import {
  tagGroupsJsonResponseSchema,
  type TagGroupsJsonResponse,
} from "../models/tag-groups-json-response.js";
import {
  tagGroupsJsonResponse1Schema,
  type TagGroupsJsonResponse1,
} from "../models/tag-groups-json-response1.js";
import {
  tagGroupsJsonResponse2Schema,
  type TagGroupsJsonResponse2,
} from "../models/tag-groups-json-response2.js";
import {
  tagGroupsJsonResponse3Schema,
  type TagGroupsJsonResponse3,
} from "../models/tag-groups-json-response3.js";
import { tagJsonResponseSchema, type TagJsonResponse } from "../models/tag-json-response.js";
import { tagsJsonResponseSchema, type TagsJsonResponse } from "../models/tags-json-response.js";
import type { Servers } from "../servers.js";

export class Tags {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Creates a tag group
   *
   * @returns tag group created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTagGroup(
    request: Tags.CreateTagGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<TagGroupsJsonResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tag_groups.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tagGroupsJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tagGroupsJsonResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a specific tag
   *
   * @returns notifications
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTag(request: Tags.GetTagRequest, options?: RequestOptions): ApiPromise<TagJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tag/{name}.json"),
        auth: noneAuth,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a single tag group
   *
   * @returns notifications
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTagGroup(
    request: Tags.GetTagGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<TagGroupsJsonResponse2, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tag_groups/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagGroupsJsonResponse2Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a list of tag groups
   *
   * @returns tags
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTagGroups(options?: RequestOptions): ApiPromise<TagGroupsJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tag_groups.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagGroupsJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a list of tags
   *
   * @returns notifications
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTags(options?: RequestOptions): ApiPromise<TagsJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tags.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagsJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update tag group
   *
   * @returns Tag group updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTagGroup(
    request: Tags.UpdateTagGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<TagGroupsJsonResponse3, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/tag_groups/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tagGroupsJsonRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: tagGroupsJsonResponse3Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Tags {
  export type CreateTagGroupRequest = {
    body?: TagGroupsJsonRequest;
  };

  export type GetTagRequest = {
    name: string;
  };

  export type GetTagGroupRequest = {
    id: string;
  };

  export type UpdateTagGroupRequest = {
    id: string;
    body?: TagGroupsJsonRequest1;
  };
}
