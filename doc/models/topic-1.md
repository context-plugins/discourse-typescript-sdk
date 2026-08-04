
# Topic 1

## Structure

`Topic1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `title` | `string` | Required | - |
| `fancyTitle` | `string` | Required | - |
| `slug` | `string` | Required | - |
| `postsCount` | `number` | Required | - |
| `replyCount` | `number` | Required | - |
| `highestPostNumber` | `number` | Required | - |
| `imageUrl` | `string \| null` | Required | - |
| `createdAt` | `string` | Required | - |
| `lastPostedAt` | `string` | Required | - |
| `bumped` | `boolean` | Required | - |
| `bumpedAt` | `string` | Required | - |
| `archetype` | `string` | Required | - |
| `unseen` | `boolean` | Required | - |
| `pinned` | `boolean` | Required | - |
| `unpinned` | `string \| null` | Required | - |
| `excerpt` | `string` | Required | - |
| `visible` | `boolean` | Required | - |
| `closed` | `boolean` | Required | - |
| `archived` | `boolean` | Required | - |
| `bookmarked` | `string \| null` | Required | - |
| `liked` | `string \| null` | Required | - |
| `views` | `number` | Required | - |
| `likeCount` | `number` | Required | - |
| `hasSummary` | `boolean` | Required | - |
| `lastPosterUsername` | `string` | Required | - |
| `categoryId` | `number` | Required | - |
| `pinnedGlobally` | `boolean` | Required | - |
| `featuredLink` | `string \| null` | Required | - |
| `posters` | [`Poster[]`](../../doc/models/poster.md) | Required | - |

## Example

```ts
import { Topic1 } from 'discourse';

const topic1: Topic1 = {
  id: 214,
  title: 'title8',
  fancyTitle: 'fancy_title2',
  slug: 'slug6',
  postsCount: 96,
  replyCount: 48,
  highestPostNumber: 192,
  imageUrl: 'image_url8',
  createdAt: 'created_at0',
  lastPostedAt: 'last_posted_at6',
  bumped: false,
  bumpedAt: 'bumped_at8',
  archetype: 'archetype8',
  unseen: false,
  pinned: false,
  unpinned: 'unpinned4',
  excerpt: 'excerpt4',
  visible: false,
  closed: false,
  archived: false,
  bookmarked: 'bookmarked2',
  liked: 'liked6',
  views: 232,
  likeCount: 212,
  hasSummary: false,
  lastPosterUsername: 'last_poster_username6',
  categoryId: 48,
  pinnedGlobally: false,
  featuredLink: 'featured_link8',
  posters: [
    {
      extras: 'extras2',
      description: 'description8',
      userId: 60,
      primaryGroupId: 232,
    }
  ],
};
```

