
# Admin Users Json Response 2

*This model accepts additional fields of type unknown.*

## Structure

`AdminUsersJsonResponse2`

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
import { AdminUsersJsonResponse2 } from 'discourse-api-documentationlib';

const adminUsersJsonResponse2: AdminUsersJsonResponse2 = {
  id: 48,
  username: 'username2',
  name: 'name2',
  avatarTemplate: 'avatar_template2',
  active: false,
  admin: false,
  moderator: false,
  lastSeenAt: 'last_seen_at8',
  lastEmailedAt: 'last_emailed_at0',
  createdAt: 'created_at0',
  lastSeenAge: 33.42,
  lastEmailedAge: 202.44,
  createdAtAge: 99.7,
  trustLevel: 32,
  manualLockedTrustLevel: 'manual_locked_trust_level0',
  title: 'title8',
  timeRead: 252,
  staged: false,
  daysVisited: 68,
  postsReadCount: 160,
  topicsEntered: 62,
  postCount: 20,
  email: 'email4',
  secondaryEmails: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

