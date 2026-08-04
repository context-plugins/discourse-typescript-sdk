
# T Change Timestamp Json Response

*This model accepts additional fields of type unknown.*

## Structure

`TChangeTimestampJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TChangeTimestampJsonResponse } from 'discourse';

const tChangeTimestampJsonResponse: TChangeTimestampJsonResponse = {
  success: 'OK',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

