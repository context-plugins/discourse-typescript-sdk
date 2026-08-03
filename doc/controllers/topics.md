# Topics

```ts
const topicsApi = new TopicsApi(client);
```

## Class Name

`TopicsApi`

## Methods

* [Get Specific Posts from Topic](../../doc/controllers/topics.md#get-specific-posts-from-topic)
* [Get Topic](../../doc/controllers/topics.md#get-topic)
* [Remove Topic](../../doc/controllers/topics.md#remove-topic)
* [Update Topic](../../doc/controllers/topics.md#update-topic)
* [Invite to Topic](../../doc/controllers/topics.md#invite-to-topic)
* [Invite Group to Topic](../../doc/controllers/topics.md#invite-group-to-topic)
* [Bookmark Topic](../../doc/controllers/topics.md#bookmark-topic)
* [Update Topic Status](../../doc/controllers/topics.md#update-topic-status)
* [List Latest Topics](../../doc/controllers/topics.md#list-latest-topics)
* [List Top Topics](../../doc/controllers/topics.md#list-top-topics)
* [Set Notification Level](../../doc/controllers/topics.md#set-notification-level)
* [Update Topic Timestamp](../../doc/controllers/topics.md#update-topic-timestamp)
* [Create Topic Timer](../../doc/controllers/topics.md#create-topic-timer)
* [Get Topic by External Id](../../doc/controllers/topics.md#get-topic-by-external-id)


# Get Specific Posts from Topic

```ts
async getSpecificPostsFromTopic(
  apiKey: string,
  apiUsername: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TPostsJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: specific posts

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TPostsJsonResponse`](../../doc/models/t-posts-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const id = 'id0';

try {
  const response = await topicsApi.getSpecificPostsFromTopic(
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


# Get Topic

```ts
async getTopic(
  apiKey: string,
  apiUsername: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: specific posts

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TJsonResponse`](../../doc/models/t-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const id = 'id0';

try {
  const response = await topicsApi.getTopic(
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


# Remove Topic

```ts
async removeTopic(
  apiKey: string,
  apiUsername: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: specific posts

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const id = 'id0';

try {
  const response = await topicsApi.removeTopic(
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


# Update Topic

```ts
async updateTopic(
  apiKey: string,
  apiUsername: string,
  id: string,
  body?: TJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TJsonResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `id` | `string` | Template, Required | - |
| `body` | [`TJsonRequest \| undefined`](../../doc/models/t-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: topic updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TJsonResponse1`](../../doc/models/t-json-response-1.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const id = 'id0';

try {
  const response = await topicsApi.updateTopic(
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


# Invite to Topic

```ts
async inviteToTopic(
  apiKey: string,
  apiUsername: string,
  id: string,
  body?: TInviteJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TInviteJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `id` | `string` | Template, Required | - |
| `body` | [`TInviteJsonRequest \| undefined`](../../doc/models/t-invite-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: topic updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TInviteJsonResponse`](../../doc/models/t-invite-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const id = 'id0';

try {
  const response = await topicsApi.inviteToTopic(
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


# Invite Group to Topic

```ts
async inviteGroupToTopic(
  apiKey: string,
  apiUsername: string,
  id: string,
  body?: TInviteGroupJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TInviteGroupJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `id` | `string` | Template, Required | - |
| `body` | [`TInviteGroupJsonRequest \| undefined`](../../doc/models/t-invite-group-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: invites to a PM

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TInviteGroupJsonResponse`](../../doc/models/t-invite-group-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const id = 'id0';

try {
  const response = await topicsApi.inviteGroupToTopic(
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


# Bookmark Topic

```ts
async bookmarkTopic(
  apiKey: string,
  apiUsername: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: topic updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const id = 'id0';

try {
  const response = await topicsApi.bookmarkTopic(
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


# Update Topic Status

```ts
async updateTopicStatus(
  apiKey: string,
  apiUsername: string,
  id: string,
  body?: TStatusJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TStatusJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `id` | `string` | Template, Required | - |
| `body` | [`TStatusJsonRequest \| undefined`](../../doc/models/t-status-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: topic updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TStatusJsonResponse`](../../doc/models/t-status-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const id = 'id0';

const body: TStatusJsonRequest = {
  status: Status1.PinnedGlobally,
  enabled: Enabled.True,
  until: '2030-12-31',
};

try {
  const response = await topicsApi.updateTopicStatus(
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


# List Latest Topics

```ts
async listLatestTopics(
  apiKey: string,
  apiUsername: string,
  order?: string,
  ascending?: string,
  perPage?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LatestJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `order` | `string \| undefined` | Query, Optional | Enum: `default`, `created`, `activity`, `views`, `posts`, `category`,<br>`likes`, `op_likes`, `posters` |
| `ascending` | `string \| undefined` | Query, Optional | Defaults to `desc`, add `ascending=true` to sort asc |
| `perPage` | `number \| undefined` | Query, Optional | Maximum number of topics returned, between 1-100 |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: topic updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`LatestJsonResponse`](../../doc/models/latest-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

try {
  const response = await topicsApi.listLatestTopics(
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


# List Top Topics

```ts
async listTopTopics(
  apiKey: string,
  apiUsername: string,
  period?: string,
  perPage?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TopJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `period` | `string \| undefined` | Query, Optional | Enum: `all`, `yearly`, `quarterly`, `monthly`, `weekly`, `daily` |
| `perPage` | `number \| undefined` | Query, Optional | Maximum number of topics returned, between 1-100 |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TopJsonResponse`](../../doc/models/top-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

try {
  const response = await topicsApi.listTopTopics(
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


# Set Notification Level

```ts
async setNotificationLevel(
  apiKey: string,
  apiUsername: string,
  id: string,
  body?: TNotificationsJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TNotificationsJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `id` | `string` | Template, Required | - |
| `body` | [`TNotificationsJsonRequest \| undefined`](../../doc/models/t-notifications-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: topic updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TNotificationsJsonResponse`](../../doc/models/t-notifications-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const id = 'id0';

try {
  const response = await topicsApi.setNotificationLevel(
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


# Update Topic Timestamp

```ts
async updateTopicTimestamp(
  apiKey: string,
  apiUsername: string,
  id: string,
  body?: TChangeTimestampJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TChangeTimestampJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `id` | `string` | Template, Required | - |
| `body` | [`TChangeTimestampJsonRequest \| undefined`](../../doc/models/t-change-timestamp-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: topic updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TChangeTimestampJsonResponse`](../../doc/models/t-change-timestamp-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const id = 'id0';

const body: TChangeTimestampJsonRequest = {
  timestamp: '1594291380',
};

try {
  const response = await topicsApi.updateTopicTimestamp(
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


# Create Topic Timer

```ts
async createTopicTimer(
  apiKey: string,
  apiUsername: string,
  id: string,
  body?: TTimerJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TTimerJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `id` | `string` | Template, Required | - |
| `body` | [`TTimerJsonRequest \| undefined`](../../doc/models/t-timer-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: topic updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TTimerJsonResponse`](../../doc/models/t-timer-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const id = 'id0';

try {
  const response = await topicsApi.createTopicTimer(
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


# Get Topic by External Id

```ts
async getTopicByExternalId(
  externalId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `externalId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const externalId = 'external_id6';

try {
  const response = await topicsApi.getTopicByExternalId(externalId);

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

