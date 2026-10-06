<!-- Generated file — do not edit; regenerated with the SDK. -->

# Site — operations

Accessor: `client.site` · Source: `src/resources/site.ts` · 2 operations · Request types: namespace `Site`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getSite

- **Signature**: `getSite(options?: RequestOptions): ApiPromise<SiteJsonResponse, ApiError>`
- **Wire**: `GET /site.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SiteJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `SiteJsonResponse` | `siteJsonResponseSchema` | `src/models/site-json-response.ts` |

### getSiteBasicInfo

- **Signature**: `getSiteBasicInfo(options?: RequestOptions): ApiPromise<SiteBasicInfoJsonResponse, ApiError>`
- **Wire**: `GET /site/basic-info.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SiteBasicInfoJsonResponse`
- **Error**: `DiscourseError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `SiteBasicInfoJsonResponse` | `siteBasicInfoJsonResponseSchema` | `src/models/site-basic-info-json-response.ts` |

