
# Featured Topic

## Structure

`FeaturedTopic`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `title` | `string` | Required | - |
| `fancyTitle` | `string` | Required | - |
| `slug` | `string` | Required | - |
| `postsCount` | `number` | Required | - |

## Example

```ts
import { FeaturedTopic } from 'discourse-api-documentationlib';

const featuredTopic: FeaturedTopic = {
  id: 40,
  title: 'title6',
  fancyTitle: 'fancy_title0',
  slug: 'slug4',
  postsCount: 178,
};
```

