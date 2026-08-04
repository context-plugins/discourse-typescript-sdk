
# Post

## Structure

`Post`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `postNumber` | `number` | Required | - |
| `url` | `string` | Required | - |
| `categorySlug` | `string` | Required | - |
| `topic` | [`Topic`](../../doc/models/topic.md) | Required | - |

## Example

```ts
import { Post } from 'discourse';

const post: Post = {
  id: 236,
  postNumber: 132,
  url: 'url4',
  categorySlug: 'category_slug4',
  topic: {
    id: 54,
    title: 'title4',
    tags: [
      'tags3'
    ],
    tagsDescriptions: { 'key1': 'val1', 'key2': 'val2' },
    slug: 'slug2',
  },
};
```

