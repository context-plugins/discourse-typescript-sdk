# Notifications

```ts
const notificationsApi = new NotificationsApi(client);
```

## Class Name

`NotificationsApi`

## Methods

* [Get Notifications](../../doc/controllers/notifications.md#get-notifications)
* [Mark Notifications as Read](../../doc/controllers/notifications.md#mark-notifications-as-read)


# Get Notifications

```ts
async getNotifications(
  requestOptions?: RequestOptions
): Promise<ApiResponse<NotificationsJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: notifications

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`NotificationsJsonResponse`](../../doc/models/notifications-json-response.md).

## Example Usage

```ts
try {
  const response = await notificationsApi.getNotifications();

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


# Mark Notifications as Read

```ts
async markNotificationsAsRead(
  body?: NotificationsMarkReadJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NotificationsMarkReadJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`NotificationsMarkReadJsonRequest \| undefined`](../../doc/models/notifications-mark-read-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: notifications marked read

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`NotificationsMarkReadJsonResponse`](../../doc/models/notifications-mark-read-json-response.md).

## Example Usage

```ts
try {
  const response = await notificationsApi.markNotificationsAsRead();

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

