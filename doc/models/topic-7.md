
# Topic 7

*This model accepts additional fields of type unknown.*

## Structure

`Topic7`

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
| `unpinned` | `boolean \| undefined` | Optional | - |
| `visible` | `boolean \| undefined` | Optional | - |
| `closed` | `boolean \| undefined` | Optional | - |
| `archived` | `boolean \| undefined` | Optional | - |
| `notificationLevel` | `number \| undefined` | Optional | - |
| `bookmarked` | `boolean \| undefined` | Optional | - |
| `liked` | `boolean \| undefined` | Optional | - |
| `views` | `number \| undefined` | Optional | - |
| `likeCount` | `number \| undefined` | Optional | - |
| `hasSummary` | `boolean \| undefined` | Optional | - |
| `lastPosterUsername` | `string \| undefined` | Optional | - |
| `categoryId` | `number \| undefined` | Optional | - |
| `opLikeCount` | `number \| undefined` | Optional | - |
| `pinnedGlobally` | `boolean \| undefined` | Optional | - |
| `featuredLink` | `string \| null \| undefined` | Optional | - |
| `posters` | [`Poster6[] \| undefined`](../../doc/models/poster-6.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Topic7 } from 'discourse';

const topic7: Topic7 = {
  id: 162,
  title: 'title2',
  fancyTitle: 'fancy_title2',
  slug: 'slug4',
  postsCount: 44,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

