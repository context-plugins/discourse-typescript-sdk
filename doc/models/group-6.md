
# Group 6

*This model accepts additional fields of type unknown.*

## Structure

`Group6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Group6 } from 'discourse-api-documentationlib';

const group6: Group6 = {
  id: 98,
  name: 'name2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

