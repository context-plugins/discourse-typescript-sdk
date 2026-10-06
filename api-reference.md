# Reference

> Source: [DiscourseClient](src/client.ts)

## DiscourseCalendarEvents

> Source: [DiscourseCalendarEvents](src/resources/discourse-calendar-events.ts)

<details>
<summary><code>exportEventsIcs(request: DiscourseCalendarEvents.ExportEventsIcsRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.discourseCalendarEvents.exportEventsIcs();
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discourseCalendarEvents.exportEventsIcs().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>categoryId?</code> | <code>number</code> | Filter events by category ID |
| <code>includeSubcategories?</code> | <code>[IncludeSubcategories](src/models/include-subcategories.ts)</code> | Include events from subcategories when filtering by category |
| <code>attendingUser?</code> | <code>string</code> | Filter to events where the specified user (username) has RSVP'd<br>as going |
| <code>before?</code> | <code>Date</code> (date-time) | Return events starting before this date/time (ISO 8601 format) |
| <code>after?</code> | <code>Date</code> (date-time) | Return events starting after this date/time (ISO 8601 format) |
| <code>order?</code> | <code>[Order](src/models/order.ts)</code> | Sort order for events by start date (default: asc) |
| <code>limit?</code> | <code>number</code> | Maximum number of events to return (default: 200) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discourseCalendarEvents.exportEventsIcs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.discourseCalendarEvents.exportEventsIcs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEvents(request: DiscourseCalendarEvents.ListEventsRequest, options?: RequestOptions): ApiPromise&lt;DiscoursePostEventEventsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.discourseCalendarEvents.listEvents();
  // TODO: Handle 'response' of type DiscoursePostEventEventsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.discourseCalendarEvents.listEvents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DiscoursePostEventEventsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>includeDetails?</code> | <code>[IncludeDetails](src/models/include-details.ts)</code> | Include detailed event information (creator, invitees, stats,<br>etc.) |
| <code>categoryId?</code> | <code>number</code> | Filter events by category ID |
| <code>includeSubcategories?</code> | <code>[IncludeSubcategories](src/models/include-subcategories.ts)</code> | Include events from subcategories when filtering by category |
| <code>postId?</code> | <code>number</code> | Filter to events associated with a specific post ID |
| <code>attendingUser?</code> | <code>string</code> | Filter to events where the specified user (username) has RSVP'd<br>as going |
| <code>before?</code> | <code>Date</code> (date-time) | Return events starting before this date/time (ISO 8601 format) |
| <code>after?</code> | <code>Date</code> (date-time) | Return events starting after this date/time (ISO 8601 format) |
| <code>order?</code> | <code>[Order](src/models/order.ts)</code> | Sort order for events by start date (default: asc) |
| <code>limit?</code> | <code>number</code> | Maximum number of events to return (default: 200) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.discourseCalendarEvents.listEvents(request)`

- **OnSuccess**: <code>[DiscoursePostEventEventsJsonResponse](src/models/discourse-post-event-events-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.discourseCalendarEvents.listEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DiscoursePostEventEventsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[DiscoursePostEventEventsJsonResponse](src/models/discourse-post-event-events-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Backups

> Source: [Backups](src/resources/backups.ts)

<details>
<summary><code>createBackup(request: Backups.CreateBackupRequest, options?: RequestOptions): ApiPromise&lt;AdminBackupsJsonResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.backups.createBackup();
  // TODO: Handle 'response' of type AdminBackupsJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.backups.createBackup().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminBackupsJsonResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[AdminBackupsJsonRequest](src/models/admin-backups-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.backups.createBackup(request)`

- **OnSuccess**: <code>[AdminBackupsJsonResponse1](src/models/admin-backups-json-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.backups.createBackup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminBackupsJsonResponse1, ApiError&gt;</code>, with `result.value` of type <code>[AdminBackupsJsonResponse1](src/models/admin-backups-json-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadBackup(request: Backups.DownloadBackupRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.backups.downloadBackup({ filename: "some example string", token: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.backups.downloadBackup({
  filename: "some example string",
  token: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filename</code> | <code>string</code> | - |
| <code>token</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.backups.downloadBackup(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.backups.downloadBackup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBackups(options?: RequestOptions): ApiPromise&lt;AdminBackupsJsonResponse[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.backups.getBackups();
  // TODO: Handle 'response' of type AdminBackupsJsonResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.backups.getBackups().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminBackupsJsonResponse[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.backups.getBackups()`

- **OnSuccess**: <code>[AdminBackupsJsonResponse](src/models/admin-backups-json-response.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.backups.getBackups().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminBackupsJsonResponse[], ApiError&gt;</code>, with `result.value` of type <code>[AdminBackupsJsonResponse](src/models/admin-backups-json-response.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendDownloadBackupEmail(request: Backups.SendDownloadBackupEmailRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.backups.sendDownloadBackupEmail({ filename: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.backups.sendDownloadBackupEmail({
  filename: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>filename</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.backups.sendDownloadBackupEmail(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.backups.sendDownloadBackupEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Badges

> Source: [Badges](src/resources/badges.ts)

<details>
<summary><code>adminListBadges(options?: RequestOptions): ApiPromise&lt;AdminBadgesJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.badges.adminListBadges();
  // TODO: Handle 'response' of type AdminBadgesJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.badges.adminListBadges().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminBadgesJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.badges.adminListBadges()`

- **OnSuccess**: <code>[AdminBadgesJsonResponse](src/models/admin-badges-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.badges.adminListBadges().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminBadgesJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminBadgesJsonResponse](src/models/admin-badges-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBadge(request: Badges.CreateBadgeRequest, options?: RequestOptions): ApiPromise&lt;AdminBadgesJsonResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.badges.createBadge();
  // TODO: Handle 'response' of type AdminBadgesJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.badges.createBadge().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminBadgesJsonResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[AdminBadgesJsonRequest](src/models/admin-badges-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.badges.createBadge(request)`

- **OnSuccess**: <code>[AdminBadgesJsonResponse1](src/models/admin-badges-json-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.badges.createBadge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminBadgesJsonResponse1, ApiError&gt;</code>, with `result.value` of type <code>[AdminBadgesJsonResponse1](src/models/admin-badges-json-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBadge(request: Badges.DeleteBadgeRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.badges.deleteBadge({ id: 1 });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.badges.deleteBadge({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.badges.deleteBadge(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.badges.deleteBadge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUserBadges(request: Badges.ListUserBadgesRequest, options?: RequestOptions): ApiPromise&lt;UserBadgesJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.badges.listUserBadges({ username: "some example string" });
  // TODO: Handle 'response' of type UserBadgesJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.badges.listUserBadges({ username: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserBadgesJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.badges.listUserBadges(request)`

- **OnSuccess**: <code>[UserBadgesJsonResponse](src/models/user-badges-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.badges.listUserBadges(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserBadgesJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UserBadgesJsonResponse](src/models/user-badges-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBadge(request: Badges.UpdateBadgeRequest, options?: RequestOptions): ApiPromise&lt;AdminBadgesJsonResponse2, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.badges.updateBadge({ id: 1 });
  // TODO: Handle 'response' of type AdminBadgesJsonResponse2
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.badges.updateBadge({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminBadgesJsonResponse2
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |
| <code>body?</code> | <code>[AdminBadgesJsonRequest1](src/models/admin-badges-json-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.badges.updateBadge(request)`

- **OnSuccess**: <code>[AdminBadgesJsonResponse2](src/models/admin-badges-json-response2.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.badges.updateBadge(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminBadgesJsonResponse2, ApiError&gt;</code>, with `result.value` of type <code>[AdminBadgesJsonResponse2](src/models/admin-badges-json-response2.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Categories

> Source: [Categories](src/resources/categories.ts)

<details>
<summary><code>createCategory(request: Categories.CreateCategoryRequest, options?: RequestOptions): ApiPromise&lt;CategoriesJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.createCategory();
  // TODO: Handle 'response' of type CategoriesJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categories.createCategory().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CategoriesJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[CategoriesJsonRequest](src/models/categories-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categories.createCategory(request)`

- **OnSuccess**: <code>[CategoriesJsonResponse](src/models/categories-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.categories.createCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CategoriesJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[CategoriesJsonResponse](src/models/categories-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCategory(request: Categories.GetCategoryRequest, options?: RequestOptions): ApiPromise&lt;CShowJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.getCategory({ id: 1 });
  // TODO: Handle 'response' of type CShowJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categories.getCategory({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CShowJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categories.getCategory(request)`

- **OnSuccess**: <code>[CShowJsonResponse](src/models/cshow-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.categories.getCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CShowJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[CShowJsonResponse](src/models/cshow-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSite(options?: RequestOptions): ApiPromise&lt;SiteJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Can be used to fetch all categories and subcategories

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.getSite();
  // TODO: Handle 'response' of type SiteJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categories.getSite().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SiteJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categories.getSite()`

- **OnSuccess**: <code>[SiteJsonResponse](src/models/site-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.categories.getSite().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SiteJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[SiteJsonResponse](src/models/site-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCategories(request: Categories.ListCategoriesRequest, options?: RequestOptions): ApiPromise&lt;CategoriesJsonResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.listCategories();
  // TODO: Handle 'response' of type CategoriesJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categories.listCategories().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CategoriesJsonResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>includeSubcategories?</code> | <code>boolean</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categories.listCategories(request)`

- **OnSuccess**: <code>[CategoriesJsonResponse1](src/models/categories-json-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.categories.listCategories(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CategoriesJsonResponse1, ApiError&gt;</code>, with `result.value` of type <code>[CategoriesJsonResponse1](src/models/categories-json-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCategoryTopics(request: Categories.ListCategoryTopicsRequest, options?: RequestOptions): ApiPromise&lt;CJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.listCategoryTopics({ slug: "some example string", id: 1 });
  // TODO: Handle 'response' of type CJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categories.listCategoryTopics({
  slug: "some example string",
  id: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>string</code> | - |
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categories.listCategoryTopics(request)`

- **OnSuccess**: <code>[CJsonResponse](src/models/cjson-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.categories.listCategoryTopics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[CJsonResponse](src/models/cjson-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCategory(request: Categories.UpdateCategoryRequest, options?: RequestOptions): ApiPromise&lt;CategoriesJsonResponse2, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.updateCategory({ id: 1 });
  // TODO: Handle 'response' of type CategoriesJsonResponse2
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categories.updateCategory({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CategoriesJsonResponse2
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |
| <code>body?</code> | <code>[CategoriesJsonRequest1](src/models/categories-json-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categories.updateCategory(request)`

- **OnSuccess**: <code>[CategoriesJsonResponse2](src/models/categories-json-response2.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.categories.updateCategory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CategoriesJsonResponse2, ApiError&gt;</code>, with `result.value` of type <code>[CategoriesJsonResponse2](src/models/categories-json-response2.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Groups

> Source: [Groups](src/resources/groups.ts)

<details>
<summary><code>addGroupMembers(request: Groups.AddGroupMembersRequest, options?: RequestOptions): ApiPromise&lt;GroupsMembersJsonResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.addGroupMembers({ id: 1 });
  // TODO: Handle 'response' of type GroupsMembersJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups.addGroupMembers({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupsMembersJsonResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |
| <code>body?</code> | <code>[GroupsMembersJsonRequest](src/models/groups-members-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.addGroupMembers(request)`

- **OnSuccess**: <code>[GroupsMembersJsonResponse1](src/models/groups-members-json-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.groups.addGroupMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupsMembersJsonResponse1, ApiError&gt;</code>, with `result.value` of type <code>[GroupsMembersJsonResponse1](src/models/groups-members-json-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createGroup(request: Groups.CreateGroupRequest, options?: RequestOptions): ApiPromise&lt;AdminGroupsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.createGroup();
  // TODO: Handle 'response' of type AdminGroupsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups.createGroup().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminGroupsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[AdminGroupsJsonRequest](src/models/admin-groups-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.createGroup(request)`

- **OnSuccess**: <code>[AdminGroupsJsonResponse](src/models/admin-groups-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.groups.createGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminGroupsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminGroupsJsonResponse](src/models/admin-groups-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteGroup(request: Groups.DeleteGroupRequest, options?: RequestOptions): ApiPromise&lt;AdminGroupsJsonResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.deleteGroup({ id: 1 });
  // TODO: Handle 'response' of type AdminGroupsJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups.deleteGroup({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminGroupsJsonResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.deleteGroup(request)`

- **OnSuccess**: <code>[AdminGroupsJsonResponse1](src/models/admin-groups-json-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.groups.deleteGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminGroupsJsonResponse1, ApiError&gt;</code>, with `result.value` of type <code>[AdminGroupsJsonResponse1](src/models/admin-groups-json-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroup(request: Groups.GetGroupRequest, options?: RequestOptions): ApiPromise&lt;GroupsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.getGroup({ name: "name" });
  // TODO: Handle 'response' of type GroupsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups.getGroup({ name: "name" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>string</code> | Use group name instead of id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.getGroup(request)`

- **OnSuccess**: <code>[GroupsJsonResponse](src/models/groups-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.groups.getGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[GroupsJsonResponse](src/models/groups-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupById(request: Groups.GetGroupByIdRequest, options?: RequestOptions): ApiPromise&lt;GroupsByIdJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.getGroupById({ id: "name" });
  // TODO: Handle 'response' of type GroupsByIdJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups.getGroupById({ id: "name" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupsByIdJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Use group name instead of id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.getGroupById(request)`

- **OnSuccess**: <code>[GroupsByIdJsonResponse](src/models/groups-by-id-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.groups.getGroupById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupsByIdJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[GroupsByIdJsonResponse](src/models/groups-by-id-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGroupMembers(request: Groups.ListGroupMembersRequest, options?: RequestOptions): ApiPromise&lt;GroupsMembersJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.listGroupMembers({ name: "name" });
  // TODO: Handle 'response' of type GroupsMembersJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups.listGroupMembers({ name: "name" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupsMembersJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>string</code> | Use group name instead of id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.listGroupMembers(request)`

- **OnSuccess**: <code>[GroupsMembersJsonResponse](src/models/groups-members-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.groups.listGroupMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupsMembersJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[GroupsMembersJsonResponse](src/models/groups-members-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGroups(options?: RequestOptions): ApiPromise&lt;GroupsJsonResponse2, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.listGroups();
  // TODO: Handle 'response' of type GroupsJsonResponse2
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups.listGroups().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupsJsonResponse2
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.listGroups()`

- **OnSuccess**: <code>[GroupsJsonResponse2](src/models/groups-json-response2.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.groups.listGroups().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupsJsonResponse2, ApiError&gt;</code>, with `result.value` of type <code>[GroupsJsonResponse2](src/models/groups-json-response2.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeGroupMembers(request: Groups.RemoveGroupMembersRequest, options?: RequestOptions): ApiPromise&lt;GroupsMembersJsonResponse2, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.removeGroupMembers({ id: 1 });
  // TODO: Handle 'response' of type GroupsMembersJsonResponse2
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups.removeGroupMembers({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupsMembersJsonResponse2
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |
| <code>body?</code> | <code>[GroupsMembersJsonRequest](src/models/groups-members-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.removeGroupMembers(request)`

- **OnSuccess**: <code>[GroupsMembersJsonResponse2](src/models/groups-members-json-response2.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.groups.removeGroupMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupsMembersJsonResponse2, ApiError&gt;</code>, with `result.value` of type <code>[GroupsMembersJsonResponse2](src/models/groups-members-json-response2.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGroup(request: Groups.UpdateGroupRequest, options?: RequestOptions): ApiPromise&lt;GroupsJsonResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.updateGroup({ id: 1 });
  // TODO: Handle 'response' of type GroupsJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.groups.updateGroup({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GroupsJsonResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |
| <code>body?</code> | <code>[GroupsJsonRequest](src/models/groups-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.groups.updateGroup(request)`

- **OnSuccess**: <code>[GroupsJsonResponse1](src/models/groups-json-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.groups.updateGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GroupsJsonResponse1, ApiError&gt;</code>, with `result.value` of type <code>[GroupsJsonResponse1](src/models/groups-json-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Invites

> Source: [Invites](src/resources/invites.ts)

<details>
<summary><code>createInvite(request: Invites.CreateInviteRequest, options?: RequestOptions): ApiPromise&lt;InvitesJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invites.createInvite({
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type InvitesJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invites.createInvite({
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvitesJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[InvitesJsonRequest](src/models/invites-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invites.createInvite(request)`

- **OnSuccess**: <code>[InvitesJsonResponse](src/models/invites-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.invites.createInvite(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvitesJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[InvitesJsonResponse](src/models/invites-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createMultipleInvites(request: Invites.CreateMultipleInvitesRequest, options?: RequestOptions): ApiPromise&lt;InvitesCreateMultipleJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invites.createMultipleInvites({
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type InvitesCreateMultipleJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invites.createMultipleInvites({
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvitesCreateMultipleJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[InvitesCreateMultipleJsonRequest](src/models/invites-create-multiple-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invites.createMultipleInvites(request)`

- **OnSuccess**: <code>[InvitesCreateMultipleJsonResponse](src/models/invites-create-multiple-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.invites.createMultipleInvites(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvitesCreateMultipleJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[InvitesCreateMultipleJsonResponse](src/models/invites-create-multiple-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>inviteGroupToTopic(request: Invites.InviteGroupToTopicRequest, options?: RequestOptions): ApiPromise&lt;TInviteGroupJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invites.inviteGroupToTopic({
    id: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type TInviteGroupJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invites.inviteGroupToTopic({
  id: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TInviteGroupJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[TInviteGroupJsonRequest](src/models/tinvite-group-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invites.inviteGroupToTopic(request)`

- **OnSuccess**: <code>[TInviteGroupJsonResponse](src/models/tinvite-group-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.invites.inviteGroupToTopic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TInviteGroupJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TInviteGroupJsonResponse](src/models/tinvite-group-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>inviteToTopic(request: Invites.InviteToTopicRequest, options?: RequestOptions): ApiPromise&lt;TInviteJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invites.inviteToTopic({
    id: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type TInviteJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invites.inviteToTopic({
  id: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TInviteJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[TInviteJsonRequest](src/models/tinvite-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invites.inviteToTopic(request)`

- **OnSuccess**: <code>[TInviteJsonResponse](src/models/tinvite-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.invites.inviteToTopic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TInviteJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TInviteJsonResponse](src/models/tinvite-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Notifications

> Source: [Notifications](src/resources/notifications.ts)

<details>
<summary><code>getNotifications(options?: RequestOptions): ApiPromise&lt;NotificationsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.getNotifications();
  // TODO: Handle 'response' of type NotificationsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.getNotifications().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.getNotifications()`

- **OnSuccess**: <code>[NotificationsJsonResponse](src/models/notifications-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.notifications.getNotifications().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[NotificationsJsonResponse](src/models/notifications-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>markNotificationsAsRead(request: Notifications.MarkNotificationsAsReadRequest, options?: RequestOptions): ApiPromise&lt;NotificationsMarkReadJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.markNotificationsAsRead();
  // TODO: Handle 'response' of type NotificationsMarkReadJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.notifications.markNotificationsAsRead().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NotificationsMarkReadJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[NotificationsMarkReadJsonRequest](src/models/notifications-mark-read-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.notifications.markNotificationsAsRead(request)`

- **OnSuccess**: <code>[NotificationsMarkReadJsonResponse](src/models/notifications-mark-read-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.notifications.markNotificationsAsRead(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NotificationsMarkReadJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[NotificationsMarkReadJsonResponse](src/models/notifications-mark-read-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Posts

> Source: [Posts](src/resources/posts.ts)

<details>
<summary><code>createTopicPostPm(request: Posts.CreateTopicPostPmRequest, options?: RequestOptions): ApiPromise&lt;PostsJsonResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.createTopicPostPm({
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type PostsJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts.createTopicPostPm({
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostsJsonResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PostsJsonRequest](src/models/posts-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.createTopicPostPm(request)`

- **OnSuccess**: <code>[PostsJsonResponse1](src/models/posts-json-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.posts.createTopicPostPm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostsJsonResponse1, ApiError&gt;</code>, with `result.value` of type <code>[PostsJsonResponse1](src/models/posts-json-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePost(request: Posts.DeletePostRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.posts.deletePost({ id: 1, apiKey: "some example string", apiUsername: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts.deletePost({
  id: 1,
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PostsJsonRequest2](src/models/posts-json-request2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.deletePost(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.posts.deletePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPost(request: Posts.GetPostRequest, options?: RequestOptions): ApiPromise&lt;PostsJsonResponse2, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint can be used to get the number of likes on a post using the
`actions_summary` property in the response. `actions_summary` responses
with the id of `2` signify a `like`. If there are no `actions_summary`
items with the id of `2`, that means there are 0 likes. Other ids likely
refer to various different flag types.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.getPost({ id: "some example string" });
  // TODO: Handle 'response' of type PostsJsonResponse2
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts.getPost({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostsJsonResponse2
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.getPost(request)`

- **OnSuccess**: <code>[PostsJsonResponse2](src/models/posts-json-response2.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.posts.getPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostsJsonResponse2, ApiError&gt;</code>, with `result.value` of type <code>[PostsJsonResponse2](src/models/posts-json-response2.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPosts(request: Posts.ListPostsRequest, options?: RequestOptions): ApiPromise&lt;PostsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.listPosts();
  // TODO: Handle 'response' of type PostsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts.listPosts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>before?</code> | <code>number</code> | Load posts with an id lower than this value. Useful for pagination. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.listPosts(request)`

- **OnSuccess**: <code>[PostsJsonResponse](src/models/posts-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.posts.listPosts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[PostsJsonResponse](src/models/posts-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>lockPost(request: Posts.LockPostRequest, options?: RequestOptions): ApiPromise&lt;PostsLockedJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.lockPost({
    id: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type PostsLockedJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts.lockPost({
  id: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostsLockedJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PostsLockedJsonRequest](src/models/posts-locked-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.lockPost(request)`

- **OnSuccess**: <code>[PostsLockedJsonResponse](src/models/posts-locked-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.posts.lockPost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostsLockedJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[PostsLockedJsonResponse](src/models/posts-locked-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>performPostAction(request: Posts.PerformPostActionRequest, options?: RequestOptions): ApiPromise&lt;PostActionsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.performPostAction({
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type PostActionsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts.performPostAction({
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostActionsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PostActionsJsonRequest](src/models/post-actions-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.performPostAction(request)`

- **OnSuccess**: <code>[PostActionsJsonResponse](src/models/post-actions-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.posts.performPostAction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostActionsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[PostActionsJsonResponse](src/models/post-actions-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postReplies(request: Posts.PostRepliesRequest, options?: RequestOptions): ApiPromise&lt;PostsRepliesJsonResponse[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.postReplies({ id: "some example string" });
  // TODO: Handle 'response' of type PostsRepliesJsonResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts.postReplies({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostsRepliesJsonResponse[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.postReplies(request)`

- **OnSuccess**: <code>[PostsRepliesJsonResponse](src/models/posts-replies-json-response.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.posts.postReplies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostsRepliesJsonResponse[], ApiError&gt;</code>, with `result.value` of type <code>[PostsRepliesJsonResponse](src/models/posts-replies-json-response.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePost(request: Posts.UpdatePostRequest, options?: RequestOptions): ApiPromise&lt;PostsJsonResponse3, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.updatePost({
    id: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type PostsJsonResponse3
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.posts.updatePost({
  id: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostsJsonResponse3
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PostsJsonRequest1](src/models/posts-json-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.posts.updatePost(request)`

- **OnSuccess**: <code>[PostsJsonResponse3](src/models/posts-json-response3.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.posts.updatePost(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostsJsonResponse3, ApiError&gt;</code>, with `result.value` of type <code>[PostsJsonResponse3](src/models/posts-json-response3.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Topics

> Source: [Topics](src/resources/topics.ts)

<details>
<summary><code>bookmarkTopic(request: Topics.BookmarkTopicRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.topics.bookmarkTopic({
    id: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.topics.bookmarkTopic({
  id: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.topics.bookmarkTopic(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.topics.bookmarkTopic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTopicPostPm(request: Topics.CreateTopicPostPmRequest, options?: RequestOptions): ApiPromise&lt;PostsJsonResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.createTopicPostPm({
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type PostsJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.topics.createTopicPostPm({
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostsJsonResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PostsJsonRequest](src/models/posts-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.topics.createTopicPostPm(request)`

- **OnSuccess**: <code>[PostsJsonResponse1](src/models/posts-json-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.topics.createTopicPostPm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostsJsonResponse1, ApiError&gt;</code>, with `result.value` of type <code>[PostsJsonResponse1](src/models/posts-json-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTopicTimer(request: Topics.CreateTopicTimerRequest, options?: RequestOptions): ApiPromise&lt;TTimerJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.createTopicTimer({
    id: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type TTimerJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.topics.createTopicTimer({
  id: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TTimerJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[TTimerJsonRequest](src/models/ttimer-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.topics.createTopicTimer(request)`

- **OnSuccess**: <code>[TTimerJsonResponse](src/models/ttimer-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.topics.createTopicTimer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TTimerJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TTimerJsonResponse](src/models/ttimer-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSpecificPostsFromTopic(request: Topics.GetSpecificPostsFromTopicRequest, options?: RequestOptions): ApiPromise&lt;TPostsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.getSpecificPostsFromTopic({
    id: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type TPostsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.topics.getSpecificPostsFromTopic({
  id: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TPostsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.topics.getSpecificPostsFromTopic(request)`

- **OnSuccess**: <code>[TPostsJsonResponse](src/models/tposts-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.topics.getSpecificPostsFromTopic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TPostsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TPostsJsonResponse](src/models/tposts-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTopic(request: Topics.GetTopicRequest, options?: RequestOptions): ApiPromise&lt;TJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.getTopic({
    id: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type TJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.topics.getTopic({
  id: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.topics.getTopic(request)`

- **OnSuccess**: <code>[TJsonResponse](src/models/tjson-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.topics.getTopic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TJsonResponse](src/models/tjson-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTopicByExternalId(request: Topics.GetTopicByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Topics.GetTopicByExternalIdError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.topics.getTopicByExternalId({ externalId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Topics.GetTopicByExternalIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.topics.getTopicByExternalId({ externalId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>externalId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.topics.getTopicByExternalId(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Topics.GetTopicByExternalIdError](src/resources/topics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.topics.getTopicByExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Topics.GetTopicByExternalIdError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>inviteGroupToTopic(request: Topics.InviteGroupToTopicRequest, options?: RequestOptions): ApiPromise&lt;TInviteGroupJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.inviteGroupToTopic({
    id: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type TInviteGroupJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.topics.inviteGroupToTopic({
  id: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TInviteGroupJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[TInviteGroupJsonRequest](src/models/tinvite-group-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.topics.inviteGroupToTopic(request)`

- **OnSuccess**: <code>[TInviteGroupJsonResponse](src/models/tinvite-group-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.topics.inviteGroupToTopic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TInviteGroupJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TInviteGroupJsonResponse](src/models/tinvite-group-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>inviteToTopic(request: Topics.InviteToTopicRequest, options?: RequestOptions): ApiPromise&lt;TInviteJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.inviteToTopic({
    id: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type TInviteJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.topics.inviteToTopic({
  id: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TInviteJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[TInviteJsonRequest](src/models/tinvite-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.topics.inviteToTopic(request)`

- **OnSuccess**: <code>[TInviteJsonResponse](src/models/tinvite-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.topics.inviteToTopic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TInviteJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TInviteJsonResponse](src/models/tinvite-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLatestTopics(request: Topics.ListLatestTopicsRequest, options?: RequestOptions): ApiPromise&lt;LatestJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.listLatestTopics({
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type LatestJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.topics.listLatestTopics({
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LatestJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order?</code> | <code>string</code> | Enum: `default`, `created`, `activity`, `views`, `posts`, `category`,<br>`likes`, `op_likes`, `posters` |
| <code>ascending?</code> | <code>string</code> | Defaults to `desc`, add `ascending=true` to sort asc |
| <code>perPage?</code> | <code>number</code> | Maximum number of topics returned, between 1-100 |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.topics.listLatestTopics(request)`

- **OnSuccess**: <code>[LatestJsonResponse](src/models/latest-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.topics.listLatestTopics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LatestJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[LatestJsonResponse](src/models/latest-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTopTopics(request: Topics.ListTopTopicsRequest, options?: RequestOptions): ApiPromise&lt;TopJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.listTopTopics({
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type TopJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.topics.listTopTopics({
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TopJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>period?</code> | <code>string</code> | Enum: `all`, `yearly`, `quarterly`, `monthly`, `weekly`, `daily` |
| <code>perPage?</code> | <code>number</code> | Maximum number of topics returned, between 1-100 |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.topics.listTopTopics(request)`

- **OnSuccess**: <code>[TopJsonResponse](src/models/top-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.topics.listTopTopics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TopJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TopJsonResponse](src/models/top-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeTopic(request: Topics.RemoveTopicRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.topics.removeTopic({
    id: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.topics.removeTopic({
  id: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.topics.removeTopic(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.topics.removeTopic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setNotificationLevel(request: Topics.SetNotificationLevelRequest, options?: RequestOptions): ApiPromise&lt;TNotificationsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.setNotificationLevel({
    id: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type TNotificationsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.topics.setNotificationLevel({
  id: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TNotificationsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[TNotificationsJsonRequest](src/models/tnotifications-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.topics.setNotificationLevel(request)`

- **OnSuccess**: <code>[TNotificationsJsonResponse](src/models/tnotifications-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.topics.setNotificationLevel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TNotificationsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TNotificationsJsonResponse](src/models/tnotifications-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTopic(request: Topics.UpdateTopicRequest, options?: RequestOptions): ApiPromise&lt;TJsonResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.updateTopic({
    id: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type TJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.topics.updateTopic({
  id: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TJsonResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[TJsonRequest](src/models/tjson-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.topics.updateTopic(request)`

- **OnSuccess**: <code>[TJsonResponse1](src/models/tjson-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.topics.updateTopic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TJsonResponse1, ApiError&gt;</code>, with `result.value` of type <code>[TJsonResponse1](src/models/tjson-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTopicStatus(request: Topics.UpdateTopicStatusRequest, options?: RequestOptions): ApiPromise&lt;TStatusJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.updateTopicStatus({
    id: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type TStatusJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.topics.updateTopicStatus({
  id: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TStatusJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[TStatusJsonRequest](src/models/tstatus-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.topics.updateTopicStatus(request)`

- **OnSuccess**: <code>[TStatusJsonResponse](src/models/tstatus-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.topics.updateTopicStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TStatusJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TStatusJsonResponse](src/models/tstatus-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTopicTimestamp(request: Topics.UpdateTopicTimestampRequest, options?: RequestOptions): ApiPromise&lt;TChangeTimestampJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.updateTopicTimestamp({
    id: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type TChangeTimestampJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.topics.updateTopicTimestamp({
  id: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TChangeTimestampJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[TChangeTimestampJsonRequest](src/models/tchange-timestamp-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.topics.updateTopicTimestamp(request)`

- **OnSuccess**: <code>[TChangeTimestampJsonResponse](src/models/tchange-timestamp-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.topics.updateTopicTimestamp(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TChangeTimestampJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TChangeTimestampJsonResponse](src/models/tchange-timestamp-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## PrivateMessages

> Source: [PrivateMessages](src/resources/private-messages.ts)

<details>
<summary><code>createTopicPostPm(request: PrivateMessages.CreateTopicPostPmRequest, options?: RequestOptions): ApiPromise&lt;PostsJsonResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.privateMessages.createTopicPostPm({
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type PostsJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.privateMessages.createTopicPostPm({
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PostsJsonResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[PostsJsonRequest](src/models/posts-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.privateMessages.createTopicPostPm(request)`

- **OnSuccess**: <code>[PostsJsonResponse1](src/models/posts-json-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.privateMessages.createTopicPostPm(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PostsJsonResponse1, ApiError&gt;</code>, with `result.value` of type <code>[PostsJsonResponse1](src/models/posts-json-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserSentPrivateMessages(request: PrivateMessages.GetUserSentPrivateMessagesRequest, options?: RequestOptions): ApiPromise&lt;TopicsPrivateMessagesSentJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.privateMessages.getUserSentPrivateMessages({
    username: "some example string",
  });
  // TODO: Handle 'response' of type TopicsPrivateMessagesSentJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.privateMessages.getUserSentPrivateMessages({
  username: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TopicsPrivateMessagesSentJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.privateMessages.getUserSentPrivateMessages(request)`

- **OnSuccess**: <code>[TopicsPrivateMessagesSentJsonResponse](src/models/topics-private-messages-sent-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.privateMessages.getUserSentPrivateMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TopicsPrivateMessagesSentJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TopicsPrivateMessagesSentJsonResponse](src/models/topics-private-messages-sent-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUserPrivateMessages(request: PrivateMessages.ListUserPrivateMessagesRequest, options?: RequestOptions): ApiPromise&lt;TopicsPrivateMessagesJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.privateMessages.listUserPrivateMessages({ username: "some example string" });
  // TODO: Handle 'response' of type TopicsPrivateMessagesJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.privateMessages.listUserPrivateMessages({
  username: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TopicsPrivateMessagesJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.privateMessages.listUserPrivateMessages(request)`

- **OnSuccess**: <code>[TopicsPrivateMessagesJsonResponse](src/models/topics-private-messages-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.privateMessages.listUserPrivateMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TopicsPrivateMessagesJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TopicsPrivateMessagesJsonResponse](src/models/topics-private-messages-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>search(request: Search.SearchRequest, options?: RequestOptions): ApiPromise&lt;SearchJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.search({
    q: "api @blake #support tags:api after:2021-06-04 in:unseen in:open\norder:latest_topic",
    page: 1,
  });
  // TODO: Handle 'response' of type SearchJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.search({
  q: "api @blake #support tags:api after:2021-06-04 in:unseen in:open\norder:latest_topic",
  page: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q?</code> | <code>string</code> | The query string needs to be url encoded and is made up of the following options:<br>- Search term. This is just a string. Usually it would be the first item in the query.<br>- `@<username>`: Use the `@` followed by the username to specify posts by this user.<br>- `#<category>`: Use the `#` followed by the category slug to search within this category.<br>- `tags:`: `api,solved` or for posts that have all the specified tags `api+solved`.<br>- `before:`: `yyyy-mm-dd`<br>- `after:`: `yyyy-mm-dd`<br>- `order:`: `latest`, `likes`, `views`, `latest_topic`<br>- `assigned:`: username (without `@`)<br>- `in:`: `title`, `likes`, `personal`, `messages`, `seen`, `unseen`, `posted`, `created`, `watching`, `tracking`, `bookmarks`, `assigned`, `unassigned`, `first`, `pinned`, `wiki`<br>- `with:`: `images`<br>- `status:`: `open`, `closed`, `public`, `archived`, `noreplies`, `single_user`, `solved`, `unsolved`<br>- `group:`: group_name or group_id<br>- `group_messages:`: group_name or group_id<br>- `min_posts:`: 1<br>- `max_posts:`: 10<br>- `min_views:`: 1<br>- `max_views:`: 10<br><br>If you are using cURL you can use the `-G` and the `--data-urlencode` flags to encode the query:<br><br>```<br>curl -i -sS -X GET -G "http://localhost:3000/search.json" \<br>--data-urlencode 'q=wordpress @scossar #fun after:2020-01-01'<br>``` |
| <code>page?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.search(request)`

- **OnSuccess**: <code>[SearchJsonResponse](src/models/search-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.search.search(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[SearchJsonResponse](src/models/search-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Site

> Source: [Site](src/resources/site.ts)

<details>
<summary><code>getSite(options?: RequestOptions): ApiPromise&lt;SiteJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Can be used to fetch all categories and subcategories

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.site.getSite();
  // TODO: Handle 'response' of type SiteJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.site.getSite().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SiteJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.site.getSite()`

- **OnSuccess**: <code>[SiteJsonResponse](src/models/site-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.site.getSite().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SiteJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[SiteJsonResponse](src/models/site-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSiteBasicInfo(options?: RequestOptions): ApiPromise&lt;SiteBasicInfoJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Can be used to fetch basic info about a site

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.site.getSiteBasicInfo();
  // TODO: Handle 'response' of type SiteBasicInfoJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.site.getSiteBasicInfo().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SiteBasicInfoJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.site.getSiteBasicInfo()`

- **OnSuccess**: <code>[SiteBasicInfoJsonResponse](src/models/site-basic-info-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.site.getSiteBasicInfo().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SiteBasicInfoJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[SiteBasicInfoJsonResponse](src/models/site-basic-info-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/resources/tags.ts)

<details>
<summary><code>createTagGroup(request: Tags.CreateTagGroupRequest, options?: RequestOptions): ApiPromise&lt;TagGroupsJsonResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.createTagGroup();
  // TODO: Handle 'response' of type TagGroupsJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.createTagGroup().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagGroupsJsonResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[TagGroupsJsonRequest](src/models/tag-groups-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.createTagGroup(request)`

- **OnSuccess**: <code>[TagGroupsJsonResponse1](src/models/tag-groups-json-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tags.createTagGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagGroupsJsonResponse1, ApiError&gt;</code>, with `result.value` of type <code>[TagGroupsJsonResponse1](src/models/tag-groups-json-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTag(request: Tags.GetTagRequest, options?: RequestOptions): ApiPromise&lt;TagJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.getTag({ name: "some example string" });
  // TODO: Handle 'response' of type TagJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.getTag({ name: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.getTag(request)`

- **OnSuccess**: <code>[TagJsonResponse](src/models/tag-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tags.getTag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TagJsonResponse](src/models/tag-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTagGroup(request: Tags.GetTagGroupRequest, options?: RequestOptions): ApiPromise&lt;TagGroupsJsonResponse2, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.getTagGroup({ id: "some example string" });
  // TODO: Handle 'response' of type TagGroupsJsonResponse2
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.getTagGroup({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagGroupsJsonResponse2
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.getTagGroup(request)`

- **OnSuccess**: <code>[TagGroupsJsonResponse2](src/models/tag-groups-json-response2.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tags.getTagGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagGroupsJsonResponse2, ApiError&gt;</code>, with `result.value` of type <code>[TagGroupsJsonResponse2](src/models/tag-groups-json-response2.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTagGroups(options?: RequestOptions): ApiPromise&lt;TagGroupsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.listTagGroups();
  // TODO: Handle 'response' of type TagGroupsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.listTagGroups().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagGroupsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.listTagGroups()`

- **OnSuccess**: <code>[TagGroupsJsonResponse](src/models/tag-groups-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tags.listTagGroups().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagGroupsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TagGroupsJsonResponse](src/models/tag-groups-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTags(options?: RequestOptions): ApiPromise&lt;TagsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.listTags();
  // TODO: Handle 'response' of type TagsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.listTags().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.listTags()`

- **OnSuccess**: <code>[TagsJsonResponse](src/models/tags-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tags.listTags().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[TagsJsonResponse](src/models/tags-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTagGroup(request: Tags.UpdateTagGroupRequest, options?: RequestOptions): ApiPromise&lt;TagGroupsJsonResponse3, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.updateTagGroup({ id: "some example string" });
  // TODO: Handle 'response' of type TagGroupsJsonResponse3
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.updateTagGroup({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagGroupsJsonResponse3
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | - |
| <code>body?</code> | <code>[TagGroupsJsonRequest1](src/models/tag-groups-json-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.updateTagGroup(request)`

- **OnSuccess**: <code>[TagGroupsJsonResponse3](src/models/tag-groups-json-response3.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.tags.updateTagGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagGroupsJsonResponse3, ApiError&gt;</code>, with `result.value` of type <code>[TagGroupsJsonResponse3](src/models/tag-groups-json-response3.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Uploads

> Source: [Uploads](src/resources/uploads.ts)

<details>
<summary><code>abortMultipart(request: Uploads.AbortMultipartRequest, options?: RequestOptions): ApiPromise&lt;UploadsAbortMultipartJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint aborts the multipart upload initiated with /create-multipart.
This should be used when cancelling the upload. It does not matter if parts
were already uploaded into the external storage provider.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.abortMultipart();
  // TODO: Handle 'response' of type UploadsAbortMultipartJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploads.abortMultipart().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadsAbortMultipartJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UploadsAbortMultipartJsonRequest](src/models/uploads-abort-multipart-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploads.abortMultipart(request)`

- **OnSuccess**: <code>[UploadsAbortMultipartJsonResponse](src/models/uploads-abort-multipart-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.uploads.abortMultipart(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadsAbortMultipartJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UploadsAbortMultipartJsonResponse](src/models/uploads-abort-multipart-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchPresignMultipartParts(request: Uploads.BatchPresignMultipartPartsRequest, options?: RequestOptions): ApiPromise&lt;UploadsBatchPresignMultipartPartsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Multipart uploads are uploaded in chunks or parts to individual presigned
URLs, similar to the one generated by /generate-presigned-put. The part
numbers provided must be between 1 and 10000. The total number of parts
will depend on the chunk size in bytes that you intend to use to upload
each chunk. For example a 12MB file may have 2 5MB chunks and a final
2MB chunk, for part numbers 1, 2, and 3.

This endpoint will return a presigned URL for each part number provided,
which you can then use to send PUT requests for the binary chunk corresponding
to that part. When the part is uploaded, the provider should return an
ETag for the part, and this should be stored along with the part number,
because this is needed to complete the multipart upload.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.batchPresignMultipartParts();
  // TODO: Handle 'response' of type UploadsBatchPresignMultipartPartsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploads.batchPresignMultipartParts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadsBatchPresignMultipartPartsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UploadsBatchPresignMultipartPartsJsonRequest](src/models/uploads-batch-presign-multipart-parts-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploads.batchPresignMultipartParts(request)`

- **OnSuccess**: <code>[UploadsBatchPresignMultipartPartsJsonResponse](src/models/uploads-batch-presign-multipart-parts-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.uploads.batchPresignMultipartParts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadsBatchPresignMultipartPartsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UploadsBatchPresignMultipartPartsJsonResponse](src/models/uploads-batch-presign-multipart-parts-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>completeExternalUpload(request: Uploads.CompleteExternalUploadRequest, options?: RequestOptions): ApiPromise&lt;UploadsCompleteExternalUploadJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Completes an external upload initialized with /get-presigned-put. The
file will be moved from its temporary location in external storage to
a final destination in the S3 bucket. An Upload record will also be
created in the database in most cases.

If a sha1-checksum was provided in the initial request it will also
be compared with the uploaded file in storage to make sure the same
file was uploaded. The file size will be compared for the same reason.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.completeExternalUpload();
  // TODO: Handle 'response' of type UploadsCompleteExternalUploadJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploads.completeExternalUpload().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadsCompleteExternalUploadJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UploadsCompleteExternalUploadJsonRequest](src/models/uploads-complete-external-upload-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploads.completeExternalUpload(request)`

- **OnSuccess**: <code>[UploadsCompleteExternalUploadJsonResponse](src/models/uploads-complete-external-upload-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.uploads.completeExternalUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadsCompleteExternalUploadJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UploadsCompleteExternalUploadJsonResponse](src/models/uploads-complete-external-upload-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>completeMultipart(request: Uploads.CompleteMultipartRequest, options?: RequestOptions): ApiPromise&lt;UploadsCompleteMultipartJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Completes the multipart upload in the external store, and copies the
file from its temporary location to its final location in the store.
All of the parts must have been uploaded to the external storage provider.
An Upload record will be completed in most cases once the file is copied
to its final location.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.completeMultipart();
  // TODO: Handle 'response' of type UploadsCompleteMultipartJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploads.completeMultipart().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadsCompleteMultipartJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UploadsCompleteMultipartJsonRequest](src/models/uploads-complete-multipart-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploads.completeMultipart(request)`

- **OnSuccess**: <code>[UploadsCompleteMultipartJsonResponse](src/models/uploads-complete-multipart-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.uploads.completeMultipart(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadsCompleteMultipartJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UploadsCompleteMultipartJsonResponse](src/models/uploads-complete-multipart-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createMultipartUpload(request: Uploads.CreateMultipartUploadRequest, options?: RequestOptions): ApiPromise&lt;UploadsCreateMultipartJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a multipart upload in the external storage provider, storing
a temporary reference to the external upload similar to /get-presigned-put.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.createMultipartUpload();
  // TODO: Handle 'response' of type UploadsCreateMultipartJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploads.createMultipartUpload().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadsCreateMultipartJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UploadsCreateMultipartJsonRequest](src/models/uploads-create-multipart-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploads.createMultipartUpload(request)`

- **OnSuccess**: <code>[UploadsCreateMultipartJsonResponse](src/models/uploads-create-multipart-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.uploads.createMultipartUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadsCreateMultipartJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UploadsCreateMultipartJsonResponse](src/models/uploads-create-multipart-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createUpload(request: Uploads.CreateUploadRequest, options?: RequestOptions): ApiPromise&lt;UploadsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.createUpload({ uploadType: UploadType.Avatar });
  // TODO: Handle 'response' of type UploadsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploads.createUpload({ uploadType: UploadType.Avatar }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uploadType</code> | <code>[UploadType](src/models/upload-type.ts)</code> | - |
| <code>userId?</code> | <code>number</code> | required if uploading an avatar |
| <code>synchronous?</code> | <code>boolean</code> | Use this flag to return an id and url |
| <code>file?</code> | <code>FileInput</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploads.createUpload(request)`

- **OnSuccess**: <code>[UploadsJsonResponse](src/models/uploads-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.uploads.createUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UploadsJsonResponse](src/models/uploads-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generatePresignedPut(request: Uploads.GeneratePresignedPutRequest, options?: RequestOptions): ApiPromise&lt;UploadsGeneratePresignedPutJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Direct external uploads bypass the usual method of creating uploads
via the POST /uploads route, and upload directly to an external provider,
which by default is S3. This route begins the process, and will return
a unique identifier for the external upload as well as a presigned URL
which is where the file binary blob should be uploaded to.

Once the upload is complete to the external service, you must call the
POST /complete-external-upload route using the unique identifier returned
by this route, which will create any required Upload record in the Discourse
database and also move file from its temporary location to the final
destination in the external storage service.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.



</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.generatePresignedPut();
  // TODO: Handle 'response' of type UploadsGeneratePresignedPutJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.uploads.generatePresignedPut().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UploadsGeneratePresignedPutJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[UploadsGeneratePresignedPutJsonRequest](src/models/uploads-generate-presigned-put-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.uploads.generatePresignedPut(request)`

- **OnSuccess**: <code>[UploadsGeneratePresignedPutJsonResponse](src/models/uploads-generate-presigned-put-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.uploads.generatePresignedPut(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UploadsGeneratePresignedPutJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UploadsGeneratePresignedPutJsonResponse](src/models/uploads-generate-presigned-put-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>activateUser(request: Users.ActivateUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersActivateJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.activateUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersActivateJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.activateUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersActivateJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.activateUser(request)`

- **OnSuccess**: <code>[AdminUsersActivateJsonResponse](src/models/admin-users-activate-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.activateUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersActivateJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersActivateJsonResponse](src/models/admin-users-activate-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminGetUser(request: Users.AdminGetUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.adminGetUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.adminGetUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.adminGetUser(request)`

- **OnSuccess**: <code>[AdminUsersJsonResponse](src/models/admin-users-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.adminGetUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersJsonResponse](src/models/admin-users-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminListUsers(request: Users.AdminListUsersRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersJsonResponse2[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.adminListUsers();
  // TODO: Handle 'response' of type AdminUsersJsonResponse2[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.adminListUsers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersJsonResponse2[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order?</code> | <code>[Order3](src/models/order3.ts)</code> | - |
| <code>asc?</code> | <code>[Asc](src/models/asc.ts)</code> | - |
| <code>page?</code> | <code>number</code> | - |
| <code>showEmails?</code> | <code>boolean</code> | Include user email addresses in response. These requests will<br>be logged in the staff action logs. |
| <code>stats?</code> | <code>boolean</code> | Include user stats information |
| <code>email?</code> | <code>string</code> | Filter to the user with this email address |
| <code>ip?</code> | <code>string</code> | Filter to users with this IP address |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.adminListUsers(request)`

- **OnSuccess**: <code>[AdminUsersJsonResponse2](src/models/admin-users-json-response2.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.adminListUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersJsonResponse2[], ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersJsonResponse2](src/models/admin-users-json-response2.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminListUsersFlag(request: Users.AdminListUsersFlagRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersListJsonResponse[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.adminListUsersFlag({ flag: Flag.Active });
  // TODO: Handle 'response' of type AdminUsersListJsonResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.adminListUsersFlag({ flag: Flag.Active }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersListJsonResponse[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flag</code> | <code>[Flag](src/models/flag.ts)</code> | - |
| <code>order?</code> | <code>[Order3](src/models/order3.ts)</code> | - |
| <code>asc?</code> | <code>[Asc](src/models/asc.ts)</code> | - |
| <code>page?</code> | <code>number</code> | - |
| <code>showEmails?</code> | <code>boolean</code> | Include user email addresses in response. These requests will<br>be logged in the staff action logs. |
| <code>stats?</code> | <code>boolean</code> | Include user stats information |
| <code>email?</code> | <code>string</code> | Filter to the user with this email address |
| <code>ip?</code> | <code>string</code> | Filter to users with this IP address |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.adminListUsersFlag(request)`

- **OnSuccess**: <code>[AdminUsersListJsonResponse](src/models/admin-users-list-json-response.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.adminListUsersFlag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersListJsonResponse[], ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersListJsonResponse](src/models/admin-users-list-json-response.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>anonymizeUser(request: Users.AnonymizeUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersAnonymizeJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.anonymizeUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersAnonymizeJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.anonymizeUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersAnonymizeJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.anonymizeUser(request)`

- **OnSuccess**: <code>[AdminUsersAnonymizeJsonResponse](src/models/admin-users-anonymize-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.anonymizeUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersAnonymizeJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersAnonymizeJsonResponse](src/models/admin-users-anonymize-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changePassword(request: Users.ChangePasswordRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.users.changePassword({ token: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.changePassword({ token: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UsersPasswordResetJsonRequest](src/models/users-password-reset-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.changePassword(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.changePassword(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createUser(request: Users.CreateUserRequest, options?: RequestOptions): ApiPromise&lt;UsersJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.createUser({
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type UsersJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.createUser({
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UsersJsonRequest](src/models/users-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.createUser(request)`

- **OnSuccess**: <code>[UsersJsonResponse](src/models/users-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.createUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UsersJsonResponse](src/models/users-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deactivateUser(request: Users.DeactivateUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersDeactivateJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.deactivateUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersDeactivateJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.deactivateUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersDeactivateJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.deactivateUser(request)`

- **OnSuccess**: <code>[AdminUsersDeactivateJsonResponse](src/models/admin-users-deactivate-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.deactivateUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersDeactivateJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersDeactivateJsonResponse](src/models/admin-users-deactivate-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUser(request: Users.DeleteUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersJsonResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.deleteUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.deleteUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersJsonResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |
| <code>body?</code> | <code>[AdminUsersJsonRequest](src/models/admin-users-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.deleteUser(request)`

- **OnSuccess**: <code>[AdminUsersJsonResponse1](src/models/admin-users-json-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.deleteUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersJsonResponse1, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersJsonResponse1](src/models/admin-users-json-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise&lt;UJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUser({
    username: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type UJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getUser({
  username: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUser(request)`

- **OnSuccess**: <code>[UJsonResponse](src/models/ujson-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.getUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UJsonResponse](src/models/ujson-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserEmails(request: Users.GetUserEmailsRequest, options?: RequestOptions): ApiPromise&lt;UEmailsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUserEmails({ username: "some example string" });
  // TODO: Handle 'response' of type UEmailsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getUserEmails({ username: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UEmailsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUserEmails(request)`

- **OnSuccess**: <code>[UEmailsJsonResponse](src/models/uemails-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.getUserEmails(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UEmailsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UEmailsJsonResponse](src/models/uemails-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserExternalId(request: Users.GetUserExternalIdRequest, options?: RequestOptions): ApiPromise&lt;UByExternalJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUserExternalId({
    externalId: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type UByExternalJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getUserExternalId({
  externalId: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UByExternalJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>externalId</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUserExternalId(request)`

- **OnSuccess**: <code>[UByExternalJsonResponse](src/models/uby-external-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.getUserExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UByExternalJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UByExternalJsonResponse](src/models/uby-external-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserIdentiyProviderExternalId(request: Users.GetUserIdentiyProviderExternalIdRequest, options?: RequestOptions): ApiPromise&lt;UByExternalJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUserIdentiyProviderExternalId({
    provider: "some example string",
    externalId: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type UByExternalJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.getUserIdentiyProviderExternalId({
  provider: "some example string",
  externalId: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UByExternalJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>provider</code> | <code>string</code> | Authentication provider name. Can be found in the provider callback<br>URL: `/auth/{provider}/callback` |
| <code>externalId</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.getUserIdentiyProviderExternalId(request)`

- **OnSuccess**: <code>[UByExternalJsonResponse](src/models/uby-external-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.getUserIdentiyProviderExternalId(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UByExternalJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UByExternalJsonResponse](src/models/uby-external-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUserActions(request: Users.ListUserActionsRequest, options?: RequestOptions): ApiPromise&lt;UserActionsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.listUserActions({
    offset: 1,
    username: "some example string",
    filter: "some example string",
  });
  // TODO: Handle 'response' of type UserActionsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.listUserActions({
  offset: 1,
  username: "some example string",
  filter: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserActionsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>offset</code> | <code>number</code> | - |
| <code>username</code> | <code>string</code> | - |
| <code>filter</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.listUserActions(request)`

- **OnSuccess**: <code>[UserActionsJsonResponse](src/models/user-actions-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.listUserActions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserActionsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UserActionsJsonResponse](src/models/user-actions-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUserBadges(request: Users.ListUserBadgesRequest, options?: RequestOptions): ApiPromise&lt;UserBadgesJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.listUserBadges({ username: "some example string" });
  // TODO: Handle 'response' of type UserBadgesJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.listUserBadges({ username: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserBadgesJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.listUserBadges(request)`

- **OnSuccess**: <code>[UserBadgesJsonResponse](src/models/user-badges-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.listUserBadges(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserBadgesJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UserBadgesJsonResponse](src/models/user-badges-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUsersPublic(request: Users.ListUsersPublicRequest, options?: RequestOptions): ApiPromise&lt;DirectoryItemsJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.listUsersPublic({ period: Period1.Daily, order: Order2.LikesReceived });
  // TODO: Handle 'response' of type DirectoryItemsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.listUsersPublic({
  period: Period1.Daily,
  order: Order2.LikesReceived,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DirectoryItemsJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>period</code> | <code>[Period1](src/models/period1.ts)</code> | - |
| <code>order</code> | <code>[Order2](src/models/order2.ts)</code> | - |
| <code>asc?</code> | <code>[Asc](src/models/asc.ts)</code> | - |
| <code>page?</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.listUsersPublic(request)`

- **OnSuccess**: <code>[DirectoryItemsJsonResponse](src/models/directory-items-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.listUsersPublic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DirectoryItemsJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[DirectoryItemsJsonResponse](src/models/directory-items-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>logOutUser(request: Users.LogOutUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersLogOutJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.logOutUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersLogOutJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.logOutUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersLogOutJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.logOutUser(request)`

- **OnSuccess**: <code>[AdminUsersLogOutJsonResponse](src/models/admin-users-log-out-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.logOutUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersLogOutJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersLogOutJsonResponse](src/models/admin-users-log-out-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refreshGravatar(request: Users.RefreshGravatarRequest, options?: RequestOptions): ApiPromise&lt;UserAvatarRefreshGravatarJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.refreshGravatar({ username: "some example string" });
  // TODO: Handle 'response' of type UserAvatarRefreshGravatarJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.refreshGravatar({ username: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserAvatarRefreshGravatarJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.refreshGravatar(request)`

- **OnSuccess**: <code>[UserAvatarRefreshGravatarJsonResponse](src/models/user-avatar-refresh-gravatar-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.refreshGravatar(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserAvatarRefreshGravatarJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UserAvatarRefreshGravatarJsonResponse](src/models/user-avatar-refresh-gravatar-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendPasswordResetEmail(request: Users.SendPasswordResetEmailRequest, options?: RequestOptions): ApiPromise&lt;SessionForgotPasswordJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.sendPasswordResetEmail();
  // TODO: Handle 'response' of type SessionForgotPasswordJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.sendPasswordResetEmail().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionForgotPasswordJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body?</code> | <code>[SessionForgotPasswordJsonRequest](src/models/session-forgot-password-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.sendPasswordResetEmail(request)`

- **OnSuccess**: <code>[SessionForgotPasswordJsonResponse](src/models/session-forgot-password-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.sendPasswordResetEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionForgotPasswordJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[SessionForgotPasswordJsonResponse](src/models/session-forgot-password-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>silenceUser(request: Users.SilenceUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersSilenceJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.silenceUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersSilenceJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.silenceUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersSilenceJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |
| <code>body?</code> | <code>[AdminUsersSilenceJsonRequest](src/models/admin-users-silence-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.silenceUser(request)`

- **OnSuccess**: <code>[AdminUsersSilenceJsonResponse](src/models/admin-users-silence-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.silenceUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersSilenceJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersSilenceJsonResponse](src/models/admin-users-silence-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>suspendUser(request: Users.SuspendUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersSuspendJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.suspendUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersSuspendJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.suspendUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersSuspendJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |
| <code>body?</code> | <code>[AdminUsersSuspendJsonRequest](src/models/admin-users-suspend-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.suspendUser(request)`

- **OnSuccess**: <code>[AdminUsersSuspendJsonResponse](src/models/admin-users-suspend-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.suspendUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersSuspendJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersSuspendJsonResponse](src/models/admin-users-suspend-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAvatar(request: Users.UpdateAvatarRequest, options?: RequestOptions): ApiPromise&lt;UPreferencesAvatarPickJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.updateAvatar({ username: "some example string" });
  // TODO: Handle 'response' of type UPreferencesAvatarPickJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.updateAvatar({ username: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UPreferencesAvatarPickJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UPreferencesAvatarPickJsonRequest](src/models/upreferences-avatar-pick-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.updateAvatar(request)`

- **OnSuccess**: <code>[UPreferencesAvatarPickJsonResponse](src/models/upreferences-avatar-pick-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.updateAvatar(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UPreferencesAvatarPickJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UPreferencesAvatarPickJsonResponse](src/models/upreferences-avatar-pick-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEmail(request: Users.UpdateEmailRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.users.updateEmail({ username: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.updateEmail({ username: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UPreferencesEmailJsonRequest](src/models/upreferences-email-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.updateEmail(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.updateEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUser(request: Users.UpdateUserRequest, options?: RequestOptions): ApiPromise&lt;UJsonResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.updateUser({
    username: "some example string",
    apiKey: "some example string",
    apiUsername: "some example string",
  });
  // TODO: Handle 'response' of type UJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.updateUser({
  username: "some example string",
  apiKey: "some example string",
  apiUsername: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UJsonResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>string</code> | - |
| <code>apiKey</code> | <code>string</code> | - |
| <code>apiUsername</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UJsonRequest](src/models/ujson-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.updateUser(request)`

- **OnSuccess**: <code>[UJsonResponse1](src/models/ujson-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.updateUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UJsonResponse1, ApiError&gt;</code>, with `result.value` of type <code>[UJsonResponse1](src/models/ujson-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUsername(request: Users.UpdateUsernameRequest, options?: RequestOptions): ApiPromise&lt;undefined, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.users.updateUsername({ username: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.updateUsername({ username: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>string</code> | - |
| <code>body?</code> | <code>[UPreferencesUsernameJsonRequest](src/models/upreferences-username-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.updateUsername(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.users.updateUsername(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ApiError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Admin

> Source: [Admin](src/resources/admin.ts)

<details>
<summary><code>activateUser(request: Admin.ActivateUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersActivateJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.activateUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersActivateJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.activateUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersActivateJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.activateUser(request)`

- **OnSuccess**: <code>[AdminUsersActivateJsonResponse](src/models/admin-users-activate-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.admin.activateUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersActivateJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersActivateJsonResponse](src/models/admin-users-activate-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminGetUser(request: Admin.AdminGetUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminGetUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminGetUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminGetUser(request)`

- **OnSuccess**: <code>[AdminUsersJsonResponse](src/models/admin-users-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.admin.adminGetUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersJsonResponse](src/models/admin-users-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminListUsers(request: Admin.AdminListUsersRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersJsonResponse2[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminListUsers();
  // TODO: Handle 'response' of type AdminUsersJsonResponse2[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminListUsers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersJsonResponse2[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>order?</code> | <code>[Order3](src/models/order3.ts)</code> | - |
| <code>asc?</code> | <code>[Asc](src/models/asc.ts)</code> | - |
| <code>page?</code> | <code>number</code> | - |
| <code>showEmails?</code> | <code>boolean</code> | Include user email addresses in response. These requests will<br>be logged in the staff action logs. |
| <code>stats?</code> | <code>boolean</code> | Include user stats information |
| <code>email?</code> | <code>string</code> | Filter to the user with this email address |
| <code>ip?</code> | <code>string</code> | Filter to users with this IP address |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminListUsers(request)`

- **OnSuccess**: <code>[AdminUsersJsonResponse2](src/models/admin-users-json-response2.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.admin.adminListUsers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersJsonResponse2[], ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersJsonResponse2](src/models/admin-users-json-response2.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminListUsersFlag(request: Admin.AdminListUsersFlagRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersListJsonResponse[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminListUsersFlag({ flag: Flag.Active });
  // TODO: Handle 'response' of type AdminUsersListJsonResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminListUsersFlag({ flag: Flag.Active }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersListJsonResponse[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>flag</code> | <code>[Flag](src/models/flag.ts)</code> | - |
| <code>order?</code> | <code>[Order3](src/models/order3.ts)</code> | - |
| <code>asc?</code> | <code>[Asc](src/models/asc.ts)</code> | - |
| <code>page?</code> | <code>number</code> | - |
| <code>showEmails?</code> | <code>boolean</code> | Include user email addresses in response. These requests will<br>be logged in the staff action logs. |
| <code>stats?</code> | <code>boolean</code> | Include user stats information |
| <code>email?</code> | <code>string</code> | Filter to the user with this email address |
| <code>ip?</code> | <code>string</code> | Filter to users with this IP address |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminListUsersFlag(request)`

- **OnSuccess**: <code>[AdminUsersListJsonResponse](src/models/admin-users-list-json-response.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.admin.adminListUsersFlag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersListJsonResponse[], ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersListJsonResponse](src/models/admin-users-list-json-response.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>anonymizeUser(request: Admin.AnonymizeUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersAnonymizeJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.anonymizeUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersAnonymizeJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.anonymizeUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersAnonymizeJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.anonymizeUser(request)`

- **OnSuccess**: <code>[AdminUsersAnonymizeJsonResponse](src/models/admin-users-anonymize-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.admin.anonymizeUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersAnonymizeJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersAnonymizeJsonResponse](src/models/admin-users-anonymize-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deactivateUser(request: Admin.DeactivateUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersDeactivateJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.deactivateUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersDeactivateJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.deactivateUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersDeactivateJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.deactivateUser(request)`

- **OnSuccess**: <code>[AdminUsersDeactivateJsonResponse](src/models/admin-users-deactivate-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.admin.deactivateUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersDeactivateJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersDeactivateJsonResponse](src/models/admin-users-deactivate-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUser(request: Admin.DeleteUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersJsonResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.deleteUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.deleteUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersJsonResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |
| <code>body?</code> | <code>[AdminUsersJsonRequest](src/models/admin-users-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.deleteUser(request)`

- **OnSuccess**: <code>[AdminUsersJsonResponse1](src/models/admin-users-json-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.admin.deleteUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersJsonResponse1, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersJsonResponse1](src/models/admin-users-json-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>logOutUser(request: Admin.LogOutUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersLogOutJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.logOutUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersLogOutJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.logOutUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersLogOutJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.logOutUser(request)`

- **OnSuccess**: <code>[AdminUsersLogOutJsonResponse](src/models/admin-users-log-out-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.admin.logOutUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersLogOutJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersLogOutJsonResponse](src/models/admin-users-log-out-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refreshGravatar(request: Admin.RefreshGravatarRequest, options?: RequestOptions): ApiPromise&lt;UserAvatarRefreshGravatarJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.refreshGravatar({ username: "some example string" });
  // TODO: Handle 'response' of type UserAvatarRefreshGravatarJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.refreshGravatar({ username: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserAvatarRefreshGravatarJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>username</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.refreshGravatar(request)`

- **OnSuccess**: <code>[UserAvatarRefreshGravatarJsonResponse](src/models/user-avatar-refresh-gravatar-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.admin.refreshGravatar(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserAvatarRefreshGravatarJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[UserAvatarRefreshGravatarJsonResponse](src/models/user-avatar-refresh-gravatar-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>silenceUser(request: Admin.SilenceUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersSilenceJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.silenceUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersSilenceJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.silenceUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersSilenceJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |
| <code>body?</code> | <code>[AdminUsersSilenceJsonRequest](src/models/admin-users-silence-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.silenceUser(request)`

- **OnSuccess**: <code>[AdminUsersSilenceJsonResponse](src/models/admin-users-silence-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.admin.silenceUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersSilenceJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersSilenceJsonResponse](src/models/admin-users-silence-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>suspendUser(request: Admin.SuspendUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersSuspendJsonResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.suspendUser({ id: 1 });
  // TODO: Handle 'response' of type AdminUsersSuspendJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.suspendUser({ id: 1 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminUsersSuspendJsonResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>number</code> | - |
| <code>body?</code> | <code>[AdminUsersSuspendJsonRequest](src/models/admin-users-suspend-json-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.suspendUser(request)`

- **OnSuccess**: <code>[AdminUsersSuspendJsonResponse](src/models/admin-users-suspend-json-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.admin.suspendUser(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminUsersSuspendJsonResponse, ApiError&gt;</code>, with `result.value` of type <code>[AdminUsersSuspendJsonResponse](src/models/admin-users-suspend-json-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[DiscourseError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

