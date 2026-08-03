
# Tag Group 1

*This model accepts additional fields of type unknown.*

## Structure

`TagGroup1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `name` | `string` | Required | - |
| `tags` | [`Tag[]`](../../doc/models/tag.md) | Required | - |
| `parentTag` | [`ParentTag[]`](../../doc/models/parent-tag.md) | Required | - |
| `onePerTopic` | `boolean` | Required | - |
| `permissions` | `unknown` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TagGroup1 } from 'discourse-api-documentationlib';

const tagGroup1: TagGroup1 = {
  id: 26,
  name: 'name2',
  tags: [
    {
      id: 26,
      name: 'name0',
      slug: 'slug4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  parentTag: [
    {
      id: 110,
      name: 'name2',
      slug: 'slug6',
    }
  ],
  onePerTopic: false,
  permissions: { 'key1': 'val1', 'key2': 'val2' },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

