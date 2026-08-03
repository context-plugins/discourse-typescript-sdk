
# User Actions Json Response

## Structure

`UserActionsJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userActions` | [`UserAction[]`](../../doc/models/user-action.md) | Required | - |

## Example

```ts
import { UserActionsJsonResponse } from 'discourse-api-documentationlib';

const userActionsJsonResponse: UserActionsJsonResponse = {
  userActions: [
    {
      excerpt: 'excerpt0',
      actionType: 10,
      createdAt: 'created_at6',
      avatarTemplate: 'avatar_template8',
      actingAvatarTemplate: 'acting_avatar_template0',
      slug: 'slug2',
      topicId: 168,
      targetUserId: 224,
      targetName: 'target_name2',
      targetUsername: 'target_username8',
      postNumber: 126,
      postId: 'post_id2',
      username: 'username8',
      name: 'name8',
      userId: 70,
      actingUsername: 'acting_username2',
      actingName: 'acting_name2',
      actingUserId: 152,
      title: 'title4',
      deleted: false,
      hidden: 'hidden6',
      postType: 'post_type0',
      actionCode: 'action_code8',
      categoryId: 32,
      closed: false,
      archived: false,
    }
  ],
};
```

