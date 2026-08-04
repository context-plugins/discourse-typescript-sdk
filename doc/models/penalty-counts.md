
# Penalty Counts

## Structure

`PenaltyCounts`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `silenced` | `number` | Required | - |
| `suspended` | `number` | Required | - |

## Example

```ts
import { PenaltyCounts } from 'discourse';

const penaltyCounts: PenaltyCounts = {
  silenced: 198,
  suspended: 224,
};
```

