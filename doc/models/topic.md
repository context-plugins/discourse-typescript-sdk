
# Topic

## Structure

`Topic`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `title` | `string` | Required | - |
| `tags` | `string[]` | Required | - |
| `tagsDescriptions` | `unknown` | Required | - |
| `slug` | `string` | Required | - |

## Example

```ts
import { Topic } from 'discourse-api-documentationlib';

const topic: Topic = {
  id: 54,
  title: 'title4',
  tags: [
    'tags3'
  ],
  tagsDescriptions: { 'key1': 'val1', 'key2': 'val2' },
  slug: 'slug2',
};
```

