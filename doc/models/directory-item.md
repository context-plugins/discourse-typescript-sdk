
# Directory Item

## Structure

`DirectoryItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `likesReceived` | `number` | Required | - |
| `likesGiven` | `number` | Required | - |
| `topicsEntered` | `number` | Required | - |
| `topicCount` | `number` | Required | - |
| `postCount` | `number` | Required | - |
| `postsRead` | `number` | Required | - |
| `daysVisited` | `number` | Required | - |
| `user` | [`User11`](../../doc/models/user-11.md) | Required | - |

## Example

```ts
import { DirectoryItem } from 'discourse';

const directoryItem: DirectoryItem = {
  id: 30,
  likesReceived: 68,
  likesGiven: 208,
  topicsEntered: 44,
  topicCount: 186,
  postCount: 2,
  postsRead: 32,
  daysVisited: 50,
  user: {
    id: 76,
    username: 'username0',
    name: 'name0',
    avatarTemplate: 'avatar_template0',
    title: 'title4',
  },
};
```

