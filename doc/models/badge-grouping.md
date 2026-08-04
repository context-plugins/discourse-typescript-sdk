
# Badge Grouping

## Structure

`BadgeGrouping`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `name` | `string` | Required | - |
| `description` | `string \| null` | Required | - |
| `position` | `number` | Required | - |
| `system` | `boolean` | Required | - |

## Example

```ts
import { BadgeGrouping } from 'discourse';

const badgeGrouping: BadgeGrouping = {
  id: 228,
  name: 'name2',
  description: 'description2',
  position: 2,
  system: false,
};
```

