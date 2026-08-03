# Site

```ts
const siteApi = new SiteApi(client);
```

## Class Name

`SiteApi`

## Methods

* [Get Site](../../doc/controllers/site.md#get-site)
* [Get Site Basic Info](../../doc/controllers/site.md#get-site-basic-info)


# Get Site

Can be used to fetch all categories and subcategories

```ts
async getSite(
  requestOptions?: RequestOptions
): Promise<ApiResponse<SiteJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SiteJsonResponse`](../../doc/models/site-json-response.md).

## Example Usage

```ts
try {
  const response = await siteApi.getSite();

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


# Get Site Basic Info

Can be used to fetch basic info about a site

```ts
async getSiteBasicInfo(
  requestOptions?: RequestOptions
): Promise<ApiResponse<SiteBasicInfoJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SiteBasicInfoJsonResponse`](../../doc/models/site-basic-info-json-response.md).

## Example Usage

```ts
try {
  const response = await siteApi.getSiteBasicInfo();

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

