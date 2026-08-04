
# Post Stream

*This model accepts additional fields of type unknown.*

## Structure

`PostStream`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `posts` | [`Post3[] \| undefined`](../../doc/models/post-3.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PostStream } from 'discourse';

const postStream: PostStream = {
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

