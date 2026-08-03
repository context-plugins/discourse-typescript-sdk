
# T Posts Json Response

*This model accepts additional fields of type unknown.*

## Structure

`TPostsJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `postStream` | [`PostStream \| undefined`](../../doc/models/post-stream.md) | Optional | - |
| `id` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TPostsJsonResponse } from 'discourse-api-documentationlib';

const tPostsJsonResponse: TPostsJsonResponse = {
  postStream: {
    posts: [
      {
        id: 64,
        name: 'name6',
        username: 'username6',
        avatarTemplate: 'avatar_template6',
        createdAt: 'created_at4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        id: 64,
        name: 'name6',
        username: 'username6',
        avatarTemplate: 'avatar_template6',
        createdAt: 'created_at4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        id: 64,
        name: 'name6',
        username: 'username6',
        avatarTemplate: 'avatar_template6',
        createdAt: 'created_at4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  id: 142,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

