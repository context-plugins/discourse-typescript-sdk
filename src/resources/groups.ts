import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  addGroupMembers(
    request: Groups.AddGroupMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupsMembersJsonResponse1, ResponseError> {
    return this.#rawClient.execute<GroupsMembersJsonResponse1, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/groups/{id}/members.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => groupsMembersJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: groupsMembersJsonResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createGroup(
    request: Groups.CreateGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminGroupsJsonResponse, ResponseError> {
    return this.#rawClient.execute<AdminGroupsJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/admin/groups.json"),
        auth: noneAuth,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adminGroupsJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: adminGroupsJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteGroup(
    request: Groups.DeleteGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminGroupsJsonResponse1, ResponseError> {
    return this.#rawClient.execute<AdminGroupsJsonResponse1, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/admin/groups/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminGroupsJsonResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getGroup(
    request: Groups.GetGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupsJsonResponse, ResponseError> {
    return this.#rawClient.execute<GroupsJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/groups/{name}.json"),
        auth: noneAuth,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupsJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getGroupById(
    request: Groups.GetGroupByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupsByIdJsonResponse, ResponseError> {
    return this.#rawClient.execute<GroupsByIdJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/groups/by-id/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupsByIdJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listGroupMembers(
    request: Groups.ListGroupMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupsMembersJsonResponse, ResponseError> {
    return this.#rawClient.execute<GroupsMembersJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/groups/{name}/members.json"),
        auth: noneAuth,
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupsMembersJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listGroups(options?: RequestOptions): ApiPromise<GroupsJsonResponse2, ResponseError> {
    return this.#rawClient.execute<GroupsJsonResponse2, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/groups.json"),
        auth: noneAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: groupsJsonResponse2Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  removeGroupMembers(
    request: Groups.RemoveGroupMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupsMembersJsonResponse2, ResponseError> {
    return this.#rawClient.execute<GroupsMembersJsonResponse2, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/groups/{id}/members.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => groupsMembersJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: groupsMembersJsonResponse2Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateGroup(
    request: Groups.UpdateGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GroupsJsonResponse1, ResponseError> {
    return this.#rawClient.execute<GroupsJsonResponse1, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/groups/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => groupsJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: groupsJsonResponse1Schema },
        errorFactory: ResponseError,
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
    name: string;
  };

  export type GetGroupByIdRequest = {
    id: string;
  };

  export type ListGroupMembersRequest = {
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
