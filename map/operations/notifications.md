<!-- Generated file — do not edit; regenerated with the SDK. -->

# Notifications — operations

Accessor: `client.notifications` · Source: `src/resources/notifications.ts` · 2 operations · Request types: namespace `Notifications`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getNotifications

- **Signature**: `getNotifications(options?: RequestOptions): ApiPromise<NotificationsJsonResponse, ResponseError>`
- **Wire**: `GET /notifications.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NotificationsJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationsJsonResponse` | `notificationsJsonResponseSchema` | `src/models/notifications-json-response.ts` |

### markNotificationsAsRead

- **Signature**: `markNotificationsAsRead(request: Notifications.MarkNotificationsAsReadRequest, options?: RequestOptions): ApiPromise<NotificationsMarkReadJsonResponse, ResponseError>`
- **Wire**: `PUT /notifications/mark-read.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `NotificationsMarkReadJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Notifications.MarkNotificationsAsReadRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `NotificationsMarkReadJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NotificationsMarkReadJsonRequest` | `notificationsMarkReadJsonRequestSchema` | `src/models/notifications-mark-read-json-request.ts` |
| `NotificationsMarkReadJsonResponse` | `notificationsMarkReadJsonResponseSchema` | `src/models/notifications-mark-read-json-response.ts` |

