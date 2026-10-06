<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 1 operation · Request types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### search

- **Signature**: `search(request: Search.SearchRequest, options?: RequestOptions): ApiPromise<SearchJsonResponse, ApiError>`
- **Wire**: `GET /search.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Search.SearchRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | no |
| `page` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchJsonResponse` | `searchJsonResponseSchema` | `src/models/search-json-response.ts` |

