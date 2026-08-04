
# T Timer Json Response

*This model accepts additional fields of type unknown.*

## Structure

`TTimerJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `string \| undefined` | Optional | - |
| `executeAt` | `string \| undefined` | Optional | - |
| `duration` | `string \| null \| undefined` | Optional | - |
| `basedOnLastPost` | `boolean \| undefined` | Optional | - |
| `closed` | `boolean \| undefined` | Optional | - |
| `categoryId` | `number \| null \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TTimerJsonResponse } from 'discourse';

const tTimerJsonResponse: TTimerJsonResponse = {
  success: 'OK',
  executeAt: 'execute_at6',
  duration: 'duration8',
  basedOnLastPost: false,
  closed: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

