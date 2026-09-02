<!-- Generated file — do not edit; regenerated with the SDK. -->

# Uploads — operations

Accessor: `client.uploads` · Source: `src/resources/uploads.ts` · 7 operations · Request types: namespace `Uploads`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### abortMultipart

- **Signature**: `abortMultipart(request: Uploads.AbortMultipartRequest, options?: RequestOptions): ApiPromise<UploadsAbortMultipartJsonResponse, ResponseError>`
- **Wire**: `POST /uploads/abort-multipart.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UploadsAbortMultipartJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Uploads.AbortMultipartRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UploadsAbortMultipartJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadsAbortMultipartJsonRequest` | `uploadsAbortMultipartJsonRequestSchema` | `src/models/uploads-abort-multipart-json-request.ts` |
| `UploadsAbortMultipartJsonResponse` | `uploadsAbortMultipartJsonResponseSchema` | `src/models/uploads-abort-multipart-json-response.ts` |

### batchPresignMultipartParts

- **Signature**: `batchPresignMultipartParts(request: Uploads.BatchPresignMultipartPartsRequest, options?: RequestOptions): ApiPromise<UploadsBatchPresignMultipartPartsJsonResponse, ResponseError>`
- **Wire**: `POST /uploads/batch-presign-multipart-parts.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UploadsBatchPresignMultipartPartsJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Uploads.BatchPresignMultipartPartsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UploadsBatchPresignMultipartPartsJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadsBatchPresignMultipartPartsJsonRequest` | `uploadsBatchPresignMultipartPartsJsonRequestSchema` | `src/models/uploads-batch-presign-multipart-parts-json-request.ts` |
| `UploadsBatchPresignMultipartPartsJsonResponse` | `uploadsBatchPresignMultipartPartsJsonResponseSchema` | `src/models/uploads-batch-presign-multipart-parts-json-response.ts` |

### completeExternalUpload

- **Signature**: `completeExternalUpload(request: Uploads.CompleteExternalUploadRequest, options?: RequestOptions): ApiPromise<UploadsCompleteExternalUploadJsonResponse, ResponseError>`
- **Wire**: `POST /uploads/complete-external-upload.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UploadsCompleteExternalUploadJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Uploads.CompleteExternalUploadRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UploadsCompleteExternalUploadJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadsCompleteExternalUploadJsonRequest` | `uploadsCompleteExternalUploadJsonRequestSchema` | `src/models/uploads-complete-external-upload-json-request.ts` |
| `UploadsCompleteExternalUploadJsonResponse` | `uploadsCompleteExternalUploadJsonResponseSchema` | `src/models/uploads-complete-external-upload-json-response.ts` |

### completeMultipart

- **Signature**: `completeMultipart(request: Uploads.CompleteMultipartRequest, options?: RequestOptions): ApiPromise<UploadsCompleteMultipartJsonResponse, ResponseError>`
- **Wire**: `POST /uploads/complete-multipart.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UploadsCompleteMultipartJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Uploads.CompleteMultipartRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UploadsCompleteMultipartJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadsCompleteMultipartJsonRequest` | `uploadsCompleteMultipartJsonRequestSchema` | `src/models/uploads-complete-multipart-json-request.ts` |
| `UploadsCompleteMultipartJsonResponse` | `uploadsCompleteMultipartJsonResponseSchema` | `src/models/uploads-complete-multipart-json-response.ts` |

### createMultipartUpload

- **Signature**: `createMultipartUpload(request: Uploads.CreateMultipartUploadRequest, options?: RequestOptions): ApiPromise<UploadsCreateMultipartJsonResponse, ResponseError>`
- **Wire**: `POST /uploads/create-multipart.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UploadsCreateMultipartJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Uploads.CreateMultipartUploadRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UploadsCreateMultipartJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadsCreateMultipartJsonRequest` | `uploadsCreateMultipartJsonRequestSchema` | `src/models/uploads-create-multipart-json-request.ts` |
| `UploadsCreateMultipartJsonResponse` | `uploadsCreateMultipartJsonResponseSchema` | `src/models/uploads-create-multipart-json-response.ts` |

### createUpload

- **Signature**: `createUpload(options?: RequestOptions): ApiPromise<UploadsJsonResponse, ResponseError>`
- **Wire**: `POST /uploads.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UploadsJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadsJsonResponse` | `uploadsJsonResponseSchema` | `src/models/uploads-json-response.ts` |

### generatePresignedPut

- **Signature**: `generatePresignedPut(request: Uploads.GeneratePresignedPutRequest, options?: RequestOptions): ApiPromise<UploadsGeneratePresignedPutJsonResponse, ResponseError>`
- **Wire**: `POST /uploads/generate-presigned-put.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `UploadsGeneratePresignedPutJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Uploads.GeneratePresignedPutRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UploadsGeneratePresignedPutJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadsGeneratePresignedPutJsonRequest` | `uploadsGeneratePresignedPutJsonRequestSchema` | `src/models/uploads-generate-presigned-put-json-request.ts` |
| `UploadsGeneratePresignedPutJsonResponse` | `uploadsGeneratePresignedPutJsonResponseSchema` | `src/models/uploads-generate-presigned-put-json-response.ts` |

