
# Link Count

## Structure

`LinkCount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | - |
| `internal` | `boolean` | Required | - |
| `reflection` | `boolean` | Required | - |
| `title` | `string` | Required | - |
| `clicks` | `number` | Required | - |

## Example

```ts
import { LinkCount } from 'discourse-api-documentationlib';

const linkCount: LinkCount = {
  url: 'url4',
  internal: false,
  reflection: false,
  title: 'title6',
  clicks: 246,
};
```

