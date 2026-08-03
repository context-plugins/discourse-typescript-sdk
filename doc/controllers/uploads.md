# Uploads

```ts
const uploadsApi = new UploadsApi(client);
```

## Class Name

`UploadsApi`

## Methods

* [Create Upload](../../doc/controllers/uploads.md#create-upload)
* [Generate Presigned Put](../../doc/controllers/uploads.md#generate-presigned-put)
* [Complete External Upload](../../doc/controllers/uploads.md#complete-external-upload)
* [Create Multipart Upload](../../doc/controllers/uploads.md#create-multipart-upload)
* [Batch Presign Multipart Parts](../../doc/controllers/uploads.md#batch-presign-multipart-parts)
* [Abort Multipart](../../doc/controllers/uploads.md#abort-multipart)
* [Complete Multipart](../../doc/controllers/uploads.md#complete-multipart)


# Create Upload

```ts
async createUpload(
  uploadType: UploadType,
  userId?: number,
  synchronous?: boolean,
  file?: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UploadsJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uploadType` | [`UploadType`](../../doc/models/upload-type.md) | Form, Required | - |
| `userId` | `number \| undefined` | Form, Optional | required if uploading an avatar |
| `synchronous` | `boolean \| undefined` | Form, Optional | Use this flag to return an id and url |
| `file` | `FileWrapper \| undefined` | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: file uploaded

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UploadsJsonResponse`](../../doc/models/uploads-json-response.md).

## Example Usage

```ts
const uploadType = UploadType.CustomEmoji;

try {
  const response = await uploadsApi.createUpload(uploadType);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Generate Presigned Put

Direct external uploads bypass the usual method of creating uploads
via the POST /uploads route, and upload directly to an external provider,
which by default is S3. This route begins the process, and will return
a unique identifier for the external upload as well as a presigned URL
which is where the file binary blob should be uploaded to.

Once the upload is complete to the external service, you must call the
POST /complete-external-upload route using the unique identifier returned
by this route, which will create any required Upload record in the Discourse
database and also move file from its temporary location to the final
destination in the external storage service.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.

```ts
async generatePresignedPut(
  body?: UploadsGeneratePresignedPutJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UploadsGeneratePresignedPutJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UploadsGeneratePresignedPutJsonRequest \| undefined`](../../doc/models/uploads-generate-presigned-put-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: external upload initialized

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UploadsGeneratePresignedPutJsonResponse`](../../doc/models/uploads-generate-presigned-put-json-response.md).

## Example Usage

```ts
const body: UploadsGeneratePresignedPutJsonRequest = {
  type: Type.Composer,
  fileName: 'IMG_2021.jpeg',
  fileSize: 4096,
};

try {
  const response = await uploadsApi.generatePresignedPut(body);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Complete External Upload

Completes an external upload initialized with /get-presigned-put. The
file will be moved from its temporary location in external storage to
a final destination in the S3 bucket. An Upload record will also be
created in the database in most cases.

If a sha1-checksum was provided in the initial request it will also
be compared with the uploaded file in storage to make sure the same
file was uploaded. The file size will be compared for the same reason.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.

```ts
async completeExternalUpload(
  body?: UploadsCompleteExternalUploadJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UploadsCompleteExternalUploadJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UploadsCompleteExternalUploadJsonRequest \| undefined`](../../doc/models/uploads-complete-external-upload-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: external upload initialized

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UploadsCompleteExternalUploadJsonResponse`](../../doc/models/uploads-complete-external-upload-json-response.md).

## Example Usage

```ts
const body: UploadsCompleteExternalUploadJsonRequest = {
  uniqueIdentifier: '66e86218-80d9-4bda-b4d5-2b6def968705',
  forPrivateMessage: 'true',
  forSiteSetting: 'true',
  pasted: 'true',
};

try {
  const response = await uploadsApi.completeExternalUpload(body);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Create Multipart Upload

Creates a multipart upload in the external storage provider, storing
a temporary reference to the external upload similar to /get-presigned-put.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.

```ts
async createMultipartUpload(
  body?: UploadsCreateMultipartJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UploadsCreateMultipartJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UploadsCreateMultipartJsonRequest \| undefined`](../../doc/models/uploads-create-multipart-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: external upload initialized

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UploadsCreateMultipartJsonResponse`](../../doc/models/uploads-create-multipart-json-response.md).

## Example Usage

```ts
const body: UploadsCreateMultipartJsonRequest = {
  uploadType: UploadType1.CardBackground,
  fileName: 'IMG_2021.jpeg',
  fileSize: 4096,
};

try {
  const response = await uploadsApi.createMultipartUpload(body);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Batch Presign Multipart Parts

Multipart uploads are uploaded in chunks or parts to individual presigned
URLs, similar to the one generated by /generate-presigned-put. The part
numbers provided must be between 1 and 10000. The total number of parts
will depend on the chunk size in bytes that you intend to use to upload
each chunk. For example a 12MB file may have 2 5MB chunks and a final
2MB chunk, for part numbers 1, 2, and 3.

This endpoint will return a presigned URL for each part number provided,
which you can then use to send PUT requests for the binary chunk corresponding
to that part. When the part is uploaded, the provider should return an
ETag for the part, and this should be stored along with the part number,
because this is needed to complete the multipart upload.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.

```ts
async batchPresignMultipartParts(
  body?: UploadsBatchPresignMultipartPartsJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UploadsBatchPresignMultipartPartsJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UploadsBatchPresignMultipartPartsJsonRequest \| undefined`](../../doc/models/uploads-batch-presign-multipart-parts-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: external upload initialized

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UploadsBatchPresignMultipartPartsJsonResponse`](../../doc/models/uploads-batch-presign-multipart-parts-json-response.md).

## Example Usage

```ts
const body: UploadsBatchPresignMultipartPartsJsonRequest = {
  partNumbers: [
    1,
    2,
    3
  ],
  uniqueIdentifier: '66e86218-80d9-4bda-b4d5-2b6def968705',
};

try {
  const response = await uploadsApi.batchPresignMultipartParts(body);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Abort Multipart

This endpoint aborts the multipart upload initiated with /create-multipart.
This should be used when cancelling the upload. It does not matter if parts
were already uploaded into the external storage provider.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.

```ts
async abortMultipart(
  body?: UploadsAbortMultipartJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UploadsAbortMultipartJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UploadsAbortMultipartJsonRequest \| undefined`](../../doc/models/uploads-abort-multipart-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: external upload initialized

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UploadsAbortMultipartJsonResponse`](../../doc/models/uploads-abort-multipart-json-response.md).

## Example Usage

```ts
const body: UploadsAbortMultipartJsonRequest = {
  externalUploadIdentifier: '84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ',
};

try {
  const response = await uploadsApi.abortMultipart(body);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


# Complete Multipart

Completes the multipart upload in the external store, and copies the
file from its temporary location to its final location in the store.
All of the parts must have been uploaded to the external storage provider.
An Upload record will be completed in most cases once the file is copied
to its final location.

You must have the correct permissions and CORS settings configured in your
external provider. We support AWS S3 as the default. See:

https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.

An external file store must be set up and `enable_direct_s3_uploads` must
be set to true for this endpoint to function.

```ts
async completeMultipart(
  body?: UploadsCompleteMultipartJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UploadsCompleteMultipartJsonResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UploadsCompleteMultipartJsonRequest \| undefined`](../../doc/models/uploads-complete-multipart-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: external upload initialized

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UploadsCompleteMultipartJsonResponse`](../../doc/models/uploads-complete-multipart-json-response.md).

## Example Usage

```ts
const body: UploadsCompleteMultipartJsonRequest = {
  uniqueIdentifier: '66e86218-80d9-4bda-b4d5-2b6def968705',
  parts: [
    { 'part_number': 1, 'etag': '0c376dcfcc2606f4335bbc732de93344' },
    { 'part_number': 2, 'etag': '09ert8cfcc2606f4335bbc732de91122' }
  ],
};

try {
  const response = await uploadsApi.completeMultipart(body);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

