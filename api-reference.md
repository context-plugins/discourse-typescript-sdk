# Reference

> Source: [DiscourseClient](src/client.ts)

## DiscourseCalendarEvents

> Source: [DiscourseCalendarEvents](src/resources/discourse-calendar-events.ts)

<details>
<summary><code>exportEventsIcs(request: DiscourseCalendarEvents.ExportEventsIcsRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.discourseCalendarEvents.exportEventsIcs();
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEvents(request: DiscourseCalendarEvents.ListEventsRequest, options?: RequestOptions): ApiPromise&lt;DiscoursePostEventEventsJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.discourseCalendarEvents.listEvents();
  // TODO: Handle 'response' of type DiscoursePostEventEventsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[DiscoursePostEventEventsJsonResponse](src/models/discourse-post-event-events-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Backups

> Source: [Backups](src/resources/backups.ts)

<details>
<summary><code>createBackup(request: Backups.CreateBackupRequest, options?: RequestOptions): ApiPromise&lt;AdminBackupsJsonResponse1, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.backups.createBackup();
  // TODO: Handle 'response' of type AdminBackupsJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminBackupsJsonResponse1](src/models/admin-backups-json-response1.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>downloadBackup(request: Backups.DownloadBackupRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.backups.downloadBackup({ filename, token });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBackups(options?: RequestOptions): ApiPromise&lt;AdminBackupsJsonResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.backups.getBackups();
  // TODO: Handle 'response' of type AdminBackupsJsonResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdminBackupsJsonResponse](src/models/admin-backups-json-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendDownloadBackupEmail(request: Backups.SendDownloadBackupEmailRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.backups.sendDownloadBackupEmail({ filename });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Badges

> Source: [Badges](src/resources/badges.ts)

<details>
<summary><code>adminListBadges(options?: RequestOptions): ApiPromise&lt;AdminBadgesJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.badges.adminListBadges();
  // TODO: Handle 'response' of type AdminBadgesJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AdminBadgesJsonResponse](src/models/admin-badges-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBadge(request: Badges.CreateBadgeRequest, options?: RequestOptions): ApiPromise&lt;AdminBadgesJsonResponse1, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.badges.createBadge();
  // TODO: Handle 'response' of type AdminBadgesJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminBadgesJsonResponse1](src/models/admin-badges-json-response1.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBadge(request: Badges.DeleteBadgeRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.badges.deleteBadge({ id });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUserBadges(request: Badges.ListUserBadgesRequest, options?: RequestOptions): ApiPromise&lt;UserBadgesJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.badges.listUserBadges({ username });
  // TODO: Handle 'response' of type UserBadgesJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UserBadgesJsonResponse](src/models/user-badges-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBadge(request: Badges.UpdateBadgeRequest, options?: RequestOptions): ApiPromise&lt;AdminBadgesJsonResponse2, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.badges.updateBadge({ id });
  // TODO: Handle 'response' of type AdminBadgesJsonResponse2
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminBadgesJsonResponse2](src/models/admin-badges-json-response2.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Categories

> Source: [Categories](src/resources/categories.ts)

<details>
<summary><code>createCategory(request: Categories.CreateCategoryRequest, options?: RequestOptions): ApiPromise&lt;CategoriesJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.createCategory();
  // TODO: Handle 'response' of type CategoriesJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[CategoriesJsonResponse](src/models/categories-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCategory(request: Categories.GetCategoryRequest, options?: RequestOptions): ApiPromise&lt;CShowJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.getCategory({ id });
  // TODO: Handle 'response' of type CShowJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[CShowJsonResponse](src/models/cshow-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSite(options?: RequestOptions): ApiPromise&lt;SiteJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Can be used to fetch all categories and subcategories

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.getSite();
  // TODO: Handle 'response' of type SiteJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SiteJsonResponse](src/models/site-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCategories(request: Categories.ListCategoriesRequest, options?: RequestOptions): ApiPromise&lt;CategoriesJsonResponse1, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.listCategories();
  // TODO: Handle 'response' of type CategoriesJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[CategoriesJsonResponse1](src/models/categories-json-response1.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCategoryTopics(request: Categories.ListCategoryTopicsRequest, options?: RequestOptions): ApiPromise&lt;CJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.listCategoryTopics({ slug, id });
  // TODO: Handle 'response' of type CJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[CJsonResponse](src/models/cjson-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCategory(request: Categories.UpdateCategoryRequest, options?: RequestOptions): ApiPromise&lt;CategoriesJsonResponse2, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.categories.updateCategory({ id });
  // TODO: Handle 'response' of type CategoriesJsonResponse2
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[CategoriesJsonResponse2](src/models/categories-json-response2.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Groups

> Source: [Groups](src/resources/groups.ts)

<details>
<summary><code>addGroupMembers(request: Groups.AddGroupMembersRequest, options?: RequestOptions): ApiPromise&lt;GroupsMembersJsonResponse1, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.addGroupMembers({ id });
  // TODO: Handle 'response' of type GroupsMembersJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[GroupsMembersJsonResponse1](src/models/groups-members-json-response1.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createGroup(request: Groups.CreateGroupRequest, options?: RequestOptions): ApiPromise&lt;AdminGroupsJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.createGroup();
  // TODO: Handle 'response' of type AdminGroupsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminGroupsJsonResponse](src/models/admin-groups-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteGroup(request: Groups.DeleteGroupRequest, options?: RequestOptions): ApiPromise&lt;AdminGroupsJsonResponse1, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.deleteGroup({ id });
  // TODO: Handle 'response' of type AdminGroupsJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminGroupsJsonResponse1](src/models/admin-groups-json-response1.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroup(request: Groups.GetGroupRequest, options?: RequestOptions): ApiPromise&lt;GroupsJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.getGroup({ name });
  // TODO: Handle 'response' of type GroupsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[GroupsJsonResponse](src/models/groups-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getGroupById(request: Groups.GetGroupByIdRequest, options?: RequestOptions): ApiPromise&lt;GroupsByIdJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.getGroupById({ id });
  // TODO: Handle 'response' of type GroupsByIdJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[GroupsByIdJsonResponse](src/models/groups-by-id-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGroupMembers(request: Groups.ListGroupMembersRequest, options?: RequestOptions): ApiPromise&lt;GroupsMembersJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.listGroupMembers({ name });
  // TODO: Handle 'response' of type GroupsMembersJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[GroupsMembersJsonResponse](src/models/groups-members-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGroups(options?: RequestOptions): ApiPromise&lt;GroupsJsonResponse2, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.listGroups();
  // TODO: Handle 'response' of type GroupsJsonResponse2
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupsJsonResponse2](src/models/groups-json-response2.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeGroupMembers(request: Groups.RemoveGroupMembersRequest, options?: RequestOptions): ApiPromise&lt;GroupsMembersJsonResponse2, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.removeGroupMembers({ id });
  // TODO: Handle 'response' of type GroupsMembersJsonResponse2
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[GroupsMembersJsonResponse2](src/models/groups-members-json-response2.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateGroup(request: Groups.UpdateGroupRequest, options?: RequestOptions): ApiPromise&lt;GroupsJsonResponse1, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.groups.updateGroup({ id });
  // TODO: Handle 'response' of type GroupsJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[GroupsJsonResponse1](src/models/groups-json-response1.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Invites

> Source: [Invites](src/resources/invites.ts)

<details>
<summary><code>createInvite(request: Invites.CreateInviteRequest, options?: RequestOptions): ApiPromise&lt;InvitesJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invites.createInvite({ apiKey, apiUsername });
  // TODO: Handle 'response' of type InvitesJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[InvitesJsonResponse](src/models/invites-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createMultipleInvites(request: Invites.CreateMultipleInvitesRequest, options?: RequestOptions): ApiPromise&lt;InvitesCreateMultipleJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invites.createMultipleInvites({ apiKey, apiUsername });
  // TODO: Handle 'response' of type InvitesCreateMultipleJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[InvitesCreateMultipleJsonResponse](src/models/invites-create-multiple-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>inviteGroupToTopic(request: Invites.InviteGroupToTopicRequest, options?: RequestOptions): ApiPromise&lt;TInviteGroupJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invites.inviteGroupToTopic({ id, apiKey, apiUsername });
  // TODO: Handle 'response' of type TInviteGroupJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TInviteGroupJsonResponse](src/models/tinvite-group-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>inviteToTopic(request: Invites.InviteToTopicRequest, options?: RequestOptions): ApiPromise&lt;TInviteJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.invites.inviteToTopic({ id, apiKey, apiUsername });
  // TODO: Handle 'response' of type TInviteJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TInviteJsonResponse](src/models/tinvite-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Notifications

> Source: [Notifications](src/resources/notifications.ts)

<details>
<summary><code>getNotifications(options?: RequestOptions): ApiPromise&lt;NotificationsJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.getNotifications();
  // TODO: Handle 'response' of type NotificationsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NotificationsJsonResponse](src/models/notifications-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>markNotificationsAsRead(request: Notifications.MarkNotificationsAsReadRequest, options?: RequestOptions): ApiPromise&lt;NotificationsMarkReadJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.notifications.markNotificationsAsRead();
  // TODO: Handle 'response' of type NotificationsMarkReadJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[NotificationsMarkReadJsonResponse](src/models/notifications-mark-read-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Posts

> Source: [Posts](src/resources/posts.ts)

<details>
<summary><code>createTopicPostPm(request: Posts.CreateTopicPostPmRequest, options?: RequestOptions): ApiPromise&lt;PostsJsonResponse1, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.createTopicPostPm({ apiKey, apiUsername });
  // TODO: Handle 'response' of type PostsJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[PostsJsonResponse1](src/models/posts-json-response1.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePost(request: Posts.DeletePostRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.posts.deletePost({ id, apiKey, apiUsername });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPost(request: Posts.GetPostRequest, options?: RequestOptions): ApiPromise&lt;PostsJsonResponse2, ResponseError&gt;</code></summary>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.getPost({ id });
  // TODO: Handle 'response' of type PostsJsonResponse2
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[PostsJsonResponse2](src/models/posts-json-response2.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPosts(request: Posts.ListPostsRequest, options?: RequestOptions): ApiPromise&lt;PostsJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.listPosts();
  // TODO: Handle 'response' of type PostsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[PostsJsonResponse](src/models/posts-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>lockPost(request: Posts.LockPostRequest, options?: RequestOptions): ApiPromise&lt;PostsLockedJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.lockPost({ id, apiKey, apiUsername });
  // TODO: Handle 'response' of type PostsLockedJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[PostsLockedJsonResponse](src/models/posts-locked-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>performPostAction(request: Posts.PerformPostActionRequest, options?: RequestOptions): ApiPromise&lt;PostActionsJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.performPostAction({ apiKey, apiUsername });
  // TODO: Handle 'response' of type PostActionsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[PostActionsJsonResponse](src/models/post-actions-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postReplies(request: Posts.PostRepliesRequest, options?: RequestOptions): ApiPromise&lt;PostsRepliesJsonResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.postReplies({ id });
  // TODO: Handle 'response' of type PostsRepliesJsonResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[PostsRepliesJsonResponse](src/models/posts-replies-json-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePost(request: Posts.UpdatePostRequest, options?: RequestOptions): ApiPromise&lt;PostsJsonResponse3, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.posts.updatePost({ id, apiKey, apiUsername });
  // TODO: Handle 'response' of type PostsJsonResponse3
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[PostsJsonResponse3](src/models/posts-json-response3.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Topics

> Source: [Topics](src/resources/topics.ts)

<details>
<summary><code>bookmarkTopic(request: Topics.BookmarkTopicRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.topics.bookmarkTopic({ id, apiKey, apiUsername });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTopicPostPm(request: Topics.CreateTopicPostPmRequest, options?: RequestOptions): ApiPromise&lt;PostsJsonResponse1, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.createTopicPostPm({ apiKey, apiUsername });
  // TODO: Handle 'response' of type PostsJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[PostsJsonResponse1](src/models/posts-json-response1.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTopicTimer(request: Topics.CreateTopicTimerRequest, options?: RequestOptions): ApiPromise&lt;TTimerJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.createTopicTimer({ id, apiKey, apiUsername });
  // TODO: Handle 'response' of type TTimerJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TTimerJsonResponse](src/models/ttimer-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSpecificPostsFromTopic(request: Topics.GetSpecificPostsFromTopicRequest, options?: RequestOptions): ApiPromise&lt;TPostsJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.getSpecificPostsFromTopic({ id, apiKey, apiUsername });
  // TODO: Handle 'response' of type TPostsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TPostsJsonResponse](src/models/tposts-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTopic(request: Topics.GetTopicRequest, options?: RequestOptions): ApiPromise&lt;TJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.getTopic({ id, apiKey, apiUsername });
  // TODO: Handle 'response' of type TJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TJsonResponse](src/models/tjson-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTopicByExternalId(request: Topics.GetTopicByExternalIdRequest, options?: RequestOptions): ApiPromise&lt;undefined, Topics.GetTopicByExternalIdError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.topics.getTopicByExternalId({ externalId });
} catch (err) {
  if (err instanceof Topics.GetTopicByExternalIdError && err.payload.kind === "error301") {
    // TODO: Handle 'err.payload' — the "error301" arm declares no body
  }
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

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[Topics.GetTopicByExternalIdError](src/resources/topics.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>inviteGroupToTopic(request: Topics.InviteGroupToTopicRequest, options?: RequestOptions): ApiPromise&lt;TInviteGroupJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.inviteGroupToTopic({ id, apiKey, apiUsername });
  // TODO: Handle 'response' of type TInviteGroupJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TInviteGroupJsonResponse](src/models/tinvite-group-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>inviteToTopic(request: Topics.InviteToTopicRequest, options?: RequestOptions): ApiPromise&lt;TInviteJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.inviteToTopic({ id, apiKey, apiUsername });
  // TODO: Handle 'response' of type TInviteJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TInviteJsonResponse](src/models/tinvite-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLatestTopics(request: Topics.ListLatestTopicsRequest, options?: RequestOptions): ApiPromise&lt;LatestJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.listLatestTopics({ apiKey, apiUsername });
  // TODO: Handle 'response' of type LatestJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[LatestJsonResponse](src/models/latest-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTopTopics(request: Topics.ListTopTopicsRequest, options?: RequestOptions): ApiPromise&lt;TopJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.listTopTopics({ apiKey, apiUsername });
  // TODO: Handle 'response' of type TopJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TopJsonResponse](src/models/top-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeTopic(request: Topics.RemoveTopicRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.topics.removeTopic({ id, apiKey, apiUsername });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setNotificationLevel(request: Topics.SetNotificationLevelRequest, options?: RequestOptions): ApiPromise&lt;TNotificationsJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.setNotificationLevel({ id, apiKey, apiUsername });
  // TODO: Handle 'response' of type TNotificationsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TNotificationsJsonResponse](src/models/tnotifications-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTopic(request: Topics.UpdateTopicRequest, options?: RequestOptions): ApiPromise&lt;TJsonResponse1, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.updateTopic({ id, apiKey, apiUsername });
  // TODO: Handle 'response' of type TJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TJsonResponse1](src/models/tjson-response1.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTopicStatus(request: Topics.UpdateTopicStatusRequest, options?: RequestOptions): ApiPromise&lt;TStatusJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.updateTopicStatus({ id, apiKey, apiUsername });
  // TODO: Handle 'response' of type TStatusJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TStatusJsonResponse](src/models/tstatus-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTopicTimestamp(request: Topics.UpdateTopicTimestampRequest, options?: RequestOptions): ApiPromise&lt;TChangeTimestampJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.topics.updateTopicTimestamp({ id, apiKey, apiUsername });
  // TODO: Handle 'response' of type TChangeTimestampJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TChangeTimestampJsonResponse](src/models/tchange-timestamp-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PrivateMessages

> Source: [PrivateMessages](src/resources/private-messages.ts)

<details>
<summary><code>createTopicPostPm(request: PrivateMessages.CreateTopicPostPmRequest, options?: RequestOptions): ApiPromise&lt;PostsJsonResponse1, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.privateMessages.createTopicPostPm({ apiKey, apiUsername });
  // TODO: Handle 'response' of type PostsJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[PostsJsonResponse1](src/models/posts-json-response1.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserSentPrivateMessages(request: PrivateMessages.GetUserSentPrivateMessagesRequest, options?: RequestOptions): ApiPromise&lt;TopicsPrivateMessagesSentJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.privateMessages.getUserSentPrivateMessages({ username });
  // TODO: Handle 'response' of type TopicsPrivateMessagesSentJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TopicsPrivateMessagesSentJsonResponse](src/models/topics-private-messages-sent-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUserPrivateMessages(request: PrivateMessages.ListUserPrivateMessagesRequest, options?: RequestOptions): ApiPromise&lt;TopicsPrivateMessagesJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.privateMessages.listUserPrivateMessages({ username });
  // TODO: Handle 'response' of type TopicsPrivateMessagesJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TopicsPrivateMessagesJsonResponse](src/models/topics-private-messages-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>search(request: Search.SearchRequest, options?: RequestOptions): ApiPromise&lt;SearchJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.search();
  // TODO: Handle 'response' of type SearchJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[SearchJsonResponse](src/models/search-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Site

> Source: [Site](src/resources/site.ts)

<details>
<summary><code>getSite(options?: RequestOptions): ApiPromise&lt;SiteJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Can be used to fetch all categories and subcategories

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.site.getSite();
  // TODO: Handle 'response' of type SiteJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SiteJsonResponse](src/models/site-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSiteBasicInfo(options?: RequestOptions): ApiPromise&lt;SiteBasicInfoJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Can be used to fetch basic info about a site

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.site.getSiteBasicInfo();
  // TODO: Handle 'response' of type SiteBasicInfoJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SiteBasicInfoJsonResponse](src/models/site-basic-info-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/resources/tags.ts)

<details>
<summary><code>createTagGroup(request: Tags.CreateTagGroupRequest, options?: RequestOptions): ApiPromise&lt;TagGroupsJsonResponse1, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.createTagGroup();
  // TODO: Handle 'response' of type TagGroupsJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TagGroupsJsonResponse1](src/models/tag-groups-json-response1.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTag(request: Tags.GetTagRequest, options?: RequestOptions): ApiPromise&lt;TagJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.getTag({ name });
  // TODO: Handle 'response' of type TagJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TagJsonResponse](src/models/tag-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTagGroup(request: Tags.GetTagGroupRequest, options?: RequestOptions): ApiPromise&lt;TagGroupsJsonResponse2, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.getTagGroup({ id });
  // TODO: Handle 'response' of type TagGroupsJsonResponse2
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TagGroupsJsonResponse2](src/models/tag-groups-json-response2.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTagGroups(options?: RequestOptions): ApiPromise&lt;TagGroupsJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.listTagGroups();
  // TODO: Handle 'response' of type TagGroupsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagGroupsJsonResponse](src/models/tag-groups-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTags(options?: RequestOptions): ApiPromise&lt;TagsJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.listTags();
  // TODO: Handle 'response' of type TagsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TagsJsonResponse](src/models/tags-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTagGroup(request: Tags.UpdateTagGroupRequest, options?: RequestOptions): ApiPromise&lt;TagGroupsJsonResponse3, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.updateTagGroup({ id });
  // TODO: Handle 'response' of type TagGroupsJsonResponse3
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[TagGroupsJsonResponse3](src/models/tag-groups-json-response3.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Uploads

> Source: [Uploads](src/resources/uploads.ts)

<details>
<summary><code>abortMultipart(request: Uploads.AbortMultipartRequest, options?: RequestOptions): ApiPromise&lt;UploadsAbortMultipartJsonResponse, ResponseError&gt;</code></summary>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.abortMultipart();
  // TODO: Handle 'response' of type UploadsAbortMultipartJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UploadsAbortMultipartJsonResponse](src/models/uploads-abort-multipart-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchPresignMultipartParts(request: Uploads.BatchPresignMultipartPartsRequest, options?: RequestOptions): ApiPromise&lt;UploadsBatchPresignMultipartPartsJsonResponse, ResponseError&gt;</code></summary>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.batchPresignMultipartParts();
  // TODO: Handle 'response' of type UploadsBatchPresignMultipartPartsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UploadsBatchPresignMultipartPartsJsonResponse](src/models/uploads-batch-presign-multipart-parts-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>completeExternalUpload(request: Uploads.CompleteExternalUploadRequest, options?: RequestOptions): ApiPromise&lt;UploadsCompleteExternalUploadJsonResponse, ResponseError&gt;</code></summary>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.completeExternalUpload();
  // TODO: Handle 'response' of type UploadsCompleteExternalUploadJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UploadsCompleteExternalUploadJsonResponse](src/models/uploads-complete-external-upload-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>completeMultipart(request: Uploads.CompleteMultipartRequest, options?: RequestOptions): ApiPromise&lt;UploadsCompleteMultipartJsonResponse, ResponseError&gt;</code></summary>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.completeMultipart();
  // TODO: Handle 'response' of type UploadsCompleteMultipartJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UploadsCompleteMultipartJsonResponse](src/models/uploads-complete-multipart-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createMultipartUpload(request: Uploads.CreateMultipartUploadRequest, options?: RequestOptions): ApiPromise&lt;UploadsCreateMultipartJsonResponse, ResponseError&gt;</code></summary>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.createMultipartUpload();
  // TODO: Handle 'response' of type UploadsCreateMultipartJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UploadsCreateMultipartJsonResponse](src/models/uploads-create-multipart-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createUpload(options?: RequestOptions): ApiPromise&lt;UploadsJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.createUpload();
  // TODO: Handle 'response' of type UploadsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UploadsJsonResponse](src/models/uploads-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>generatePresignedPut(request: Uploads.GeneratePresignedPutRequest, options?: RequestOptions): ApiPromise&lt;UploadsGeneratePresignedPutJsonResponse, ResponseError&gt;</code></summary>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.uploads.generatePresignedPut();
  // TODO: Handle 'response' of type UploadsGeneratePresignedPutJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UploadsGeneratePresignedPutJsonResponse](src/models/uploads-generate-presigned-put-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>activateUser(request: Users.ActivateUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersActivateJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.activateUser({ id });
  // TODO: Handle 'response' of type AdminUsersActivateJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersActivateJsonResponse](src/models/admin-users-activate-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminGetUser(request: Users.AdminGetUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.adminGetUser({ id });
  // TODO: Handle 'response' of type AdminUsersJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersJsonResponse](src/models/admin-users-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminListUsers(request: Users.AdminListUsersRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersJsonResponse2[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.adminListUsers();
  // TODO: Handle 'response' of type AdminUsersJsonResponse2[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersJsonResponse2](src/models/admin-users-json-response2.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminListUsersFlag(request: Users.AdminListUsersFlagRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersListJsonResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.adminListUsersFlag({ flag });
  // TODO: Handle 'response' of type AdminUsersListJsonResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersListJsonResponse](src/models/admin-users-list-json-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>anonymizeUser(request: Users.AnonymizeUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersAnonymizeJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.anonymizeUser({ id });
  // TODO: Handle 'response' of type AdminUsersAnonymizeJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersAnonymizeJsonResponse](src/models/admin-users-anonymize-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changePassword(request: Users.ChangePasswordRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.users.changePassword({ token });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createUser(request: Users.CreateUserRequest, options?: RequestOptions): ApiPromise&lt;UsersJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.createUser({ apiKey, apiUsername });
  // TODO: Handle 'response' of type UsersJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UsersJsonResponse](src/models/users-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deactivateUser(request: Users.DeactivateUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersDeactivateJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.deactivateUser({ id });
  // TODO: Handle 'response' of type AdminUsersDeactivateJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersDeactivateJsonResponse](src/models/admin-users-deactivate-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUser(request: Users.DeleteUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersJsonResponse1, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.deleteUser({ id });
  // TODO: Handle 'response' of type AdminUsersJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersJsonResponse1](src/models/admin-users-json-response1.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise&lt;UJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUser({ username, apiKey, apiUsername });
  // TODO: Handle 'response' of type UJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UJsonResponse](src/models/ujson-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserEmails(request: Users.GetUserEmailsRequest, options?: RequestOptions): ApiPromise&lt;UEmailsJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUserEmails({ username });
  // TODO: Handle 'response' of type UEmailsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UEmailsJsonResponse](src/models/uemails-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserExternalId(request: Users.GetUserExternalIdRequest, options?: RequestOptions): ApiPromise&lt;UByExternalJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUserExternalId({ externalId, apiKey, apiUsername });
  // TODO: Handle 'response' of type UByExternalJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UByExternalJsonResponse](src/models/uby-external-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserIdentiyProviderExternalId(request: Users.GetUserIdentiyProviderExternalIdRequest, options?: RequestOptions): ApiPromise&lt;UByExternalJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.getUserIdentiyProviderExternalId({
    provider,
    externalId,
    apiKey,
    apiUsername,
  });
  // TODO: Handle 'response' of type UByExternalJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UByExternalJsonResponse](src/models/uby-external-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUserActions(request: Users.ListUserActionsRequest, options?: RequestOptions): ApiPromise&lt;UserActionsJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.listUserActions({ offset, username, filter });
  // TODO: Handle 'response' of type UserActionsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UserActionsJsonResponse](src/models/user-actions-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUserBadges(request: Users.ListUserBadgesRequest, options?: RequestOptions): ApiPromise&lt;UserBadgesJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.listUserBadges({ username });
  // TODO: Handle 'response' of type UserBadgesJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UserBadgesJsonResponse](src/models/user-badges-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listUsersPublic(request: Users.ListUsersPublicRequest, options?: RequestOptions): ApiPromise&lt;DirectoryItemsJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.listUsersPublic({ period, order });
  // TODO: Handle 'response' of type DirectoryItemsJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[DirectoryItemsJsonResponse](src/models/directory-items-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>logOutUser(request: Users.LogOutUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersLogOutJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.logOutUser({ id });
  // TODO: Handle 'response' of type AdminUsersLogOutJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersLogOutJsonResponse](src/models/admin-users-log-out-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refreshGravatar(request: Users.RefreshGravatarRequest, options?: RequestOptions): ApiPromise&lt;UserAvatarRefreshGravatarJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.refreshGravatar({ username });
  // TODO: Handle 'response' of type UserAvatarRefreshGravatarJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UserAvatarRefreshGravatarJsonResponse](src/models/user-avatar-refresh-gravatar-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sendPasswordResetEmail(request: Users.SendPasswordResetEmailRequest, options?: RequestOptions): ApiPromise&lt;SessionForgotPasswordJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.sendPasswordResetEmail();
  // TODO: Handle 'response' of type SessionForgotPasswordJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[SessionForgotPasswordJsonResponse](src/models/session-forgot-password-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>silenceUser(request: Users.SilenceUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersSilenceJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.silenceUser({ id });
  // TODO: Handle 'response' of type AdminUsersSilenceJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersSilenceJsonResponse](src/models/admin-users-silence-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>suspendUser(request: Users.SuspendUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersSuspendJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.suspendUser({ id });
  // TODO: Handle 'response' of type AdminUsersSuspendJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersSuspendJsonResponse](src/models/admin-users-suspend-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAvatar(request: Users.UpdateAvatarRequest, options?: RequestOptions): ApiPromise&lt;UPreferencesAvatarPickJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.updateAvatar({ username });
  // TODO: Handle 'response' of type UPreferencesAvatarPickJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UPreferencesAvatarPickJsonResponse](src/models/upreferences-avatar-pick-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEmail(request: Users.UpdateEmailRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.users.updateEmail({ username });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUser(request: Users.UpdateUserRequest, options?: RequestOptions): ApiPromise&lt;UJsonResponse1, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.updateUser({ username, apiKey, apiUsername });
  // TODO: Handle 'response' of type UJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UJsonResponse1](src/models/ujson-response1.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateUsername(request: Users.UpdateUsernameRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.users.updateUsername({ username });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Admin

> Source: [Admin](src/resources/admin.ts)

<details>
<summary><code>activateUser(request: Admin.ActivateUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersActivateJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.activateUser({ id });
  // TODO: Handle 'response' of type AdminUsersActivateJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersActivateJsonResponse](src/models/admin-users-activate-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminGetUser(request: Admin.AdminGetUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminGetUser({ id });
  // TODO: Handle 'response' of type AdminUsersJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersJsonResponse](src/models/admin-users-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminListUsers(request: Admin.AdminListUsersRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersJsonResponse2[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminListUsers();
  // TODO: Handle 'response' of type AdminUsersJsonResponse2[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersJsonResponse2](src/models/admin-users-json-response2.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminListUsersFlag(request: Admin.AdminListUsersFlagRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersListJsonResponse[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminListUsersFlag({ flag });
  // TODO: Handle 'response' of type AdminUsersListJsonResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersListJsonResponse](src/models/admin-users-list-json-response.ts)[]</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>anonymizeUser(request: Admin.AnonymizeUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersAnonymizeJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.anonymizeUser({ id });
  // TODO: Handle 'response' of type AdminUsersAnonymizeJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersAnonymizeJsonResponse](src/models/admin-users-anonymize-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deactivateUser(request: Admin.DeactivateUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersDeactivateJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.deactivateUser({ id });
  // TODO: Handle 'response' of type AdminUsersDeactivateJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersDeactivateJsonResponse](src/models/admin-users-deactivate-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteUser(request: Admin.DeleteUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersJsonResponse1, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.deleteUser({ id });
  // TODO: Handle 'response' of type AdminUsersJsonResponse1
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersJsonResponse1](src/models/admin-users-json-response1.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>logOutUser(request: Admin.LogOutUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersLogOutJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.logOutUser({ id });
  // TODO: Handle 'response' of type AdminUsersLogOutJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersLogOutJsonResponse](src/models/admin-users-log-out-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refreshGravatar(request: Admin.RefreshGravatarRequest, options?: RequestOptions): ApiPromise&lt;UserAvatarRefreshGravatarJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.refreshGravatar({ username });
  // TODO: Handle 'response' of type UserAvatarRefreshGravatarJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[UserAvatarRefreshGravatarJsonResponse](src/models/user-avatar-refresh-gravatar-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>silenceUser(request: Admin.SilenceUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersSilenceJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.silenceUser({ id });
  // TODO: Handle 'response' of type AdminUsersSilenceJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersSilenceJsonResponse](src/models/admin-users-silence-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>suspendUser(request: Admin.SuspendUserRequest, options?: RequestOptions): ApiPromise&lt;AdminUsersSuspendJsonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.suspendUser({ id });
  // TODO: Handle 'response' of type AdminUsersSuspendJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
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

**OnSuccess**: <code>[AdminUsersSuspendJsonResponse](src/models/admin-users-suspend-json-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

