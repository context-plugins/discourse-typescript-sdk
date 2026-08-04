
# Posts Locked Json Response

*This model accepts additional fields of type unknown.*

## Structure

`PostsLockedJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locked` | `boolean` | Required | Whether the post is locked |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PostsLockedJsonResponse } from 'discourse';

const postsLockedJsonResponse: PostsLockedJsonResponse = {
  locked: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

