# Posts

```ts
const postsApi = new PostsApi(client);
```

## Class Name

`PostsApi`

## Methods

* [List Posts](../../doc/controllers/posts.md#list-posts)
* [Create Topic Post PM](../../doc/controllers/posts.md#create-topic-post-pm)
* [Get Post](../../doc/controllers/posts.md#get-post)
* [Update Post](../../doc/controllers/posts.md#update-post)
* [Delete Post](../../doc/controllers/posts.md#delete-post)
* [Post Replies](../../doc/controllers/posts.md#post-replies)
* [Lock Post](../../doc/controllers/posts.md#lock-post)
* [Perform Post Action](../../doc/controllers/posts.md#perform-post-action)


# List Posts

```ts
async listPosts(
  before?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PostsJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `before` | `number \| undefined` | Query, Optional | Load posts with an id lower than this value. Useful for pagination. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: latest posts

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PostsJsonResponse`](../../doc/models/posts-json-response.md).

## Example Usage

```ts
try {
  const response = await postsApi.listPosts();

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Create Topic Post PM

```ts
async createTopicPostPm(
  apiKey: string,
  apiUsername: string,
  body?: PostsJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PostsJsonResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `body` | [`PostsJsonRequest \| undefined`](../../doc/models/posts-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: post created

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PostsJsonResponse1`](../../doc/models/posts-json-response-1.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const body: PostsJsonRequest = {
  raw: 'raw0',
  targetRecipients: 'blake,sam',
  archetype: 'private_message',
};

try {
  const response = await postsApi.createTopicPostPm(
    apiKey,
    apiUsername,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Get Post

This endpoint can be used to get the number of likes on a post using the
`actions_summary` property in the response. `actions_summary` responses
with the id of `2` signify a `like`. If there are no `actions_summary`
items with the id of `2`, that means there are 0 likes. Other ids likely
refer to various different flag types.

```ts
async getPost(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PostsJsonResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: single reviewable post

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PostsJsonResponse2`](../../doc/models/posts-json-response-2.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await postsApi.getPost(id);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Update Post

```ts
async updatePost(
  apiKey: string,
  apiUsername: string,
  id: string,
  body?: PostsJsonRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PostsJsonResponse3>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `id` | `string` | Template, Required | - |
| `body` | [`PostsJsonRequest1 \| undefined`](../../doc/models/posts-json-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: post updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PostsJsonResponse3`](../../doc/models/posts-json-response-3.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const id = 'id0';

try {
  const response = await postsApi.updatePost(
    apiKey,
    apiUsername,
    id
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Delete Post

```ts
async deletePost(
  apiKey: string,
  apiUsername: string,
  id: number,
  body?: PostsJsonRequest2,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `id` | `number` | Template, Required | - |
| `body` | [`PostsJsonRequest2 \| undefined`](../../doc/models/posts-json-request-2.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const id = 112;

const body: PostsJsonRequest2 = {
  forceDestroy: true,
};

try {
  const response = await postsApi.deletePost(
    apiKey,
    apiUsername,
    id,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Post Replies

```ts
async postReplies(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PostsRepliesJsonResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: post replies

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PostsRepliesJsonResponse[]`](../../doc/models/posts-replies-json-response.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await postsApi.postReplies(id);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Lock Post

```ts
async lockPost(
  apiKey: string,
  apiUsername: string,
  id: string,
  body?: PostsLockedJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PostsLockedJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `id` | `string` | Template, Required | - |
| `body` | [`PostsLockedJsonRequest \| undefined`](../../doc/models/posts-locked-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: post updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PostsLockedJsonResponse`](../../doc/models/posts-locked-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const id = 'id0';

try {
  const response = await postsApi.lockPost(
    apiKey,
    apiUsername,
    id
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Perform Post Action

```ts
async performPostAction(
  apiKey: string,
  apiUsername: string,
  body?: PostActionsJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PostActionsJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `body` | [`PostActionsJsonRequest \| undefined`](../../doc/models/post-actions-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: post updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PostActionsJsonResponse`](../../doc/models/post-actions-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

try {
  const response = await postsApi.performPostAction(
    apiKey,
    apiUsername
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

