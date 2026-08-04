
# T Invite Group Json Response

*This model accepts additional fields of type unknown.*

## Structure

`TInviteGroupJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `group` | [`Group6 \| undefined`](../../doc/models/group-6.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TInviteGroupJsonResponse } from 'discourse';

const tInviteGroupJsonResponse: TInviteGroupJsonResponse = {
  group: {
    id: 38,
    name: 'name8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

