
# T Json Request

*This model accepts additional fields of type unknown.*

## Structure

`TJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `topic` | [`Topic5 \| undefined`](../../doc/models/topic-5.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TJsonRequest } from 'discourse-api-documentationlib';

const tJsonRequest: TJsonRequest = {
  topic: {
    title: 'title4',
    categoryId: 208,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

