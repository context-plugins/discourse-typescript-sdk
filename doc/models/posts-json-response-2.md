
# Posts Json Response 2

*This model accepts additional fields of type unknown.*

## Structure

`PostsJsonResponse2`

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
| `version` | `number` | Required | - |
| `canEdit` | `boolean` | Required | - |
| `canDelete` | `boolean` | Required | - |
| `canRecover` | `boolean` | Required | - |
| `canSeeHiddenPost` | `boolean \| undefined` | Optional | - |
| `canWiki` | `boolean` | Required | - |
| `userTitle` | `string \| null` | Required | - |
| `bookmarked` | `boolean` | Required | - |
| `raw` | `string` | Required | - |
| `actionsSummary` | [`ActionsSummary2[]`](../../doc/models/actions-summary-2.md) | Required | - |
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
| `mentionedUsers` | `unknown[] \| undefined` | Optional | - |
| `name` | `string \| null \| undefined` | Optional | - |
| `displayUsername` | `string \| null \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PostsJsonResponse2 } from 'discourse';

const postsJsonResponse2: PostsJsonResponse2 = {
  id: 184,
  username: 'username4',
  avatarTemplate: 'avatar_template6',
  createdAt: 'created_at2',
  cooked: 'cooked4',
  postNumber: 80,
  postType: 74,
  postsCount: 66,
  updatedAt: 'updated_at0',
  replyCount: 18,
  replyToPostNumber: 'reply_to_post_number0',
  quoteCount: 198,
  incomingLinkCount: 142,
  reads: 102,
  readersCount: 222,
  score: 63.64,
  yours: false,
  topicId: 122,
  topicSlug: 'topic_slug4',
  primaryGroupName: 'primary_group_name2',
  flairName: 'flair_name8',
  flairUrl: 'flair_url4',
  flairBgColor: 'flair_bg_color8',
  flairColor: 'flair_color8',
  version: 156,
  canEdit: false,
  canDelete: false,
  canRecover: false,
  canWiki: false,
  userTitle: 'user_title8',
  bookmarked: false,
  raw: 'raw8',
  actionsSummary: [
    {
      id: 218,
      count: 46,
      acted: false,
      canUndo: false,
      canAct: false,
    }
  ],
  moderator: false,
  admin: false,
  staff: false,
  userId: 24,
  hidden: false,
  trustLevel: 168,
  deletedAt: 'deleted_at2',
  userDeleted: false,
  editReason: 'edit_reason2',
  canViewEditHistory: false,
  wiki: false,
  reviewableId: 2,
  reviewableScoreCount: 160,
  reviewableScorePendingCount: 70,
  postUrl: 'post_url6',
  flairGroupId: 234,
  canSeeHiddenPost: false,
  mentionedUsers: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  name: 'name4',
  displayUsername: 'display_username4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

