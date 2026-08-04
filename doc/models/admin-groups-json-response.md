
# Admin Groups Json Response

## Structure

`AdminGroupsJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `basicGroup` | [`BasicGroup`](../../doc/models/basic-group.md) | Required | - |

## Example

```ts
import { AdminGroupsJsonResponse } from 'discourse';

const adminGroupsJsonResponse: AdminGroupsJsonResponse = {
  basicGroup: {
    id: 132,
    automatic: false,
    name: 'name8',
    userCount: 28,
    mentionableLevel: 216,
    messageableLevel: 72,
    visibilityLevel: 80,
    primaryGroup: false,
    title: 'title6',
    grantTrustLevel: 'grant_trust_level0',
    incomingEmail: 'incoming_email2',
    hasMessages: false,
    flairUrl: 'flair_url8',
    flairBgColor: 'flair_bg_color2',
    flairColor: 'flair_color2',
    bioRaw: 'bio_raw0',
    bioCooked: 'bio_cooked6',
    bioExcerpt: 'bio_excerpt2',
    publicAdmission: false,
    publicExit: false,
    allowMembershipRequests: false,
    fullName: 'full_name4',
    defaultNotificationLevel: 92,
    membershipRequestTemplate: 'membership_request_template6',
    membersVisibilityLevel: 236,
    canSeeMembers: false,
    canAdminGroup: false,
    publishReadState: false,
    canEditGroup: false,
  },
};
```

