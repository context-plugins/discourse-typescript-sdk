
# Groups by Id Json Response

## Structure

`GroupsByIdJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `group` | [`Group1`](../../doc/models/group-1.md) | Required | - |
| `extras` | [`Extras`](../../doc/models/extras.md) | Required | - |

## Example

```ts
import { GroupsByIdJsonResponse } from 'discourse';

const groupsByIdJsonResponse: GroupsByIdJsonResponse = {
  group: {
    id: 38,
    automatic: false,
    name: 'name8',
    mentionableLevel: 122,
    messageableLevel: 234,
    visibilityLevel: 174,
    primaryGroup: false,
    title: 'title6',
    grantTrustLevel: 'grant_trust_level0',
    incomingEmail: 'incoming_email2',
    hasMessages: false,
    flairUrl: 'flair_url8',
    flairBgColor: 'flair_bg_color2',
    flairColor: 'flair_color8',
    bioRaw: 'bio_raw0',
    bioCooked: 'bio_cooked6',
    bioExcerpt: 'bio_excerpt2',
    publicAdmission: false,
    publicExit: false,
    allowMembershipRequests: false,
    fullName: 'full_name4',
    defaultNotificationLevel: 254,
    membershipRequestTemplate: 'membership_request_template6',
    isGroupUser: false,
    membersVisibilityLevel: 142,
    canSeeMembers: false,
    canAdminGroup: false,
    publishReadState: false,
    isGroupOwnerDisplay: false,
    mentionable: false,
    messageable: false,
    automaticMembershipEmailDomains: 'automatic_membership_email_domains2',
    smtpServer: 'smtp_server0',
    smtpPort: 'smtp_port0',
    smtpSslMode: 50,
    emailUsername: 'email_username6',
    emailPassword: 'email_password0',
    messageCount: 204,
    allowUnknownSenderTopicReplies: false,
    watchingCategoryIds: [
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    trackingCategoryIds: [
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    watchingFirstPostCategoryIds: [
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    regularCategoryIds: [
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    mutedCategoryIds: [
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    userCount: 122,
    canEditGroup: false,
    smtpUpdatedAt: 'smtp_updated_at6',
    smtpUpdatedBy: { 'key1': 'val1', 'key2': 'val2' },
    smtpEnabled: false,
  },
  extras: {
    visibleGroupNames: [
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' }
    ],
  },
};
```

