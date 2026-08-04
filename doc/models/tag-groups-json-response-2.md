
# Tag Groups Json Response 2

*This model accepts additional fields of type unknown.*

## Structure

`TagGroupsJsonResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tagGroup` | [`TagGroup2 \| undefined`](../../doc/models/tag-group-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TagGroupsJsonResponse2 } from 'discourse';

const tagGroupsJsonResponse2: TagGroupsJsonResponse2 = {
  tagGroup: {
    id: 164,
    name: 'name4',
    tagNames: [
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    parentTagName: [
      { 'key1': 'val1', 'key2': 'val2' },
      { 'key1': 'val1', 'key2': 'val2' }
    ],
    onePerTopic: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

