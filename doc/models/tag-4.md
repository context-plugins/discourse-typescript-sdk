
# Tag 4

*This model accepts additional fields of type unknown.*

## Structure

`Tag4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `topicCount` | `number \| undefined` | Optional | - |
| `staff` | `boolean \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Tag4 } from 'discourse';

const tag4: Tag4 = {
  id: 190,
  name: 'name8',
  topicCount: 90,
  staff: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

