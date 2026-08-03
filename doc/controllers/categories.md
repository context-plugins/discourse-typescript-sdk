# Categories

```ts
const categoriesApi = new CategoriesApi(client);
```

## Class Name

`CategoriesApi`

## Methods

* [Create Category](../../doc/controllers/categories.md#create-category)
* [List Categories](../../doc/controllers/categories.md#list-categories)
* [Update Category](../../doc/controllers/categories.md#update-category)
* [List Category Topics](../../doc/controllers/categories.md#list-category-topics)
* [Get Category](../../doc/controllers/categories.md#get-category)


# Create Category

```ts
async createCategory(
  body?: CategoriesJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CategoriesJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CategoriesJsonRequest \| undefined`](../../doc/models/categories-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CategoriesJsonResponse`](../../doc/models/categories-json-response.md).

## Example Usage

```ts
const body: CategoriesJsonRequest = {
  name: 'name6',
  color: '49d9e9',
  textColor: 'f0fcfd',
};

try {
  const response = await categoriesApi.createCategory(body);

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


# List Categories

```ts
async listCategories(
  includeSubcategories?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CategoriesJsonResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `includeSubcategories` | `boolean \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CategoriesJsonResponse1`](../../doc/models/categories-json-response-1.md).

## Example Usage

```ts
try {
  const response = await categoriesApi.listCategories();

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


# Update Category

```ts
async updateCategory(
  id: number,
  body?: CategoriesJsonRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CategoriesJsonResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `body` | [`CategoriesJsonRequest1 \| undefined`](../../doc/models/categories-json-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CategoriesJsonResponse2`](../../doc/models/categories-json-response-2.md).

## Example Usage

```ts
const id = 112;

const body: CategoriesJsonRequest1 = {
  name: 'name6',
  color: '49d9e9',
  textColor: 'f0fcfd',
};

try {
  const response = await categoriesApi.updateCategory(
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


# List Category Topics

```ts
async listCategoryTopics(
  slug: string,
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `slug` | `string` | Template, Required | - |
| `id` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CJsonResponse`](../../doc/models/c-json-response.md).

## Example Usage

```ts
const slug = 'slug6';

const id = 112;

try {
  const response = await categoriesApi.listCategoryTopics(
    slug,
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


# Get Category

```ts
async getCategory(
  id: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CShowJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CShowJsonResponse`](../../doc/models/c-show-json-response.md).

## Example Usage

```ts
const id = 112;

try {
  const response = await categoriesApi.getCategory(id);

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

