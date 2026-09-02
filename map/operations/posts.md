<!-- Generated file — do not edit; regenerated with the SDK. -->

# Posts — operations

Accessor: `client.posts` · Source: `src/resources/posts.ts` · 8 operations · Request types: namespace `Posts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createTopicPostPm

- **Signature**: `createTopicPostPm(request: Posts.CreateTopicPostPmRequest, options?: RequestOptions): ApiPromise<PostsJsonResponse1, ResponseError>`
- **Wire**: `POST /posts.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PostsJsonResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Posts.CreateTopicPostPmRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `PostsJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostsJsonRequest` | `postsJsonRequestSchema` | `src/models/posts-json-request.ts` |
| `PostsJsonResponse1` | `postsJsonResponse1Schema` | `src/models/posts-json-response1.ts` |

### deletePost

- **Signature**: `deletePost(request: Posts.DeletePostRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /posts/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Posts.DeletePostRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `number` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `PostsJsonRequest2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostsJsonRequest2` | `postsJsonRequest2Schema` | `src/models/posts-json-request2.ts` |

### getPost

- **Signature**: `getPost(request: Posts.GetPostRequest, options?: RequestOptions): ApiPromise<PostsJsonResponse2, ResponseError>`
- **Wire**: `GET /posts/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PostsJsonResponse2`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Posts.GetPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostsJsonResponse2` | `postsJsonResponse2Schema` | `src/models/posts-json-response2.ts` |

### listPosts

- **Signature**: `listPosts(request: Posts.ListPostsRequest, options?: RequestOptions): ApiPromise<PostsJsonResponse, ResponseError>`
- **Wire**: `GET /posts.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PostsJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Posts.ListPostsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `before` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostsJsonResponse` | `postsJsonResponseSchema` | `src/models/posts-json-response.ts` |

### lockPost

- **Signature**: `lockPost(request: Posts.LockPostRequest, options?: RequestOptions): ApiPromise<PostsLockedJsonResponse, ResponseError>`
- **Wire**: `PUT /posts/{id}/locked.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PostsLockedJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Posts.LockPostRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `PostsLockedJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostsLockedJsonRequest` | `postsLockedJsonRequestSchema` | `src/models/posts-locked-json-request.ts` |
| `PostsLockedJsonResponse` | `postsLockedJsonResponseSchema` | `src/models/posts-locked-json-response.ts` |

### performPostAction

- **Signature**: `performPostAction(request: Posts.PerformPostActionRequest, options?: RequestOptions): ApiPromise<PostActionsJsonResponse, ResponseError>`
- **Wire**: `POST /post_actions.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PostActionsJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Posts.PerformPostActionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `PostActionsJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostActionsJsonRequest` | `postActionsJsonRequestSchema` | `src/models/post-actions-json-request.ts` |
| `PostActionsJsonResponse` | `postActionsJsonResponseSchema` | `src/models/post-actions-json-response.ts` |

### postReplies

- **Signature**: `postReplies(request: Posts.PostRepliesRequest, options?: RequestOptions): ApiPromise<PostsRepliesJsonResponse[], ResponseError>`
- **Wire**: `GET /posts/{id}/replies.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PostsRepliesJsonResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Posts.PostRepliesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostsRepliesJsonResponse` | `postsRepliesJsonResponseSchema` | `src/models/posts-replies-json-response.ts` |

### updatePost

- **Signature**: `updatePost(request: Posts.UpdatePostRequest, options?: RequestOptions): ApiPromise<PostsJsonResponse3, ResponseError>`
- **Wire**: `PUT /posts/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `PostsJsonResponse3`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Posts.UpdatePostRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `apiKey` | `header` | `Api-Key` | `string` | yes |
| `apiUsername` | `header` | `Api-Username` | `string` | yes |
| `body` | `body` | — | `PostsJsonRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostsJsonRequest1` | `postsJsonRequest1Schema` | `src/models/posts-json-request1.ts` |
| `PostsJsonResponse3` | `postsJsonResponse3Schema` | `src/models/posts-json-response3.ts` |

