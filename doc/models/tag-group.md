
# Tag Group

## Structure

`TagGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `name` | `string` | Required | - |
| `tags` | [`Tag[]`](../../doc/models/tag.md) | Required | - |
| `parentTag` | [`ParentTag[]`](../../doc/models/parent-tag.md) | Required | - |
| `onePerTopic` | `boolean` | Required | - |
| `permissions` | `Record<string, number>` | Required | - |

## Example

```ts
import { TagGroup } from 'discourse';

const tagGroup: TagGroup = {
  id: 4,
  name: 'name4',
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
  permissions: {
    'key0': 87
  },
};
```

