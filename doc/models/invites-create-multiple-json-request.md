
# Invites Create Multiple Json Request

*This model accepts additional fields of type unknown.*

## Structure

`InvitesCreateMultipleJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string \| undefined` | Optional | pass 1 email per invite to be generated. other properties<br>will be shared by each invite. |
| `skipEmail` | `boolean \| undefined` | Optional | **Default**: `false` |
| `customMessage` | `string \| undefined` | Optional | optional, for email invites |
| `maxRedemptionsAllowed` | `number \| undefined` | Optional | optional, for link invites<br><br>**Default**: `1` |
| `topicId` | `number \| undefined` | Optional | - |
| `groupIds` | `string \| undefined` | Optional | Optional, either this or `group_names`. Comma separated<br>list for multiple ids. |
| `groupNames` | `string \| undefined` | Optional | Optional, either this or `group_ids`. Comma separated<br>list for multiple names. |
| `expiresAt` | `string \| undefined` | Optional | optional, if not supplied, the invite_expiry_days site<br>setting is used |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  InvitesCreateMultipleJsonRequest,
} from 'discourse-api-documentationlib';

const invitesCreateMultipleJsonRequest: InvitesCreateMultipleJsonRequest = {
  email: '[\n  "not-a-user-yet-1@example.com",\n  "not-a-user-yet-2@example.com"\n]',
  skipEmail: false,
  customMessage: 'custom_message6',
  maxRedemptionsAllowed: 5,
  topicId: 92,
  groupIds: '42,43',
  groupNames: 'foo,bar',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

