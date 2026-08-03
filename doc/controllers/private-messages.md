# Private Messages

```ts
const privateMessagesApi = new PrivateMessagesApi(client);
```

## Class Name

`PrivateMessagesApi`

## Methods

* [List User Private Messages](../../doc/controllers/private-messages.md#list-user-private-messages)
* [Get User Sent Private Messages](../../doc/controllers/private-messages.md#get-user-sent-private-messages)


# List User Private Messages

```ts
async listUserPrivateMessages(
  username: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TopicsPrivateMessagesJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: private messages

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TopicsPrivateMessagesJsonResponse`](../../doc/models/topics-private-messages-json-response.md).

## Example Usage

```ts
const username = 'username0';

try {
  const response = await privateMessagesApi.listUserPrivateMessages(username);

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


# Get User Sent Private Messages

```ts
async getUserSentPrivateMessages(
  username: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TopicsPrivateMessagesSentJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: private messages

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TopicsPrivateMessagesSentJsonResponse`](../../doc/models/topics-private-messages-sent-json-response.md).

## Example Usage

```ts
const username = 'username0';

try {
  const response = await privateMessagesApi.getUserSentPrivateMessages(username);

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

