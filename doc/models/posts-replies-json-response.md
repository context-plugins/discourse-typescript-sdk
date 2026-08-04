
# Posts Replies Json Response

*This model accepts additional fields of type unknown.*

## Structure

`PostsRepliesJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `name` | `string \| null` | Required | - |
| `username` | `string` | Required | - |
| `avatarTemplate` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `cooked` | `string` | Required | - |
| `postNumber` | `number` | Required | - |
| `postType` | `number` | Required | - |
| `postsCount` | `number` | Required | - |
| `updatedAt` | `string` | Required | - |
| `replyCount` | `number` | Required | - |
| `replyToPostNumber` | `number` | Required | - |
| `quoteCount` | `number` | Required | - |
| `incomingLinkCount` | `number` | Required | - |
| `reads` | `number` | Required | - |
| `readersCount` | `number` | Required | - |
| `score` | `number` | Required | - |
| `yours` | `boolean` | Required | - |
| `topicId` | `number` | Required | - |
| `topicSlug` | `string` | Required | - |
| `displayUsername` | `string \| null` | Required | - |
| `primaryGroupName` | `string \| null` | Required | - |
| `flairName` | `string \| null` | Required | - |
| `flairUrl` | `string \| null` | Required | - |
| `flairBgColor` | `string \| null` | Required | - |
| `flairColor` | `string \| null` | Required | - |
| `flairGroupId` | `number \| null \| undefined` | Optional | - |
| `version` | `number` | Required | - |
| `canEdit` | `boolean` | Required | - |
| `canDelete` | `boolean` | Required | - |
| `canRecover` | `boolean` | Required | - |
| `canSeeHiddenPost` | `boolean` | Required | - |
| `canWiki` | `boolean` | Required | - |
| `userTitle` | `string \| null` | Required | - |
| `replyToUser` | [`ReplyToUser`](../../doc/models/reply-to-user.md) | Required | - |
| `bookmarked` | `boolean` | Required | - |
| `actionsSummary` | [`ActionsSummary[]`](../../doc/models/actions-summary.md) | Required | - |
| `moderator` | `boolean` | Required | - |
| `admin` | `boolean` | Required | - |
| `staff` | `boolean` | Required | - |
| `userId` | `number` | Required | - |
| `hidden` | `boolean` | Required | - |
| `trustLevel` | `number` | Required | - |
| `deletedAt` | `string \| null` | Required | - |
| `userDeleted` | `boolean` | Required | - |
| `editReason` | `string \| null` | Required | - |
| `canViewEditHistory` | `boolean` | Required | - |
| `wiki` | `boolean` | Required | - |
| `reviewableId` | `number \| null` | Required | - |
| `reviewableScoreCount` | `number` | Required | - |
| `reviewableScorePendingCount` | `number` | Required | - |
| `postUrl` | `string` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PostsRepliesJsonResponse } from 'discourse';

const postsRepliesJsonResponse: PostsRepliesJsonResponse = {
  id: 212,
  name: 'name6',
  username: 'username4',
  avatarTemplate: 'avatar_template4',
  createdAt: 'created_at4',
  cooked: 'cooked2',
  postNumber: 108,
  postType: 154,
  postsCount: 94,
  updatedAt: 'updated_at8',
  replyCount: 46,
  replyToPostNumber: 80,
  quoteCount: 226,
  incomingLinkCount: 114,
  reads: 126,
  readersCount: 6,
  score: 112.56,
  yours: false,
  topicId: 106,
  topicSlug: 'topic_slug6',
  displayUsername: 'display_username6',
  primaryGroupName: 'primary_group_name4',
  flairName: 'flair_name0',
  flairUrl: 'flair_url6',
  flairBgColor: 'flair_bg_color0',
  flairColor: 'flair_color0',
  version: 184,
  canEdit: false,
  canDelete: false,
  canRecover: false,
  canSeeHiddenPost: false,
  canWiki: false,
  userTitle: 'user_title0',
  replyToUser: {
    username: 'username6',
    avatarTemplate: 'avatar_template6',
    id: 20,
    name: 'name4',
  },
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
  userId: 52,
  hidden: false,
  trustLevel: 196,
  deletedAt: 'deleted_at4',
  userDeleted: false,
  editReason: 'edit_reason4',
  canViewEditHistory: false,
  wiki: false,
  reviewableId: 226,
  reviewableScoreCount: 68,
  reviewableScorePendingCount: 42,
  postUrl: 'post_url2',
  flairGroupId: 6,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

