
# Uploads Create Multipart Json Request

## Structure

`UploadsCreateMultipartJsonRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uploadType` | [`UploadType1`](../../doc/models/upload-type-1.md) | Required | - |
| `fileName` | `string` | Required | - |
| `fileSize` | `number` | Required | File size should be represented in bytes. |
| `metadata` | [`Metadata \| undefined`](../../doc/models/metadata.md) | Optional | - |

## Example

```ts
import { UploadType1, UploadsCreateMultipartJsonRequest } from 'discourse';

const uploadsCreateMultipartJsonRequest: UploadsCreateMultipartJsonRequest = {
  uploadType: UploadType1.CustomEmoji,
  fileName: 'IMG_2021.jpeg',
  fileSize: 4096,
  metadata: {
    sha1Checksum: 'sha1-checksum2',
  },
};
```

