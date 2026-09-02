import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  adminUsersActivateJsonResponseSchema,
  type AdminUsersActivateJsonResponse,
} from "../models/admin-users-activate-json-response.js";
import {
  adminUsersAnonymizeJsonResponseSchema,
  type AdminUsersAnonymizeJsonResponse,
} from "../models/admin-users-anonymize-json-response.js";
import {
  adminUsersDeactivateJsonResponseSchema,
  type AdminUsersDeactivateJsonResponse,
} from "../models/admin-users-deactivate-json-response.js";
import {
  adminUsersJsonRequestSchema,
  type AdminUsersJsonRequest,
} from "../models/admin-users-json-request.js";
import {
  adminUsersJsonResponseSchema,
  type AdminUsersJsonResponse,
} from "../models/admin-users-json-response.js";
import {
  adminUsersJsonResponse1Schema,
  type AdminUsersJsonResponse1,
} from "../models/admin-users-json-response1.js";
import {
  adminUsersJsonResponse2Schema,
  type AdminUsersJsonResponse2,
} from "../models/admin-users-json-response2.js";
import {
  adminUsersListJsonResponseSchema,
  type AdminUsersListJsonResponse,
} from "../models/admin-users-list-json-response.js";
import {
  adminUsersLogOutJsonResponseSchema,
  type AdminUsersLogOutJsonResponse,
} from "../models/admin-users-log-out-json-response.js";
import {
  adminUsersSilenceJsonRequestSchema,
  type AdminUsersSilenceJsonRequest,
} from "../models/admin-users-silence-json-request.js";
import {
  adminUsersSilenceJsonResponseSchema,
  type AdminUsersSilenceJsonResponse,
} from "../models/admin-users-silence-json-response.js";
import {
  adminUsersSuspendJsonRequestSchema,
  type AdminUsersSuspendJsonRequest,
} from "../models/admin-users-suspend-json-request.js";
import {
  adminUsersSuspendJsonResponseSchema,
  type AdminUsersSuspendJsonResponse,
} from "../models/admin-users-suspend-json-response.js";
import { ascSchema, type Asc } from "../models/asc.js";
import { flagSchema, type Flag } from "../models/flag.js";
import { order3Schema, type Order3 } from "../models/order3.js";
import {
  userAvatarRefreshGravatarJsonResponseSchema,
  type UserAvatarRefreshGravatarJsonResponse,
} from "../models/user-avatar-refresh-gravatar-json-response.js";
import type { Servers } from "../servers.js";

export class Admin {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  activateUser(
    request: Admin.ActivateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersActivateJsonResponse, ResponseError> {
    return this.#rawClient.execute<AdminUsersActivateJsonResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/admin/users/{id}/activate.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminUsersActivateJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  adminGetUser(
    request: Admin.AdminGetUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersJsonResponse, ResponseError> {
    return this.#rawClient.execute<AdminUsersJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/admin/users/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminUsersJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  adminListUsers(
    request: Admin.AdminListUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersJsonResponse2[], ResponseError> {
    return this.#rawClient.execute<AdminUsersJsonResponse2[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/admin/users.json"),
        auth: noneAuth,
        query: [
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order3Schema)) },
          { name: "asc", value: request.asc, schema: s.optional(s.lazy(() => ascSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "show_emails", value: request.showEmails, schema: s.optional(s.boolean()) },
          { name: "stats", value: request.stats, schema: s.optional(s.boolean()) },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "ip", value: request.ip, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => adminUsersJsonResponse2Schema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  adminListUsersFlag(
    request: Admin.AdminListUsersFlagRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersListJsonResponse[], ResponseError> {
    return this.#rawClient.execute<AdminUsersListJsonResponse[], ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/admin/users/list/{flag}.json"),
        auth: noneAuth,
        pathParams: [{ name: "flag", value: request.flag, schema: flagSchema }],
        query: [
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order3Schema)) },
          { name: "asc", value: request.asc, schema: s.optional(s.lazy(() => ascSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
          { name: "show_emails", value: request.showEmails, schema: s.optional(s.boolean()) },
          { name: "stats", value: request.stats, schema: s.optional(s.boolean()) },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "ip", value: request.ip, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => adminUsersListJsonResponseSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  anonymizeUser(
    request: Admin.AnonymizeUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersAnonymizeJsonResponse, ResponseError> {
    return this.#rawClient.execute<AdminUsersAnonymizeJsonResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/admin/users/{id}/anonymize.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminUsersAnonymizeJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deactivateUser(
    request: Admin.DeactivateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersDeactivateJsonResponse, ResponseError> {
    return this.#rawClient.execute<AdminUsersDeactivateJsonResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/admin/users/{id}/deactivate.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminUsersDeactivateJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteUser(
    request: Admin.DeleteUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersJsonResponse1, ResponseError> {
    return this.#rawClient.execute<AdminUsersJsonResponse1, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/admin/users/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adminUsersJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: adminUsersJsonResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  logOutUser(
    request: Admin.LogOutUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersLogOutJsonResponse, ResponseError> {
    return this.#rawClient.execute<AdminUsersLogOutJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/admin/users/{id}/log_out.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminUsersLogOutJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  refreshGravatar(
    request: Admin.RefreshGravatarRequest,
    options?: RequestOptions,
  ): ApiPromise<UserAvatarRefreshGravatarJsonResponse, ResponseError> {
    return this.#rawClient.execute<UserAvatarRefreshGravatarJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/user_avatar/{username}/refresh_gravatar.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userAvatarRefreshGravatarJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  silenceUser(
    request: Admin.SilenceUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersSilenceJsonResponse, ResponseError> {
    return this.#rawClient.execute<AdminUsersSilenceJsonResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/admin/users/{id}/silence.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adminUsersSilenceJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: adminUsersSilenceJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  suspendUser(
    request: Admin.SuspendUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersSuspendJsonResponse, ResponseError> {
    return this.#rawClient.execute<AdminUsersSuspendJsonResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/admin/users/{id}/suspend.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adminUsersSuspendJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: adminUsersSuspendJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Admin {
  export type ActivateUserRequest = {
    id: number;
  };

  export type AdminGetUserRequest = {
    id: number;
  };

  export type AdminListUsersRequest = {
    order?: Order3;
    asc?: Asc;
    page?: number;
    showEmails?: boolean;
    stats?: boolean;
    email?: string;
    ip?: string;
  };

  export type AdminListUsersFlagRequest = {
    flag: Flag;
    order?: Order3;
    asc?: Asc;
    page?: number;
    showEmails?: boolean;
    stats?: boolean;
    email?: string;
    ip?: string;
  };

  export type AnonymizeUserRequest = {
    id: number;
  };

  export type DeactivateUserRequest = {
    id: number;
  };

  export type DeleteUserRequest = {
    id: number;
    body?: AdminUsersJsonRequest;
  };

  export type LogOutUserRequest = {
    id: number;
  };

  export type RefreshGravatarRequest = {
    username: string;
  };

  export type SilenceUserRequest = {
    id: number;
    body?: AdminUsersSilenceJsonRequest;
  };

  export type SuspendUserRequest = {
    id: number;
    body?: AdminUsersSuspendJsonRequest;
  };
}
