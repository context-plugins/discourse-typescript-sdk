
# Topic List 3

*This model accepts additional fields of type unknown.*

## Structure

`TopicList3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `canCreateTopic` | `boolean \| undefined` | Optional | - |
| `draft` | `string \| null \| undefined` | Optional | - |
| `draftKey` | `string \| undefined` | Optional | - |
| `draftSequence` | `number \| undefined` | Optional | - |
| `perPage` | `number \| undefined` | Optional | - |
| `tags` | [`Tag4[] \| undefined`](../../doc/models/tag-4.md) | Optional | - |
| `topics` | [`Topic4[] \| undefined`](../../doc/models/topic-4.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TopicList3 } from 'discourse';

const topicList3: TopicList3 = {
  canCreateTopic: false,
  draft: 'draft2',
  draftKey: 'draft_key0',
  draftSequence: 138,
  perPage: 58,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

