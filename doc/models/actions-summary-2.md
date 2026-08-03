
# Actions Summary 2

## Structure

`ActionsSummary2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | `2`: like, `3`, `4`, `6`, `7`, `8`: flag |
| `count` | `number \| undefined` | Optional | - |
| `acted` | `boolean \| undefined` | Optional | - |
| `canUndo` | `boolean \| undefined` | Optional | - |
| `canAct` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { ActionsSummary2 } from 'discourse-api-documentationlib';

const actionsSummary2: ActionsSummary2 = {
  id: 64,
  count: 108,
  acted: false,
  canUndo: false,
  canAct: false,
};
```

