
# Basic Topic

*This model accepts additional fields of type unknown.*

## Structure

`BasicTopic`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `title` | `string \| undefined` | Optional | - |
| `fancyTitle` | `string \| undefined` | Optional | - |
| `slug` | `string \| undefined` | Optional | - |
| `postsCount` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BasicTopic } from 'discourse-api-documentationlib';

const basicTopic: BasicTopic = {
  id: 164,
  title: 'title2',
  fancyTitle: 'fancy_title6',
  slug: 'slug0',
  postsCount: 46,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

