
# Topic List 5

*This model accepts additional fields of type unknown.*

## Structure

`TopicList5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `canCreateTopic` | `boolean \| undefined` | Optional | - |
| `draft` | `string \| null \| undefined` | Optional | - |
| `draftKey` | `string \| undefined` | Optional | - |
| `draftSequence` | `number \| undefined` | Optional | - |
| `forPeriod` | `string \| undefined` | Optional | - |
| `perPage` | `number \| undefined` | Optional | - |
| `topics` | [`Topic7[] \| undefined`](../../doc/models/topic-7.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TopicList5 } from 'discourse';

const topicList5: TopicList5 = {
  canCreateTopic: false,
  draft: 'draft0',
  draftKey: 'draft_key8',
  draftSequence: 138,
  forPeriod: 'for_period0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

