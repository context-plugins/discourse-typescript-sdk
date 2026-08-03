
# Granted By

## Structure

`GrantedBy`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `username` | `string` | Required | - |
| `name` | `string` | Required | - |
| `avatarTemplate` | `string` | Required | - |
| `flairName` | `string \| null` | Required | - |
| `admin` | `boolean` | Required | - |
| `moderator` | `boolean` | Required | - |
| `trustLevel` | `number` | Required | - |

## Example

```ts
import { GrantedBy } from 'discourse-api-documentationlib';

const grantedBy: GrantedBy = {
  id: 130,
  username: 'username0',
  name: 'name0',
  avatarTemplate: 'avatar_template0',
  flairName: 'flair_name6',
  admin: false,
  moderator: false,
  trustLevel: 142,
};
```

