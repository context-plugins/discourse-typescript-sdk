
# C Json Response

## Structure

`CJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `users` | [`User[] \| undefined`](../../doc/models/user.md) | Optional | - |
| `primaryGroups` | `unknown[] \| undefined` | Optional | - |
| `topicList` | [`TopicList`](../../doc/models/topic-list.md) | Required | - |

## Example

```ts
import { CJsonResponse } from 'discourse';

const cJsonResponse: CJsonResponse = {
  topicList: {
    canCreateTopic: false,
    perPage: 116,
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
      },
      {
        id: 22,
        name: 'name8',
        slug: 'slug2',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        id: 22,
        name: 'name8',
        slug: 'slug2',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
  },
  users: [
    {
      id: 58,
      username: 'username4',
      name: 'name6',
      avatarTemplate: 'avatar_template4',
    },
    {
      id: 58,
      username: 'username4',
      name: 'name6',
      avatarTemplate: 'avatar_template4',
    }
  ],
  primaryGroups: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
};
```

