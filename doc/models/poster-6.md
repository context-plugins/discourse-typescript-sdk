
# Poster 6

*This model accepts additional fields of type unknown.*

## Structure

`Poster6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `extras` | `string \| null \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `userId` | `number \| undefined` | Optional | - |
| `primaryGroupId` | `number \| null \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Poster6 } from 'discourse';

const poster6: Poster6 = {
  extras: 'extras6',
  description: 'description2',
  userId: 186,
  primaryGroupId: 102,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

