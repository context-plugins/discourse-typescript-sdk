
# Topic List 1

*This model accepts additional fields of type unknown.*

## Structure

`TopicList1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `canCreateTopic` | `boolean \| undefined` | Optional | - |
| `draft` | `string \| null \| undefined` | Optional | - |
| `draftKey` | `string \| undefined` | Optional | - |
| `draftSequence` | `number \| undefined` | Optional | - |
| `perPage` | `number \| undefined` | Optional | - |
| `topics` | [`Topic2[] \| undefined`](../../doc/models/topic-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TopicList1 } from 'discourse';

const topicList1: TopicList1 = {
  canCreateTopic: false,
  draft: 'draft0',
  draftKey: 'draft_key8',
  draftSequence: 152,
  perPage: 44,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

