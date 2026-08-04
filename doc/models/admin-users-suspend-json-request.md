
# Admin Users Suspend Json Request

## Structure

`AdminUsersSuspendJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `suspendUntil` | `string` | Required | - |
| `reason` | `string` | Required | - |
| `message` | `string \| undefined` | Optional | Will send an email with this message when present |
| `postAction` | `string \| undefined` | Optional | - |

## Example

```ts
import { AdminUsersSuspendJsonRequest } from 'discourse';

const adminUsersSuspendJsonRequest: AdminUsersSuspendJsonRequest = {
  suspendUntil: '2121-02-22',
  reason: 'reason8',
  message: 'message6',
  postAction: 'delete',
};
```

