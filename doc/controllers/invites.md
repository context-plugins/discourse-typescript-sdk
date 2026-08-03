# Invites

```ts
const invitesApi = new InvitesApi(client);
```

## Class Name

`InvitesApi`

## Methods

* [Create Invite](../../doc/controllers/invites.md#create-invite)
* [Create Multiple Invites](../../doc/controllers/invites.md#create-multiple-invites)


# Create Invite

```ts
async createInvite(
  apiKey: string,
  apiUsername: string,
  body?: InvitesJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InvitesJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `body` | [`InvitesJsonRequest \| undefined`](../../doc/models/invites-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`InvitesJsonResponse`](../../doc/models/invites-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const body: InvitesJsonRequest = {
  email: 'not-a-user-yet@example.com',
  skipEmail: false,
  maxRedemptionsAllowed: 5,
  groupIds: '42,43',
  groupNames: 'foo,bar',
};

try {
  const response = await invitesApi.createInvite(
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


# Create Multiple Invites

```ts
async createMultipleInvites(
  apiKey: string,
  apiUsername: string,
  body?: InvitesCreateMultipleJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InvitesCreateMultipleJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `body` | [`InvitesCreateMultipleJsonRequest \| undefined`](../../doc/models/invites-create-multiple-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`InvitesCreateMultipleJsonResponse`](../../doc/models/invites-create-multiple-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const body: InvitesCreateMultipleJsonRequest = {
  email: '[\n  "not-a-user-yet-1@example.com",\n  "not-a-user-yet-2@example.com"\n]',
  skipEmail: false,
  maxRedemptionsAllowed: 5,
  groupIds: '42,43',
  groupNames: 'foo,bar',
};

try {
  const response = await invitesApi.createMultipleInvites(
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

