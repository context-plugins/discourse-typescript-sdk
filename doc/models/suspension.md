
# Suspension

## Structure

`Suspension`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `suspendReason` | `string` | Required | - |
| `fullSuspendReason` | `string` | Required | - |
| `suspendedTill` | `string` | Required | - |
| `suspendedAt` | `string` | Required | - |
| `suspendedBy` | [`SuspendedBy`](../../doc/models/suspended-by.md) | Required | - |

## Example

```ts
import { Suspension } from 'discourse';

const suspension: Suspension = {
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
};
```

