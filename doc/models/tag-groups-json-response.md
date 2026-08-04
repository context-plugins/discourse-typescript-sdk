
# Tag Groups Json Response

## Structure

`TagGroupsJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tagGroups` | [`TagGroup[]`](../../doc/models/tag-group.md) | Required | - |

## Example

```ts
import { TagGroupsJsonResponse } from 'discourse';

const tagGroupsJsonResponse: TagGroupsJsonResponse = {
  tagGroups: [
    {
      id: 140,
      name: 'name0',
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
        'key0': 223,
        'key1': 224,
        'key2': 225
      },
    }
  ],
};
```

