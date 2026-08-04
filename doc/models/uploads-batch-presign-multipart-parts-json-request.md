
# Uploads Batch Presign Multipart Parts Json Request

## Structure

`UploadsBatchPresignMultipartPartsJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `partNumbers` | `unknown[]` | Required | The part numbers to generate the presigned URLs for,<br>must be between 1 and 10000. |
| `uniqueIdentifier` | `string` | Required | The unique identifier returned in the original /create-multipart<br>request. |

## Example

```ts
import { UploadsBatchPresignMultipartPartsJsonRequest } from 'discourse';

const uploadsBatchPresignMultipartPartsJsonRequest: UploadsBatchPresignMultipartPartsJsonRequest = {
  partNumbers: [
    1,
    2,
    3
  ],
  uniqueIdentifier: '66e86218-80d9-4bda-b4d5-2b6def968705',
};
```

