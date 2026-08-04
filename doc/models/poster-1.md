
# Poster 1

*This model accepts additional fields of type unknown.*

## Structure

`Poster1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `extras` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `userId` | `number \| undefined` | Optional | - |
| `primaryGroupId` | `number \| null \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Poster1 } from 'discourse';

const poster1: Poster1 = {
  extras: 'extras2',
  description: 'description8',
  userId: 230,
  primaryGroupId: 146,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

