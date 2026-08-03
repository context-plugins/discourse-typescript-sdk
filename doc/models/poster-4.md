
# Poster 4

## Structure

`Poster4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `extras` | `string` | Required | - |
| `description` | `string` | Required | - |
| `user` | [`User`](../../doc/models/user.md) | Required | - |

## Example

```ts
import { Poster4 } from 'discourse-api-documentationlib';

const poster4: Poster4 = {
  extras: 'extras4',
  description: 'description0',
  user: {
    id: 76,
    username: 'username0',
    name: 'name0',
    avatarTemplate: 'avatar_template0',
  },
};
```

