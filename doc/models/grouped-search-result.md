
# Grouped Search Result

## Structure

`GroupedSearchResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `morePosts` | `string \| null` | Required | - |
| `moreUsers` | `string \| null` | Required | - |
| `moreCategories` | `string \| null` | Required | - |
| `term` | `string` | Required | - |
| `searchLogId` | `number` | Required | - |
| `moreFullPageResults` | `string \| null` | Required | - |
| `canCreateTopic` | `boolean` | Required | - |
| `error` | `string \| null` | Required | - |
| `extra` | [`Extra \| undefined`](../../doc/models/extra.md) | Optional | - |
| `postIds` | `unknown[]` | Required | - |
| `userIds` | `unknown[]` | Required | - |
| `categoryIds` | `unknown[]` | Required | - |
| `tagIds` | `unknown[]` | Required | - |
| `groupIds` | `unknown[]` | Required | - |

## Example

```ts
import { GroupedSearchResult } from 'discourse-api-documentationlib';

const groupedSearchResult: GroupedSearchResult = {
  morePosts: 'more_posts4',
  moreUsers: 'more_users8',
  moreCategories: 'more_categories2',
  term: 'term6',
  searchLogId: 50,
  moreFullPageResults: 'more_full_page_results2',
  canCreateTopic: false,
  error: 'error6',
  postIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  userIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  categoryIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  tagIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  groupIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  extra: {
    categories: 'categories8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
};
```

