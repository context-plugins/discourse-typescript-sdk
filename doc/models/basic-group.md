
# Basic Group

## Structure

`BasicGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `automatic` | `boolean` | Required | - |
| `name` | `string` | Required | - |
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
| `canEditGroup` | `boolean \| undefined` | Optional | - |
| `publishReadState` | `boolean` | Required | - |

## Example

```ts
import { BasicGroup } from 'discourse-api-documentationlib';

const basicGroup: BasicGroup = {
  id: 116,
  automatic: false,
  name: 'name8',
  userCount: 212,
  mentionableLevel: 200,
  messageableLevel: 56,
  visibilityLevel: 160,
  primaryGroup: false,
  title: 'title4',
  grantTrustLevel: 'grant_trust_level0',
  incomingEmail: 'incoming_email8',
  hasMessages: false,
  flairUrl: 'flair_url8',
  flairBgColor: 'flair_bg_color2',
  flairColor: 'flair_color2',
  bioRaw: 'bio_raw0',
  bioCooked: 'bio_cooked4',
  bioExcerpt: 'bio_excerpt2',
  publicAdmission: false,
  publicExit: false,
  allowMembershipRequests: false,
  fullName: 'full_name4',
  defaultNotificationLevel: 76,
  membershipRequestTemplate: 'membership_request_template4',
  membersVisibilityLevel: 220,
  canSeeMembers: false,
  canAdminGroup: false,
  publishReadState: false,
  canEditGroup: false,
};
```

