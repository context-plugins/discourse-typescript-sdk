
# Reminder

*This model accepts additional fields of type unknown.*

## Structure

`Reminder`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `value` | `number` | Required | - |
| `unit` | `string` | Required | - |
| `period` | [`Period`](../../doc/models/period.md) | Required | - |
| `type` | `string` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Period, Reminder } from 'discourse';

const reminder: Reminder = {
  value: 88,
  unit: 'unit8',
  period: Period.Before,
  type: 'type0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

