
# Post 4

## Structure

`Post4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `name` | `string` | Required | - |
| `username` | `string` | Required | - |
| `avatarTemplate` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `cooked` | `string` | Required | - |
| `postNumber` | `number` | Required | - |
| `postType` | `number` | Required | - |
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
| `displayUsername` | `string` | Required | - |
| `primaryGroupName` | `string \| null` | Required | - |
| `flairName` | `string \| null` | Required | - |
| `flairUrl` | `string \| null` | Required | - |
| `flairBgColor` | `string \| null` | Required | - |
| `flairColor` | `string \| null` | Required | - |
| `version` | `number` | Required | - |
| `canEdit` | `boolean` | Required | - |
| `canDelete` | `boolean` | Required | - |
| `canRecover` | `boolean` | Required | - |
| `canSeeHiddenPost` | `boolean \| undefined` | Optional | - |
| `canWiki` | `boolean` | Required | - |
| `linkCounts` | [`LinkCount[]`](../../doc/models/link-count.md) | Required | - |
| `read` | `boolean` | Required | - |
| `userTitle` | `string \| null` | Required | - |
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
| `reviewableId` | `number` | Required | - |
| `reviewableScoreCount` | `number` | Required | - |
| `reviewableScorePendingCount` | `number` | Required | - |

## Example

```ts
import { Post4 } from 'discourse-api-documentationlib';

const post4: Post4 = {
  id: 118,
  name: 'name2',
  username: 'username2',
  avatarTemplate: 'avatar_template8',
  createdAt: 'created_at0',
  cooked: 'cooked6',
  postNumber: 14,
  postType: 248,
  updatedAt: 'updated_at8',
  replyCount: 208,
  replyToPostNumber: 'reply_to_post_number8',
  quoteCount: 132,
  incomingLinkCount: 208,
  reads: 220,
  readersCount: 156,
  score: 252.42,
  yours: false,
  topicId: 200,
  topicSlug: 'topic_slug2',
  displayUsername: 'display_username2',
  primaryGroupName: 'primary_group_name0',
  flairName: 'flair_name6',
  flairUrl: 'flair_url2',
  flairBgColor: 'flair_bg_color6',
  flairColor: 'flair_color6',
  version: 90,
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
  userTitle: 'user_title6',
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
  userId: 214,
  hidden: false,
  trustLevel: 102,
  deletedAt: 'deleted_at0',
  userDeleted: false,
  editReason: 'edit_reason0',
  canViewEditHistory: false,
  wiki: false,
  reviewableId: 192,
  reviewableScoreCount: 94,
  reviewableScorePendingCount: 136,
  canSeeHiddenPost: false,
};
```

