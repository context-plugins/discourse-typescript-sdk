<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invites — operations

Accessor: `client.invites` · Source: `src/resources/invites.ts` · 4 operations · Request types: namespace `Invites`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createInvite

- **Signature**: `createInvite(request: Invites.CreateInviteRequest, options?: RequestOptions): ApiPromise<InvitesJsonResponse, ResponseError>`
- **Wire**: `POST /invites.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `InvitesJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `createMultipleInvites(request: Invites.CreateMultipleInvitesRequest, options?: RequestOptions): ApiPromise<InvitesCreateMultipleJsonResponse, ResponseError>`
- **Wire**: `POST /invites/create-multiple.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `InvitesCreateMultipleJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `inviteGroupToTopic(request: Invites.InviteGroupToTopicRequest, options?: RequestOptions): ApiPromise<TInviteGroupJsonResponse, ResponseError>`
- **Wire**: `POST /t/{id}/invite-group.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TInviteGroupJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `inviteToTopic(request: Invites.InviteToTopicRequest, options?: RequestOptions): ApiPromise<TInviteJsonResponse, ResponseError>`
- **Wire**: `POST /t/{id}/invite.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TInviteJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

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

