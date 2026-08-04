
# Users Json Request

## Structure

`UsersJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `email` | `string` | Required | - |
| `password` | `string` | Required | - |
| `username` | `string` | Required | - |
| `active` | `boolean \| undefined` | Optional | This param requires an admin api key in the request<br>header or it will be ignored |
| `approved` | `boolean \| undefined` | Optional | - |
| `userFields` | `Record<string, boolean> \| undefined` | Optional | - |
| `externalIds` | `unknown \| undefined` | Optional | - |

## Example

```ts
import { UsersJsonRequest } from 'discourse';

const usersJsonRequest: UsersJsonRequest = {
  name: 'name6',
  email: 'email0',
  password: 'password0',
  username: 'username4',
  active: false,
  approved: false,
  userFields: {
    'key0': true,
    'key1': false
  },
  externalIds: { 'key1': 'val1', 'key2': 'val2' },
};
```

