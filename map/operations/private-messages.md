<!-- Generated file — do not edit; regenerated with the SDK. -->

# PrivateMessages — operations

Accessor: `client.privateMessages` · Source: `src/resources/private-messages.ts` · 3 operations · Request types: namespace `PrivateMessages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createTopicPostPm

- **Signature**: `createTopicPostPm(request: PrivateMessages.CreateTopicPostPmRequest, options?: RequestOptions): ApiPromise<PostsJsonResponse1, ResponseError>`
- **Wire**: `POST /posts.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PostsJsonResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PrivateMessages.CreateTopicPostPmRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `PostsJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostsJsonRequest` | `postsJsonRequestSchema` | `src/models/posts-json-request.ts` |
| `PostsJsonResponse1` | `postsJsonResponse1Schema` | `src/models/posts-json-response1.ts` |

### getUserSentPrivateMessages

- **Signature**: `getUserSentPrivateMessages(request: PrivateMessages.GetUserSentPrivateMessagesRequest, options?: RequestOptions): ApiPromise<TopicsPrivateMessagesSentJsonResponse, ResponseError>`
- **Wire**: `GET /topics/private-messages-sent/{username}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TopicsPrivateMessagesSentJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PrivateMessages.GetUserSentPrivateMessagesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `username` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TopicsPrivateMessagesSentJsonResponse` | `topicsPrivateMessagesSentJsonResponseSchema` | `src/models/topics-private-messages-sent-json-response.ts` |

### listUserPrivateMessages

- **Signature**: `listUserPrivateMessages(request: PrivateMessages.ListUserPrivateMessagesRequest, options?: RequestOptions): ApiPromise<TopicsPrivateMessagesJsonResponse, ResponseError>`
- **Wire**: `GET /topics/private-messages/{username}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TopicsPrivateMessagesJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `PrivateMessages.ListUserPrivateMessagesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `username` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TopicsPrivateMessagesJsonResponse` | `topicsPrivateMessagesJsonResponseSchema` | `src/models/topics-private-messages-json-response.ts` |

