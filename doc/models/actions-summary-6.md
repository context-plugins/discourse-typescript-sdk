
# Actions Summary 6

*This model accepts additional fields of type unknown.*

## Structure

`ActionsSummary6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `canAct` | `boolean \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ActionsSummary6 } from 'discourse-api-documentationlib';

const actionsSummary6: ActionsSummary6 = {
  id: 120,
  canAct: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

