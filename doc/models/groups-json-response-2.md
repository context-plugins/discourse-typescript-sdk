
# Groups Json Response 2

## Structure

`GroupsJsonResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groups` | [`Group4[]`](../../doc/models/group-4.md) | Required | - |
| `extras` | [`Extras2`](../../doc/models/extras-2.md) | Required | - |
| `totalRowsGroups` | `number` | Required | - |
| `loadMoreGroups` | `string` | Required | - |

## Example

```ts
import { GroupsJsonResponse2 } from 'discourse-api-documentationlib';

const groupsJsonResponse2: GroupsJsonResponse2 = {
  groups: [
    {
      id: 152,
      automatic: false,
      name: 'name6',
      displayName: 'display_name6',
      mentionableLevel: 236,
      messageableLevel: 92,
      visibilityLevel: 196,
      primaryGroup: false,
      title: 'title2',
      grantTrustLevel: 'grant_trust_level8',
      incomingEmail: 'incoming_email6',
      hasMessages: false,
      flairUrl: 'flair_url6',
      flairBgColor: 'flair_bg_color0',
      flairColor: 'flair_color0',
      bioRaw: 'bio_raw8',
      bioCooked: 'bio_cooked2',
      bioExcerpt: 'bio_excerpt0',
      publicAdmission: false,
      publicExit: false,
      allowMembershipRequests: false,
      fullName: 'full_name2',
      defaultNotificationLevel: 112,
      membershipRequestTemplate: 'membership_request_template2',
      membersVisibilityLevel: 0,
      canSeeMembers: false,
      canAdminGroup: false,
      publishReadState: false,
      userCount: 248,
      isGroupUser: false,
      isGroupOwner: false,
      canEditGroup: false,
    }
  ],
  extras: {
    typeFilters: [
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' }
    ],
  },
  totalRowsGroups: 234,
  loadMoreGroups: 'load_more_groups6',
};
```

