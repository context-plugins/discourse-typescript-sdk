
# User Color Scheme

## Structure

`UserColorScheme`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `name` | `string` | Required | - |
| `isDark` | `boolean` | Required | - |
| `themeId` | `number \| null \| undefined` | Optional | - |
| `colors` | `unknown[]` | Required | - |

## Example

```ts
import { UserColorScheme } from 'discourse-api-documentationlib';

const userColorScheme: UserColorScheme = {
  id: 28,
  name: 'name0',
  isDark: false,
  colors: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  themeId: 254,
};
```

