
# Groups Json Request

## Structure

`GroupsJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `group` | [`Group`](../../doc/models/group.md) | Required | - |

## Example

```ts
import { GroupsJsonRequest } from 'discourse-api-documentationlib';

const groupsJsonRequest: GroupsJsonRequest = {
  group: {
    name: 'name8',
    fullName: 'full_name4',
    bioRaw: 'bio_raw0',
    usernames: 'usernames0',
    ownerUsernames: 'owner_usernames8',
    automaticMembershipEmailDomains: 'automatic_membership_email_domains2',
  },
};
```

