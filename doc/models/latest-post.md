
# Latest Post

## Structure

`LatestPost`

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
| `replyToPostNumber` | `string \| null` | Required | - |
| `quoteCount` | `number` | Required | - |
| `incomingLinkCount` | `number` | Required | - |
| `reads` | `number` | Required | - |
| `readersCount` | `number` | Required | - |
| `score` | `number` | Required | - |
| `yours` | `boolean` | Required | - |
| `topicId` | `number` | Required | - |
| `topicSlug` | `string` | Required | - |
| `topicTitle` | `string` | Required | - |
| `topicHtmlTitle` | `string` | Required | - |
| `categoryId` | `number` | Required | - |
| `displayUsername` | `string \| null` | Required | - |
| `primaryGroupName` | `string \| null` | Required | - |
| `flairName` | `string \| null` | Required | - |
| `flairUrl` | `string \| null` | Required | - |
| `flairBgColor` | `string \| null` | Required | - |
| `flairColor` | `string \| null` | Required | - |
| `flairGroupId` | `string \| null` | Required | - |
| `badgesGranted` | `unknown[]` | Required | - |
| `version` | `number` | Required | - |
| `canEdit` | `boolean` | Required | - |
| `canDelete` | `boolean` | Required | - |
| `canRecover` | `boolean` | Required | - |
| `canSeeHiddenPost` | `boolean` | Required | - |
| `canWiki` | `boolean` | Required | - |
| `userTitle` | `string \| null` | Required | - |
| `bookmarked` | `boolean` | Required | - |
| `raw` | `string` | Required | - |
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
| `excerpt` | `string` | Required | - |
| `truncated` | `boolean` | Required | - |
| `reviewableId` | `string \| null` | Required | - |
| `reviewableScoreCount` | `number` | Required | - |
| `reviewableScorePendingCount` | `number` | Required | - |
| `postUrl` | `string` | Required | - |

## Example

```ts
import { LatestPost } from 'discourse';

const latestPost: LatestPost = {
  id: 74,
  name: 'name4',
  username: 'username4',
  avatarTemplate: 'avatar_template6',
  createdAt: 'created_at2',
  cooked: 'cooked4',
  postNumber: 226,
  postType: 36,
  postsCount: 212,
  updatedAt: 'updated_at0',
  replyCount: 164,
  replyToPostNumber: 'reply_to_post_number0',
  quoteCount: 88,
  incomingLinkCount: 252,
  reads: 248,
  readersCount: 112,
  score: 36.94,
  yours: false,
  topicId: 12,
  topicSlug: 'topic_slug4',
  topicTitle: 'topic_title0',
  topicHtmlTitle: 'topic_html_title4',
  categoryId: 188,
  displayUsername: 'display_username4',
  primaryGroupName: 'primary_group_name2',
  flairName: 'flair_name8',
  flairUrl: 'flair_url4',
  flairBgColor: 'flair_bg_color8',
  flairColor: 'flair_color8',
  flairGroupId: 'flair_group_id2',
  badgesGranted: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  version: 46,
  canEdit: false,
  canDelete: false,
  canRecover: false,
  canSeeHiddenPost: false,
  canWiki: false,
  userTitle: 'user_title8',
  bookmarked: false,
  raw: 'raw8',
  actionsSummary: [
    {
      id: 218,
      canAct: false,
    }
  ],
  moderator: false,
  admin: false,
  staff: false,
  userId: 170,
  hidden: false,
  trustLevel: 58,
  deletedAt: 'deleted_at2',
  userDeleted: false,
  editReason: 'edit_reason2',
  canViewEditHistory: false,
  wiki: false,
  excerpt: 'excerpt6',
  truncated: false,
  reviewableId: 'reviewable_id4',
  reviewableScoreCount: 50,
  reviewableScorePendingCount: 180,
  postUrl: 'post_url6',
};
```

