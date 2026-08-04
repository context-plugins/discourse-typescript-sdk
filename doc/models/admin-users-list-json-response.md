
# Admin Users List Json Response

*This model accepts additional fields of type unknown.*

## Structure

`AdminUsersListJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `username` | `string` | Required | - |
| `name` | `string \| null` | Required | - |
| `avatarTemplate` | `string` | Required | - |
| `email` | `string \| undefined` | Optional | - |
| `secondaryEmails` | `unknown[] \| undefined` | Optional | - |
| `active` | `boolean` | Required | - |
| `admin` | `boolean` | Required | - |
| `moderator` | `boolean` | Required | - |
| `lastSeenAt` | `string \| null` | Required | - |
| `lastEmailedAt` | `string \| null` | Required | - |
| `createdAt` | `string` | Required | - |
| `lastSeenAge` | `number \| null` | Required | - |
| `lastEmailedAge` | `number \| null` | Required | - |
| `createdAtAge` | `number \| null` | Required | - |
| `trustLevel` | `number` | Required | - |
| `manualLockedTrustLevel` | `string \| null` | Required | - |
| `title` | `string \| null` | Required | - |
| `timeRead` | `number` | Required | - |
| `staged` | `boolean` | Required | - |
| `daysVisited` | `number` | Required | - |
| `postsReadCount` | `number` | Required | - |
| `topicsEntered` | `number` | Required | - |
| `postCount` | `number` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdminUsersListJsonResponse } from 'discourse';

const adminUsersListJsonResponse: AdminUsersListJsonResponse = {
  id: 208,
  username: 'username0',
  name: 'name0',
  avatarTemplate: 'avatar_template0',
  active: false,
  admin: false,
  moderator: false,
  lastSeenAt: 'last_seen_at6',
  lastEmailedAt: 'last_emailed_at2',
  createdAt: 'created_at2',
  lastSeenAge: 145.1,
  lastEmailedAge: 58.12,
  createdAtAge: 211.38,
  trustLevel: 64,
  manualLockedTrustLevel: 'manual_locked_trust_level2',
  title: 'title4',
  timeRead: 156,
  staged: false,
  daysVisited: 228,
  postsReadCount: 192,
  topicsEntered: 34,
  postCount: 180,
  email: 'email6',
  secondaryEmails: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

