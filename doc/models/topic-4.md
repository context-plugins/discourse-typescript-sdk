
# Topic 4

*This model accepts additional fields of type unknown.*

## Structure

`Topic4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `title` | `string \| undefined` | Optional | - |
| `fancyTitle` | `string \| undefined` | Optional | - |
| `slug` | `string \| undefined` | Optional | - |
| `postsCount` | `number \| undefined` | Optional | - |
| `replyCount` | `number \| undefined` | Optional | - |
| `highestPostNumber` | `number \| undefined` | Optional | - |
| `imageUrl` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `lastPostedAt` | `string \| undefined` | Optional | - |
| `bumped` | `boolean \| undefined` | Optional | - |
| `bumpedAt` | `string \| undefined` | Optional | - |
| `archetype` | `string \| undefined` | Optional | - |
| `unseen` | `boolean \| undefined` | Optional | - |
| `lastReadPostNumber` | `number \| undefined` | Optional | - |
| `unreadPosts` | `number \| undefined` | Optional | - |
| `pinned` | `boolean \| undefined` | Optional | - |
| `unpinned` | `string \| null \| undefined` | Optional | - |
| `visible` | `boolean \| undefined` | Optional | - |
| `closed` | `boolean \| undefined` | Optional | - |
| `archived` | `boolean \| undefined` | Optional | - |
| `notificationLevel` | `number \| undefined` | Optional | - |
| `bookmarked` | `boolean \| undefined` | Optional | - |
| `liked` | `boolean \| undefined` | Optional | - |
| `tags` | `unknown[] \| undefined` | Optional | - |
| `views` | `number \| undefined` | Optional | - |
| `likeCount` | `number \| undefined` | Optional | - |
| `hasSummary` | `boolean \| undefined` | Optional | - |
| `lastPosterUsername` | `string \| undefined` | Optional | - |
| `categoryId` | `number \| undefined` | Optional | - |
| `pinnedGlobally` | `boolean \| undefined` | Optional | - |
| `featuredLink` | `string \| null \| undefined` | Optional | - |
| `posters` | [`Poster1[] \| undefined`](../../doc/models/poster-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Topic4 } from 'discourse-api-documentationlib';

const topic4: Topic4 = {
  id: 12,
  title: 'title4',
  fancyTitle: 'fancy_title0',
  slug: 'slug6',
  postsCount: 150,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

