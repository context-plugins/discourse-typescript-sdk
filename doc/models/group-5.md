
# Group 5

## Structure

`Group5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `name` | `string` | Required | - |
| `fullName` | `string \| undefined` | Optional | - |
| `displayName` | `string \| undefined` | Optional | - |
| `flairUrl` | `string \| null` | Required | - |
| `flairBgColor` | `string \| null` | Required | - |
| `flairColor` | `string \| null` | Required | - |
| `automatic` | `boolean` | Required | - |

## Example

```ts
import { Group5 } from 'discourse';

const group5: Group5 = {
  id: 32,
  name: 'name8',
  flairUrl: 'flair_url8',
  flairBgColor: 'flair_bg_color2',
  flairColor: 'flair_color8',
  automatic: false,
  fullName: 'full_name4',
  displayName: 'display_name8',
};
```

