<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invites — operations

Accessor: `client.invites` · Source: `src/resources/invites.ts` · 4 operations · Request types: namespace `Invites`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createInvite

- **Signature**: `createInvite(request: Invites.CreateInviteRequest, options?: RequestOptions): ApiPromise<InvitesJsonResponse, ApiError>`
- **Wire**: `POST /invites.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvitesJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invites.CreateInviteRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `InvitesJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvitesJsonRequest` | `invitesJsonRequestSchema` | `src/models/invites-json-request.ts` |
| `InvitesJsonResponse` | `invitesJsonResponseSchema` | `src/models/invites-json-response.ts` |

### createMultipleInvites

- **Signature**: `createMultipleInvites(request: Invites.CreateMultipleInvitesRequest, options?: RequestOptions): ApiPromise<InvitesCreateMultipleJsonResponse, ApiError>`
- **Wire**: `POST /invites/create-multiple.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvitesCreateMultipleJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invites.CreateMultipleInvitesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `InvitesCreateMultipleJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvitesCreateMultipleJsonRequest` | `invitesCreateMultipleJsonRequestSchema` | `src/models/invites-create-multiple-json-request.ts` |
| `InvitesCreateMultipleJsonResponse` | `invitesCreateMultipleJsonResponseSchema` | `src/models/invites-create-multiple-json-response.ts` |

### inviteGroupToTopic

- **Signature**: `inviteGroupToTopic(request: Invites.InviteGroupToTopicRequest, options?: RequestOptions): ApiPromise<TInviteGroupJsonResponse, ApiError>`
- **Wire**: `POST /t/{id}/invite-group.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TInviteGroupJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invites.InviteGroupToTopicRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `TInviteGroupJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TInviteGroupJsonRequest` | `tInviteGroupJsonRequestSchema` | `src/models/tinvite-group-json-request.ts` |
| `TInviteGroupJsonResponse` | `tInviteGroupJsonResponseSchema` | `src/models/tinvite-group-json-response.ts` |

### inviteToTopic

- **Signature**: `inviteToTopic(request: Invites.InviteToTopicRequest, options?: RequestOptions): ApiPromise<TInviteJsonResponse, ApiError>`
- **Wire**: `POST /t/{id}/invite.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TInviteJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invites.InviteToTopicRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `TInviteJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TInviteJsonRequest` | `tInviteJsonRequestSchema` | `src/models/tinvite-json-request.ts` |
| `TInviteJsonResponse` | `tInviteJsonResponseSchema` | `src/models/tinvite-json-response.ts` |

