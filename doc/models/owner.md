
# Owner

## Structure

`Owner`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `username` | `string` | Required | - |
| `name` | `string \| null` | Required | - |
| `avatarTemplate` | `string` | Required | - |
| `title` | `string \| null` | Required | - |
| `lastPostedAt` | `string` | Required | - |
| `lastSeenAt` | `string` | Required | - |
| `addedAt` | `string` | Required | - |
| `timezone` | `string` | Required | - |

## Example

```ts
import { Owner } from 'discourse';

const owner: Owner = {
  id: 84,
  username: 'username6',
  name: 'name4',
  avatarTemplate: 'avatar_template6',
  title: 'title0',
  lastPostedAt: 'last_posted_at4',
  lastSeenAt: 'last_seen_at0',
  addedAt: 'added_at0',
  timezone: 'timezone6',
};
```

