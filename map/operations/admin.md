<!-- Generated file — do not edit; regenerated with the SDK. -->

# Admin — operations

Accessor: `client.admin` · Source: `src/resources/admin.ts` · 11 operations · Request types: namespace `Admin`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### activateUser

- **Signature**: `activateUser(request: Admin.ActivateUserRequest, options?: RequestOptions): ApiPromise<AdminUsersActivateJsonResponse, ResponseError>`
- **Wire**: `PUT /admin/users/{id}/activate.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminUsersActivateJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Admin.ActivateUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersActivateJsonResponse` | `adminUsersActivateJsonResponseSchema` | `src/models/admin-users-activate-json-response.ts` |

### adminGetUser

- **Signature**: `adminGetUser(request: Admin.AdminGetUserRequest, options?: RequestOptions): ApiPromise<AdminUsersJsonResponse, ResponseError>`
- **Wire**: `GET /admin/users/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminUsersJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Admin.AdminGetUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersJsonResponse` | `adminUsersJsonResponseSchema` | `src/models/admin-users-json-response.ts` |

### adminListUsers

- **Signature**: `adminListUsers(request: Admin.AdminListUsersRequest, options?: RequestOptions): ApiPromise<AdminUsersJsonResponse2[], ResponseError>`
- **Wire**: `GET /admin/users.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminUsersJsonResponse2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Admin.AdminListUsersRequest` (7):

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

- **Signature**: `adminListUsersFlag(request: Admin.AdminListUsersFlagRequest, options?: RequestOptions): ApiPromise<AdminUsersListJsonResponse[], ResponseError>`
- **Wire**: `GET /admin/users/list/{flag}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminUsersListJsonResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Admin.AdminListUsersFlagRequest` (8):

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

- **Signature**: `anonymizeUser(request: Admin.AnonymizeUserRequest, options?: RequestOptions): ApiPromise<AdminUsersAnonymizeJsonResponse, ResponseError>`
- **Wire**: `PUT /admin/users/{id}/anonymize.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminUsersAnonymizeJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Admin.AnonymizeUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersAnonymizeJsonResponse` | `adminUsersAnonymizeJsonResponseSchema` | `src/models/admin-users-anonymize-json-response.ts` |

### deactivateUser

- **Signature**: `deactivateUser(request: Admin.DeactivateUserRequest, options?: RequestOptions): ApiPromise<AdminUsersDeactivateJsonResponse, ResponseError>`
- **Wire**: `PUT /admin/users/{id}/deactivate.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminUsersDeactivateJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Admin.DeactivateUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersDeactivateJsonResponse` | `adminUsersDeactivateJsonResponseSchema` | `src/models/admin-users-deactivate-json-response.ts` |

### deleteUser

- **Signature**: `deleteUser(request: Admin.DeleteUserRequest, options?: RequestOptions): ApiPromise<AdminUsersJsonResponse1, ResponseError>`
- **Wire**: `DELETE /admin/users/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AdminUsersJsonResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Admin.DeleteUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `AdminUsersJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersJsonRequest` | `adminUsersJsonRequestSchema` | `src/models/admin-users-json-request.ts` |
| `AdminUsersJsonResponse1` | `adminUsersJsonResponse1Schema` | `src/models/admin-users-json-response1.ts` |

### logOutUser

- **Signature**: `logOutUser(request: Admin.LogOutUserRequest, options?: RequestOptions): ApiPromise<AdminUsersLogOutJsonResponse, ResponseError>`
- **Wire**: `POST /admin/users/{id}/log_out.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminUsersLogOutJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Admin.LogOutUserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersLogOutJsonResponse` | `adminUsersLogOutJsonResponseSchema` | `src/models/admin-users-log-out-json-response.ts` |

### refreshGravatar

- **Signature**: `refreshGravatar(request: Admin.RefreshGravatarRequest, options?: RequestOptions): ApiPromise<UserAvatarRefreshGravatarJsonResponse, ResponseError>`
- **Wire**: `POST /user_avatar/{username}/refresh_gravatar.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserAvatarRefreshGravatarJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Admin.RefreshGravatarRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `username` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserAvatarRefreshGravatarJsonResponse` | `userAvatarRefreshGravatarJsonResponseSchema` | `src/models/user-avatar-refresh-gravatar-json-response.ts` |

### silenceUser

- **Signature**: `silenceUser(request: Admin.SilenceUserRequest, options?: RequestOptions): ApiPromise<AdminUsersSilenceJsonResponse, ResponseError>`
- **Wire**: `PUT /admin/users/{id}/silence.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AdminUsersSilenceJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Admin.SilenceUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `AdminUsersSilenceJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersSilenceJsonRequest` | `adminUsersSilenceJsonRequestSchema` | `src/models/admin-users-silence-json-request.ts` |
| `AdminUsersSilenceJsonResponse` | `adminUsersSilenceJsonResponseSchema` | `src/models/admin-users-silence-json-response.ts` |

### suspendUser

- **Signature**: `suspendUser(request: Admin.SuspendUserRequest, options?: RequestOptions): ApiPromise<AdminUsersSuspendJsonResponse, ResponseError>`
- **Wire**: `PUT /admin/users/{id}/suspend.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AdminUsersSuspendJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Admin.SuspendUserRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `AdminUsersSuspendJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminUsersSuspendJsonRequest` | `adminUsersSuspendJsonRequestSchema` | `src/models/admin-users-suspend-json-request.ts` |
| `AdminUsersSuspendJsonResponse` | `adminUsersSuspendJsonResponseSchema` | `src/models/admin-users-suspend-json-response.ts` |

