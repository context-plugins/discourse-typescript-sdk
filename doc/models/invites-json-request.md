
# Invites Json Request

## Structure

`InvitesJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string \| undefined` | Optional | required for email invites only |
| `skipEmail` | `boolean \| undefined` | Optional | **Default**: `false` |
| `customMessage` | `string \| undefined` | Optional | optional, for email invites |
| `maxRedemptionsAllowed` | `number \| undefined` | Optional | optional, for link invites<br><br>**Default**: `1` |
| `topicId` | `number \| undefined` | Optional | - |
| `groupIds` | `string \| undefined` | Optional | Optional, either this or `group_names`. Comma separated<br>list for multiple ids. |
| `groupNames` | `string \| undefined` | Optional | Optional, either this or `group_ids`. Comma separated<br>list for multiple names. |
| `expiresAt` | `string \| undefined` | Optional | optional, if not supplied, the invite_expiry_days site<br>setting is used |

## Example

```ts
import { InvitesJsonRequest } from 'discourse-api-documentationlib';

const invitesJsonRequest: InvitesJsonRequest = {
  email: 'not-a-user-yet@example.com',
  skipEmail: false,
  customMessage: 'custom_message2',
  maxRedemptionsAllowed: 5,
  topicId: 154,
  groupIds: '42,43',
  groupNames: 'foo,bar',
};
```

