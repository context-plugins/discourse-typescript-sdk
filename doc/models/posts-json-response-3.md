
# Posts Json Response 3

## Structure

`PostsJsonResponse3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `post` | [`Post2`](../../doc/models/post-2.md) | Required | - |

## Example

```ts
import { PostsJsonResponse3 } from 'discourse-api-documentationlib';

const postsJsonResponse3: PostsJsonResponse3 = {
  post: {
    id: 236,
    username: 'username0',
    avatarTemplate: 'avatar_template0',
    createdAt: 'created_at8',
    cooked: 'cooked8',
    postNumber: 132,
    postType: 130,
    postsCount: 118,
    updatedAt: 'updated_at6',
    replyCount: 70,
    replyToPostNumber: 'reply_to_post_number6',
    quoteCount: 250,
    incomingLinkCount: 90,
    reads: 102,
    readersCount: 18,
    score: 253.6,
    yours: false,
    topicId: 82,
    topicSlug: 'topic_slug0',
    primaryGroupName: 'primary_group_name8',
    flairName: 'flair_name4',
    flairUrl: 'flair_url0',
    flairBgColor: 'flair_bg_color4',
    flairColor: 'flair_color4',
    version: 208,
    canEdit: false,
    canDelete: false,
    canRecover: false,
    canWiki: false,
    userTitle: 'user_title4',
    bookmarked: false,
    raw: 'raw4',
    actionsSummary: [
      {
        id: 218,
        canAct: false,
      }
    ],
    moderator: false,
    admin: false,
    staff: false,
    userId: 76,
    draftSequence: 122,
    hidden: false,
    trustLevel: 220,
    deletedAt: 'deleted_at8',
    userDeleted: false,
    editReason: 'edit_reason8',
    canViewEditHistory: false,
    wiki: false,
    reviewableId: 54,
    reviewableScoreCount: 212,
    reviewableScorePendingCount: 18,
    postUrl: 'post_url2',
    flairGroupId: 30,
    badgesGranted: [
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    canSeeHiddenPost: false,
    postLocalizations: [
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    mentionedUsers: [
      { 'key1': 'val1', 'key2': 'val2' }
    ],
  },
};
```

