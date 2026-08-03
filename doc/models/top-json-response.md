
# Top Json Response

*This model accepts additional fields of type unknown.*

## Structure

`TopJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `users` | [`User1[] \| undefined`](../../doc/models/user-1.md) | Optional | - |
| `primaryGroups` | `unknown[] \| undefined` | Optional | - |
| `topicList` | [`TopicList5 \| undefined`](../../doc/models/topic-list-5.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TopJsonResponse } from 'discourse-api-documentationlib';

const topJsonResponse: TopJsonResponse = {
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
    forPeriod: 'for_period6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

