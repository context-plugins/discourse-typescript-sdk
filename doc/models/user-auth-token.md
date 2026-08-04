
# User Auth Token

## Structure

`UserAuthToken`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `clientIp` | `string` | Required | - |
| `location` | `string` | Required | - |
| `browser` | `string` | Required | - |
| `device` | `string` | Required | - |
| `os` | `string` | Required | - |
| `icon` | `string` | Required | - |
| `createdAt` | `string` | Required | - |
| `seenAt` | `string` | Required | - |
| `isActive` | `boolean` | Required | - |

## Example

```ts
import { UserAuthToken } from 'discourse';

const userAuthToken: UserAuthToken = {
  id: 242,
  clientIp: 'client_ip4',
  location: 'location8',
  browser: 'browser4',
  device: 'device0',
  os: 'os2',
  icon: 'icon6',
  createdAt: 'created_at2',
  seenAt: 'seen_at4',
  isActive: false,
};
```

