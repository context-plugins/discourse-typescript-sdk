
# Category Type

## Structure

`CategoryType`

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
import { CategoryType } from 'discourse';

const categoryType: CategoryType = {
  id: 'id6',
  name: 'name6',
  title: 'title8',
  description: 'description4',
  icon: 'icon2',
  available: false,
  visible: false,
  configurationSchema: { 'key1': 'val1', 'key2': 'val2' },
};
```

