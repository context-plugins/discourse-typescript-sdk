
# T Change Timestamp Json Request

*This model accepts additional fields of type unknown.*

## Structure

`TChangeTimestampJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timestamp` | `string` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TChangeTimestampJsonRequest } from 'discourse-api-documentationlib';

const tChangeTimestampJsonRequest: TChangeTimestampJsonRequest = {
  timestamp: '1594291380',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

