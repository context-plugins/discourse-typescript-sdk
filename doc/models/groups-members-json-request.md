
# Groups Members Json Request

## Structure

`GroupsMembersJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `usernames` | `string \| undefined` | Optional | comma separated list |

## Example

```ts
import { GroupsMembersJsonRequest } from 'discourse-api-documentationlib';

const groupsMembersJsonRequest: GroupsMembersJsonRequest = {
  usernames: 'username1,username2',
};
```

