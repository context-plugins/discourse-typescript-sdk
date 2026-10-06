import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Activate a user
   *
   * @returns response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateUser(
    request: Admin.ActivateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersActivateJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/admin/users/{id}/activate.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminUsersActivateJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a user by id
   *
   * @returns response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminGetUser(
    request: Admin.AdminGetUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin/users/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminUsersJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List users
   *
   * @returns users response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminListUsers(
    request: Admin.AdminListUsersRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersJsonResponse2[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin/users.json"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order3Schema)) },
          { name: "asc", value: request.asc, schema: s.optional(s.lazy(() => ascSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "show_emails", value: request.showEmails, schema: s.optional(s.boolean()) },
          { name: "stats", value: request.stats, schema: s.optional(s.boolean()) },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "ip", value: request.ip, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => adminUsersJsonResponse2Schema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List users by flag
   *
   * @returns response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminListUsersFlag(
    request: Admin.AdminListUsersFlagRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersListJsonResponse[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin/users/list/{flag}.json"),
        auth: noneAuth,
        pathParams: [{ name: "flag", value: request.flag, schema: flagSchema }],
        query: [
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => order3Schema)) },
          { name: "asc", value: request.asc, schema: s.optional(s.lazy(() => ascSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "show_emails", value: request.showEmails, schema: s.optional(s.boolean()) },
          { name: "stats", value: request.stats, schema: s.optional(s.boolean()) },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "ip", value: request.ip, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => adminUsersListJsonResponseSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Anonymize a user
   *
   * @returns response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  anonymizeUser(
    request: Admin.AnonymizeUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersAnonymizeJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/admin/users/{id}/anonymize.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminUsersAnonymizeJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Deactivate a user
   *
   * @returns response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deactivateUser(
    request: Admin.DeactivateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersDeactivateJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/admin/users/{id}/deactivate.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminUsersDeactivateJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a user
   *
   * @returns response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteUser(
    request: Admin.DeleteUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersJsonResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/admin/users/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adminUsersJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: adminUsersJsonResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Log a user out
   *
   * @returns response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  logOutUser(
    request: Admin.LogOutUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersLogOutJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin/users/{id}/log_out.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adminUsersLogOutJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Refresh gravatar
   *
   * @returns response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  refreshGravatar(
    request: Admin.RefreshGravatarRequest,
    options?: RequestOptions,
  ): ApiPromise<UserAvatarRefreshGravatarJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user_avatar/{username}/refresh_gravatar.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userAvatarRefreshGravatarJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Silence a user
   *
   * @returns response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  silenceUser(
    request: Admin.SilenceUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersSilenceJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/admin/users/{id}/silence.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adminUsersSilenceJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: adminUsersSilenceJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Suspend a user
   *
   * @returns response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  suspendUser(
    request: Admin.SuspendUserRequest,
    options?: RequestOptions,
  ): ApiPromise<AdminUsersSuspendJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/admin/users/{id}/suspend.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adminUsersSuspendJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: adminUsersSuspendJsonResponseSchema },
        errorFactory: ApiError,
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
    /**
     * Include user email addresses in response. These requests will be logged in the staff action
     * logs.
     */
    showEmails?: boolean;
    /** Include user stats information */
    stats?: boolean;
    /** Filter to the user with this email address */
    email?: string;
    /** Filter to users with this IP address */
    ip?: string;
  };

  export type AdminListUsersFlagRequest = {
    flag: Flag;
    order?: Order3;
    asc?: Asc;
    page?: number;
    /**
     * Include user email addresses in response. These requests will be logged in the staff action
     * logs.
     */
    showEmails?: boolean;
    /** Include user stats information */
    stats?: boolean;
    /** Filter to the user with this email address */
    email?: string;
    /** Filter to users with this IP address */
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
