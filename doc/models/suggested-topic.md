
# Suggested Topic

## Structure

`SuggestedTopic`

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
| `lastPostedAt` | `string \| null` | Required | - |
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
| `tags` | [`Tag[]`](../../doc/models/tag.md) | Required | - |
| `tagsDescriptions` | `unknown` | Required | - |
| `likeCount` | `number` | Required | - |
| `views` | `number` | Required | - |
| `categoryId` | `number` | Required | - |
| `featuredLink` | `string \| null` | Required | - |
| `posters` | [`Poster4[]`](../../doc/models/poster-4.md) | Required | - |

## Example

```ts
import { SuggestedTopic } from 'discourse-api-documentationlib';

const suggestedTopic: SuggestedTopic = {
  id: 68,
  title: 'title4',
  fancyTitle: 'fancy_title8',
  slug: 'slug2',
  postsCount: 206,
  replyCount: 158,
  highestPostNumber: 46,
  imageUrl: 'image_url4',
  createdAt: 'created_at6',
  lastPostedAt: 'last_posted_at0',
  bumped: false,
  bumpedAt: 'bumped_at4',
  archetype: 'archetype4',
  unseen: false,
  pinned: false,
  unpinned: 'unpinned0',
  excerpt: 'excerpt0',
  visible: false,
  closed: false,
  archived: false,
  bookmarked: 'bookmarked8',
  liked: 'liked0',
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
  tagsDescriptions: { 'key1': 'val1', 'key2': 'val2' },
  likeCount: 66,
  views: 122,
  categoryId: 194,
  featuredLink: 'featured_link4',
  posters: [
    {
      extras: 'extras2',
      description: 'description8',
      user: {
        id: 76,
        username: 'username0',
        name: 'name0',
        avatarTemplate: 'avatar_template0',
      },
    }
  ],
};
```

