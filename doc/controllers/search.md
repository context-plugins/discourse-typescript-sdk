# Search

```ts
const searchApi = new SearchApi(client);
```

## Class Name

`SearchApi`


# Search

```ts
async search(
  q?: string,
  page?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SearchJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `q` | `string \| undefined` | Query, Optional | The query string needs to be url encoded and is made up of the following options:<br><br>- Search term. This is just a string. Usually it would be the first item in the query.<br>- `@<username>`: Use the `@` followed by the username to specify posts by this user.<br>- `#<category>`: Use the `#` followed by the category slug to search within this category.<br>- `tags:`: `api,solved` or for posts that have all the specified tags `api+solved`.<br>- `before:`: `yyyy-mm-dd`<br>- `after:`: `yyyy-mm-dd`<br>- `order:`: `latest`, `likes`, `views`, `latest_topic`<br>- `assigned:`: username (without `@`)<br>- `in:`: `title`, `likes`, `personal`, `messages`, `seen`, `unseen`, `posted`, `created`, `watching`, `tracking`, `bookmarks`, `assigned`, `unassigned`, `first`, `pinned`, `wiki`<br>- `with:`: `images`<br>- `status:`: `open`, `closed`, `public`, `archived`, `noreplies`, `single_user`, `solved`, `unsolved`<br>- `group:`: group_name or group_id<br>- `group_messages:`: group_name or group_id<br>- `min_posts:`: 1<br>- `max_posts:`: 10<br>- `min_views:`: 1<br>- `max_views:`: 10<br><br>If you are using cURL you can use the `-G` and the `--data-urlencode` flags to encode the query:<br><br>```<br>curl -i -sS -X GET -G "http://localhost:3000/search.json" \<br>--data-urlencode 'q=wordpress @scossar #fun after:2020-01-01'<br>``` |
| `page` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SearchJsonResponse`](../../doc/models/search-json-response.md).

## Example Usage

```ts
const q = 'api @blake #support tags:api after:2021-06-04 in:unseen in:open\norder:latest_topic';

const page = 1;

try {
  const response = await searchApi.search(
    q,
    page
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

