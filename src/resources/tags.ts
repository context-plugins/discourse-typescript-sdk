import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createTagGroup(
    request: Tags.CreateTagGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<TagGroupsJsonResponse1, ResponseError> {
    return this.#rawClient.execute<TagGroupsJsonResponse1, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/tag_groups.json"),
        auth: noneAuth,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tagGroupsJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: tagGroupsJsonResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getTag(request: Tags.GetTagRequest, options?: RequestOptions): ApiPromise<TagJsonResponse, ResponseError> {
    return this.#rawClient.execute<TagJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/tag/{name}.json"),
        auth: noneAuth,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getTagGroup(
    request: Tags.GetTagGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<TagGroupsJsonResponse2, ResponseError> {
    return this.#rawClient.execute<TagGroupsJsonResponse2, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/tag_groups/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagGroupsJsonResponse2Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTagGroups(options?: RequestOptions): ApiPromise<TagGroupsJsonResponse, ResponseError> {
    return this.#rawClient.execute<TagGroupsJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/tag_groups.json"),
        auth: noneAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagGroupsJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTags(options?: RequestOptions): ApiPromise<TagsJsonResponse, ResponseError> {
    return this.#rawClient.execute<TagsJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/tags.json"),
        auth: noneAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagsJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateTagGroup(
    request: Tags.UpdateTagGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<TagGroupsJsonResponse3, ResponseError> {
    return this.#rawClient.execute<TagGroupsJsonResponse3, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/tag_groups/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => tagGroupsJsonRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: tagGroupsJsonResponse3Schema },
        errorFactory: ResponseError,
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
