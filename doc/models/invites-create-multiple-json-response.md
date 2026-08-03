
# Invites Create Multiple Json Response

*This model accepts additional fields of type unknown.*

## Structure

`InvitesCreateMultipleJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `numSuccessfullyCreatedInvitations` | `number \| undefined` | Optional | - |
| `numFailedInvitations` | `number \| undefined` | Optional | - |
| `failedInvitations` | `unknown[] \| undefined` | Optional | - |
| `successfulInvitations` | `unknown[] \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  InvitesCreateMultipleJsonResponse,
} from 'discourse-api-documentationlib';

const invitesCreateMultipleJsonResponse: InvitesCreateMultipleJsonResponse = {
  numSuccessfullyCreatedInvitations: 42,
  numFailedInvitations: 42,
  failedInvitations: [],
  successfulInvitations: [
    { 'id': 42, 'link': 'http: //example.com/invites/9045fd767efe201ca60c6658bcf14158', 'email': 'not-a-user-yet-1@example.com', 'emailed': true, 'custom_message': 'Hello world!', 'topics': [], 'groups': [], 'created_at': '2021-01-01T12: 00: 00.000Z', 'updated_at': '2021-01-01T12: 00: 00.000Z', 'expires_at': '2021-02-01T12: 00: 00.000Z', 'expired': false },
    { 'id': 42, 'link': 'http: //example.com/invites/c6658bcf141589045fd767efe201ca60', 'email': 'not-a-user-yet-2@example.com', 'emailed': true, 'custom_message': 'Hello world!', 'topics': [], 'groups': [], 'created_at': '2021-01-01T12: 00: 00.000Z', 'updated_at': '2021-01-01T12: 00: 00.000Z', 'expires_at': '2021-02-01T12: 00: 00.000Z', 'expired': false }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

