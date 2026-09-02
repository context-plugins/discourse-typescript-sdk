<!-- Generated file — do not edit; regenerated with the SDK. -->

# Badges — operations

Accessor: `client.badges` · Source: `src/resources/badges.ts` · 5 operations · Request types: namespace `Badges`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### adminListBadges

- **Signature**: `adminListBadges(options?: RequestOptions): ApiPromise<AdminBadgesJsonResponse, ResponseError>`
- **Wire**: `GET /admin/badges.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminBadgesJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminBadgesJsonResponse` | `adminBadgesJsonResponseSchema` | `src/models/admin-badges-json-response.ts` |

### createBadge

- **Signature**: `createBadge(request: Badges.CreateBadgeRequest, options?: RequestOptions): ApiPromise<AdminBadgesJsonResponse1, ResponseError>`
- **Wire**: `POST /admin/badges.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AdminBadgesJsonResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Badges.CreateBadgeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AdminBadgesJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminBadgesJsonRequest` | `adminBadgesJsonRequestSchema` | `src/models/admin-badges-json-request.ts` |
| `AdminBadgesJsonResponse1` | `adminBadgesJsonResponse1Schema` | `src/models/admin-badges-json-response1.ts` |

### deleteBadge

- **Signature**: `deleteBadge(request: Badges.DeleteBadgeRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /admin/badges/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Badges.DeleteBadgeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

### listUserBadges

- **Signature**: `listUserBadges(request: Badges.ListUserBadgesRequest, options?: RequestOptions): ApiPromise<UserBadgesJsonResponse, ResponseError>`
- **Wire**: `GET /user-badges/{username}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UserBadgesJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Badges.ListUserBadgesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `username` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserBadgesJsonResponse` | `userBadgesJsonResponseSchema` | `src/models/user-badges-json-response.ts` |

### updateBadge

- **Signature**: `updateBadge(request: Badges.UpdateBadgeRequest, options?: RequestOptions): ApiPromise<AdminBadgesJsonResponse2, ResponseError>`
- **Wire**: `PUT /admin/badges/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AdminBadgesJsonResponse2`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Badges.UpdateBadgeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `AdminBadgesJsonRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminBadgesJsonRequest1` | `adminBadgesJsonRequest1Schema` | `src/models/admin-badges-json-request1.ts` |
| `AdminBadgesJsonResponse2` | `adminBadgesJsonResponse2Schema` | `src/models/admin-badges-json-response2.ts` |

