
# T Invite Json Response

*This model accepts additional fields of type unknown.*

## Structure

`TInviteJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `user` | [`User1 \| undefined`](../../doc/models/user-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TInviteJsonResponse } from 'discourse-api-documentationlib';

const tInviteJsonResponse: TInviteJsonResponse = {
  user: {
    id: 76,
    username: 'username0',
    name: 'name0',
    avatarTemplate: 'avatar_template0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

