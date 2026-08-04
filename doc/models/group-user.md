
# Group User

## Structure

`GroupUser`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `number` | Required | - |
| `userId` | `number` | Required | - |
| `notificationLevel` | `number` | Required | - |
| `owner` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { GroupUser } from 'discourse';

const groupUser: GroupUser = {
  groupId: 158,
  userId: 22,
  notificationLevel: 22,
  owner: false,
};
```

