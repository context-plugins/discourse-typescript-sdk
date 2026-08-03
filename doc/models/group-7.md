
# Group 7

## Structure

`Group7`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `automatic` | `boolean` | Required | - |
| `name` | `string` | Required | - |
| `displayName` | `string` | Required | - |
| `userCount` | `number` | Required | - |
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
| `membersVisibilityLevel` | `number` | Required | - |
| `canSeeMembers` | `boolean` | Required | - |
| `canAdminGroup` | `boolean` | Required | - |
| `publishReadState` | `boolean` | Required | - |

## Example

```ts
import { Group7 } from 'discourse-api-documentationlib';

const group7: Group7 = {
  id: 60,
  automatic: false,
  name: 'name8',
  displayName: 'display_name8',
  userCount: 100,
  mentionableLevel: 144,
  messageableLevel: 0,
  visibilityLevel: 152,
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
  defaultNotificationLevel: 20,
  membershipRequestTemplate: 'membership_request_template6',
  membersVisibilityLevel: 164,
  canSeeMembers: false,
  canAdminGroup: false,
  publishReadState: false,
};
```

