
# Group 4

## Structure

`Group4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `automatic` | `boolean` | Required | - |
| `name` | `string` | Required | - |
| `displayName` | `string` | Required | - |
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
| `isGroupUser` | `boolean \| undefined` | Optional | - |
| `isGroupOwner` | `boolean \| undefined` | Optional | - |
| `membersVisibilityLevel` | `number` | Required | - |
| `canSeeMembers` | `boolean` | Required | - |
| `canAdminGroup` | `boolean` | Required | - |
| `canEditGroup` | `boolean \| undefined` | Optional | - |
| `publishReadState` | `boolean` | Required | - |

## Example

```ts
import { Group4 } from 'discourse-api-documentationlib';

const group4: Group4 = {
  id: 252,
  automatic: false,
  name: 'name0',
  displayName: 'display_name0',
  mentionableLevel: 80,
  messageableLevel: 192,
  visibilityLevel: 216,
  primaryGroup: false,
  title: 'title4',
  grantTrustLevel: 'grant_trust_level2',
  incomingEmail: 'incoming_email0',
  hasMessages: false,
  flairUrl: 'flair_url0',
  flairBgColor: 'flair_bg_color4',
  flairColor: 'flair_color6',
  bioRaw: 'bio_raw8',
  bioCooked: 'bio_cooked4',
  bioExcerpt: 'bio_excerpt4',
  publicAdmission: false,
  publicExit: false,
  allowMembershipRequests: false,
  fullName: 'full_name6',
  defaultNotificationLevel: 44,
  membershipRequestTemplate: 'membership_request_template4',
  membersVisibilityLevel: 100,
  canSeeMembers: false,
  canAdminGroup: false,
  publishReadState: false,
  userCount: 164,
  isGroupUser: false,
  isGroupOwner: false,
  canEditGroup: false,
};
```

