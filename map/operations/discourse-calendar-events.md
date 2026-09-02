<!-- Generated file — do not edit; regenerated with the SDK. -->

# DiscourseCalendarEvents — operations

Accessor: `client.discourseCalendarEvents` · Source: `src/resources/discourse-calendar-events.ts` · 2 operations · Request types: namespace `DiscourseCalendarEvents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### exportEventsIcs

- **Signature**: `exportEventsIcs(request: DiscourseCalendarEvents.ExportEventsIcsRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `GET /discourse-post-event/events.ics`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `DiscourseCalendarEvents.ExportEventsIcsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categoryId` | `query` | `category_id` | `number` | no |
| `includeSubcategories` | `query` | `include_subcategories` | `IncludeSubcategories` | no |
| `attendingUser` | `query` | `attending_user` | `string` | no |
| `before` | `query` | — | `Date` (date-time) | no |
| `after` | `query` | — | `Date` (date-time) | no |
| `order` | `query` | — | `Order` | no |
| `limit` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncludeSubcategories` | `includeSubcategoriesSchema` | `src/models/include-subcategories.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |

### listEvents

- **Signature**: `listEvents(request: DiscourseCalendarEvents.ListEventsRequest, options?: RequestOptions): ApiPromise<DiscoursePostEventEventsJsonResponse, ResponseError>`
- **Wire**: `GET /discourse-post-event/events.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DiscoursePostEventEventsJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `DiscourseCalendarEvents.ListEventsRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `includeDetails` | `query` | `include_details` | `IncludeDetails` | no |
| `categoryId` | `query` | `category_id` | `number` | no |
| `includeSubcategories` | `query` | `include_subcategories` | `IncludeSubcategories` | no |
| `postId` | `query` | `post_id` | `number` | no |
| `attendingUser` | `query` | `attending_user` | `string` | no |
| `before` | `query` | — | `Date` (date-time) | no |
| `after` | `query` | — | `Date` (date-time) | no |
| `order` | `query` | — | `Order` | no |
| `limit` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncludeDetails` | `includeDetailsSchema` | `src/models/include-details.ts` |
| `IncludeSubcategories` | `includeSubcategoriesSchema` | `src/models/include-subcategories.ts` |
| `Order` | `orderSchema` | `src/models/order.ts` |
| `DiscoursePostEventEventsJsonResponse` | `discoursePostEventEventsJsonResponseSchema` | `src/models/discourse-post-event-events-json-response.ts` |

