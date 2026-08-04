
# Admin Backups Json Response

*This model accepts additional fields of type unknown.*

## Structure

`AdminBackupsJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filename` | `string` | Required | - |
| `size` | `number` | Required | - |
| `lastModified` | `string` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdminBackupsJsonResponse } from 'discourse';

const adminBackupsJsonResponse: AdminBackupsJsonResponse = {
  filename: 'filename8',
  size: 182,
  lastModified: 'last_modified8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

