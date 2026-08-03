
# Topic List 4

*This model accepts additional fields of type unknown.*

## Structure

`TopicList4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `canCreateTopic` | `boolean \| undefined` | Optional | - |
| `draft` | `string \| null \| undefined` | Optional | - |
| `draftKey` | `string \| undefined` | Optional | - |
| `draftSequence` | `number \| undefined` | Optional | - |
| `perPage` | `number \| undefined` | Optional | - |
| `topics` | [`Topic6[] \| undefined`](../../doc/models/topic-6.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TopicList4 } from 'discourse-api-documentationlib';

const topicList4: TopicList4 = {
  canCreateTopic: false,
  draft: 'draft4',
  draftKey: 'draft_key2',
  draftSequence: 220,
  perPage: 232,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

