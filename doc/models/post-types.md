
# Post Types

## Structure

`PostTypes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `regular` | `number` | Required | - |
| `moderatorAction` | `number` | Required | - |
| `smallAction` | `number` | Required | - |
| `whisper` | `number` | Required | - |

## Example

```ts
import { PostTypes } from 'discourse';

const postTypes: PostTypes = {
  regular: 210,
  moderatorAction: 166,
  smallAction: 122,
  whisper: 188,
};
```

