
# Post 2

## Structure

`Post2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
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
| `raw` | `string` | Required | - |
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
| `name` | `string \| null \| undefined` | Optional | - |
| `displayUsername` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { Post2 } from 'discourse-api-documentationlib';

const post2: Post2 = {
  id: 92,
  username: 'username0',
  avatarTemplate: 'avatar_template0',
  createdAt: 'created_at8',
  cooked: 'cooked2',
  postNumber: 244,
  postType: 238,
  postsCount: 230,
  updatedAt: 'updated_at6',
  replyCount: 182,
  replyToPostNumber: 'reply_to_post_number6',
  quoteCount: 106,
  incomingLinkCount: 234,
  reads: 10,
  readersCount: 130,
  score: 211.2,
  yours: false,
  topicId: 30,
  topicSlug: 'topic_slug0',
  primaryGroupName: 'primary_group_name8',
  flairName: 'flair_name4',
  flairUrl: 'flair_url0',
  flairBgColor: 'flair_bg_color4',
  flairColor: 'flair_color4',
  version: 64,
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
  userId: 188,
  draftSequence: 234,
  hidden: false,
  trustLevel: 76,
  deletedAt: 'deleted_at8',
  userDeleted: false,
  editReason: 'edit_reason8',
  canViewEditHistory: false,
  wiki: false,
  reviewableId: 166,
  reviewableScoreCount: 68,
  reviewableScorePendingCount: 162,
  postUrl: 'post_url2',
  flairGroupId: 142,
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
};
```

