import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  adminGroupsJsonRequestSchema,
  type AdminGroupsJsonRequest,
} from "../models/admin-groups-json-request.js";
import {
  adminGroupsJsonResponseSchema,
  type AdminGroupsJsonResponse,
} from "../models/admin-groups-json-response.js";
import {
  adminGroupsJsonResponse1Schema,
  type AdminGroupsJsonResponse1,
} from "../models/admin-groups-json-response1.js";
import {
  groupsByIdJsonResponseSchema,
  type GroupsByIdJsonResponse,
} from "../models/groups-by-id-json-response.js";
import { groupsJsonRequestSchema, type GroupsJsonRequest } from "../models/groups-json-request.js";
import { groupsJsonResponseSchema, type GroupsJsonResponse } from "../models/groups-json-response.js";
import { groupsJsonResponse1Schema, type GroupsJsonResponse1 } from "../models/groups-json-response1.js";
import { groupsJsonResponse2Schema, type GroupsJsonResponse2 } from "../models/groups-json-response2.js";
import {
  groupsMembersJsonRequestSchema,
  type GroupsMembersJsonRequest,
} from "../models/groups-members-json-request.js";
import {
  groupsMembersJsonResponseSchema,
  type GroupsMembersJsonResponse,
} from "../models/groups-members-json-response.js";
import {
  groupsMembersJsonResponse1Schema,
  type GroupsMembersJsonResponse1,
} from "../models/groups-members-json-response1.js";
import {
  groupsMembersJsonResponse2Schema,
  type GroupsMembersJsonResponse2,
} from "../models/groups-members-json-response2.js";
import type { Servers } from "../servers.js";

export class Groups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Add group members
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addGroupMembers(
    request: Groups.AddGroupMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupsMembersJsonResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/groups/{id}/members.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => groupsMembersJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: groupsMembersJsonResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a group
   *
   * @returns group created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGroup(
    request: Groups.CreateGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminGroupsJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin/groups.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adminGroupsJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: adminGroupsJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a group
   *
   * @returns response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteGroup(
    request: Groups.DeleteGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminGroupsJsonResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/admin/groups/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminGroupsJsonResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a group
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroup(
    request: Groups.GetGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupsJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{name}.json"),
        auth: noneAuth,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupsJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a group by id
   *
   * @returns success response (by id)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGroupById(
    request: Groups.GetGroupByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupsByIdJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/by-id/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupsByIdJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List group members
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGroupMembers(
    request: Groups.ListGroupMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupsMembersJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups/{name}/members.json"),
        auth: noneAuth,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupsMembersJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List groups
   *
   * @returns response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGroups(options?: RequestOptions): ApiPromise<GroupsJsonResponse2, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/groups.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupsJsonResponse2Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove group members
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeGroupMembers(
    request: Groups.RemoveGroupMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupsMembersJsonResponse2, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/groups/{id}/members.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => groupsMembersJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: groupsMembersJsonResponse2Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a group
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateGroup(
    request: Groups.UpdateGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupsJsonResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/groups/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => groupsJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: groupsJsonResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Groups {
  export type AddGroupMembersRequest = {
    id: number;
    body?: GroupsMembersJsonRequest;
  };

  export type CreateGroupRequest = {
    body?: AdminGroupsJsonRequest;
  };

  export type DeleteGroupRequest = {
    id: number;
  };

  export type GetGroupRequest = {
    /** Use group name instead of id */
    name: string;
  };

  export type GetGroupByIdRequest = {
    /** Use group name instead of id */
    id: string;
  };

  export type ListGroupMembersRequest = {
    /** Use group name instead of id */
    name: string;
  };

  export type RemoveGroupMembersRequest = {
    id: number;
    body?: GroupsMembersJsonRequest;
  };

  export type UpdateGroupRequest = {
    id: number;
    body?: GroupsJsonRequest;
  };
}
