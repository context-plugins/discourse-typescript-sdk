
# Member

## Structure

`Member`

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
import { Member } from 'discourse';

const member: Member = {
  id: 196,
  username: 'username4',
  name: 'name6',
  avatarTemplate: 'avatar_template4',
  title: 'title8',
  lastPostedAt: 'last_posted_at2',
  lastSeenAt: 'last_seen_at2',
  addedAt: 'added_at8',
  timezone: 'timezone4',
};
```

