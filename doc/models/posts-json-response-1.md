
# Posts Json Response 1

## Structure

`PostsJsonResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `name` | `string \| null` | Required | - |
| `username` | `string` | Required | - |
| `avatarTemplate` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `raw` | `string \| undefined` | Optional | - |
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
| `displayUsername` | `string \| null` | Required | - |
| `primaryGroupName` | `string \| null` | Required | - |
| `flairName` | `string \| null` | Required | - |
| `flairUrl` | `string \| null` | Required | - |
| `flairBgColor` | `string \| null` | Required | - |
| `flairColor` | `string \| null` | Required | - |
| `flairGroupId` | `number \| null \| undefined` | Optional | - |
| `badgesGranted` | `unknown[] \| undefined` | Optional | - |
| `version` | `number` | Required | - |
| `canEdit` | `boolean` | Required | - |
| `canDelete` | `boolean` | Required | - |
| `canRecover` | `boolean` | Required | - |
| `canSeeHiddenPost` | `boolean \| undefined` | Optional | - |
| `canWiki` | `boolean` | Required | - |
| `userTitle` | `string \| null` | Required | - |
| `bookmarked` | `boolean` | Required | - |
| `actionsSummary` | [`ActionsSummary[]`](../../doc/models/actions-summary.md) | Required | - |
| `moderator` | `boolean` | Required | - |
| `admin` | `boolean` | Required | - |
| `staff` | `boolean` | Required | - |
| `userId` | `number` | Required | - |
| `draftSequence` | `number` | Required | - |
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
| `postLocalizations` | `unknown[] \| undefined` | Optional | - |
| `mentionedUsers` | `unknown[] \| undefined` | Optional | - |

## Example

```ts
import { PostsJsonResponse1 } from 'discourse';

const postsJsonResponse1: PostsJsonResponse1 = {
  id: 142,
  name: 'name4',
  username: 'username4',
  avatarTemplate: 'avatar_template4',
  createdAt: 'created_at2',
  cooked: 'cooked6',
  postNumber: 38,
  postType: 32,
  postsCount: 24,
  updatedAt: 'updated_at0',
  replyCount: 232,
  replyToPostNumber: 'reply_to_post_number0',
  quoteCount: 156,
  incomingLinkCount: 184,
  reads: 60,
  readersCount: 180,
  score: 209.14,
  yours: false,
  topicId: 80,
  topicSlug: 'topic_slug4',
  displayUsername: 'display_username4',
  primaryGroupName: 'primary_group_name2',
  flairName: 'flair_name8',
  flairUrl: 'flair_url4',
  flairBgColor: 'flair_bg_color8',
  flairColor: 'flair_color8',
  version: 114,
  canEdit: false,
  canDelete: false,
  canRecover: false,
  canWiki: false,
  userTitle: 'user_title8',
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
  userId: 238,
  draftSequence: 28,
  hidden: false,
  trustLevel: 126,
  deletedAt: 'deleted_at2',
  userDeleted: false,
  editReason: 'edit_reason2',
  canViewEditHistory: false,
  wiki: false,
  reviewableId: 216,
  reviewableScoreCount: 118,
  reviewableScorePendingCount: 112,
  postUrl: 'post_url6',
  raw: 'raw8',
  flairGroupId: 192,
  badgesGranted: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  canSeeHiddenPost: false,
  postLocalizations: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
};
```

