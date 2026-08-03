
# Top Tag

*This model accepts additional fields of type unknown.*

## Structure

`TopTag`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `name` | `string` | Required | - |
| `slug` | `string` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TopTag } from 'discourse-api-documentationlib';

const topTag: TopTag = {
  id: 60,
  name: 'name6',
  slug: 'slug0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

