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
import {
  directoryItemsJsonResponseSchema,
  type DirectoryItemsJsonResponse,
} from "../models/directory-items-json-response.js";
import { flagSchema, type Flag } from "../models/flag.js";
import { order2Schema, type Order2 } from "../models/order2.js";
import { order3Schema, type Order3 } from "../models/order3.js";
import { period1Schema, type Period1 } from "../models/period1.js";
import {
  sessionForgotPasswordJsonRequestSchema,
  type SessionForgotPasswordJsonRequest,
} from "../models/session-forgot-password-json-request.js";
import {
  sessionForgotPasswordJsonResponseSchema,
  type SessionForgotPasswordJsonResponse,
} from "../models/session-forgot-password-json-response.js";
import {
  uByExternalJsonResponseSchema,
  type UByExternalJsonResponse,
} from "../models/uby-external-json-response.js";
import { uEmailsJsonResponseSchema, type UEmailsJsonResponse } from "../models/uemails-json-response.js";
import { uJsonRequestSchema, type UJsonRequest } from "../models/ujson-request.js";
import { uJsonResponseSchema, type UJsonResponse } from "../models/ujson-response.js";
import { uJsonResponse1Schema, type UJsonResponse1 } from "../models/ujson-response1.js";
import {
  uPreferencesAvatarPickJsonRequestSchema,
  type UPreferencesAvatarPickJsonRequest,
} from "../models/upreferences-avatar-pick-json-request.js";
import {
  uPreferencesAvatarPickJsonResponseSchema,
  type UPreferencesAvatarPickJsonResponse,
} from "../models/upreferences-avatar-pick-json-response.js";
import {
  uPreferencesEmailJsonRequestSchema,
  type UPreferencesEmailJsonRequest,
} from "../models/upreferences-email-json-request.js";
import {
  uPreferencesUsernameJsonRequestSchema,
  type UPreferencesUsernameJsonRequest,
} from "../models/upreferences-username-json-request.js";
import {
  userActionsJsonResponseSchema,
  type UserActionsJsonResponse,
} from "../models/user-actions-json-response.js";
import {
  userAvatarRefreshGravatarJsonResponseSchema,
  type UserAvatarRefreshGravatarJsonResponse,
} from "../models/user-avatar-refresh-gravatar-json-response.js";
import {
  userBadgesJsonResponseSchema,
  type UserBadgesJsonResponse,
} from "../models/user-badges-json-response.js";
import { usersJsonRequestSchema, type UsersJsonRequest } from "../models/users-json-request.js";
import { usersJsonResponseSchema, type UsersJsonResponse } from "../models/users-json-response.js";
import {
  usersPasswordResetJsonRequestSchema,
  type UsersPasswordResetJsonRequest,
} from "../models/users-password-reset-json-request.js";
import type { Servers } from "../servers.js";

export class Users {
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
    request: Users.ActivateUserRequest,
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
    request: Users.AdminGetUserRequest,
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
    request: Users.AdminListUsersRequest,
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
    request: Users.AdminListUsersFlagRequest,
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
    request: Users.AnonymizeUserRequest,
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
   * Change password
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  changePassword(
    request: Users.ChangePasswordRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/users/password-reset/{token}.json"),
        auth: noneAuth,
        pathParams: [{ name: "token", value: request.token, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersPasswordResetJsonRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Creates a user
   *
   * @returns user created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUser(
    request: Users.CreateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => usersJsonRequestSchema)) },
      },
      {
        success: { kind: "json", schema: usersJsonResponseSchema },
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
    request: Users.DeactivateUserRequest,
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
    request: Users.DeleteUserRequest,
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
   * Get a single user by username
   *
   * @returns user with primary group response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise<UJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/u/{username}.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get email addresses belonging to a user
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserEmails(
    request: Users.GetUserEmailsRequest,
    options?: RequestOptions,
  ): ApiPromise<UEmailsJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/u/{username}/emails.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uEmailsJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a user by external_id
   *
   * @returns user response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserExternalId(
    request: Users.GetUserExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<UByExternalJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/u/by-external/{external_id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "external_id", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uByExternalJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a user by identity provider external ID
   *
   * @returns user response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserIdentiyProviderExternalId(
    request: Users.GetUserIdentiyProviderExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<UByExternalJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/u/by-external/{provider}/{external_id}.json"),
        auth: noneAuth,
        pathParams: [
          { name: "provider", value: request.provider, schema: s.string() },
          { name: "external_id", value: request.externalId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uByExternalJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a list of user actions
   *
   * @returns response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUserActions(
    request: Users.ListUserActionsRequest,
    options?: RequestOptions,
  ): ApiPromise<UserActionsJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/user_actions.json"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "offset", value: request.offset, schema: s.int() },
          { name: "username", value: request.username, schema: s.string() },
          { name: "filter", value: request.filter, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userActionsJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List badges for a user
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUserBadges(
    request: Users.ListUserBadgesRequest,
    options?: RequestOptions,
  ): ApiPromise<UserBadgesJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/user-badges/{username}.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userBadgesJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a public list of users
   *
   * @returns directory items response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUsersPublic(
    request: Users.ListUsersPublicRequest,
    options?: RequestOptions,
  ): ApiPromise<DirectoryItemsJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/directory_items.json"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "period", value: request.period, schema: period1Schema },
          { name: "order", value: request.order, schema: order2Schema },
          { name: "asc", value: request.asc, schema: s.optional(s.lazy(() => ascSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: directoryItemsJsonResponseSchema },
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
    request: Users.LogOutUserRequest,
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
    request: Users.RefreshGravatarRequest,
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
   * Send password reset email
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendPasswordResetEmail(
    request: Users.SendPasswordResetEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionForgotPasswordJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/session/forgot_password.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => sessionForgotPasswordJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: sessionForgotPasswordJsonResponseSchema },
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
    request: Users.SilenceUserRequest,
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
    request: Users.SuspendUserRequest,
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

  /**
   * Update avatar
   *
   * @returns avatar updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAvatar(
    request: Users.UpdateAvatarRequest,
    options?: RequestOptions,
  ): ApiPromise<UPreferencesAvatarPickJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/u/{username}/preferences/avatar/pick.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => uPreferencesAvatarPickJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: uPreferencesAvatarPickJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update email
   *
   * @returns email updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateEmail(request: Users.UpdateEmailRequest, options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/u/{username}/preferences/email.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => uPreferencesEmailJsonRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a user
   *
   * @returns user updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUser(
    request: Users.UpdateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UJsonResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/u/{username}.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        query: [],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => uJsonRequestSchema)) },
      },
      {
        success: { kind: "json", schema: uJsonResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update username
   *
   * @returns username updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUsername(
    request: Users.UpdateUsernameRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/u/{username}/preferences/username.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => uPreferencesUsernameJsonRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Users {
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

  export type ChangePasswordRequest = {
    token: string;
    body?: UsersPasswordResetJsonRequest;
  };

  export type CreateUserRequest = {
    apiKey: string;
    apiUsername: string;
    body?: UsersJsonRequest;
  };

  export type DeactivateUserRequest = {
    id: number;
  };

  export type DeleteUserRequest = {
    id: number;
    body?: AdminUsersJsonRequest;
  };

  export type GetUserRequest = {
    username: string;
    apiKey: string;
    apiUsername: string;
  };

  export type GetUserEmailsRequest = {
    username: string;
  };

  export type GetUserExternalIdRequest = {
    externalId: string;
    apiKey: string;
    apiUsername: string;
  };

  export type GetUserIdentiyProviderExternalIdRequest = {
    /**
     * Authentication provider name. Can be found in the provider callback URL:
     * `/auth/{provider}/callback`
     */
    provider: string;
    externalId: string;
    apiKey: string;
    apiUsername: string;
  };

  export type ListUserActionsRequest = {
    offset: number;
    username: string;
    filter: string;
  };

  export type ListUserBadgesRequest = {
    username: string;
  };

  export type ListUsersPublicRequest = {
    period: Period1;
    order: Order2;
    asc?: Asc;
    page?: number;
  };

  export type LogOutUserRequest = {
    id: number;
  };

  export type RefreshGravatarRequest = {
    username: string;
  };

  export type SendPasswordResetEmailRequest = {
    body?: SessionForgotPasswordJsonRequest;
  };

  export type SilenceUserRequest = {
    id: number;
    body?: AdminUsersSilenceJsonRequest;
  };

  export type SuspendUserRequest = {
    id: number;
    body?: AdminUsersSuspendJsonRequest;
  };

  export type UpdateAvatarRequest = {
    username: string;
    body?: UPreferencesAvatarPickJsonRequest;
  };

  export type UpdateEmailRequest = {
    username: string;
    body?: UPreferencesEmailJsonRequest;
  };

  export type UpdateUserRequest = {
    username: string;
    apiKey: string;
    apiUsername: string;
    body?: UJsonRequest;
  };

  export type UpdateUsernameRequest = {
    username: string;
    body?: UPreferencesUsernameJsonRequest;
  };
}
