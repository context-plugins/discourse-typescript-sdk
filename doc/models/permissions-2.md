
# Permissions 2

*This model accepts additional fields of type unknown.*

## Structure

`Permissions2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `everyone` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Permissions2 } from 'discourse';

const permissions2: Permissions2 = {
  everyone: 242,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

