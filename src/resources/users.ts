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

  activateUser(
    request: Users.ActivateUserRequest,
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
    request: Users.AdminGetUserRequest,
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
    request: Users.AdminListUsersRequest,
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
    request: Users.AdminListUsersFlagRequest,
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
    request: Users.AnonymizeUserRequest,
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

  changePassword(
    request: Users.ChangePasswordRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/users/password-reset/{token}.json"),
        auth: noneAuth,
        pathParams: [{ name: "token", value: request.token, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usersPasswordResetJsonRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createUser(
    request: Users.CreateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersJsonResponse, ResponseError> {
    return this.#rawClient.execute<UsersJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/users.json"),
        auth: noneAuth,
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => usersJsonRequestSchema)) },
      },
      {
        success: { kind: "json", schema: usersJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deactivateUser(
    request: Users.DeactivateUserRequest,
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
    request: Users.DeleteUserRequest,
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

  getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise<UJsonResponse, ResponseError> {
    return this.#rawClient.execute<UJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/u/{username}.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getUserEmails(
    request: Users.GetUserEmailsRequest,
    options?: RequestOptions,
  ): ApiPromise<UEmailsJsonResponse, ResponseError> {
    return this.#rawClient.execute<UEmailsJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/u/{username}/emails.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uEmailsJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getUserExternalId(
    request: Users.GetUserExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<UByExternalJsonResponse, ResponseError> {
    return this.#rawClient.execute<UByExternalJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/u/by-external/{external_id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "external_id", value: request.externalId, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uByExternalJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getUserIdentiyProviderExternalId(
    request: Users.GetUserIdentiyProviderExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<UByExternalJsonResponse, ResponseError> {
    return this.#rawClient.execute<UByExternalJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/u/by-external/{provider}/{external_id}.json"),
        auth: noneAuth,
        pathParams: [
          { name: "provider", value: request.provider, schema: s.string() },
          { name: "external_id", value: request.externalId, schema: s.string() },
        ],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: uByExternalJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listUserActions(
    request: Users.ListUserActionsRequest,
    options?: RequestOptions,
  ): ApiPromise<UserActionsJsonResponse, ResponseError> {
    return this.#rawClient.execute<UserActionsJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/user_actions.json"),
        auth: noneAuth,
        query: [
          { name: "offset", value: request.offset, schema: s.number() },
          { name: "username", value: request.username, schema: s.string() },
          { name: "filter", value: request.filter, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userActionsJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listUserBadges(
    request: Users.ListUserBadgesRequest,
    options?: RequestOptions,
  ): ApiPromise<UserBadgesJsonResponse, ResponseError> {
    return this.#rawClient.execute<UserBadgesJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/user-badges/{username}.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userBadgesJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listUsersPublic(
    request: Users.ListUsersPublicRequest,
    options?: RequestOptions,
  ): ApiPromise<DirectoryItemsJsonResponse, ResponseError> {
    return this.#rawClient.execute<DirectoryItemsJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/directory_items.json"),
        auth: noneAuth,
        query: [
          { name: "period", value: request.period, schema: period1Schema },
          { name: "order", value: request.order, schema: order2Schema },
          { name: "asc", value: request.asc, schema: s.optional(s.lazy(() => ascSchema)) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: directoryItemsJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  logOutUser(
    request: Users.LogOutUserRequest,
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
    request: Users.RefreshGravatarRequest,
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

  sendPasswordResetEmail(
    request: Users.SendPasswordResetEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionForgotPasswordJsonResponse, ResponseError> {
    return this.#rawClient.execute<SessionForgotPasswordJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/session/forgot_password.json"),
        auth: noneAuth,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => sessionForgotPasswordJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: sessionForgotPasswordJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  silenceUser(
    request: Users.SilenceUserRequest,
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
    request: Users.SuspendUserRequest,
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

  updateAvatar(
    request: Users.UpdateAvatarRequest,
    options?: RequestOptions,
  ): ApiPromise<UPreferencesAvatarPickJsonResponse, ResponseError> {
    return this.#rawClient.execute<UPreferencesAvatarPickJsonResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/u/{username}/preferences/avatar/pick.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => uPreferencesAvatarPickJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: uPreferencesAvatarPickJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateEmail(
    request: Users.UpdateEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/u/{username}/preferences/email.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => uPreferencesEmailJsonRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateUser(
    request: Users.UpdateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<UJsonResponse1, ResponseError> {
    return this.#rawClient.execute<UJsonResponse1, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/u/{username}.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        headers: [
          { name: "Api-Key", value: request.apiKey, schema: s.string() },
          { name: "Api-Username", value: request.apiUsername, schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => uJsonRequestSchema)) },
      },
      {
        success: { kind: "json", schema: uJsonResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateUsername(
    request: Users.UpdateUsernameRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/u/{username}/preferences/username.json"),
        auth: noneAuth,
        pathParams: [{ name: "username", value: request.username, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => uPreferencesUsernameJsonRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
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
