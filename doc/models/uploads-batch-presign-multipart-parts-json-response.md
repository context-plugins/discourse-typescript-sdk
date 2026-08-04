
# Uploads Batch Presign Multipart Parts Json Response

## Structure

`UploadsBatchPresignMultipartPartsJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `presignedUrls` | `unknown` | Required | The presigned URLs for each part number, which has<br>the part numbers as keys. |

## Example

```ts
import { UploadsBatchPresignMultipartPartsJsonResponse } from 'discourse';

const uploadsBatchPresignMultipartPartsJsonResponse: UploadsBatchPresignMultipartPartsJsonResponse = {
  presignedUrls: { '1': 'https: //discourse-martin-uploads-test.s3.us-east-2.amazonaws.com/temp/uploads/default/123abc/123abc.jpg?partNumber=1&uploadId=123456abcd&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=test&X-Amz-Date=20211222T012336Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=abc123' },
};
```

