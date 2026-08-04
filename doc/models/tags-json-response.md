
# Tags Json Response

*This model accepts additional fields of type unknown.*

## Structure

`TagsJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tags` | [`Tag3[] \| undefined`](../../doc/models/tag-3.md) | Optional | - |
| `extras` | [`Extras3 \| undefined`](../../doc/models/extras-3.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TagsJsonResponse } from 'discourse';

const tagsJsonResponse: TagsJsonResponse = {
  tags: [
    {
      id: 26,
      text: 'text0',
      name: 'name0',
      count: 110,
      pmCount: 76,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      id: 26,
      text: 'text0',
      name: 'name0',
      count: 110,
      pmCount: 76,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      id: 26,
      text: 'text0',
      name: 'name0',
      count: 110,
      pmCount: 76,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  extras: {
    categories: [
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

