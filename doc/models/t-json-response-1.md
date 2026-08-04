
# T Json Response 1

*This model accepts additional fields of type unknown.*

## Structure

`TJsonResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `basicTopic` | [`BasicTopic \| undefined`](../../doc/models/basic-topic.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TJsonResponse1 } from 'discourse';

const tJsonResponse1: TJsonResponse1 = {
  basicTopic: {
    id: 150,
    title: 'title0',
    fancyTitle: 'fancy_title4',
    slug: 'slug2',
    postsCount: 32,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

