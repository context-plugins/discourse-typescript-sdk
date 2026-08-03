
# Uploads Generate Presigned Put Json Request

## Structure

`UploadsGeneratePresignedPutJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type`](../../doc/models/type.md) | Required | - |
| `fileName` | `string` | Required | - |
| `fileSize` | `number` | Required | File size should be represented in bytes. |
| `metadata` | [`Metadata \| undefined`](../../doc/models/metadata.md) | Optional | - |

## Example

```ts
import {
  Type,
  UploadsGeneratePresignedPutJsonRequest,
} from 'discourse-api-documentationlib';

const uploadsGeneratePresignedPutJsonRequest: UploadsGeneratePresignedPutJsonRequest = {
  type: Type.CardBackground,
  fileName: 'IMG_2021.jpeg',
  fileSize: 4096,
  metadata: {
    sha1Checksum: 'sha1-checksum2',
  },
};
```

