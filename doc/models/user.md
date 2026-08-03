
# User

## Structure

`User`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `username` | `string` | Required | - |
| `name` | `string` | Required | - |
| `avatarTemplate` | `string` | Required | - |

## Example

```ts
import { User } from 'discourse-api-documentationlib';

const user: User = {
  id: 76,
  username: 'username0',
  name: 'name0',
  avatarTemplate: 'avatar_template0',
};
```

