
# Group 1

## Structure

`Group1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `automatic` | `boolean` | Required | - |
| `name` | `string` | Required | - |
| `userCount` | `number \| undefined` | Optional | - |
| `mentionableLevel` | `number` | Required | - |
| `messageableLevel` | `number` | Required | - |
| `visibilityLevel` | `number` | Required | - |
| `primaryGroup` | `boolean` | Required | - |
| `title` | `string \| null` | Required | - |
| `grantTrustLevel` | `string \| null` | Required | - |
| `incomingEmail` | `string \| null` | Required | - |
| `hasMessages` | `boolean` | Required | - |
| `flairUrl` | `string \| null` | Required | - |
| `flairBgColor` | `string \| null` | Required | - |
| `flairColor` | `string \| null` | Required | - |
| `bioRaw` | `string \| null` | Required | - |
| `bioCooked` | `string \| null` | Required | - |
| `bioExcerpt` | `string \| null` | Required | - |
| `publicAdmission` | `boolean` | Required | - |
| `publicExit` | `boolean` | Required | - |
| `allowMembershipRequests` | `boolean` | Required | - |
| `fullName` | `string \| null` | Required | - |
| `defaultNotificationLevel` | `number` | Required | - |
| `membershipRequestTemplate` | `string \| null` | Required | - |
| `isGroupUser` | `boolean` | Required | - |
| `membersVisibilityLevel` | `number` | Required | - |
| `canSeeMembers` | `boolean` | Required | - |
| `canAdminGroup` | `boolean` | Required | - |
| `canEditGroup` | `boolean \| undefined` | Optional | - |
| `publishReadState` | `boolean` | Required | - |
| `isGroupOwnerDisplay` | `boolean` | Required | - |
| `mentionable` | `boolean` | Required | - |
| `messageable` | `boolean` | Required | - |
| `automaticMembershipEmailDomains` | `string \| null` | Required | - |
| `smtpUpdatedAt` | `string \| null \| undefined` | Optional | - |
| `smtpUpdatedBy` | `unknown \| null \| undefined` | Optional | - |
| `smtpEnabled` | `boolean \| undefined` | Optional | - |
| `smtpServer` | `string \| null` | Required | - |
| `smtpPort` | `string \| null` | Required | - |
| `smtpSslMode` | `number \| null` | Required | - |
| `emailUsername` | `string \| null` | Required | - |
| `emailFromAlias` | `string \| null \| undefined` | Optional | - |
| `emailPassword` | `string \| null` | Required | - |
| `messageCount` | `number` | Required | - |
| `allowUnknownSenderTopicReplies` | `boolean` | Required | - |
| `associatedGroupIds` | `unknown[] \| undefined` | Optional | - |
| `watchingCategoryIds` | `unknown[]` | Required | - |
| `trackingCategoryIds` | `unknown[]` | Required | - |
| `watchingFirstPostCategoryIds` | `unknown[]` | Required | - |
| `regularCategoryIds` | `unknown[]` | Required | - |
| `mutedCategoryIds` | `unknown[]` | Required | - |
| `watchingTags` | `unknown[] \| undefined` | Optional | - |
| `watchingFirstPostTags` | `unknown[] \| undefined` | Optional | - |
| `trackingTags` | `unknown[] \| undefined` | Optional | - |
| `regularTags` | `unknown[] \| undefined` | Optional | - |
| `mutedTags` | `unknown[] \| undefined` | Optional | - |

## Example

```ts
import { Group1 } from 'discourse-api-documentationlib';

const group1: Group1 = {
  id: 18,
  automatic: false,
  name: 'name2',
  mentionableLevel: 102,
  messageableLevel: 214,
  visibilityLevel: 194,
  primaryGroup: false,
  title: 'title8',
  grantTrustLevel: 'grant_trust_level4',
  incomingEmail: 'incoming_email2',
  hasMessages: false,
  flairUrl: 'flair_url2',
  flairBgColor: 'flair_bg_color6',
  flairColor: 'flair_color6',
  bioRaw: 'bio_raw6',
  bioCooked: 'bio_cooked8',
  bioExcerpt: 'bio_excerpt6',
  publicAdmission: false,
  publicExit: false,
  allowMembershipRequests: false,
  fullName: 'full_name8',
  defaultNotificationLevel: 234,
  membershipRequestTemplate: 'membership_request_template8',
  isGroupUser: false,
  membersVisibilityLevel: 122,
  canSeeMembers: false,
  canAdminGroup: false,
  publishReadState: false,
  isGroupOwnerDisplay: false,
  mentionable: false,
  messageable: false,
  automaticMembershipEmailDomains: 'automatic_membership_email_domains6',
  smtpServer: 'smtp_server4',
  smtpPort: 'smtp_port4',
  smtpSslMode: 30,
  emailUsername: 'email_username0',
  emailPassword: 'email_password4',
  messageCount: 224,
  allowUnknownSenderTopicReplies: false,
  watchingCategoryIds: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  trackingCategoryIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  watchingFirstPostCategoryIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  regularCategoryIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  mutedCategoryIds: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  userCount: 142,
  canEditGroup: false,
  smtpUpdatedAt: 'smtp_updated_at0',
  smtpUpdatedBy: { 'key1': 'val1', 'key2': 'val2' },
  smtpEnabled: false,
};
```

