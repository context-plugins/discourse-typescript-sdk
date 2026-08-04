
# T Status Json Response

*This model accepts additional fields of type unknown.*

## Structure

`TStatusJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `string \| undefined` | Optional | - |
| `topicStatusUpdate` | `string \| null \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TStatusJsonResponse } from 'discourse';

const tStatusJsonResponse: TStatusJsonResponse = {
  success: 'OK',
  topicStatusUpdate: 'topic_status_update8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

