
# Directory Items Json Response

## Structure

`DirectoryItemsJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `directoryItems` | [`DirectoryItem[]`](../../doc/models/directory-item.md) | Required | - |
| `meta` | [`Meta1`](../../doc/models/meta-1.md) | Required | - |

## Example

```ts
import { DirectoryItemsJsonResponse } from 'discourse-api-documentationlib';

const directoryItemsJsonResponse: DirectoryItemsJsonResponse = {
  directoryItems: [
    {
      id: 130,
      likesReceived: 168,
      likesGiven: 52,
      topicsEntered: 144,
      topicCount: 30,
      postCount: 102,
      postsRead: 132,
      daysVisited: 150,
      user: {
        id: 76,
        username: 'username0',
        name: 'name0',
        avatarTemplate: 'avatar_template0',
        title: 'title4',
      },
    }
  ],
  meta: {
    lastUpdatedAt: 'last_updated_at6',
    totalRowsDirectoryItems: 140,
    loadMoreDirectoryItems: 'load_more_directory_items0',
  },
};
```

