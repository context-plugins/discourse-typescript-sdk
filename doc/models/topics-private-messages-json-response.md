
# Topics Private Messages Json Response

*This model accepts additional fields of type unknown.*

## Structure

`TopicsPrivateMessagesJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `users` | [`User1[] \| undefined`](../../doc/models/user-1.md) | Optional | - |
| `primaryGroups` | `unknown[] \| undefined` | Optional | - |
| `topicList` | [`TopicList1 \| undefined`](../../doc/models/topic-list-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  TopicsPrivateMessagesJsonResponse,
} from 'discourse-api-documentationlib';

const topicsPrivateMessagesJsonResponse: TopicsPrivateMessagesJsonResponse = {
  users: [
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
    { 'key1': 'val1', 'key2': 'val2' },
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

