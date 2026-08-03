
# Groups Members Json Response

## Structure

`GroupsMembersJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `members` | [`Member[]`](../../doc/models/member.md) | Required | - |
| `owners` | [`Owner[]`](../../doc/models/owner.md) | Required | - |
| `meta` | [`Meta`](../../doc/models/meta.md) | Required | - |

## Example

```ts
import { GroupsMembersJsonResponse } from 'discourse-api-documentationlib';

const groupsMembersJsonResponse: GroupsMembersJsonResponse = {
  members: [
    {
      id: 204,
      username: 'username2',
      name: 'name8',
      avatarTemplate: 'avatar_template2',
      title: 'title6',
      lastPostedAt: 'last_posted_at0',
      lastSeenAt: 'last_seen_at4',
      addedAt: 'added_at6',
      timezone: 'timezone2',
    }
  ],
  owners: [
    {
      id: 210,
      username: 'username6',
      name: 'name4',
      avatarTemplate: 'avatar_template6',
      title: 'title0',
      lastPostedAt: 'last_posted_at4',
      lastSeenAt: 'last_seen_at0',
      addedAt: 'added_at0',
      timezone: 'timezone6',
    }
  ],
  meta: {
    total: 36,
    limit: 126,
    offset: 222,
  },
};
```

