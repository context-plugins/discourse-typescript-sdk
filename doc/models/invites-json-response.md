
# Invites Json Response

## Structure

`InvitesJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `inviteKey` | `string` | Required | - |
| `link` | `string` | Required | - |
| `description` | `string \| null` | Required | - |
| `email` | `string` | Required | - |
| `domain` | `string \| null` | Required | - |
| `emailed` | `boolean` | Required | - |
| `canDeleteInvite` | `boolean` | Required | - |
| `customMessage` | `string \| null` | Required | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `expiresAt` | `string` | Required | - |
| `expired` | `boolean` | Required | - |
| `grantsAdmin` | `boolean` | Required | - |
| `grantsModerator` | `boolean` | Required | - |
| `topics` | `unknown[]` | Required | - |
| `groups` | `unknown[]` | Required | - |

## Example

```ts
import { InvitesJsonResponse } from 'discourse-api-documentationlib';

const invitesJsonResponse: InvitesJsonResponse = {
  id: 42,
  inviteKey: 'invite_key6',
  link: 'http://example.com/invites/9045fd767efe201ca60c6658bcf14158',
  description: 'description6',
  email: 'not-a-user-yet@example.com',
  domain: 'domain0',
  emailed: false,
  canDeleteInvite: false,
  customMessage: 'Hello world!',
  createdAt: '2021-01-01T12:00:00.000Z',
  updatedAt: '2021-01-01T12:00:00.000Z',
  expiresAt: '2021-02-01T12:00:00.000Z',
  expired: false,
  grantsAdmin: false,
  grantsModerator: false,
  topics: [],
  groups: [],
};
```

