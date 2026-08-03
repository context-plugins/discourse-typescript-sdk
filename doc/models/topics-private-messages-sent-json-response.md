
# Topics Private Messages Sent Json Response

*This model accepts additional fields of type unknown.*

## Structure

`TopicsPrivateMessagesSentJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `users` | [`User2[] \| undefined`](../../doc/models/user-2.md) | Optional | - |
| `primaryGroups` | `unknown[] \| undefined` | Optional | - |
| `topicList` | [`TopicList2 \| undefined`](../../doc/models/topic-list-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  TopicsPrivateMessagesSentJsonResponse,
} from 'discourse-api-documentationlib';

const topicsPrivateMessagesSentJsonResponse: TopicsPrivateMessagesSentJsonResponse = {
  users: [
    {
      id: 58,
      username: 'username4',
      name: 'name6',
      avatarTemplate: 'avatar_template4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      id: 58,
      username: 'username4',
      name: 'name6',
      avatarTemplate: 'avatar_template4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  primaryGroups: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  topicList: {
    canCreateTopic: false,
    draft: 'draft6',
    draftKey: 'draft_key4',
    draftSequence: 80,
    perPage: 116,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

