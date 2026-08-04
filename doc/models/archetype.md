
# Archetype

## Structure

`Archetype`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `name` | `string` | Required | - |
| `options` | `unknown[]` | Required | - |

## Example

```ts
import { Archetype } from 'discourse';

const archetype: Archetype = {
  id: 'id4',
  name: 'name4',
  options: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
};
```

