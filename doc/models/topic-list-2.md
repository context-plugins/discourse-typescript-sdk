
# Topic List 2

*This model accepts additional fields of type unknown.*

## Structure

`TopicList2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `canCreateTopic` | `boolean \| undefined` | Optional | - |
| `draft` | `string \| null \| undefined` | Optional | - |
| `draftKey` | `string \| undefined` | Optional | - |
| `draftSequence` | `number \| undefined` | Optional | - |
| `perPage` | `number \| undefined` | Optional | - |
| `topics` | [`Topic3[] \| undefined`](../../doc/models/topic-3.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TopicList2 } from 'discourse';

const topicList2: TopicList2 = {
  canCreateTopic: false,
  draft: 'draft6',
  draftKey: 'draft_key4',
  draftSequence: 218,
  perPage: 234,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

