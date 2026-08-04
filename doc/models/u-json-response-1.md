
# U Json Response 1

## Structure

`UJsonResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `string` | Required | - |
| `user` | `unknown` | Required | - |

## Example

```ts
import { UJsonResponse1 } from 'discourse';

const uJsonResponse1: UJsonResponse1 = {
  success: 'success0',
  user: { 'key1': 'val1', 'key2': 'val2' },
};
```

