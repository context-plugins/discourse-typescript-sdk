
# Post Stream 1

## Structure

`PostStream1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `posts` | [`Post4[]`](../../doc/models/post-4.md) | Required | - |
| `stream` | `unknown[]` | Required | - |

## Example

```ts
import { PostStream1 } from 'discourse';

const postStream1: PostStream1 = {
  posts: [
    {
      id: 64,
      name: 'name6',
      username: 'username6',
      avatarTemplate: 'avatar_template6',
      createdAt: 'created_at4',
      cooked: 'cooked8',
      postNumber: 216,
      postType: 210,
      updatedAt: 'updated_at2',
      replyCount: 154,
      replyToPostNumber: 'reply_to_post_number2',
      quoteCount: 78,
      incomingLinkCount: 6,
      reads: 238,
      readersCount: 102,
      score: 182.76,
      yours: false,
      topicId: 2,
      topicSlug: 'topic_slug6',
      displayUsername: 'display_username6',
      primaryGroupName: 'primary_group_name4',
      flairName: 'flair_name0',
      flairUrl: 'flair_url6',
      flairBgColor: 'flair_bg_color0',
      flairColor: 'flair_color0',
      version: 36,
      canEdit: false,
      canDelete: false,
      canRecover: false,
      canWiki: false,
      linkCounts: [
        {
          url: 'url4',
          internal: false,
          reflection: false,
          title: 'title6',
          clicks: 220,
        }
      ],
      read: false,
      userTitle: 'user_title0',
      bookmarked: false,
      actionsSummary: [
        {
          id: 218,
          canAct: false,
        }
      ],
      moderator: false,
      admin: false,
      staff: false,
      userId: 160,
      hidden: false,
      trustLevel: 48,
      deletedAt: 'deleted_at4',
      userDeleted: false,
      editReason: 'edit_reason4',
      canViewEditHistory: false,
      wiki: false,
      reviewableId: 138,
      reviewableScoreCount: 40,
      reviewableScorePendingCount: 190,
      canSeeHiddenPost: false,
    }
  ],
  stream: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
};
```

