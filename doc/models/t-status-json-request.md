
# T Status Json Request

*This model accepts additional fields of type unknown.*

## Structure

`TStatusJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`Status1`](../../doc/models/status-1.md) | Required | - |
| `enabled` | [`Enabled`](../../doc/models/enabled.md) | Required | - |
| `until` | `string \| undefined` | Optional | Only required for `pinned` and `pinned_globally` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Enabled, Status1, TStatusJsonRequest } from 'discourse';

const tStatusJsonRequest: TStatusJsonRequest = {
  status: Status1.PinnedGlobally,
  enabled: Enabled.True,
  until: '2030-12-31',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

