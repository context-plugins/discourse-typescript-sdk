
# Post Actions Json Request

## Structure

`PostActionsJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | The ID of the post to perform the action on |
| `postActionTypeId` | `number` | Required | The ID of the post action type (e.g., 2 for like) |
| `flagTopic` | `boolean \| undefined` | Optional | Whether to flag the entire topic |

## Example

```ts
import { PostActionsJsonRequest } from 'discourse';

const postActionsJsonRequest: PostActionsJsonRequest = {
  id: 78,
  postActionTypeId: 76,
  flagTopic: false,
};
```

