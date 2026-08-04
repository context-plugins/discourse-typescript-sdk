
# Users Password Reset Json Request

## Structure

`UsersPasswordResetJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Required | - |
| `password` | `string` | Required | - |

## Example

```ts
import { UsersPasswordResetJsonRequest } from 'discourse';

const usersPasswordResetJsonRequest: UsersPasswordResetJsonRequest = {
  username: 'username6',
  password: 'password0',
};
```

