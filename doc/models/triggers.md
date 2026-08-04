
# Triggers

## Structure

`Triggers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userChange` | `number` | Required | - |
| `none` | `number` | Required | - |
| `postRevision` | `number` | Required | - |
| `trustLevelChange` | `number` | Required | - |
| `postAction` | `number` | Required | - |

## Example

```ts
import { Triggers } from 'discourse';

const triggers: Triggers = {
  userChange: 26,
  none: 198,
  postRevision: 74,
  trustLevelChange: 164,
  postAction: 132,
};
```

