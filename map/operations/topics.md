<!-- Generated file — do not edit; regenerated with the SDK. -->

# Topics — operations

Accessor: `client.topics` · Source: `src/resources/topics.ts` · 15 operations · Request and error types: namespace `Topics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### bookmarkTopic

- **Signature**: `bookmarkTopic(request: Topics.BookmarkTopicRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `PUT /t/{id}/bookmark.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.BookmarkTopicRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |

### createTopicPostPm

- **Signature**: `createTopicPostPm(request: Topics.CreateTopicPostPmRequest, options?: RequestOptions): ApiPromise<PostsJsonResponse1, ResponseError>`
- **Wire**: `POST /posts.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PostsJsonResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.CreateTopicPostPmRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `PostsJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostsJsonRequest` | `postsJsonRequestSchema` | `src/models/posts-json-request.ts` |
| `PostsJsonResponse1` | `postsJsonResponse1Schema` | `src/models/posts-json-response1.ts` |

### createTopicTimer

- **Signature**: `createTopicTimer(request: Topics.CreateTopicTimerRequest, options?: RequestOptions): ApiPromise<TTimerJsonResponse, ResponseError>`
- **Wire**: `POST /t/{id}/timer.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TTimerJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.CreateTopicTimerRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `TTimerJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TTimerJsonRequest` | `tTimerJsonRequestSchema` | `src/models/ttimer-json-request.ts` |
| `TTimerJsonResponse` | `tTimerJsonResponseSchema` | `src/models/ttimer-json-response.ts` |

### getSpecificPostsFromTopic

- **Signature**: `getSpecificPostsFromTopic(request: Topics.GetSpecificPostsFromTopicRequest, options?: RequestOptions): ApiPromise<TPostsJsonResponse, ResponseError>`
- **Wire**: `GET /t/{id}/posts.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TPostsJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.GetSpecificPostsFromTopicRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TPostsJsonResponse` | `tPostsJsonResponseSchema` | `src/models/tposts-json-response.ts` |

### getTopic

- **Signature**: `getTopic(request: Topics.GetTopicRequest, options?: RequestOptions): ApiPromise<TJsonResponse, ResponseError>`
- **Wire**: `GET /t/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.GetTopicRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TJsonResponse` | `tJsonResponseSchema` | `src/models/tjson-response.ts` |

### getTopicByExternalId

- **Signature**: `getTopicByExternalId(request: Topics.GetTopicByExternalIdRequest, options?: RequestOptions): ApiPromise<undefined, Topics.GetTopicByExternalIdError>`
- **Wire**: `GET /t/external_id/{external_id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Topics.GetTopicByExternalIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error301"` [301] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Topics.GetTopicByExternalIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | `external_id` | `string` | yes |

### inviteGroupToTopic

- **Signature**: `inviteGroupToTopic(request: Topics.InviteGroupToTopicRequest, options?: RequestOptions): ApiPromise<TInviteGroupJsonResponse, ResponseError>`
- **Wire**: `POST /t/{id}/invite-group.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TInviteGroupJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.InviteGroupToTopicRequest` (4):

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

- **Signature**: `inviteToTopic(request: Topics.InviteToTopicRequest, options?: RequestOptions): ApiPromise<TInviteJsonResponse, ResponseError>`
- **Wire**: `POST /t/{id}/invite.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TInviteJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.InviteToTopicRequest` (4):

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

### listLatestTopics

- **Signature**: `listLatestTopics(request: Topics.ListLatestTopicsRequest, options?: RequestOptions): ApiPromise<LatestJsonResponse, ResponseError>`
- **Wire**: `GET /latest.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LatestJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.ListLatestTopicsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `order` | `query` | — | `string` | no |
| `ascending` | `query` | — | `string` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LatestJsonResponse` | `latestJsonResponseSchema` | `src/models/latest-json-response.ts` |

### listTopTopics

- **Signature**: `listTopTopics(request: Topics.ListTopTopicsRequest, options?: RequestOptions): ApiPromise<TopJsonResponse, ResponseError>`
- **Wire**: `GET /top.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TopJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.ListTopTopicsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `period` | `query` | — | `string` | no |
| `perPage` | `query` | `per_page` | `number` | no |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TopJsonResponse` | `topJsonResponseSchema` | `src/models/top-json-response.ts` |

### removeTopic

- **Signature**: `removeTopic(request: Topics.RemoveTopicRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /t/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.RemoveTopicRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |

### setNotificationLevel

- **Signature**: `setNotificationLevel(request: Topics.SetNotificationLevelRequest, options?: RequestOptions): ApiPromise<TNotificationsJsonResponse, ResponseError>`
- **Wire**: `POST /t/{id}/notifications.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TNotificationsJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.SetNotificationLevelRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `TNotificationsJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TNotificationsJsonRequest` | `tNotificationsJsonRequestSchema` | `src/models/tnotifications-json-request.ts` |
| `TNotificationsJsonResponse` | `tNotificationsJsonResponseSchema` | `src/models/tnotifications-json-response.ts` |

### updateTopic

- **Signature**: `updateTopic(request: Topics.UpdateTopicRequest, options?: RequestOptions): ApiPromise<TJsonResponse1, ResponseError>`
- **Wire**: `PUT /t/-/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TJsonResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.UpdateTopicRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `TJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TJsonRequest` | `tJsonRequestSchema` | `src/models/tjson-request.ts` |
| `TJsonResponse1` | `tJsonResponse1Schema` | `src/models/tjson-response1.ts` |

### updateTopicStatus

- **Signature**: `updateTopicStatus(request: Topics.UpdateTopicStatusRequest, options?: RequestOptions): ApiPromise<TStatusJsonResponse, ResponseError>`
- **Wire**: `PUT /t/{id}/status.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TStatusJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.UpdateTopicStatusRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `TStatusJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TStatusJsonRequest` | `tStatusJsonRequestSchema` | `src/models/tstatus-json-request.ts` |
| `TStatusJsonResponse` | `tStatusJsonResponseSchema` | `src/models/tstatus-json-response.ts` |

### updateTopicTimestamp

- **Signature**: `updateTopicTimestamp(request: Topics.UpdateTopicTimestampRequest, options?: RequestOptions): ApiPromise<TChangeTimestampJsonResponse, ResponseError>`
- **Wire**: `PUT /t/{id}/change-timestamp.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `TChangeTimestampJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.UpdateTopicTimestampRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `TChangeTimestampJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TChangeTimestampJsonRequest` | `tChangeTimestampJsonRequestSchema` | `src/models/tchange-timestamp-json-request.ts` |
| `TChangeTimestampJsonResponse` | `tChangeTimestampJsonResponseSchema` | `src/models/tchange-timestamp-json-response.ts` |

