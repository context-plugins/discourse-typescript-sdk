
# Search Json Response

## Structure

`SearchJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `posts` | `unknown[]` | Required | - |
| `users` | `unknown[]` | Required | - |
| `categories` | `unknown[]` | Required | - |
| `tags` | [`Tag[]`](../../doc/models/tag.md) | Required | - |
| `groups` | `unknown[]` | Required | - |
| `groupedSearchResult` | [`GroupedSearchResult`](../../doc/models/grouped-search-result.md) | Required | - |

## Example

```ts
import { SearchJsonResponse } from 'discourse';

const searchJsonResponse: SearchJsonResponse = {
  posts: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  users: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  categories: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  tags: [
    {
      id: 26,
      name: 'name0',
      slug: 'slug4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  groups: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  groupedSearchResult: {
    morePosts: 'more_posts4',
    moreUsers: 'more_users2',
    moreCategories: 'more_categories2',
    term: 'term6',
    searchLogId: 80,
    moreFullPageResults: 'more_full_page_results2',
    canCreateTopic: false,
    error: 'error6',
    postIds: [
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    userIds: [
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    categoryIds: [
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    tagIds: [
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    groupIds: [
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    extra: {
      categories: 'categories8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
  },
};
```

