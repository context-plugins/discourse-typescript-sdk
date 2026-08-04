
# Tag 3

*This model accepts additional fields of type unknown.*

## Structure

`Tag3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `text` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `count` | `number \| undefined` | Optional | - |
| `pmCount` | `number \| undefined` | Optional | - |
| `targetTag` | `string \| null \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Tag3 } from 'discourse';

const tag3: Tag3 = {
  id: 200,
  text: 'text6',
  name: 'name4',
  count: 228,
  pmCount: 250,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

