
# T Notifications Json Response

*This model accepts additional fields of type unknown.*

## Structure

`TNotificationsJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TNotificationsJsonResponse } from 'discourse-api-documentationlib';

const tNotificationsJsonResponse: TNotificationsJsonResponse = {
  success: 'OK',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

