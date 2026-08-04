
# Groups Members Json Response 2

## Structure

`GroupsMembersJsonResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `string` | Required | - |
| `usernames` | `unknown[]` | Required | - |
| `skippedUsernames` | `unknown[]` | Required | - |

## Example

```ts
import { GroupsMembersJsonResponse2 } from 'discourse';

const groupsMembersJsonResponse2: GroupsMembersJsonResponse2 = {
  success: 'success8',
  usernames: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  skippedUsernames: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
};
```

