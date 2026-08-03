
# Group 10

## Structure

`Group10`

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
| `flairGroupId` | `number \| null \| undefined` | Optional | - |
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
import { Group10 } from 'discourse-api-documentationlib';

const group10: Group10 = {
  id: 28,
  automatic: false,
  name: 'name2',
  displayName: 'display_name2',
  userCount: 132,
  mentionableLevel: 112,
  messageableLevel: 224,
  visibilityLevel: 184,
  primaryGroup: false,
  title: 'title2',
  grantTrustLevel: 'grant_trust_level4',
  incomingEmail: 'incoming_email8',
  hasMessages: false,
  flairUrl: 'flair_url2',
  flairBgColor: 'flair_bg_color6',
  flairColor: 'flair_color6',
  bioRaw: 'bio_raw6',
  bioCooked: 'bio_cooked2',
  bioExcerpt: 'bio_excerpt6',
  publicAdmission: false,
  publicExit: false,
  allowMembershipRequests: false,
  fullName: 'full_name8',
  defaultNotificationLevel: 244,
  membershipRequestTemplate: 'membership_request_template2',
  membersVisibilityLevel: 132,
  canSeeMembers: false,
  canAdminGroup: false,
  publishReadState: false,
  flairGroupId: 78,
};
```

