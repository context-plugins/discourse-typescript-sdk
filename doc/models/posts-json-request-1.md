
# Posts Json Request 1

## Structure

`PostsJsonRequest1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `post` | [`Post1 \| undefined`](../../doc/models/post-1.md) | Optional | - |
| `bypassBump` | `boolean \| undefined` | Optional | Skip bumping the topic when updating the post. Requires<br>staff or TL4 permissions. |

## Example

```ts
import { PostsJsonRequest1 } from 'discourse';

const postsJsonRequest1: PostsJsonRequest1 = {
  post: {
    raw: 'raw4',
    editReason: 'edit_reason8',
  },
  bypassBump: false,
};
```

