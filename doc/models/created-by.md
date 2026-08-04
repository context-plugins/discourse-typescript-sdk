
# Created By

## Structure

`CreatedBy`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `username` | `string` | Required | - |
| `name` | `string` | Required | - |
| `avatarTemplate` | `string` | Required | - |

## Example

```ts
import { CreatedBy } from 'discourse';

const createdBy: CreatedBy = {
  id: 8,
  username: 'username2',
  name: 'name2',
  avatarTemplate: 'avatar_template2',
};
```

