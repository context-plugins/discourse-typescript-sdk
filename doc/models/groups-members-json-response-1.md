
# Groups Members Json Response 1

## Structure

`GroupsMembersJsonResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `string` | Required | - |
| `usernames` | `unknown[]` | Required | - |
| `emails` | `unknown[]` | Required | - |

## Example

```ts
import { GroupsMembersJsonResponse1 } from 'discourse-api-documentationlib';

const groupsMembersJsonResponse1: GroupsMembersJsonResponse1 = {
  success: 'success2',
  usernames: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  emails: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
};
```

