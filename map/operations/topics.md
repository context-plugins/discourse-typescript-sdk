<!-- Generated file — do not edit; regenerated with the SDK. -->

# Topics — operations

Accessor: `client.topics` · Source: `src/resources/topics.ts` · 15 operations · Request and error types: namespace `Topics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bookmarkTopic

- **Signature**: `bookmarkTopic(request: Topics.BookmarkTopicRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `PUT /t/{id}/bookmark.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.BookmarkTopicRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |

### createTopicPostPm

- **Signature**: `createTopicPostPm(request: Topics.CreateTopicPostPmRequest, options?: RequestOptions): ApiPromise<PostsJsonResponse1, ApiError>`
- **Wire**: `POST /posts.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PostsJsonResponse1`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `createTopicTimer(request: Topics.CreateTopicTimerRequest, options?: RequestOptions): ApiPromise<TTimerJsonResponse, ApiError>`
- **Wire**: `POST /t/{id}/timer.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TTimerJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `getSpecificPostsFromTopic(request: Topics.GetSpecificPostsFromTopicRequest, options?: RequestOptions): ApiPromise<TPostsJsonResponse, ApiError>`
- **Wire**: `GET /t/{id}/posts.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TPostsJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `getTopic(request: Topics.GetTopicRequest, options?: RequestOptions): ApiPromise<TJsonResponse, ApiError>`
- **Wire**: `GET /t/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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
- **Error**: `DiscourseError` with `kind: "api"`, an instance of `Topics.GetTopicByExternalIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error301"` [301] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Topics.GetTopicByExternalIdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | `external_id` | `string` | yes |

### inviteGroupToTopic

- **Signature**: `inviteGroupToTopic(request: Topics.InviteGroupToTopicRequest, options?: RequestOptions): ApiPromise<TInviteGroupJsonResponse, ApiError>`
- **Wire**: `POST /t/{id}/invite-group.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TInviteGroupJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `inviteToTopic(request: Topics.InviteToTopicRequest, options?: RequestOptions): ApiPromise<TInviteJsonResponse, ApiError>`
- **Wire**: `POST /t/{id}/invite.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TInviteJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `listLatestTopics(request: Topics.ListLatestTopicsRequest, options?: RequestOptions): ApiPromise<LatestJsonResponse, ApiError>`
- **Wire**: `GET /latest.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LatestJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `listTopTopics(request: Topics.ListTopTopicsRequest, options?: RequestOptions): ApiPromise<TopJsonResponse, ApiError>`
- **Wire**: `GET /top.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TopJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `removeTopic(request: Topics.RemoveTopicRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /t/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Topics.RemoveTopicRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |

### setNotificationLevel

- **Signature**: `setNotificationLevel(request: Topics.SetNotificationLevelRequest, options?: RequestOptions): ApiPromise<TNotificationsJsonResponse, ApiError>`
- **Wire**: `POST /t/{id}/notifications.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TNotificationsJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `updateTopic(request: Topics.UpdateTopicRequest, options?: RequestOptions): ApiPromise<TJsonResponse1, ApiError>`
- **Wire**: `PUT /t/-/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TJsonResponse1`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `updateTopicStatus(request: Topics.UpdateTopicStatusRequest, options?: RequestOptions): ApiPromise<TStatusJsonResponse, ApiError>`
- **Wire**: `PUT /t/{id}/status.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TStatusJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `updateTopicTimestamp(request: Topics.UpdateTopicTimestampRequest, options?: RequestOptions): ApiPromise<TChangeTimestampJsonResponse, ApiError>`
- **Wire**: `PUT /t/{id}/change-timestamp.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TChangeTimestampJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

