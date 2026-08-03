
# Creator

## Structure

`Creator`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `username` | `string` | Required | - |
| `name` | `string \| null \| undefined` | Optional | - |
| `avatarTemplate` | `string` | Required | - |

## Example

```ts
import { Creator } from 'discourse-api-documentationlib';

const creator: Creator = {
  id: 76,
  username: 'username2',
  avatarTemplate: 'avatar_template2',
  name: 'name8',
};
```

