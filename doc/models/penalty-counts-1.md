
# Penalty Counts 1

## Structure

`PenaltyCounts1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `silenced` | `number` | Required | - |
| `suspended` | `number` | Required | - |
| `total` | `number` | Required | - |

## Example

```ts
import { PenaltyCounts1 } from 'discourse-api-documentationlib';

const penaltyCounts1: PenaltyCounts1 = {
  silenced: 140,
  suspended: 142,
  total: 98,
};
```

