# Badges

```ts
const badgesApi = new BadgesApi(client);
```

## Class Name

`BadgesApi`

## Methods

* [Admin List Badges](../../doc/controllers/badges.md#admin-list-badges)
* [Create Badge](../../doc/controllers/badges.md#create-badge)
* [Update Badge](../../doc/controllers/badges.md#update-badge)
* [Delete Badge](../../doc/controllers/badges.md#delete-badge)
* [List User Badges](../../doc/controllers/badges.md#list-user-badges)


# Admin List Badges

```ts
async adminListBadges(
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminBadgesJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminBadgesJsonResponse`](../../doc/models/admin-badges-json-response.md).

## Example Usage

```ts
try {
  const response = await badgesApi.adminListBadges();

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


# Create Badge

```ts
async createBadge(
  body?: AdminBadgesJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminBadgesJsonResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AdminBadgesJsonRequest \| undefined`](../../doc/models/admin-badges-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminBadgesJsonResponse1`](../../doc/models/admin-badges-json-response-1.md).

## Example Usage

```ts
try {
  const response = await badgesApi.createBadge();

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


# Update Badge

```ts
async updateBadge(
  id: number,
  body?: AdminBadgesJsonRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminBadgesJsonResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`AdminBadgesJsonRequest1 \| undefined`](../../doc/models/admin-badges-json-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminBadgesJsonResponse2`](../../doc/models/admin-badges-json-response-2.md).

## Example Usage

```ts
const id = 112;

try {
  const response = await badgesApi.updateBadge(id);

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


# Delete Badge

```ts
async deleteBadge(
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const id = 112;

try {
  const response = await badgesApi.deleteBadge(id);

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


# List User Badges

```ts
async listUserBadges(
  username: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserBadgesJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UserBadgesJsonResponse`](../../doc/models/user-badges-json-response.md).

## Example Usage

```ts
const username = 'username0';

try {
  const response = await badgesApi.listUserBadges(username);

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

