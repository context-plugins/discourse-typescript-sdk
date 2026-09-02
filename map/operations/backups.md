<!-- Generated file — do not edit; regenerated with the SDK. -->

# Backups — operations

Accessor: `client.backups` · Source: `src/resources/backups.ts` · 4 operations · Request types: namespace `Backups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createBackup

- **Signature**: `createBackup(request: Backups.CreateBackupRequest, options?: RequestOptions): ApiPromise<AdminBackupsJsonResponse1, ResponseError>`
- **Wire**: `POST /admin/backups.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `AdminBackupsJsonResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Backups.CreateBackupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AdminBackupsJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminBackupsJsonRequest` | `adminBackupsJsonRequestSchema` | `src/models/admin-backups-json-request.ts` |
| `AdminBackupsJsonResponse1` | `adminBackupsJsonResponse1Schema` | `src/models/admin-backups-json-response1.ts` |

### downloadBackup

- **Signature**: `downloadBackup(request: Backups.DownloadBackupRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `GET /admin/backups/{filename}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Backups.DownloadBackupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `filename` | `path` | `string` | yes |
| `token` | `query` | `string` | yes |

### getBackups

- **Signature**: `getBackups(options?: RequestOptions): ApiPromise<AdminBackupsJsonResponse[], ResponseError>`
- **Wire**: `GET /admin/backups.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminBackupsJsonResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `AdminBackupsJsonResponse` | `adminBackupsJsonResponseSchema` | `src/models/admin-backups-json-response.ts` |

### sendDownloadBackupEmail

- **Signature**: `sendDownloadBackupEmail(request: Backups.SendDownloadBackupEmailRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `PUT /admin/backups/{filename}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Backups.SendDownloadBackupEmailRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `filename` | `path` | `string` | yes |

