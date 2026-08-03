# Backups

```ts
const backupsApi = new BackupsApi(client);
```

## Class Name

`BackupsApi`

## Methods

* [Get Backups](../../doc/controllers/backups.md#get-backups)
* [Create Backup](../../doc/controllers/backups.md#create-backup)
* [Send Download Backup Email](../../doc/controllers/backups.md#send-download-backup-email)
* [Download Backup](../../doc/controllers/backups.md#download-backup)


# Get Backups

```ts
async getBackups(
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminBackupsJsonResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminBackupsJsonResponse[]`](../../doc/models/admin-backups-json-response.md).

## Example Usage

```ts
try {
  const response = await backupsApi.getBackups();

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


# Create Backup

```ts
async createBackup(
  body?: AdminBackupsJsonRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AdminBackupsJsonResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AdminBackupsJsonRequest \| undefined`](../../doc/models/admin-backups-json-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AdminBackupsJsonResponse1`](../../doc/models/admin-backups-json-response-1.md).

## Example Usage

```ts
try {
  const response = await backupsApi.createBackup();

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


# Send Download Backup Email

```ts
async sendDownloadBackupEmail(
  filename: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filename` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const filename = 'filename2';

try {
  const response = await backupsApi.sendDownloadBackupEmail(filename);

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


# Download Backup

```ts
async downloadBackup(
  filename: string,
  token: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filename` | `string` | Template, Required | - |
| `token` | `string` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: success response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const filename = 'filename2';

const token = 'token6';

try {
  const response = await backupsApi.downloadBackup(
    filename,
    token
  );

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

