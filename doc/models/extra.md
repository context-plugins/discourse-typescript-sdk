
# Extra

*This model accepts additional fields of type unknown.*

## Structure

`Extra`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `categories` | `string \| null \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Extra } from 'discourse';

const extra: Extra = {
  categories: 'categories8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

