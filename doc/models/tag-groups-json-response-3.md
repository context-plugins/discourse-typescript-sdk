
# Tag Groups Json Response 3

*This model accepts additional fields of type unknown.*

## Structure

`TagGroupsJsonResponse3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `string \| undefined` | Optional | - |
| `tagGroup` | [`TagGroup2 \| undefined`](../../doc/models/tag-group-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TagGroupsJsonResponse3 } from 'discourse-api-documentationlib';

const tagGroupsJsonResponse3: TagGroupsJsonResponse3 = {
  success: 'success0',
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

