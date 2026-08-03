
# User Action

## Structure

`UserAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `excerpt` | `string` | Required | - |
| `actionType` | `number` | Required | - |
| `createdAt` | `string` | Required | - |
| `avatarTemplate` | `string` | Required | - |
| `actingAvatarTemplate` | `string` | Required | - |
| `slug` | `string` | Required | - |
| `topicId` | `number` | Required | - |
| `targetUserId` | `number` | Required | - |
| `targetName` | `string \| null` | Required | - |
| `targetUsername` | `string` | Required | - |
| `postNumber` | `number` | Required | - |
| `postId` | `string \| null` | Required | - |
| `username` | `string` | Required | - |
| `name` | `string \| null` | Required | - |
| `userId` | `number` | Required | - |
| `actingUsername` | `string` | Required | - |
| `actingName` | `string \| null` | Required | - |
| `actingUserId` | `number` | Required | - |
| `title` | `string` | Required | - |
| `deleted` | `boolean` | Required | - |
| `hidden` | `string \| null` | Required | - |
| `postType` | `string \| null` | Required | - |
| `actionCode` | `string \| null` | Required | - |
| `categoryId` | `number` | Required | - |
| `closed` | `boolean` | Required | - |
| `archived` | `boolean` | Required | - |

## Example

```ts
import { UserAction } from 'discourse-api-documentationlib';

const userAction: UserAction = {
  excerpt: 'excerpt6',
  actionType: 198,
  createdAt: 'created_at2',
  avatarTemplate: 'avatar_template6',
  actingAvatarTemplate: 'acting_avatar_template6',
  slug: 'slug2',
  topicId: 156,
  targetUserId: 100,
  targetName: 'target_name8',
  targetUsername: 'target_username6',
  postNumber: 58,
  postId: 'post_id2',
  username: 'username6',
  name: 'name4',
  userId: 2,
  actingUsername: 'acting_username2',
  actingName: 'acting_name6',
  actingUserId: 220,
  title: 'title0',
  deleted: false,
  hidden: 'hidden2',
  postType: 'post_type4',
  actionCode: 'action_code4',
  categoryId: 100,
  closed: false,
  archived: false,
};
```

