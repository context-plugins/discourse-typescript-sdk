
# Actions Summary 5

*This model accepts additional fields of type unknown.*

## Structure

`ActionsSummary5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | ID of the action type (e.g., 2 for like) |
| `count` | `number \| undefined` | Optional | Number of times this action has been performed |
| `acted` | `boolean \| undefined` | Optional | Whether the current user has performed this<br>action |
| `canUndo` | `boolean \| undefined` | Optional | Whether the current user can undo this action |
| `canAct` | `boolean \| undefined` | Optional | Whether the current user can perform this action |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ActionsSummary5 } from 'discourse';

const actionsSummary5: ActionsSummary5 = {
  id: 252,
  count: 176,
  acted: false,
  canUndo: false,
  canAct: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

