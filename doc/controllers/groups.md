# Groups

```ts
const groupsApi = new GroupsApi(client);
```

## Class Name

`GroupsApi`

## Methods

* [Create Group](../../doc/controllers/groups.md#create-group)
* [Delete Group](../../doc/controllers/groups.md#delete-group)
* [Get Group](../../doc/controllers/groups.md#get-group)
* [Update Group](../../doc/controllers/groups.md#update-group)
* [Get Group by Id](../../doc/controllers/groups.md#get-group-by-id)
* [List Group Members](../../doc/controllers/groups.md#list-group-members)
* [Add Group Members](../../doc/controllers/groups.md#add-group-members)
* [Remove Group Members](../../doc/controllers/groups.md#remove-group-members)
* [List Groups](../../doc/controllers/groups.md#list-groups)


# Create Group

```ts
async createGroup(
  body?: AdminGroupsJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminGroupsJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AdminGroupsJsonRequest \| undefined`](../../doc/models/admin-groups-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: group created

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminGroupsJsonResponse`](../../doc/models/admin-groups-json-response.md).

## Example Usage

```ts
try {
  const response = await groupsApi.createGroup();

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


# Delete Group

```ts
async deleteGroup(
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminGroupsJsonResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminGroupsJsonResponse1`](../../doc/models/admin-groups-json-response-1.md).

## Example Usage

```ts
const id = 112;

try {
  const response = await groupsApi.deleteGroup(id);

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


# Get Group

```ts
async getGroup(
  name: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GroupsJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Template, Required | Use group name instead of id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GroupsJsonResponse`](../../doc/models/groups-json-response.md).

## Example Usage

```ts
const name = 'name';

try {
  const response = await groupsApi.getGroup(name);

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


# Update Group

```ts
async updateGroup(
  id: number,
  body?: GroupsJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GroupsJsonResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`GroupsJsonRequest \| undefined`](../../doc/models/groups-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GroupsJsonResponse1`](../../doc/models/groups-json-response-1.md).

## Example Usage

```ts
const id = 112;

try {
  const response = await groupsApi.updateGroup(id);

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


# Get Group by Id

```ts
async getGroupById(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GroupsByIdJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | Use group name instead of id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response (by id)

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GroupsByIdJsonResponse`](../../doc/models/groups-by-id-json-response.md).

## Example Usage

```ts
const id = 'name';

try {
  const response = await groupsApi.getGroupById(id);

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


# List Group Members

```ts
async listGroupMembers(
  name: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GroupsMembersJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Template, Required | Use group name instead of id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GroupsMembersJsonResponse`](../../doc/models/groups-members-json-response.md).

## Example Usage

```ts
const name = 'name';

try {
  const response = await groupsApi.listGroupMembers(name);

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


# Add Group Members

```ts
async addGroupMembers(
  id: number,
  body?: GroupsMembersJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GroupsMembersJsonResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`GroupsMembersJsonRequest \| undefined`](../../doc/models/groups-members-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GroupsMembersJsonResponse1`](../../doc/models/groups-members-json-response-1.md).

## Example Usage

```ts
const id = 112;

const body: GroupsMembersJsonRequest = {
  usernames: 'username1,username2',
};

try {
  const response = await groupsApi.addGroupMembers(
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


# Remove Group Members

```ts
async removeGroupMembers(
  id: number,
  body?: GroupsMembersJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GroupsMembersJsonResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`GroupsMembersJsonRequest \| undefined`](../../doc/models/groups-members-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GroupsMembersJsonResponse2`](../../doc/models/groups-members-json-response-2.md).

## Example Usage

```ts
const id = 112;

const body: GroupsMembersJsonRequest = {
  usernames: 'username1,username2',
};

try {
  const response = await groupsApi.removeGroupMembers(
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


# List Groups

```ts
async listGroups(
  requestOptions?: RequestOptions
): Promise<ApiResponse<GroupsJsonResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GroupsJsonResponse2`](../../doc/models/groups-json-response-2.md).

## Example Usage

```ts
try {
  const response = await groupsApi.listGroups();

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

