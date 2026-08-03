
# Reply to User

## Structure

`ReplyToUser`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `username` | `string` | Required | - |
| `name` | `string \| undefined` | Optional | - |
| `avatarTemplate` | `string` | Required | - |

## Example

```ts
import { ReplyToUser } from 'discourse-api-documentationlib';

const replyToUser: ReplyToUser = {
  username: 'username2',
  avatarTemplate: 'avatar_template2',
  id: 124,
  name: 'name8',
};
```

