
# Topic List

## Structure

`TopicList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `canCreateTopic` | `boolean` | Required | - |
| `perPage` | `number` | Required | - |
| `topTags` | [`TopTag[] \| undefined`](../../doc/models/top-tag.md) | Optional | - |
| `topics` | [`Topic1[]`](../../doc/models/topic-1.md) | Required | - |

## Example

```ts
import { TopicList } from 'discourse-api-documentationlib';

const topicList: TopicList = {
  canCreateTopic: false,
  perPage: 62,
  topics: [
    {
      id: 54,
      title: 'title8',
      fancyTitle: 'fancy_title6',
      slug: 'slug0',
      postsCount: 192,
      replyCount: 144,
      highestPostNumber: 224,
      imageUrl: 'image_url2',
      createdAt: 'created_at4',
      lastPostedAt: 'last_posted_at2',
      bumped: false,
      bumpedAt: 'bumped_at2',
      archetype: 'archetype8',
      unseen: false,
      pinned: false,
      unpinned: 'unpinned8',
      excerpt: 'excerpt8',
      visible: false,
      closed: false,
      archived: false,
      bookmarked: 'bookmarked6',
      liked: 'liked2',
      views: 136,
      likeCount: 52,
      hasSummary: false,
      lastPosterUsername: 'last_poster_username2',
      categoryId: 208,
      pinnedGlobally: false,
      featuredLink: 'featured_link2',
      posters: [
        {
          extras: 'extras2',
          description: 'description8',
          userId: 60,
          primaryGroupId: 232,
        }
      ],
    }
  ],
  topTags: [
    {
      id: 22,
      name: 'name8',
      slug: 'slug2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
};
```

