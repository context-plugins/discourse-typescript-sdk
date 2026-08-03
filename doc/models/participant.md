
# Participant

*This model accepts additional fields of type unknown.*

## Structure

`Participant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `extras` | `string \| undefined` | Optional | - |
| `description` | `string \| null \| undefined` | Optional | - |
| `userId` | `number \| undefined` | Optional | - |
| `primaryGroupId` | `number \| null \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Participant } from 'discourse-api-documentationlib';

const participant: Participant = {
  extras: 'extras0',
  description: 'description6',
  userId: 152,
  primaryGroupId: 68,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

