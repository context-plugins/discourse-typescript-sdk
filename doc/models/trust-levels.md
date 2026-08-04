
# Trust Levels

## Structure

`TrustLevels`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `newuser` | `number` | Required | - |
| `basic` | `number` | Required | - |
| `member` | `number` | Required | - |
| `regular` | `number` | Required | - |
| `leader` | `number` | Required | - |

## Example

```ts
import { TrustLevels } from 'discourse';

const trustLevels: TrustLevels = {
  newuser: 26,
  basic: 246,
  member: 104,
  regular: 114,
  leader: 156,
};
```

