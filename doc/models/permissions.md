
# Permissions

*This model accepts additional fields of type unknown.*

## Structure

`Permissions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `everyone` | `number \| undefined` | Optional | - |
| `staff` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Permissions } from 'discourse-api-documentationlib';

const permissions: Permissions = {
  everyone: 1,
  staff: 166,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

