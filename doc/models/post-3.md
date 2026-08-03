
# Post 3

*This model accepts additional fields of type unknown.*

## Structure

`Post3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `name` | `string \| null \| undefined` | Optional | - |
| `username` | `string \| undefined` | Optional | - |
| `avatarTemplate` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `cooked` | `string \| undefined` | Optional | - |
| `postNumber` | `number \| undefined` | Optional | - |
| `postType` | `number \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `replyCount` | `number \| undefined` | Optional | - |
| `replyToPostNumber` | `string \| null \| undefined` | Optional | - |
| `quoteCount` | `number \| undefined` | Optional | - |
| `incomingLinkCount` | `number \| undefined` | Optional | - |
| `reads` | `number \| undefined` | Optional | - |
| `readersCount` | `number \| undefined` | Optional | - |
| `score` | `number \| undefined` | Optional | - |
| `yours` | `boolean \| undefined` | Optional | - |
| `topicId` | `number \| undefined` | Optional | - |
| `topicSlug` | `string \| undefined` | Optional | - |
| `displayUsername` | `string \| null \| undefined` | Optional | - |
| `primaryGroupName` | `string \| null \| undefined` | Optional | - |
| `flairName` | `string \| null \| undefined` | Optional | - |
| `flairUrl` | `string \| null \| undefined` | Optional | - |
| `flairBgColor` | `string \| null \| undefined` | Optional | - |
| `flairColor` | `string \| null \| undefined` | Optional | - |
| `version` | `number \| undefined` | Optional | - |
| `canEdit` | `boolean \| undefined` | Optional | - |
| `canDelete` | `boolean \| undefined` | Optional | - |
| `canRecover` | `boolean \| undefined` | Optional | - |
| `canWiki` | `boolean \| undefined` | Optional | - |
| `read` | `boolean \| undefined` | Optional | - |
| `userTitle` | `string \| null \| undefined` | Optional | - |
| `actionsSummary` | [`ActionsSummary6[] \| undefined`](../../doc/models/actions-summary-6.md) | Optional | - |
| `moderator` | `boolean \| undefined` | Optional | - |
| `admin` | `boolean \| undefined` | Optional | - |
| `staff` | `boolean \| undefined` | Optional | - |
| `userId` | `number \| undefined` | Optional | - |
| `hidden` | `boolean \| undefined` | Optional | - |
| `trustLevel` | `number \| undefined` | Optional | - |
| `deletedAt` | `string \| null \| undefined` | Optional | - |
| `userDeleted` | `boolean \| undefined` | Optional | - |
| `editReason` | `string \| null \| undefined` | Optional | - |
| `canViewEditHistory` | `boolean \| undefined` | Optional | - |
| `wiki` | `boolean \| undefined` | Optional | - |
| `reviewableId` | `number \| undefined` | Optional | - |
| `reviewableScoreCount` | `number \| undefined` | Optional | - |
| `reviewableScorePendingCount` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Post3 } from 'discourse-api-documentationlib';

const post3: Post3 = {
  id: 168,
  name: 'name8',
  username: 'username8',
  avatarTemplate: 'avatar_template8',
  createdAt: 'created_at6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

