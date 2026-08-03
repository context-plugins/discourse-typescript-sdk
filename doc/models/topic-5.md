
# Topic 5

*This model accepts additional fields of type unknown.*

## Structure

`Topic5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string \| undefined` | Optional | - |
| `categoryId` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Topic5 } from 'discourse-api-documentationlib';

const topic5: Topic5 = {
  title: 'title0',
  categoryId: 98,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

