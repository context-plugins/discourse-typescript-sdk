
# Poster

## Structure

`Poster`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `extras` | `string` | Required | - |
| `description` | `string` | Required | - |
| `userId` | `number` | Required | - |
| `primaryGroupId` | `number \| null` | Required | - |

## Example

```ts
import { Poster } from 'discourse-api-documentationlib';

const poster: Poster = {
  extras: 'extras8',
  description: 'description6',
  userId: 62,
  primaryGroupId: 234,
};
```

