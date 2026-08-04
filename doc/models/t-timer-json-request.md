
# T Timer Json Request

*This model accepts additional fields of type unknown.*

## Structure

`TTimerJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `time` | `string \| undefined` | Optional | - |
| `statusType` | `string \| undefined` | Optional | - |
| `basedOnLastPost` | `boolean \| undefined` | Optional | - |
| `categoryId` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TTimerJsonRequest } from 'discourse';

const tTimerJsonRequest: TTimerJsonRequest = {
  time: 'time0',
  statusType: 'status_type2',
  basedOnLastPost: false,
  categoryId: 18,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

