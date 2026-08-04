
# T Invite Json Request

*This model accepts additional fields of type unknown.*

## Structure

`TInviteJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `user` | `string \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TInviteJsonRequest } from 'discourse';

const tInviteJsonRequest: TInviteJsonRequest = {
  user: 'user2',
  email: 'email4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

