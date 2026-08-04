
# Available Category Type

## Structure

`AvailableCategoryType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `name` | `string` | Required | - |
| `title` | `string` | Required | - |
| `description` | `string` | Required | - |
| `icon` | `string` | Required | - |
| `available` | `boolean` | Required | - |
| `visible` | `boolean` | Required | - |
| `configurationSchema` | `unknown` | Required | - |

## Example

```ts
import { AvailableCategoryType } from 'discourse';

const availableCategoryType: AvailableCategoryType = {
  id: 'id6',
  name: 'name6',
  title: 'title2',
  description: 'description6',
  icon: 'icon8',
  available: false,
  visible: false,
  configurationSchema: { 'key1': 'val1', 'key2': 'val2' },
};
```

