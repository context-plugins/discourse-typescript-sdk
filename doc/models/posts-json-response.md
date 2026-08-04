
# Posts Json Response

## Structure

`PostsJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `latestPosts` | [`LatestPost[]`](../../doc/models/latest-post.md) | Required | - |

## Example

```ts
import { PostsJsonResponse } from 'discourse';

const postsJsonResponse: PostsJsonResponse = {
  latestPosts: [
    {
      id: 36,
      name: 'name6',
      username: 'username4',
      avatarTemplate: 'avatar_template4',
      createdAt: 'created_at4',
      cooked: 'cooked2',
      postNumber: 188,
      postType: 74,
      postsCount: 174,
      updatedAt: 'updated_at8',
      replyCount: 126,
      replyToPostNumber: 'reply_to_post_number2',
      quoteCount: 50,
      incomingLinkCount: 34,
      reads: 46,
      readersCount: 182,
      score: 113.36,
      yours: false,
      topicId: 26,
      topicSlug: 'topic_slug6',
      topicTitle: 'topic_title2',
      topicHtmlTitle: 'topic_html_title4',
      categoryId: 226,
      displayUsername: 'display_username6',
      primaryGroupName: 'primary_group_name4',
      flairName: 'flair_name0',
      flairUrl: 'flair_url6',
      flairBgColor: 'flair_bg_color0',
      flairColor: 'flair_color0',
      flairGroupId: 'flair_group_id4',
      badgesGranted: [
        { 'key1': 'val1', 'key2': 'val2' },
        { 'key1': 'val1', 'key2': 'val2' },
        { 'key1': 'val1', 'key2': 'val2' }
      ],
      version: 8,
      canEdit: false,
      canDelete: false,
      canRecover: false,
      canSeeHiddenPost: false,
      canWiki: false,
      userTitle: 'user_title0',
      bookmarked: false,
      raw: 'raw0',
      actionsSummary: [
        {
          id: 218,
          canAct: false,
        }
      ],
      moderator: false,
      admin: false,
      staff: false,
      userId: 132,
      hidden: false,
      trustLevel: 20,
      deletedAt: 'deleted_at4',
      userDeleted: false,
      editReason: 'edit_reason4',
      canViewEditHistory: false,
      wiki: false,
      excerpt: 'excerpt8',
      truncated: false,
      reviewableId: 'reviewable_id4',
      reviewableScoreCount: 244,
      reviewableScorePendingCount: 218,
      postUrl: 'post_url2',
    }
  ],
};
```

