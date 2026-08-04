
# Tag Groups Json Response 1

## Structure

`TagGroupsJsonResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tagGroup` | [`TagGroup1`](../../doc/models/tag-group-1.md) | Required | - |

## Example

```ts
import { TagGroupsJsonResponse1 } from 'discourse';

const tagGroupsJsonResponse1: TagGroupsJsonResponse1 = {
  tagGroup: {
    id: 164,
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
    permissions: { 'key1': 'val1', 'key2': 'val2' },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
};
```

