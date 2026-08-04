
# Post Actions Json Response

*This model accepts additional fields of type unknown.*

## Structure

`PostActionsJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | The ID of the post |
| `name` | `string` | Required | The name of the post author |
| `username` | `string` | Required | The username of the post author |
| `avatarTemplate` | `string` | Required | Template for the author's avatar URL |
| `createdAt` | `string` | Required | When the post was created |
| `cooked` | `string` | Required | The HTML content of the post |
| `postNumber` | `number` | Required | The post number within the topic |
| `postType` | `number` | Required | The type of post |
| `postsCount` | `number` | Required | Total posts count for the user |
| `updatedAt` | `string` | Required | When the post was last updated |
| `replyCount` | `number` | Required | Number of replies to this post |
| `replyToPostNumber` | `string \| null` | Required | Post number this post is replying to |
| `quoteCount` | `number` | Required | Number of times this post has been quoted |
| `incomingLinkCount` | `number` | Required | Number of incoming links to this post |
| `reads` | `number` | Required | Number of reads |
| `readersCount` | `number` | Required | Number of readers |
| `score` | `number` | Required | Post score |
| `yours` | `boolean` | Required | Whether this post belongs to the current user |
| `topicId` | `number` | Required | ID of the topic this post belongs to |
| `topicSlug` | `string` | Required | Slug of the topic this post belongs to |
| `displayUsername` | `string` | Required | Display username of the post author |
| `primaryGroupName` | `string \| null` | Required | Primary group name of the author |
| `flairName` | `string \| null` | Required | Flair name of the author |
| `flairUrl` | `string \| null` | Required | Flair URL of the author |
| `flairBgColor` | `string \| null` | Required | Flair background color of the author |
| `flairColor` | `string \| null` | Required | Flair color of the author |
| `flairGroupId` | `number \| null` | Required | Flair group ID of the author |
| `badgesGranted` | `unknown[]` | Required | Badges granted to the user |
| `version` | `number` | Required | Version number of the post |
| `canEdit` | `boolean` | Required | Whether the current user can edit this post |
| `canDelete` | `boolean` | Required | Whether the current user can delete this post |
| `canRecover` | `boolean` | Required | Whether the current user can recover this post |
| `canSeeHiddenPost` | `boolean` | Required | Whether the current user can see hidden posts |
| `canWiki` | `boolean` | Required | Whether the current user can wiki this post |
| `userTitle` | `string \| null` | Required | Title of the post author |
| `bookmarked` | `boolean` | Required | Whether the post is bookmarked by the current user |
| `actionsSummary` | [`ActionsSummary5[]`](../../doc/models/actions-summary-5.md) | Required | Summary of actions performed on this post |
| `moderator` | `boolean` | Required | Whether the post author is a moderator |
| `admin` | `boolean` | Required | Whether the post author is an admin |
| `staff` | `boolean` | Required | Whether the post author is staff |
| `userId` | `number` | Required | ID of the post author |
| `hidden` | `boolean` | Required | Whether the post is hidden |
| `trustLevel` | `number` | Required | Trust level of the post author |
| `deletedAt` | `string \| null` | Required | When the post was deleted |
| `userDeleted` | `boolean` | Required | Whether the post was deleted by the user |
| `editReason` | `string \| null` | Required | Reason for the last edit |
| `canViewEditHistory` | `boolean` | Required | Whether the current user can view edit history |
| `wiki` | `boolean` | Required | Whether this is a wiki post |
| `reviewableId` | `number \| null` | Required | ID of the reviewable if this post is under review |
| `reviewableScoreCount` | `number` | Required | Number of reviewable scores |
| `reviewableScorePendingCount` | `number` | Required | Number of pending reviewable scores |
| `postUrl` | `string` | Required | URL of the post |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PostActionsJsonResponse } from 'discourse';

const postActionsJsonResponse: PostActionsJsonResponse = {
  id: 0,
  name: 'name2',
  username: 'username2',
  avatarTemplate: 'avatar_template8',
  createdAt: 'created_at0',
  cooked: 'cooked6',
  postNumber: 152,
  postType: 110,
  postsCount: 138,
  updatedAt: 'updated_at8',
  replyCount: 90,
  replyToPostNumber: 'reply_to_post_number8',
  quoteCount: 14,
  incomingLinkCount: 70,
  reads: 174,
  readersCount: 38,
  score: 2.92,
  yours: false,
  topicId: 62,
  topicSlug: 'topic_slug2',
  displayUsername: 'display_username2',
  primaryGroupName: 'primary_group_name0',
  flairName: 'flair_name6',
  flairUrl: 'flair_url2',
  flairBgColor: 'flair_bg_color6',
  flairColor: 'flair_color6',
  flairGroupId: 50,
  badgesGranted: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  version: 228,
  canEdit: false,
  canDelete: false,
  canRecover: false,
  canSeeHiddenPost: false,
  canWiki: false,
  userTitle: 'user_title6',
  bookmarked: false,
  actionsSummary: [
    {
      id: 218,
      count: 46,
      acted: false,
      canUndo: false,
      canAct: false,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  moderator: false,
  admin: false,
  staff: false,
  userId: 96,
  hidden: false,
  trustLevel: 240,
  deletedAt: 'deleted_at0',
  userDeleted: false,
  editReason: 'edit_reason0',
  canViewEditHistory: false,
  wiki: false,
  reviewableId: 74,
  reviewableScoreCount: 232,
  reviewableScorePendingCount: 254,
  postUrl: 'post_url4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

