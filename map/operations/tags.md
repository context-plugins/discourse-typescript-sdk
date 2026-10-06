<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.tags` · Source: `src/resources/tags.ts` · 6 operations · Request types: namespace `Tags`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTagGroup

- **Signature**: `createTagGroup(request: Tags.CreateTagGroupRequest, options?: RequestOptions): ApiPromise<TagGroupsJsonResponse1, ApiError>`
- **Wire**: `POST /tag_groups.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TagGroupsJsonResponse1`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tags.CreateTagGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TagGroupsJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagGroupsJsonRequest` | `tagGroupsJsonRequestSchema` | `src/models/tag-groups-json-request.ts` |
| `TagGroupsJsonResponse1` | `tagGroupsJsonResponse1Schema` | `src/models/tag-groups-json-response1.ts` |

### getTag

- **Signature**: `getTag(request: Tags.GetTagRequest, options?: RequestOptions): ApiPromise<TagJsonResponse, ApiError>`
- **Wire**: `GET /tag/{name}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TagJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tags.GetTagRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagJsonResponse` | `tagJsonResponseSchema` | `src/models/tag-json-response.ts` |

### getTagGroup

- **Signature**: `getTagGroup(request: Tags.GetTagGroupRequest, options?: RequestOptions): ApiPromise<TagGroupsJsonResponse2, ApiError>`
- **Wire**: `GET /tag_groups/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TagGroupsJsonResponse2`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tags.GetTagGroupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagGroupsJsonResponse2` | `tagGroupsJsonResponse2Schema` | `src/models/tag-groups-json-response2.ts` |

### listTagGroups

- **Signature**: `listTagGroups(options?: RequestOptions): ApiPromise<TagGroupsJsonResponse, ApiError>`
- **Wire**: `GET /tag_groups.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TagGroupsJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `TagGroupsJsonResponse` | `tagGroupsJsonResponseSchema` | `src/models/tag-groups-json-response.ts` |

### listTags

- **Signature**: `listTags(options?: RequestOptions): ApiPromise<TagsJsonResponse, ApiError>`
- **Wire**: `GET /tags.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TagsJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `TagsJsonResponse` | `tagsJsonResponseSchema` | `src/models/tags-json-response.ts` |

### updateTagGroup

- **Signature**: `updateTagGroup(request: Tags.UpdateTagGroupRequest, options?: RequestOptions): ApiPromise<TagGroupsJsonResponse3, ApiError>`
- **Wire**: `PUT /tag_groups/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TagGroupsJsonResponse3`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Tags.UpdateTagGroupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `TagGroupsJsonRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TagGroupsJsonRequest1` | `tagGroupsJsonRequest1Schema` | `src/models/tag-groups-json-request1.ts` |
| `TagGroupsJsonResponse3` | `tagGroupsJsonResponse3Schema` | `src/models/tag-groups-json-response3.ts` |

