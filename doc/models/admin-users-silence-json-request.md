
# Admin Users Silence Json Request

## Structure

`AdminUsersSilenceJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `silencedTill` | `string` | Required | - |
| `reason` | `string` | Required | - |
| `message` | `string \| undefined` | Optional | Will send an email with this message when present |
| `postAction` | `string \| undefined` | Optional | - |

## Example

```ts
import { AdminUsersSilenceJsonRequest } from 'discourse';

const adminUsersSilenceJsonRequest: AdminUsersSilenceJsonRequest = {
  silencedTill: '2022-06-01T08:00:00.000Z',
  reason: 'reason4',
  message: 'message0',
  postAction: 'delete',
};
```

