# Users

```ts
const usersApi = new UsersApi(client);
```

## Class Name

`UsersApi`

## Methods

* [Create User](../../doc/controllers/users.md#create-user)
* [Get User](../../doc/controllers/users.md#get-user)
* [Update User](../../doc/controllers/users.md#update-user)
* [Get User External Id](../../doc/controllers/users.md#get-user-external-id)
* [Get User Identiy Provider External Id](../../doc/controllers/users.md#get-user-identiy-provider-external-id)
* [Update Avatar](../../doc/controllers/users.md#update-avatar)
* [Update Email](../../doc/controllers/users.md#update-email)
* [Update Username](../../doc/controllers/users.md#update-username)
* [List Users Public](../../doc/controllers/users.md#list-users-public)
* [Admin Get User](../../doc/controllers/users.md#admin-get-user)
* [Delete User](../../doc/controllers/users.md#delete-user)
* [Activate User](../../doc/controllers/users.md#activate-user)
* [Deactivate User](../../doc/controllers/users.md#deactivate-user)
* [Suspend User](../../doc/controllers/users.md#suspend-user)
* [Silence User](../../doc/controllers/users.md#silence-user)
* [Anonymize User](../../doc/controllers/users.md#anonymize-user)
* [Log Out User](../../doc/controllers/users.md#log-out-user)
* [Refresh Gravatar](../../doc/controllers/users.md#refresh-gravatar)
* [Admin List Users](../../doc/controllers/users.md#admin-list-users)
* [Admin List Users Flag](../../doc/controllers/users.md#admin-list-users-flag)
* [List User Actions](../../doc/controllers/users.md#list-user-actions)
* [Send Password Reset Email](../../doc/controllers/users.md#send-password-reset-email)
* [Change Password](../../doc/controllers/users.md#change-password)
* [Get User Emails](../../doc/controllers/users.md#get-user-emails)


# Create User

```ts
async createUser(
  apiKey: string,
  apiUsername: string,
  body?: UsersJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UsersJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `body` | [`UsersJsonRequest \| undefined`](../../doc/models/users-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: user created

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UsersJsonResponse`](../../doc/models/users-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

try {
  const response = await usersApi.createUser(
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


# Get User

```ts
async getUser(
  apiKey: string,
  apiUsername: string,
  username: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `username` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: user with primary group response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UJsonResponse`](../../doc/models/u-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const username = 'username0';

try {
  const response = await usersApi.getUser(
    apiKey,
    apiUsername,
    username
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


# Update User

```ts
async updateUser(
  apiKey: string,
  apiUsername: string,
  username: string,
  body?: UJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UJsonResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `username` | `string` | Template, Required | - |
| `body` | [`UJsonRequest \| undefined`](../../doc/models/u-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: user updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UJsonResponse1`](../../doc/models/u-json-response-1.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const username = 'username0';

try {
  const response = await usersApi.updateUser(
    apiKey,
    apiUsername,
    username
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


# Get User External Id

```ts
async getUserExternalId(
  apiKey: string,
  apiUsername: string,
  externalId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UByExternalJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `externalId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: user response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UByExternalJsonResponse`](../../doc/models/u-by-external-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const externalId = 'external_id6';

try {
  const response = await usersApi.getUserExternalId(
    apiKey,
    apiUsername,
    externalId
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


# Get User Identiy Provider External Id

```ts
async getUserIdentiyProviderExternalId(
  apiKey: string,
  apiUsername: string,
  provider: string,
  externalId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UByExternalJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apiKey` | `string` | Header, Required | - |
| `apiUsername` | `string` | Header, Required | - |
| `provider` | `string` | Template, Required | Authentication provider name. Can be found in the provider callback<br>URL: `/auth/{provider}/callback` |
| `externalId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: user response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UByExternalJsonResponse`](../../doc/models/u-by-external-json-response.md).

## Example Usage

```ts
const apiKey = 'Api-Key6';

const apiUsername = 'Api-Username8';

const provider = 'provider8';

const externalId = 'external_id6';

try {
  const response = await usersApi.getUserIdentiyProviderExternalId(
    apiKey,
    apiUsername,
    provider,
    externalId
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


# Update Avatar

```ts
async updateAvatar(
  username: string,
  body?: UPreferencesAvatarPickJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UPreferencesAvatarPickJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Template, Required | - |
| `body` | [`UPreferencesAvatarPickJsonRequest \| undefined`](../../doc/models/u-preferences-avatar-pick-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: avatar updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UPreferencesAvatarPickJsonResponse`](../../doc/models/u-preferences-avatar-pick-json-response.md).

## Example Usage

```ts
const username = 'username0';

try {
  const response = await usersApi.updateAvatar(username);

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


# Update Email

```ts
async updateEmail(
  username: string,
  body?: UPreferencesEmailJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Template, Required | - |
| `body` | [`UPreferencesEmailJsonRequest \| undefined`](../../doc/models/u-preferences-email-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: email updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const username = 'username0';

try {
  const response = await usersApi.updateEmail(username);

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


# Update Username

```ts
async updateUsername(
  username: string,
  body?: UPreferencesUsernameJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Template, Required | - |
| `body` | [`UPreferencesUsernameJsonRequest \| undefined`](../../doc/models/u-preferences-username-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: username updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const username = 'username0';

try {
  const response = await usersApi.updateUsername(username);

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


# List Users Public

```ts
async listUsersPublic(
  period: Period1,
  order: Order2,
  asc?: Asc,
  page?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DirectoryItemsJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `period` | [`Period1`](../../doc/models/period-1.md) | Query, Required | - |
| `order` | [`Order2`](../../doc/models/order-2.md) | Query, Required | - |
| `asc` | [`Asc \| undefined`](../../doc/models/asc.md) | Query, Optional | - |
| `page` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: directory items response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DirectoryItemsJsonResponse`](../../doc/models/directory-items-json-response.md).

## Example Usage

```ts
const period = Period1.Yearly;

const order = Order2.TopicsEntered;

try {
  const response = await usersApi.listUsersPublic(
    period,
    order
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


# Admin Get User

```ts
async adminGetUser(
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminUsersJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminUsersJsonResponse`](../../doc/models/admin-users-json-response.md).

## Example Usage

```ts
const id = 112;

try {
  const response = await usersApi.adminGetUser(id);

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


# Delete User

```ts
async deleteUser(
  id: number,
  body?: AdminUsersJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminUsersJsonResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`AdminUsersJsonRequest \| undefined`](../../doc/models/admin-users-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminUsersJsonResponse1`](../../doc/models/admin-users-json-response-1.md).

## Example Usage

```ts
const id = 112;

try {
  const response = await usersApi.deleteUser(id);

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


# Activate User

```ts
async activateUser(
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminUsersActivateJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminUsersActivateJsonResponse`](../../doc/models/admin-users-activate-json-response.md).

## Example Usage

```ts
const id = 112;

try {
  const response = await usersApi.activateUser(id);

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


# Deactivate User

```ts
async deactivateUser(
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminUsersDeactivateJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminUsersDeactivateJsonResponse`](../../doc/models/admin-users-deactivate-json-response.md).

## Example Usage

```ts
const id = 112;

try {
  const response = await usersApi.deactivateUser(id);

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


# Suspend User

```ts
async suspendUser(
  id: number,
  body?: AdminUsersSuspendJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminUsersSuspendJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`AdminUsersSuspendJsonRequest \| undefined`](../../doc/models/admin-users-suspend-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminUsersSuspendJsonResponse`](../../doc/models/admin-users-suspend-json-response.md).

## Example Usage

```ts
const id = 112;

const body: AdminUsersSuspendJsonRequest = {
  suspendUntil: '2121-02-22',
  reason: 'reason8',
  postAction: 'delete',
};

try {
  const response = await usersApi.suspendUser(
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


# Silence User

```ts
async silenceUser(
  id: number,
  body?: AdminUsersSilenceJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminUsersSilenceJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`AdminUsersSilenceJsonRequest \| undefined`](../../doc/models/admin-users-silence-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminUsersSilenceJsonResponse`](../../doc/models/admin-users-silence-json-response.md).

## Example Usage

```ts
const id = 112;

const body: AdminUsersSilenceJsonRequest = {
  silencedTill: '06/01/2022 08:00:00',
  reason: 'reason8',
  postAction: 'delete',
};

try {
  const response = await usersApi.silenceUser(
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


# Anonymize User

```ts
async anonymizeUser(
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminUsersAnonymizeJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminUsersAnonymizeJsonResponse`](../../doc/models/admin-users-anonymize-json-response.md).

## Example Usage

```ts
const id = 112;

try {
  const response = await usersApi.anonymizeUser(id);

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


# Log Out User

```ts
async logOutUser(
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminUsersLogOutJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminUsersLogOutJsonResponse`](../../doc/models/admin-users-log-out-json-response.md).

## Example Usage

```ts
const id = 112;

try {
  const response = await usersApi.logOutUser(id);

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


# Refresh Gravatar

```ts
async refreshGravatar(
  username: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserAvatarRefreshGravatarJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UserAvatarRefreshGravatarJsonResponse`](../../doc/models/user-avatar-refresh-gravatar-json-response.md).

## Example Usage

```ts
const username = 'username0';

try {
  const response = await usersApi.refreshGravatar(username);

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


# Admin List Users

```ts
async adminListUsers(
  order?: Order3,
  asc?: Asc,
  page?: number,
  showEmails?: boolean,
  stats?: boolean,
  email?: string,
  ip?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminUsersJsonResponse2[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `order` | [`Order3 \| undefined`](../../doc/models/order-3.md) | Query, Optional | - |
| `asc` | [`Asc \| undefined`](../../doc/models/asc.md) | Query, Optional | - |
| `page` | `number \| undefined` | Query, Optional | - |
| `showEmails` | `boolean \| undefined` | Query, Optional | Include user email addresses in response. These requests will<br>be logged in the staff action logs. |
| `stats` | `boolean \| undefined` | Query, Optional | Include user stats information |
| `email` | `string \| undefined` | Query, Optional | Filter to the user with this email address |
| `ip` | `string \| undefined` | Query, Optional | Filter to users with this IP address |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: users response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminUsersJsonResponse2[]`](../../doc/models/admin-users-json-response-2.md).

## Example Usage

```ts
try {
  const response = await usersApi.adminListUsers();

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


# Admin List Users Flag

```ts
async adminListUsersFlag(
  flag: Flag,
  order?: Order3,
  asc?: Asc,
  page?: number,
  showEmails?: boolean,
  stats?: boolean,
  email?: string,
  ip?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminUsersListJsonResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `flag` | [`Flag`](../../doc/models/flag.md) | Template, Required | - |
| `order` | [`Order3 \| undefined`](../../doc/models/order-3.md) | Query, Optional | - |
| `asc` | [`Asc \| undefined`](../../doc/models/asc.md) | Query, Optional | - |
| `page` | `number \| undefined` | Query, Optional | - |
| `showEmails` | `boolean \| undefined` | Query, Optional | Include user email addresses in response. These requests will<br>be logged in the staff action logs. |
| `stats` | `boolean \| undefined` | Query, Optional | Include user stats information |
| `email` | `string \| undefined` | Query, Optional | Filter to the user with this email address |
| `ip` | `string \| undefined` | Query, Optional | Filter to users with this IP address |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminUsersListJsonResponse[]`](../../doc/models/admin-users-list-json-response.md).

## Example Usage

```ts
const flag = Flag.Staff;

try {
  const response = await usersApi.adminListUsersFlag(flag);

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


# List User Actions

```ts
async listUserActions(
  offset: number,
  username: string,
  filter: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UserActionsJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `offset` | `number` | Query, Required | - |
| `username` | `string` | Query, Required | - |
| `filter` | `string` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UserActionsJsonResponse`](../../doc/models/user-actions-json-response.md).

## Example Usage

```ts
const offset = 12;

const username = 'username0';

const filter = 'filter4';

try {
  const response = await usersApi.listUserActions(
    offset,
    username,
    filter
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


# Send Password Reset Email

```ts
async sendPasswordResetEmail(
  body?: SessionForgotPasswordJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SessionForgotPasswordJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SessionForgotPasswordJsonRequest \| undefined`](../../doc/models/session-forgot-password-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SessionForgotPasswordJsonResponse`](../../doc/models/session-forgot-password-json-response.md).

## Example Usage

```ts
try {
  const response = await usersApi.sendPasswordResetEmail();

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


# Change Password

```ts
async changePassword(
  token: string,
  body?: UsersPasswordResetJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string` | Template, Required | - |
| `body` | [`UsersPasswordResetJsonRequest \| undefined`](../../doc/models/users-password-reset-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const token = 'token6';

try {
  const response = await usersApi.changePassword(token);

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


# Get User Emails

```ts
async getUserEmails(
  username: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UEmailsJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UEmailsJsonResponse`](../../doc/models/u-emails-json-response.md).

## Example Usage

```ts
const username = 'username0';

try {
  const response = await usersApi.getUserEmails(username);

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

