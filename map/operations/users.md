<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 25 operations · Request types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### activateUser

- **Signature**: `activateUser(request: Users.ActivateUserRequest, options?: RequestOptions): ApiPromise<AdminUsersActivateJsonResponse, ResponseError>`
- **Wire**: `PUT /admin/users/{id}/activate.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminUsersActivateJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.ActivateUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersActivateJsonResponse` | `adminUsersActivateJsonResponseSchema` | `src/models/admin-users-activate-json-response.ts` |

### adminGetUser

- **Signature**: `adminGetUser(request: Users.AdminGetUserRequest, options?: RequestOptions): ApiPromise<AdminUsersJsonResponse, ResponseError>`
- **Wire**: `GET /admin/users/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminUsersJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.AdminGetUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersJsonResponse` | `adminUsersJsonResponseSchema` | `src/models/admin-users-json-response.ts` |

### adminListUsers

- **Signature**: `adminListUsers(request: Users.AdminListUsersRequest, options?: RequestOptions): ApiPromise<AdminUsersJsonResponse2[], ResponseError>`
- **Wire**: `GET /admin/users.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminUsersJsonResponse2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.AdminListUsersRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `order` | `query` | — | `Order3` | no |
| `asc` | `query` | — | `Asc` | no |
| `page` | `query` | — | `number` | no |
| `showEmails` | `query` | `show_emails` | `boolean` | no |
| `stats` | `query` | — | `boolean` | no |
| `email` | `query` | — | `string` | no |
| `ip` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Order3` | `order3Schema` | `src/models/order3.ts` |
| `Asc` | `ascSchema` | `src/models/asc.ts` |
| `AdminUsersJsonResponse2` | `adminUsersJsonResponse2Schema` | `src/models/admin-users-json-response2.ts` |

### adminListUsersFlag

- **Signature**: `adminListUsersFlag(request: Users.AdminListUsersFlagRequest, options?: RequestOptions): ApiPromise<AdminUsersListJsonResponse[], ResponseError>`
- **Wire**: `GET /admin/users/list/{flag}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminUsersListJsonResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.AdminListUsersFlagRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flag` | `path` | — | `Flag` | yes |
| `order` | `query` | — | `Order3` | no |
| `asc` | `query` | — | `Asc` | no |
| `page` | `query` | — | `number` | no |
| `showEmails` | `query` | `show_emails` | `boolean` | no |
| `stats` | `query` | — | `boolean` | no |
| `email` | `query` | — | `string` | no |
| `ip` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Flag` | `flagSchema` | `src/models/flag.ts` |
| `Order3` | `order3Schema` | `src/models/order3.ts` |
| `Asc` | `ascSchema` | `src/models/asc.ts` |
| `AdminUsersListJsonResponse` | `adminUsersListJsonResponseSchema` | `src/models/admin-users-list-json-response.ts` |

### anonymizeUser

- **Signature**: `anonymizeUser(request: Users.AnonymizeUserRequest, options?: RequestOptions): ApiPromise<AdminUsersAnonymizeJsonResponse, ResponseError>`
- **Wire**: `PUT /admin/users/{id}/anonymize.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminUsersAnonymizeJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.AnonymizeUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersAnonymizeJsonResponse` | `adminUsersAnonymizeJsonResponseSchema` | `src/models/admin-users-anonymize-json-response.ts` |

### changePassword

- **Signature**: `changePassword(request: Users.ChangePasswordRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `PUT /users/password-reset/{token}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.ChangePasswordRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `token` | `path` | `string` | yes |
| `body` | `body` | `UsersPasswordResetJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersPasswordResetJsonRequest` | `usersPasswordResetJsonRequestSchema` | `src/models/users-password-reset-json-request.ts` |

### createUser

- **Signature**: `createUser(request: Users.CreateUserRequest, options?: RequestOptions): ApiPromise<UsersJsonResponse, ResponseError>`
- **Wire**: `POST /users.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UsersJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.CreateUserRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `UsersJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsersJsonRequest` | `usersJsonRequestSchema` | `src/models/users-json-request.ts` |
| `UsersJsonResponse` | `usersJsonResponseSchema` | `src/models/users-json-response.ts` |

### deactivateUser

- **Signature**: `deactivateUser(request: Users.DeactivateUserRequest, options?: RequestOptions): ApiPromise<AdminUsersDeactivateJsonResponse, ResponseError>`
- **Wire**: `PUT /admin/users/{id}/deactivate.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminUsersDeactivateJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.DeactivateUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersDeactivateJsonResponse` | `adminUsersDeactivateJsonResponseSchema` | `src/models/admin-users-deactivate-json-response.ts` |

### deleteUser

- **Signature**: `deleteUser(request: Users.DeleteUserRequest, options?: RequestOptions): ApiPromise<AdminUsersJsonResponse1, ResponseError>`
- **Wire**: `DELETE /admin/users/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AdminUsersJsonResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.DeleteUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `AdminUsersJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersJsonRequest` | `adminUsersJsonRequestSchema` | `src/models/admin-users-json-request.ts` |
| `AdminUsersJsonResponse1` | `adminUsersJsonResponse1Schema` | `src/models/admin-users-json-response1.ts` |

### getUser

- **Signature**: `getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise<UJsonResponse, ResponseError>`
- **Wire**: `GET /u/{username}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.GetUserRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `username` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UJsonResponse` | `uJsonResponseSchema` | `src/models/ujson-response.ts` |

### getUserEmails

- **Signature**: `getUserEmails(request: Users.GetUserEmailsRequest, options?: RequestOptions): ApiPromise<UEmailsJsonResponse, ResponseError>`
- **Wire**: `GET /u/{username}/emails.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UEmailsJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.GetUserEmailsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `username` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UEmailsJsonResponse` | `uEmailsJsonResponseSchema` | `src/models/uemails-json-response.ts` |

### getUserExternalId

- **Signature**: `getUserExternalId(request: Users.GetUserExternalIdRequest, options?: RequestOptions): ApiPromise<UByExternalJsonResponse, ResponseError>`
- **Wire**: `GET /u/by-external/{external_id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UByExternalJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.GetUserExternalIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | `external_id` | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UByExternalJsonResponse` | `uByExternalJsonResponseSchema` | `src/models/uby-external-json-response.ts` |

### getUserIdentiyProviderExternalId

- **Signature**: `getUserIdentiyProviderExternalId(request: Users.GetUserIdentiyProviderExternalIdRequest, options?: RequestOptions): ApiPromise<UByExternalJsonResponse, ResponseError>`
- **Wire**: `GET /u/by-external/{provider}/{external_id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UByExternalJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.GetUserIdentiyProviderExternalIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `provider` | `path` | — | `string` | yes |
| `externalId` | `path` | `external_id` | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UByExternalJsonResponse` | `uByExternalJsonResponseSchema` | `src/models/uby-external-json-response.ts` |

### listUserActions

- **Signature**: `listUserActions(request: Users.ListUserActionsRequest, options?: RequestOptions): ApiPromise<UserActionsJsonResponse, ResponseError>`
- **Wire**: `GET /user_actions.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserActionsJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.ListUserActionsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `offset` | `query` | `number` | yes |
| `username` | `query` | `string` | yes |
| `filter` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserActionsJsonResponse` | `userActionsJsonResponseSchema` | `src/models/user-actions-json-response.ts` |

### listUserBadges

- **Signature**: `listUserBadges(request: Users.ListUserBadgesRequest, options?: RequestOptions): ApiPromise<UserBadgesJsonResponse, ResponseError>`
- **Wire**: `GET /user-badges/{username}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserBadgesJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.ListUserBadgesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `username` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserBadgesJsonResponse` | `userBadgesJsonResponseSchema` | `src/models/user-badges-json-response.ts` |

### listUsersPublic

- **Signature**: `listUsersPublic(request: Users.ListUsersPublicRequest, options?: RequestOptions): ApiPromise<DirectoryItemsJsonResponse, ResponseError>`
- **Wire**: `GET /directory_items.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DirectoryItemsJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.ListUsersPublicRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `period` | `query` | `Period1` | yes |
| `order` | `query` | `Order2` | yes |
| `asc` | `query` | `Asc` | no |
| `page` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Period1` | `period1Schema` | `src/models/period1.ts` |
| `Order2` | `order2Schema` | `src/models/order2.ts` |
| `Asc` | `ascSchema` | `src/models/asc.ts` |
| `DirectoryItemsJsonResponse` | `directoryItemsJsonResponseSchema` | `src/models/directory-items-json-response.ts` |

### logOutUser

- **Signature**: `logOutUser(request: Users.LogOutUserRequest, options?: RequestOptions): ApiPromise<AdminUsersLogOutJsonResponse, ResponseError>`
- **Wire**: `POST /admin/users/{id}/log_out.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminUsersLogOutJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.LogOutUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersLogOutJsonResponse` | `adminUsersLogOutJsonResponseSchema` | `src/models/admin-users-log-out-json-response.ts` |

### refreshGravatar

- **Signature**: `refreshGravatar(request: Users.RefreshGravatarRequest, options?: RequestOptions): ApiPromise<UserAvatarRefreshGravatarJsonResponse, ResponseError>`
- **Wire**: `POST /user_avatar/{username}/refresh_gravatar.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserAvatarRefreshGravatarJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.RefreshGravatarRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `username` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserAvatarRefreshGravatarJsonResponse` | `userAvatarRefreshGravatarJsonResponseSchema` | `src/models/user-avatar-refresh-gravatar-json-response.ts` |

### sendPasswordResetEmail

- **Signature**: `sendPasswordResetEmail(request: Users.SendPasswordResetEmailRequest, options?: RequestOptions): ApiPromise<SessionForgotPasswordJsonResponse, ResponseError>`
- **Wire**: `POST /session/forgot_password.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `SessionForgotPasswordJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.SendPasswordResetEmailRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SessionForgotPasswordJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionForgotPasswordJsonRequest` | `sessionForgotPasswordJsonRequestSchema` | `src/models/session-forgot-password-json-request.ts` |
| `SessionForgotPasswordJsonResponse` | `sessionForgotPasswordJsonResponseSchema` | `src/models/session-forgot-password-json-response.ts` |

### silenceUser

- **Signature**: `silenceUser(request: Users.SilenceUserRequest, options?: RequestOptions): ApiPromise<AdminUsersSilenceJsonResponse, ResponseError>`
- **Wire**: `PUT /admin/users/{id}/silence.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AdminUsersSilenceJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.SilenceUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `AdminUsersSilenceJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersSilenceJsonRequest` | `adminUsersSilenceJsonRequestSchema` | `src/models/admin-users-silence-json-request.ts` |
| `AdminUsersSilenceJsonResponse` | `adminUsersSilenceJsonResponseSchema` | `src/models/admin-users-silence-json-response.ts` |

### suspendUser

- **Signature**: `suspendUser(request: Users.SuspendUserRequest, options?: RequestOptions): ApiPromise<AdminUsersSuspendJsonResponse, ResponseError>`
- **Wire**: `PUT /admin/users/{id}/suspend.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AdminUsersSuspendJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.SuspendUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `AdminUsersSuspendJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersSuspendJsonRequest` | `adminUsersSuspendJsonRequestSchema` | `src/models/admin-users-suspend-json-request.ts` |
| `AdminUsersSuspendJsonResponse` | `adminUsersSuspendJsonResponseSchema` | `src/models/admin-users-suspend-json-response.ts` |

### updateAvatar

- **Signature**: `updateAvatar(request: Users.UpdateAvatarRequest, options?: RequestOptions): ApiPromise<UPreferencesAvatarPickJsonResponse, ResponseError>`
- **Wire**: `PUT /u/{username}/preferences/avatar/pick.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UPreferencesAvatarPickJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UpdateAvatarRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `username` | `path` | `string` | yes |
| `body` | `body` | `UPreferencesAvatarPickJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UPreferencesAvatarPickJsonRequest` | `uPreferencesAvatarPickJsonRequestSchema` | `src/models/upreferences-avatar-pick-json-request.ts` |
| `UPreferencesAvatarPickJsonResponse` | `uPreferencesAvatarPickJsonResponseSchema` | `src/models/upreferences-avatar-pick-json-response.ts` |

### updateEmail

- **Signature**: `updateEmail(request: Users.UpdateEmailRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `PUT /u/{username}/preferences/email.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UpdateEmailRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `username` | `path` | `string` | yes |
| `body` | `body` | `UPreferencesEmailJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UPreferencesEmailJsonRequest` | `uPreferencesEmailJsonRequestSchema` | `src/models/upreferences-email-json-request.ts` |

### updateUser

- **Signature**: `updateUser(request: Users.UpdateUserRequest, options?: RequestOptions): ApiPromise<UJsonResponse1, ResponseError>`
- **Wire**: `PUT /u/{username}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UJsonResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UpdateUserRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `username` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `UJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UJsonRequest` | `uJsonRequestSchema` | `src/models/ujson-request.ts` |
| `UJsonResponse1` | `uJsonResponse1Schema` | `src/models/ujson-response1.ts` |

### updateUsername

- **Signature**: `updateUsername(request: Users.UpdateUsernameRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `PUT /u/{username}/preferences/username.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UpdateUsernameRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `username` | `path` | `string` | yes |
| `body` | `body` | `UPreferencesUsernameJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UPreferencesUsernameJsonRequest` | `uPreferencesUsernameJsonRequestSchema` | `src/models/upreferences-username-json-request.ts` |

