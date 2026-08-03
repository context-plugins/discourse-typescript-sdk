
# Group

## Structure

`Group`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `fullName` | `string \| undefined` | Optional | - |
| `bioRaw` | `string \| undefined` | Optional | About Group |
| `usernames` | `string \| undefined` | Optional | comma,separated |
| `ownerUsernames` | `string \| undefined` | Optional | comma,separated |
| `automaticMembershipEmailDomains` | `string \| undefined` | Optional | pipe\|separated |
| `visibilityLevel` | `number \| undefined` | Optional | - |
| `primaryGroup` | `boolean \| undefined` | Optional | - |
| `flairIcon` | `string \| undefined` | Optional | - |
| `flairUploadId` | `number \| undefined` | Optional | - |
| `flairBgColor` | `string \| undefined` | Optional | - |
| `publicAdmission` | `boolean \| undefined` | Optional | - |
| `publicExit` | `boolean \| undefined` | Optional | - |
| `defaultNotificationLevel` | `number \| undefined` | Optional | - |
| `mutedCategoryIds` | `number[] \| undefined` | Optional | - |
| `regularCategoryIds` | `number[] \| undefined` | Optional | - |
| `watchingCategoryIds` | `number[] \| undefined` | Optional | - |
| `trackingCategoryIds` | `number[] \| undefined` | Optional | - |
| `watchingFirstPostCategoryIds` | `number[] \| undefined` | Optional | - |

## Example

```ts
import { Group } from 'discourse-api-documentationlib';

const group: Group = {
  name: 'name8',
  fullName: 'full_name4',
  bioRaw: 'bio_raw0',
  usernames: 'usernames0',
  ownerUsernames: 'owner_usernames8',
  automaticMembershipEmailDomains: 'automatic_membership_email_domains2',
};
```

