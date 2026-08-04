
# Tag Group 2

*This model accepts additional fields of type unknown.*

## Structure

`TagGroup2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `tagNames` | `unknown[] \| undefined` | Optional | - |
| `parentTagName` | `unknown[] \| undefined` | Optional | - |
| `onePerTopic` | `boolean \| undefined` | Optional | - |
| `permissions` | [`Permissions2 \| undefined`](../../doc/models/permissions-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TagGroup2 } from 'discourse';

const tagGroup2: TagGroup2 = {
  id: 112,
  name: 'name2',
  tagNames: [
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
};
```

