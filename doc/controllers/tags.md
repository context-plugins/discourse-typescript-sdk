# Tags

```ts
const tagsApi = new TagsApi(client);
```

## Class Name

`TagsApi`

## Methods

* [List Tag Groups](../../doc/controllers/tags.md#list-tag-groups)
* [Create Tag Group](../../doc/controllers/tags.md#create-tag-group)
* [Get Tag Group](../../doc/controllers/tags.md#get-tag-group)
* [Update Tag Group](../../doc/controllers/tags.md#update-tag-group)
* [List Tags](../../doc/controllers/tags.md#list-tags)
* [Get Tag](../../doc/controllers/tags.md#get-tag)


# List Tag Groups

```ts
async listTagGroups(
  requestOptions?: RequestOptions
): Promise<ApiResponse<TagGroupsJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: tags

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TagGroupsJsonResponse`](../../doc/models/tag-groups-json-response.md).

## Example Usage

```ts
try {
  const response = await tagsApi.listTagGroups();

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


# Create Tag Group

```ts
async createTagGroup(
  body?: TagGroupsJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TagGroupsJsonResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TagGroupsJsonRequest \| undefined`](../../doc/models/tag-groups-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: tag group created

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TagGroupsJsonResponse1`](../../doc/models/tag-groups-json-response-1.md).

## Example Usage

```ts
try {
  const response = await tagsApi.createTagGroup();

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


# Get Tag Group

```ts
async getTagGroup(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TagGroupsJsonResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: notifications

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TagGroupsJsonResponse2`](../../doc/models/tag-groups-json-response-2.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await tagsApi.getTagGroup(id);

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


# Update Tag Group

```ts
async updateTagGroup(
  id: string,
  body?: TagGroupsJsonRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TagGroupsJsonResponse3>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | - |
| `body` | [`TagGroupsJsonRequest1 \| undefined`](../../doc/models/tag-groups-json-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Tag group updated

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TagGroupsJsonResponse3`](../../doc/models/tag-groups-json-response-3.md).

## Example Usage

```ts
const id = 'id0';

try {
  const response = await tagsApi.updateTagGroup(id);

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


# List Tags

```ts
async listTags(
  requestOptions?: RequestOptions
): Promise<ApiResponse<TagsJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: notifications

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TagsJsonResponse`](../../doc/models/tags-json-response.md).

## Example Usage

```ts
try {
  const response = await tagsApi.listTags();

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


# Get Tag

```ts
async getTag(
  name: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TagJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: notifications

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TagJsonResponse`](../../doc/models/tag-json-response.md).

## Example Usage

```ts
const name = 'name0';

try {
  const response = await tagsApi.getTag(name);

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

