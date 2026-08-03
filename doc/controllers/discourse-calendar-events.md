# Discourse Calendar-Events

```ts
const discourseCalendarEventsApi = new DiscourseCalendarEventsApi(client);
```

## Class Name

`DiscourseCalendarEventsApi`

## Methods

* [List Events](../../doc/controllers/discourse-calendar-events.md#list-events)
* [Export Events ICS](../../doc/controllers/discourse-calendar-events.md#export-events-ics)


# List Events

```ts
async listEvents(
  includeDetails?: IncludeDetails,
  categoryId?: number,
  includeSubcategories?: IncludeSubcategories,
  postId?: number,
  attendingUser?: string,
  before?: string,
  after?: string,
  order?: Order,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DiscoursePostEventEventsJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `includeDetails` | [`IncludeDetails \| undefined`](../../doc/models/include-details.md) | Query, Optional | Include detailed event information (creator, invitees, stats,<br>etc.) |
| `categoryId` | `number \| undefined` | Query, Optional | Filter events by category ID |
| `includeSubcategories` | [`IncludeSubcategories \| undefined`](../../doc/models/include-subcategories.md) | Query, Optional | Include events from subcategories when filtering by category |
| `postId` | `number \| undefined` | Query, Optional | Filter to events associated with a specific post ID |
| `attendingUser` | `string \| undefined` | Query, Optional | Filter to events where the specified user (username) has RSVP'd<br>as going |
| `before` | `string \| undefined` | Query, Optional | Return events starting before this date/time (ISO 8601 format) |
| `after` | `string \| undefined` | Query, Optional | Return events starting after this date/time (ISO 8601 format) |
| `order` | [`Order \| undefined`](../../doc/models/order.md) | Query, Optional | Sort order for events by start date (default: asc) |
| `limit` | `number \| undefined` | Query, Optional | Maximum number of events to return (default: 200)<br><br>**Constraints**: `>= 1`, `<= 200` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response (detailed)

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DiscoursePostEventEventsJsonResponse`](../../doc/models/discourse-post-event-events-json-response.md).

## Example Usage

```ts
try {
  const response = await discourseCalendarEventsApi.listEvents();

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


# Export Events ICS

```ts
async exportEventsIcs(
  categoryId?: number,
  includeSubcategories?: IncludeSubcategories,
  attendingUser?: string,
  before?: string,
  after?: string,
  order?: Order,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `categoryId` | `number \| undefined` | Query, Optional | Filter events by category ID |
| `includeSubcategories` | [`IncludeSubcategories \| undefined`](../../doc/models/include-subcategories.md) | Query, Optional | Include events from subcategories when filtering by category |
| `attendingUser` | `string \| undefined` | Query, Optional | Filter to events where the specified user (username) has RSVP'd<br>as going |
| `before` | `string \| undefined` | Query, Optional | Return events starting before this date/time (ISO 8601 format) |
| `after` | `string \| undefined` | Query, Optional | Return events starting after this date/time (ISO 8601 format) |
| `order` | [`Order \| undefined`](../../doc/models/order.md) | Query, Optional | Sort order for events by start date (default: asc) |
| `limit` | `number \| undefined` | Query, Optional | Maximum number of events to return (default: 200)<br><br>**Constraints**: `>= 1`, `<= 200` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: iCalendar file

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `NodeJS.ReadableStream | Blob`.

## Example Usage

```ts
try {
  const response = await discourseCalendarEventsApi.exportEventsIcs();

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

