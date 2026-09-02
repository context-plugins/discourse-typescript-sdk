<!-- Generated file — do not edit; regenerated with the SDK. -->

# Categories — operations

Accessor: `client.categories` · Source: `src/resources/categories.ts` · 6 operations · Request types: namespace `Categories`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `discourse`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createCategory

- **Signature**: `createCategory(request: Categories.CreateCategoryRequest, options?: RequestOptions): ApiPromise<CategoriesJsonResponse, ResponseError>`
- **Wire**: `POST /categories.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CategoriesJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Categories.CreateCategoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CategoriesJsonRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CategoriesJsonRequest` | `categoriesJsonRequestSchema` | `src/models/categories-json-request.ts` |
| `CategoriesJsonResponse` | `categoriesJsonResponseSchema` | `src/models/categories-json-response.ts` |

### getCategory

- **Signature**: `getCategory(request: Categories.GetCategoryRequest, options?: RequestOptions): ApiPromise<CShowJsonResponse, ResponseError>`
- **Wire**: `GET /c/{id}/show.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CShowJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Categories.GetCategoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CShowJsonResponse` | `cShowJsonResponseSchema` | `src/models/cshow-json-response.ts` |

### getSite

- **Signature**: `getSite(options?: RequestOptions): ApiPromise<SiteJsonResponse, ResponseError>`
- **Wire**: `GET /site.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SiteJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `SiteJsonResponse` | `siteJsonResponseSchema` | `src/models/site-json-response.ts` |

### listCategories

- **Signature**: `listCategories(request: Categories.ListCategoriesRequest, options?: RequestOptions): ApiPromise<CategoriesJsonResponse1, ResponseError>`
- **Wire**: `GET /categories.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CategoriesJsonResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Categories.ListCategoriesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `includeSubcategories` | `query` | `include_subcategories` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CategoriesJsonResponse1` | `categoriesJsonResponse1Schema` | `src/models/categories-json-response1.ts` |

### listCategoryTopics

- **Signature**: `listCategoryTopics(request: Categories.ListCategoryTopicsRequest, options?: RequestOptions): ApiPromise<CJsonResponse, ResponseError>`
- **Wire**: `GET /c/{slug}/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Categories.ListCategoryTopicsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slug` | `path` | `string` | yes |
| `id` | `path` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CJsonResponse` | `cJsonResponseSchema` | `src/models/cjson-response.ts` |

### updateCategory

- **Signature**: `updateCategory(request: Categories.UpdateCategoryRequest, options?: RequestOptions): ApiPromise<CategoriesJsonResponse2, ResponseError>`
- **Wire**: `PUT /categories/{id}.json`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CategoriesJsonResponse2`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Categories.UpdateCategoryRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `number` | yes |
| `body` | `body` | `CategoriesJsonRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CategoriesJsonRequest1` | `categoriesJsonRequest1Schema` | `src/models/categories-json-request1.ts` |
| `CategoriesJsonResponse2` | `categoriesJsonResponse2Schema` | `src/models/categories-json-response2.ts` |

