
# Admin Users Json Request

## Structure

`AdminUsersJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deletePosts` | `boolean \| undefined` | Optional | - |
| `blockEmail` | `boolean \| undefined` | Optional | - |
| `blockUrls` | `boolean \| undefined` | Optional | - |
| `blockIp` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { AdminUsersJsonRequest } from 'discourse-api-documentationlib';

const adminUsersJsonRequest: AdminUsersJsonRequest = {
  deletePosts: false,
  blockEmail: false,
  blockUrls: false,
  blockIp: false,
};
```

