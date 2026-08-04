
# Extras 3

*This model accepts additional fields of type unknown.*

## Structure

`Extras3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `categories` | `unknown[] \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Extras3 } from 'discourse';

const extras3: Extras3 = {
  categories: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

