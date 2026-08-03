
# Posts Locked Json Request

*This model accepts additional fields of type unknown.*

## Structure

`PostsLockedJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locked` | `string` | Required | Whether to lock the post (true/false) |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PostsLockedJsonRequest } from 'discourse-api-documentationlib';

const postsLockedJsonRequest: PostsLockedJsonRequest = {
  locked: 'locked8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

