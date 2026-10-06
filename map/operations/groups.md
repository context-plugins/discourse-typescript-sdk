<!-- Generated file — do not edit; regenerated with the SDK. -->

# Groups — operations

Accessor: `client.groups` · Source: `src/resources/groups.ts` · 9 operations · Request types: namespace `Groups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addGroupMembers

- **Signature**: `addGroupMembers(request: Groups.AddGroupMembersRequest, options?: RequestOptions): ApiPromise<GroupsMembersJsonResponse1, ApiError>`
- **Wire**: `PUT /groups/{id}/members.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GroupsMembersJsonResponse1`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Groups.AddGroupMembersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `GroupsMembersJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupsMembersJsonRequest` | `groupsMembersJsonRequestSchema` | `src/models/groups-members-json-request.ts` |
| `GroupsMembersJsonResponse1` | `groupsMembersJsonResponse1Schema` | `src/models/groups-members-json-response1.ts` |

### createGroup

- **Signature**: `createGroup(request: Groups.CreateGroupRequest, options?: RequestOptions): ApiPromise<AdminGroupsJsonResponse, ApiError>`
- **Wire**: `POST /admin/groups.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminGroupsJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Groups.CreateGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AdminGroupsJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminGroupsJsonRequest` | `adminGroupsJsonRequestSchema` | `src/models/admin-groups-json-request.ts` |
| `AdminGroupsJsonResponse` | `adminGroupsJsonResponseSchema` | `src/models/admin-groups-json-response.ts` |

### deleteGroup

- **Signature**: `deleteGroup(request: Groups.DeleteGroupRequest, options?: RequestOptions): ApiPromise<AdminGroupsJsonResponse1, ApiError>`
- **Wire**: `DELETE /admin/groups/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminGroupsJsonResponse1`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Groups.DeleteGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminGroupsJsonResponse1` | `adminGroupsJsonResponse1Schema` | `src/models/admin-groups-json-response1.ts` |

### getGroup

- **Signature**: `getGroup(request: Groups.GetGroupRequest, options?: RequestOptions): ApiPromise<GroupsJsonResponse, ApiError>`
- **Wire**: `GET /groups/{name}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupsJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Groups.GetGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupsJsonResponse` | `groupsJsonResponseSchema` | `src/models/groups-json-response.ts` |

### getGroupById

- **Signature**: `getGroupById(request: Groups.GetGroupByIdRequest, options?: RequestOptions): ApiPromise<GroupsByIdJsonResponse, ApiError>`
- **Wire**: `GET /groups/by-id/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupsByIdJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Groups.GetGroupByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupsByIdJsonResponse` | `groupsByIdJsonResponseSchema` | `src/models/groups-by-id-json-response.ts` |

### listGroupMembers

- **Signature**: `listGroupMembers(request: Groups.ListGroupMembersRequest, options?: RequestOptions): ApiPromise<GroupsMembersJsonResponse, ApiError>`
- **Wire**: `GET /groups/{name}/members.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupsMembersJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Groups.ListGroupMembersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupsMembersJsonResponse` | `groupsMembersJsonResponseSchema` | `src/models/groups-members-json-response.ts` |

### listGroups

- **Signature**: `listGroups(options?: RequestOptions): ApiPromise<GroupsJsonResponse2, ApiError>`
- **Wire**: `GET /groups.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GroupsJsonResponse2`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupsJsonResponse2` | `groupsJsonResponse2Schema` | `src/models/groups-json-response2.ts` |

### removeGroupMembers

- **Signature**: `removeGroupMembers(request: Groups.RemoveGroupMembersRequest, options?: RequestOptions): ApiPromise<GroupsMembersJsonResponse2, ApiError>`
- **Wire**: `DELETE /groups/{id}/members.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GroupsMembersJsonResponse2`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Groups.RemoveGroupMembersRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `GroupsMembersJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupsMembersJsonRequest` | `groupsMembersJsonRequestSchema` | `src/models/groups-members-json-request.ts` |
| `GroupsMembersJsonResponse2` | `groupsMembersJsonResponse2Schema` | `src/models/groups-members-json-response2.ts` |

### updateGroup

- **Signature**: `updateGroup(request: Groups.UpdateGroupRequest, options?: RequestOptions): ApiPromise<GroupsJsonResponse1, ApiError>`
- **Wire**: `PUT /groups/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GroupsJsonResponse1`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Groups.UpdateGroupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `GroupsJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GroupsJsonRequest` | `groupsJsonRequestSchema` | `src/models/groups-json-request.ts` |
| `GroupsJsonResponse1` | `groupsJsonResponse1Schema` | `src/models/groups-json-response1.ts` |

