
# Admin Users Suspend Json Response

## Structure

`AdminUsersSuspendJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `suspension` | [`Suspension`](../../doc/models/suspension.md) | Required | - |

## Example

```ts
import { AdminUsersSuspendJsonResponse } from 'discourse';

const adminUsersSuspendJsonResponse: AdminUsersSuspendJsonResponse = {
  suspension: {
    suspendReason: 'suspend_reason4',
    fullSuspendReason: 'full_suspend_reason6',
    suspendedTill: 'suspended_till4',
    suspendedAt: 'suspended_at8',
    suspendedBy: {
      id: 146,
      username: 'username4',
      name: 'name4',
      avatarTemplate: 'avatar_template6',
    },
  },
};
```

