<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Discourse (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Discourse |
| Package | `discourse` |
| Package version | `latest` |
| API spec version | `latest` |
| Import specifier | `discourse` — the package root is the **only** entry. Deep imports (`discourse/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/discourse/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { DiscourseClient, ServerEnvironment } from "discourse";

const client = new DiscourseClient({ serverEnvironment: ServerEnvironment.Production });
```

The only constructor is `new DiscourseClient(clientOptions: Partial<ClientOptions> = {})`, so `new DiscourseClient()` is valid. Resources are memoized lazy getters on the client — `client.discourseCalendarEvents`, `client.backups`, `client.badges`, `client.categories`, `client.groups`, `client.invites`, `client.notifications`, `client.posts`, `client.topics`, `client.privateMessages`, `client.search`, `client.site`, `client.tags`, `client.uploads`, `client.users`, `client.admin` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | `ServerEnvironment.Production` |
| `serverOptions` | `ServerOptions` | `{}` — each resolver merges its own per-environment defaults in |
| `timeout` | `number` (ms) | `60_000` |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |

Two engine behaviours the table cannot show. A non-finite or non-positive `timeout` is **not** "no timeout" — the transport (`src/core/raw-client.ts`) falls back to its own ceiling and clamps anything above it. And when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.

**`ClientOptions.fetch` is the one extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent, extra headers, retries or request logging all go here. A replacement **must forward `init.signal`** to whatever actually performs the request; spreading `...init` does it. Drop it and both the per-call signal and `timeout` go inert — the call neither aborts nor times out.

**Cancellation.** The `signal` on `RequestOptions` is the whole per-request surface. An already-aborted signal rejects immediately, `err.cause` is whatever was passed to `abort()`, and the client-level `timeout` surfaces through the same branch with `err.kind === "timeout"`. There is no per-request timeout.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal` | `src/core/api-request.ts` |

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| `maxRetries`, backoff, `Retry-After` handling | no retries. A failed call rejects once |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream`, `ReadableStream` | no streaming. Every decoder reads the body to completion |
| `FormData`, `Blob`, `File`, multipart, binary bodies | none. The only body kinds are empty, JSON, form-urlencoded and text |
| per-request `headers`, `timeout`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal }` |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and failures fall into **two disjoint families**. Neither is `instanceof` the other, so the two branches can never overlap and a complete `catch` needs both. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` or on `err.payload.kind` there, or on `err.name`, which is stable across copies.

- **Family A — the API answered with an error status.** The call rejects with `ResponseError`, or with a subclass of it where the spec declared error bodies for that operation. `err.payload` is a discriminated union whose `kind` names the **response schema the spec declared**, *not* the status code — so two statuses sharing one schema share one arm, and `"undeclared"` is an always-present arm carrying the raw bytes.
- **Family B — no usable response was produced.** The call rejects with a member of the `DiscourseError` set. `DiscourseError` is **abstract**: use it for `instanceof`, never construct it.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `ResponseError<P>` | `status: number` · `headers: Headers` · `payload: ErrorPayload<P>`, and a `message` of the form `<status> <statusText>` | `src/core/response-error.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/response-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/response-error.ts` |
| `DiscourseError` (abstract; declared as `CoreError`) | `kind: ErrorKind` · `message` · `cause` | `src/core/errors.ts` |
| `SchemaError` | `kind: "schema"` · `rawBody: unknown` | `src/core/validation/schema-error.ts` |
| `AuthError` | `kind: "auth"` · `failures: readonly unknown[]` | `src/core/errors.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; errorMessage: string; error }` — `error` carries the **payload**, not the error object | `src/core/api-promise.ts` |

`ErrorKind` is one value per Family B class: `connection` (the `fetch` call rejected, or the body read failed mid-stream), `timeout` (the client-level timeout elapsed), `abort` (the per-call signal aborted, including one that was already aborted), `sdk` (a defect on the SDK side), `schema` (a value failed its schema in **either** direction — inbound the response body was malformed, outbound nothing was sent at all), and `auth` (a credential could not be **obtained**).

**`AuthError` is about obtaining a credential, never about being refused one.** A 401 *from the API* is a Family A `ResponseError` like any other status, so the two are disjoint and one `catch` arm cannot absorb the other. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires. The current request is not retried — see Servers & auth.

```ts
try {
  await client.topics.getTopicByExternalId({ externalId });
} catch (err) {
  if (err instanceof ResponseError) {
    // TODO: the API answered with an error status — read err.status and err.payload
  }
  if (err instanceof DiscourseError) {
    // TODO: no usable response was produced — err.kind says which
  }
}
```

A typed subclass narrows further, on `err.payload.kind`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms: an exact numeric status is looked up across the whole table **first**; only then does the first covering wildcard or range win.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — it still rejects for Family B. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

Of **110 operations**, **1** declares typed error bodies and **109** reject with the base `ResponseError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (16 groups, 110 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload, and no per-call base URL, header, timeout, retry or auth override | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ResponseError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header** | here | never — the bullet is always present |
| **Resolves once, to one whole value.** No pagination, no streaming, no SSE, no async iterables, no partial results, no multipart and no binary anywhere | here, Not on this SDK | never at this SDK version |
| **Server group `default`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here, Models | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `SdkError` naming the unfilled placeholder; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Page |
| --- | --- | --- |
| `discourseCalendarEvents` | 2 | [map/operations/discourse-calendar-events.md](map/operations/discourse-calendar-events.md) |
| `backups` | 4 | [map/operations/backups.md](map/operations/backups.md) |
| `badges` | 5 | [map/operations/badges.md](map/operations/badges.md) |
| `categories` | 6 | [map/operations/categories.md](map/operations/categories.md) |
| `groups` | 9 | [map/operations/groups.md](map/operations/groups.md) |
| `invites` | 4 | [map/operations/invites.md](map/operations/invites.md) |
| `notifications` | 2 | [map/operations/notifications.md](map/operations/notifications.md) |
| `posts` | 8 | [map/operations/posts.md](map/operations/posts.md) |
| `topics` | 15 | [map/operations/topics.md](map/operations/topics.md) |
| `privateMessages` | 3 | [map/operations/private-messages.md](map/operations/private-messages.md) |
| `search` | 1 | [map/operations/search.md](map/operations/search.md) |
| `site` | 2 | [map/operations/site.md](map/operations/site.md) |
| `tags` | 6 | [map/operations/tags.md](map/operations/tags.md) |
| `uploads` | 7 | [map/operations/uploads.md](map/operations/uploads.md) |
| `users` | 25 | [map/operations/users.md](map/operations/users.md) |
| `admin` | 11 | [map/operations/admin.md](map/operations/admin.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. So there are two facts per type, and the map gives both: the **names you import** and the **file you read**.

```ts
import { type AccessControl, accessControlSchema } from "discourse";
```

Take the pair from an operation's **Type sources** table. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. There is no default export.

| Group | Count | Directory |
| --- | --- | --- |
| Objects | 250 | `src/models/` |
| Enums (open; const companion plus schema) | 18 | `src/models/` |

**Conventions.** Every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it.

**Schema companions.** `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, so a schema value is directly usable both ways. `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time.

**Enums are open, and are not TypeScript `enum`s.** Each is a `const` companion object plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the right base type is assignable and the schema validates the base type only, never membership. That is deliberate: an unrecognized server value round-trips instead of throwing. Use `.values` to test membership yourself.

| Enum | Members (member to wire value) | Schema value |
| --- | --- | --- |
| `Enabled` | `True` to `"true"` · `False` to `"false"` | `enabledSchema` |
| `NotificationLevel` | `_0` to `"0"` · `_1` to `"1"` · `_2` to `"2"` · `_3` to `"3"` | `notificationLevelSchema` |
| `Period` | `Before` to `"before"` · `After` to `"after"` | `periodSchema` |
| `Reason` | `EnabledForEveryone` to `"enabled_for_everyone"` · `EnabledForNoOne` to `"enabled_for_no_one"` · `InSpecificGroups` to `"in_specific_groups"` · `NotInSpecificGroups` to `"not_in_specific_groups"` | `reasonSchema` |
| `Status` | `Public` to `"public"` · `Private` to `"private"` · `Standalone` to `"standalone"` | `statusSchema` |
| `Status1` | `Closed` to `"closed"` · `Pinned` to `"pinned"` · `PinnedGlobally` to `"pinned_globally"` · `Archived` to `"archived"` · `Visible` to `"visible"` | `status1Schema` |
| `Type` | `Avatar` to `"avatar"` · `ProfileBackground` to `"profile_background"` · `CardBackground` to `"card_background"` · `CustomEmoji` to `"custom_emoji"` · `Composer` to `"composer"` | `typeSchema` |
| `Type1` | `Uploaded` to `"uploaded"` · `Custom` to `"custom"` · `Gravatar` to `"gravatar"` · `System` to `"system"` | `type1Schema` |
| `UploadType1` | `Avatar` to `"avatar"` · `ProfileBackground` to `"profile_background"` · `CardBackground` to `"card_background"` · `CustomEmoji` to `"custom_emoji"` · `Composer` to `"composer"` | `uploadType1Schema` |
| `Asc` | `True` to `"true"` | `ascSchema` |
| `Flag` | `Active` to `"active"` · `New` to `"new"` · `Staff` to `"staff"` · `Suspended` to `"suspended"` · `Blocked` to `"blocked"` · `Suspect` to `"suspect"` | `flagSchema` |
| `IncludeDetails` | `True` to `"true"` · `False` to `"false"` | `includeDetailsSchema` |
| `IncludeSubcategories` | `True` to `"true"` · `False` to `"false"` | `includeSubcategoriesSchema` |
| `Order` | `Asc` to `"asc"` · `Desc` to `"desc"` | `orderSchema` |
| `Order2` | `LikesReceived` to `"likes_received"` · `LikesGiven` to `"likes_given"` · `TopicCount` to `"topic_count"` · `PostCount` to `"post_count"` · `TopicsEntered` to `"topics_entered"` · `PostsRead` to `"posts_read"` · `DaysVisited` to `"days_visited"` | `order2Schema` |
| `Order3` | `Created` to `"created"` · `LastEmailed` to `"last_emailed"` · `Seen` to `"seen"` · `Username` to `"username"` · `Email` to `"email"` · `TrustLevel` to `"trust_level"` · `DaysVisited` to `"days_visited"` · `PostsRead` to `"posts_read"` · `TopicsViewed` to `"topics_viewed"` · `Posts` to `"posts"` · `ReadTime` to `"read_time"` | `order3Schema` |
| `Period1` | `Daily` to `"daily"` · `Weekly` to `"weekly"` · `Monthly` to `"monthly"` · `Quarterly` to `"quarterly"` · `Yearly` to `"yearly"` · `All` to `"all"` | `period1Schema` |
| `UploadType` | `Avatar` to `"avatar"` · `ProfileBackground` to `"profile_background"` · `CardBackground` to `"card_background"` · `CustomEmoji` to `"custom_emoji"` · `Composer` to `"composer"` | `uploadTypeSchema` |

**Wire-name divergences.** Only these model properties are sent and received under a different name; every other property uses its TypeScript name verbatim.

| Type | Property | Wire key |
| --- | --- | --- |
| `AccessControl` | `mandatoryAcl` | `mandatory_acl` |
| `AccessControl` | `bannedAcl` | `banned_acl` |
| `ActionsSummary` | `canAct` | `can_act` |
| `ActionsSummary2` | `canUndo` | `can_undo` |
| `ActionsSummary2` | `canAct` | `can_act` |
| `ActionsSummary5` | `canUndo` | `can_undo` |
| `ActionsSummary5` | `canAct` | `can_act` |
| `ActionsSummary6` | `canAct` | `can_act` |
| `ActionsSummary8` | `canAct` | `can_act` |
| `AdminBackupsJsonRequest` | `withUploads` | `with_uploads` |
| `AdminBackupsJsonResponse` | `lastModified` | `last_modified` |
| `AdminBadgesJsonRequest1` | `badgeTypeId` | `badge_type_id` |
| `AdminBadgesJsonResponse2` | `badgeTypes` | `badge_types` |
| `AdminBadgesJsonRequest` | `badgeTypeId` | `badge_type_id` |
| `AdminBadgesJsonResponse` | `badgeTypes` | `badge_types` |
| `AdminBadgesJsonResponse` | `badgeGroupings` | `badge_groupings` |
| `AdminBadgesJsonResponse` | `adminBadges` | `admin_badges` |
| `AdminBadgesJsonResponse1` | `badgeTypes` | `badge_types` |
| `AdminGroupsJsonResponse` | `basicGroup` | `basic_group` |
| `AdminUsersJsonRequest` | `deletePosts` | `delete_posts` |
| `AdminUsersJsonRequest` | `blockEmail` | `block_email` |
| `AdminUsersJsonRequest` | `blockUrls` | `block_urls` |
| `AdminUsersJsonRequest` | `blockIp` | `block_ip` |
| `AdminUsersJsonResponse` | `avatarTemplate` | `avatar_template` |
| `AdminUsersJsonResponse` | `lastSeenAt` | `last_seen_at` |
| `AdminUsersJsonResponse` | `lastEmailedAt` | `last_emailed_at` |
| `AdminUsersJsonResponse` | `createdAt` | `created_at` |
| `AdminUsersJsonResponse` | `lastSeenAge` | `last_seen_age` |
| `AdminUsersJsonResponse` | `lastEmailedAge` | `last_emailed_age` |
| `AdminUsersJsonResponse` | `createdAtAge` | `created_at_age` |
| `AdminUsersJsonResponse` | `trustLevel` | `trust_level` |
| `AdminUsersJsonResponse` | `manualLockedTrustLevel` | `manual_locked_trust_level` |
| `AdminUsersJsonResponse` | `timeRead` | `time_read` |
| `AdminUsersJsonResponse` | `daysVisited` | `days_visited` |
| `AdminUsersJsonResponse` | `postsReadCount` | `posts_read_count` |
| `AdminUsersJsonResponse` | `topicsEntered` | `topics_entered` |
| `AdminUsersJsonResponse` | `postCount` | `post_count` |
| `AdminUsersJsonResponse` | `associatedAccounts` | `associated_accounts` |
| `AdminUsersJsonResponse` | `canSendActivationEmail` | `can_send_activation_email` |
| `AdminUsersJsonResponse` | `canActivate` | `can_activate` |
| `AdminUsersJsonResponse` | `canDeactivate` | `can_deactivate` |
| `AdminUsersJsonResponse` | `canChangeTrustLevel` | `can_change_trust_level` |
| `AdminUsersJsonResponse` | `ipAddress` | `ip_address` |
| `AdminUsersJsonResponse` | `registrationIpAddress` | `registration_ip_address` |
| `AdminUsersJsonResponse` | `canGrantAdmin` | `can_grant_admin` |
| `AdminUsersJsonResponse` | `canRevokeAdmin` | `can_revoke_admin` |
| `AdminUsersJsonResponse` | `canGrantModeration` | `can_grant_moderation` |
| `AdminUsersJsonResponse` | `canRevokeModeration` | `can_revoke_moderation` |
| `AdminUsersJsonResponse` | `canImpersonate` | `can_impersonate` |
| `AdminUsersJsonResponse` | `likeCount` | `like_count` |
| `AdminUsersJsonResponse` | `likeGivenCount` | `like_given_count` |
| `AdminUsersJsonResponse` | `topicCount` | `topic_count` |
| `AdminUsersJsonResponse` | `flagsGivenCount` | `flags_given_count` |
| `AdminUsersJsonResponse` | `flagsReceivedCount` | `flags_received_count` |
| `AdminUsersJsonResponse` | `privateTopicsCount` | `private_topics_count` |
| `AdminUsersJsonResponse` | `canDeleteAllPosts` | `can_delete_all_posts` |
| `AdminUsersJsonResponse` | `canBeDeleted` | `can_be_deleted` |
| `AdminUsersJsonResponse` | `canBeAnonymized` | `can_be_anonymized` |
| `AdminUsersJsonResponse` | `canBeMerged` | `can_be_merged` |
| `AdminUsersJsonResponse` | `fullSuspendReason` | `full_suspend_reason` |
| `AdminUsersJsonResponse` | `latestExport` | `latest_export` |
| `AdminUsersJsonResponse` | `fullSilenceReason` | `full_silence_reason` |
| `AdminUsersJsonResponse` | `silenceReason` | `silence_reason` |
| `AdminUsersJsonResponse` | `postEditsCount` | `post_edits_count` |
| `AdminUsersJsonResponse` | `primaryGroupId` | `primary_group_id` |
| `AdminUsersJsonResponse` | `badgeCount` | `badge_count` |
| `AdminUsersJsonResponse` | `warningsReceivedCount` | `warnings_received_count` |
| `AdminUsersJsonResponse` | `bounceScore` | `bounce_score` |
| `AdminUsersJsonResponse` | `resetBounceScoreAfter` | `reset_bounce_score_after` |
| `AdminUsersJsonResponse` | `canViewActionLogs` | `can_view_action_logs` |
| `AdminUsersJsonResponse` | `canDisableSecondFactor` | `can_disable_second_factor` |
| `AdminUsersJsonResponse` | `canDeleteSsoRecord` | `can_delete_sso_record` |
| `AdminUsersJsonResponse` | `apiKeyCount` | `api_key_count` |
| `AdminUsersJsonResponse` | `similarUsersCount` | `similar_users_count` |
| `AdminUsersJsonResponse` | `singleSignOnRecord` | `single_sign_on_record` |
| `AdminUsersJsonResponse` | `approvedBy` | `approved_by` |
| `AdminUsersJsonResponse` | `suspendedBy` | `suspended_by` |
| `AdminUsersJsonResponse` | `silencedBy` | `silenced_by` |
| `AdminUsersJsonResponse` | `penaltyCounts` | `penalty_counts` |
| `AdminUsersJsonResponse` | `nextPenalty` | `next_penalty` |
| `AdminUsersJsonResponse` | `tl3Requirements` | `tl3_requirements` |
| `AdminUsersJsonResponse` | `externalIds` | `external_ids` |
| `AdminUsersJsonResponse` | `includeIp` | `include_ip` |
| `AdminUsersJsonResponse` | `upcomingChangesStats` | `upcoming_changes_stats` |
| `AdminUsersListJsonResponse` | `avatarTemplate` | `avatar_template` |
| `AdminUsersListJsonResponse` | `secondaryEmails` | `secondary_emails` |
| `AdminUsersListJsonResponse` | `lastSeenAt` | `last_seen_at` |
| `AdminUsersListJsonResponse` | `lastEmailedAt` | `last_emailed_at` |
| `AdminUsersListJsonResponse` | `createdAt` | `created_at` |
| `AdminUsersListJsonResponse` | `lastSeenAge` | `last_seen_age` |
| `AdminUsersListJsonResponse` | `lastEmailedAge` | `last_emailed_age` |
| `AdminUsersListJsonResponse` | `createdAtAge` | `created_at_age` |
| `AdminUsersListJsonResponse` | `trustLevel` | `trust_level` |
| `AdminUsersListJsonResponse` | `manualLockedTrustLevel` | `manual_locked_trust_level` |
| `AdminUsersListJsonResponse` | `timeRead` | `time_read` |
| `AdminUsersListJsonResponse` | `daysVisited` | `days_visited` |
| `AdminUsersListJsonResponse` | `postsReadCount` | `posts_read_count` |
| `AdminUsersListJsonResponse` | `topicsEntered` | `topics_entered` |
| `AdminUsersListJsonResponse` | `postCount` | `post_count` |
| `AdminUsersSilenceJsonRequest` | `silencedTill` | `silenced_till` |
| `AdminUsersSilenceJsonRequest` | `postAction` | `post_action` |
| `AdminUsersSuspendJsonRequest` | `suspendUntil` | `suspend_until` |
| `AdminUsersSuspendJsonRequest` | `postAction` | `post_action` |
| `AdminUsersJsonResponse2` | `avatarTemplate` | `avatar_template` |
| `AdminUsersJsonResponse2` | `secondaryEmails` | `secondary_emails` |
| `AdminUsersJsonResponse2` | `lastSeenAt` | `last_seen_at` |
| `AdminUsersJsonResponse2` | `lastEmailedAt` | `last_emailed_at` |
| `AdminUsersJsonResponse2` | `createdAt` | `created_at` |
| `AdminUsersJsonResponse2` | `lastSeenAge` | `last_seen_age` |
| `AdminUsersJsonResponse2` | `lastEmailedAge` | `last_emailed_age` |
| `AdminUsersJsonResponse2` | `createdAtAge` | `created_at_age` |
| `AdminUsersJsonResponse2` | `trustLevel` | `trust_level` |
| `AdminUsersJsonResponse2` | `manualLockedTrustLevel` | `manual_locked_trust_level` |
| `AdminUsersJsonResponse2` | `timeRead` | `time_read` |
| `AdminUsersJsonResponse2` | `daysVisited` | `days_visited` |
| `AdminUsersJsonResponse2` | `postsReadCount` | `posts_read_count` |
| `AdminUsersJsonResponse2` | `topicsEntered` | `topics_entered` |
| `AdminUsersJsonResponse2` | `postCount` | `post_count` |
| `AdminBadges` | `protectedSystemFields` | `protected_system_fields` |
| `AdminBadges` | `badgeIds` | `badge_ids` |
| `AdminBadges` | `badgeGroupingIds` | `badge_grouping_ids` |
| `AdminBadges` | `badgeTypeIds` | `badge_type_ids` |
| `ApprovedBy` | `avatarTemplate` | `avatar_template` |
| `AvailableCategoryType` | `configurationSchema` | `configuration_schema` |
| `Badge` | `grantCount` | `grant_count` |
| `Badge` | `allowTitle` | `allow_title` |
| `Badge` | `multipleGrant` | `multiple_grant` |
| `Badge` | `imageUrl` | `image_url` |
| `Badge` | `badgeGroupingId` | `badge_grouping_id` |
| `Badge` | `longDescription` | `long_description` |
| `Badge` | `manuallyGrantable` | `manually_grantable` |
| `Badge` | `targetPosts` | `target_posts` |
| `Badge` | `autoRevoke` | `auto_revoke` |
| `Badge` | `showPosts` | `show_posts` |
| `Badge` | `i18NName` | `i18n_name` |
| `Badge` | `imageUploadId` | `image_upload_id` |
| `Badge` | `badgeTypeId` | `badge_type_id` |
| `Badge` | `showInPostHeader` | `show_in_post_header` |
| `Badge1` | `grantCount` | `grant_count` |
| `Badge1` | `allowTitle` | `allow_title` |
| `Badge1` | `multipleGrant` | `multiple_grant` |
| `Badge1` | `imageUrl` | `image_url` |
| `Badge1` | `imageUploadId` | `image_upload_id` |
| `Badge1` | `badgeGroupingId` | `badge_grouping_id` |
| `Badge1` | `longDescription` | `long_description` |
| `Badge1` | `manuallyGrantable` | `manually_grantable` |
| `Badge1` | `targetPosts` | `target_posts` |
| `Badge1` | `autoRevoke` | `auto_revoke` |
| `Badge1` | `showPosts` | `show_posts` |
| `Badge1` | `badgeTypeId` | `badge_type_id` |
| `Badge1` | `showInPostHeader` | `show_in_post_header` |
| `Badge3` | `grantCount` | `grant_count` |
| `Badge3` | `allowTitle` | `allow_title` |
| `Badge3` | `multipleGrant` | `multiple_grant` |
| `Badge3` | `imageUrl` | `image_url` |
| `Badge3` | `badgeGroupingId` | `badge_grouping_id` |
| `Badge3` | `manuallyGrantable` | `manually_grantable` |
| `Badge3` | `badgeTypeId` | `badge_type_id` |
| `BadgeType` | `sortOrder` | `sort_order` |
| `BasicGroup` | `userCount` | `user_count` |
| `BasicGroup` | `mentionableLevel` | `mentionable_level` |
| `BasicGroup` | `messageableLevel` | `messageable_level` |
| `BasicGroup` | `visibilityLevel` | `visibility_level` |
| `BasicGroup` | `primaryGroup` | `primary_group` |
| `BasicGroup` | `grantTrustLevel` | `grant_trust_level` |
| `BasicGroup` | `incomingEmail` | `incoming_email` |
| `BasicGroup` | `hasMessages` | `has_messages` |
| `BasicGroup` | `flairUrl` | `flair_url` |
| `BasicGroup` | `flairBgColor` | `flair_bg_color` |
| `BasicGroup` | `flairColor` | `flair_color` |
| `BasicGroup` | `bioRaw` | `bio_raw` |
| `BasicGroup` | `bioCooked` | `bio_cooked` |
| `BasicGroup` | `bioExcerpt` | `bio_excerpt` |
| `BasicGroup` | `publicAdmission` | `public_admission` |
| `BasicGroup` | `publicExit` | `public_exit` |
| `BasicGroup` | `allowMembershipRequests` | `allow_membership_requests` |
| `BasicGroup` | `fullName` | `full_name` |
| `BasicGroup` | `defaultNotificationLevel` | `default_notification_level` |
| `BasicGroup` | `membershipRequestTemplate` | `membership_request_template` |
| `BasicGroup` | `membersVisibilityLevel` | `members_visibility_level` |
| `BasicGroup` | `canSeeMembers` | `can_see_members` |
| `BasicGroup` | `canAdminGroup` | `can_admin_group` |
| `BasicGroup` | `canEditGroup` | `can_edit_group` |
| `BasicGroup` | `publishReadState` | `publish_read_state` |
| `BasicTopic` | `fancyTitle` | `fancy_title` |
| `BasicTopic` | `postsCount` | `posts_count` |
| `CJsonResponse` | `primaryGroups` | `primary_groups` |
| `CJsonResponse` | `topicList` | `topic_list` |
| `CategoriesJsonRequest1` | `textColor` | `text_color` |
| `CategoriesJsonRequest1` | `styleType` | `style_type` |
| `CategoriesJsonRequest1` | `parentCategoryId` | `parent_category_id` |
| `CategoriesJsonRequest1` | `allowBadges` | `allow_badges` |
| `CategoriesJsonRequest1` | `topicFeaturedLinksAllowed` | `topic_featured_links_allowed` |
| `CategoriesJsonRequest1` | `searchPriority` | `search_priority` |
| `CategoriesJsonRequest1` | `formTemplateIds` | `form_template_ids` |
| `CategoriesJsonRequest1` | `categoryLocalizations` | `category_localizations` |
| `CategoriesJsonRequest` | `textColor` | `text_color` |
| `CategoriesJsonRequest` | `styleType` | `style_type` |
| `CategoriesJsonRequest` | `parentCategoryId` | `parent_category_id` |
| `CategoriesJsonRequest` | `allowBadges` | `allow_badges` |
| `CategoriesJsonRequest` | `topicFeaturedLinksAllowed` | `topic_featured_links_allowed` |
| `CategoriesJsonRequest` | `searchPriority` | `search_priority` |
| `CategoriesJsonRequest` | `formTemplateIds` | `form_template_ids` |
| `CategoriesJsonRequest` | `categoryLocalizations` | `category_localizations` |
| `CategoriesJsonResponse1` | `categoryList` | `category_list` |
| `Category` | `textColor` | `text_color` |
| `Category` | `styleType` | `style_type` |
| `Category` | `topicCount` | `topic_count` |
| `Category` | `postCount` | `post_count` |
| `Category` | `descriptionText` | `description_text` |
| `Category` | `descriptionExcerpt` | `description_excerpt` |
| `Category` | `topicUrl` | `topic_url` |
| `Category` | `readRestricted` | `read_restricted` |
| `Category` | `notificationLevel` | `notification_level` |
| `Category` | `canEdit` | `can_edit` |
| `Category` | `topicTemplate` | `topic_template` |
| `Category` | `topicTitlePlaceholder` | `topic_title_placeholder` |
| `Category` | `formTemplateIds` | `form_template_ids` |
| `Category` | `hasChildren` | `has_children` |
| `Category` | `subcategoryCount` | `subcategory_count` |
| `Category` | `sortOrder` | `sort_order` |
| `Category` | `sortAscending` | `sort_ascending` |
| `Category` | `showSubcategoryList` | `show_subcategory_list` |
| `Category` | `numFeaturedTopics` | `num_featured_topics` |
| `Category` | `defaultView` | `default_view` |
| `Category` | `subcategoryListStyle` | `subcategory_list_style` |
| `Category` | `defaultTopPeriod` | `default_top_period` |
| `Category` | `defaultListFilter` | `default_list_filter` |
| `Category` | `minimumRequiredTags` | `minimum_required_tags` |
| `Category` | `navigateToFirstPostAfterRead` | `navigate_to_first_post_after_read` |
| `Category` | `customFields` | `custom_fields` |
| `Category` | `allowedTags` | `allowed_tags` |
| `Category` | `allowedTagGroups` | `allowed_tag_groups` |
| `Category` | `allowGlobalTags` | `allow_global_tags` |
| `Category` | `requiredTagGroups` | `required_tag_groups` |
| `Category` | `categorySetting` | `category_setting` |
| `Category` | `categoryLocalizations` | `category_localizations` |
| `Category` | `readOnlyBanner` | `read_only_banner` |
| `Category` | `availableGroups` | `available_groups` |
| `Category` | `autoCloseHours` | `auto_close_hours` |
| `Category` | `autoCloseBasedOnLastPost` | `auto_close_based_on_last_post` |
| `Category` | `allowUnlimitedOwnerEditsOnFirstPost` | `allow_unlimited_owner_edits_on_first_post` |
| `Category` | `defaultSlowModeSeconds` | `default_slow_mode_seconds` |
| `Category` | `groupPermissions` | `group_permissions` |
| `Category` | `emailIn` | `email_in` |
| `Category` | `emailInAllowStrangers` | `email_in_allow_strangers` |
| `Category` | `mailinglistMirror` | `mailinglist_mirror` |
| `Category` | `allTopicsWiki` | `all_topics_wiki` |
| `Category` | `canDelete` | `can_delete` |
| `Category` | `allowBadges` | `allow_badges` |
| `Category` | `topicFeaturedLinkAllowed` | `topic_featured_link_allowed` |
| `Category` | `searchPriority` | `search_priority` |
| `Category` | `topicPostingReviewGroupIds` | `topic_posting_review_group_ids` |
| `Category` | `replyPostingReviewGroupIds` | `reply_posting_review_group_ids` |
| `Category` | `uploadedLogo` | `uploaded_logo` |
| `Category` | `uploadedLogoDark` | `uploaded_logo_dark` |
| `Category` | `uploadedBackground` | `uploaded_background` |
| `Category` | `uploadedBackgroundDark` | `uploaded_background_dark` |
| `Category` | `categoryTypes` | `category_types` |
| `Category` | `categoryTypeSettings` | `category_type_settings` |
| `Category` | `availableCategoryTypes` | `available_category_types` |
| `Category1` | `textColor` | `text_color` |
| `Category1` | `styleType` | `style_type` |
| `Category1` | `topicCount` | `topic_count` |
| `Category1` | `postCount` | `post_count` |
| `Category1` | `descriptionText` | `description_text` |
| `Category1` | `descriptionExcerpt` | `description_excerpt` |
| `Category1` | `topicUrl` | `topic_url` |
| `Category1` | `readRestricted` | `read_restricted` |
| `Category1` | `notificationLevel` | `notification_level` |
| `Category1` | `canEdit` | `can_edit` |
| `Category1` | `topicTemplate` | `topic_template` |
| `Category1` | `topicTitlePlaceholder` | `topic_title_placeholder` |
| `Category1` | `hasChildren` | `has_children` |
| `Category1` | `subcategoryCount` | `subcategory_count` |
| `Category1` | `sortOrder` | `sort_order` |
| `Category1` | `sortAscending` | `sort_ascending` |
| `Category1` | `showSubcategoryList` | `show_subcategory_list` |
| `Category1` | `numFeaturedTopics` | `num_featured_topics` |
| `Category1` | `defaultView` | `default_view` |
| `Category1` | `subcategoryListStyle` | `subcategory_list_style` |
| `Category1` | `defaultTopPeriod` | `default_top_period` |
| `Category1` | `defaultListFilter` | `default_list_filter` |
| `Category1` | `minimumRequiredTags` | `minimum_required_tags` |
| `Category1` | `navigateToFirstPostAfterRead` | `navigate_to_first_post_after_read` |
| `Category1` | `topicsDay` | `topics_day` |
| `Category1` | `topicsWeek` | `topics_week` |
| `Category1` | `topicsMonth` | `topics_month` |
| `Category1` | `topicsYear` | `topics_year` |
| `Category1` | `topicsAllTime` | `topics_all_time` |
| `Category1` | `isUncategorized` | `is_uncategorized` |
| `Category1` | `subcategoryIds` | `subcategory_ids` |
| `Category1` | `subcategoryList` | `subcategory_list` |
| `Category1` | `uploadedLogo` | `uploaded_logo` |
| `Category1` | `uploadedLogoDark` | `uploaded_logo_dark` |
| `Category1` | `uploadedBackground` | `uploaded_background` |
| `Category1` | `uploadedBackgroundDark` | `uploaded_background_dark` |
| `Category2` | `textColor` | `text_color` |
| `Category2` | `styleType` | `style_type` |
| `Category2` | `topicCount` | `topic_count` |
| `Category2` | `postCount` | `post_count` |
| `Category2` | `descriptionText` | `description_text` |
| `Category2` | `descriptionExcerpt` | `description_excerpt` |
| `Category2` | `topicUrl` | `topic_url` |
| `Category2` | `readRestricted` | `read_restricted` |
| `Category2` | `notificationLevel` | `notification_level` |
| `Category2` | `canEdit` | `can_edit` |
| `Category2` | `topicTemplate` | `topic_template` |
| `Category2` | `topicTitlePlaceholder` | `topic_title_placeholder` |
| `Category2` | `formTemplateIds` | `form_template_ids` |
| `Category2` | `hasChildren` | `has_children` |
| `Category2` | `subcategoryCount` | `subcategory_count` |
| `Category2` | `sortOrder` | `sort_order` |
| `Category2` | `sortAscending` | `sort_ascending` |
| `Category2` | `showSubcategoryList` | `show_subcategory_list` |
| `Category2` | `numFeaturedTopics` | `num_featured_topics` |
| `Category2` | `defaultView` | `default_view` |
| `Category2` | `subcategoryListStyle` | `subcategory_list_style` |
| `Category2` | `defaultTopPeriod` | `default_top_period` |
| `Category2` | `defaultListFilter` | `default_list_filter` |
| `Category2` | `minimumRequiredTags` | `minimum_required_tags` |
| `Category2` | `navigateToFirstPostAfterRead` | `navigate_to_first_post_after_read` |
| `Category2` | `customFields` | `custom_fields` |
| `Category2` | `allowedTags` | `allowed_tags` |
| `Category2` | `allowedTagGroups` | `allowed_tag_groups` |
| `Category2` | `allowGlobalTags` | `allow_global_tags` |
| `Category2` | `requiredTagGroups` | `required_tag_groups` |
| `Category2` | `categorySetting` | `category_setting` |
| `Category2` | `categoryLocalizations` | `category_localizations` |
| `Category2` | `readOnlyBanner` | `read_only_banner` |
| `Category2` | `availableGroups` | `available_groups` |
| `Category2` | `autoCloseHours` | `auto_close_hours` |
| `Category2` | `autoCloseBasedOnLastPost` | `auto_close_based_on_last_post` |
| `Category2` | `allowUnlimitedOwnerEditsOnFirstPost` | `allow_unlimited_owner_edits_on_first_post` |
| `Category2` | `defaultSlowModeSeconds` | `default_slow_mode_seconds` |
| `Category2` | `groupPermissions` | `group_permissions` |
| `Category2` | `emailIn` | `email_in` |
| `Category2` | `emailInAllowStrangers` | `email_in_allow_strangers` |
| `Category2` | `mailinglistMirror` | `mailinglist_mirror` |
| `Category2` | `allTopicsWiki` | `all_topics_wiki` |
| `Category2` | `canDelete` | `can_delete` |
| `Category2` | `allowBadges` | `allow_badges` |
| `Category2` | `topicFeaturedLinkAllowed` | `topic_featured_link_allowed` |
| `Category2` | `searchPriority` | `search_priority` |
| `Category2` | `topicPostingReviewGroupIds` | `topic_posting_review_group_ids` |
| `Category2` | `replyPostingReviewGroupIds` | `reply_posting_review_group_ids` |
| `Category2` | `uploadedLogo` | `uploaded_logo` |
| `Category2` | `uploadedLogoDark` | `uploaded_logo_dark` |
| `Category2` | `uploadedBackground` | `uploaded_background` |
| `Category2` | `uploadedBackgroundDark` | `uploaded_background_dark` |
| `Category2` | `categoryTypes` | `category_types` |
| `Category2` | `categoryTypeSettings` | `category_type_settings` |
| `Category2` | `availableCategoryTypes` | `available_category_types` |
| `Category4` | `textColor` | `text_color` |
| `Category4` | `styleType` | `style_type` |
| `Category4` | `topicCount` | `topic_count` |
| `Category4` | `postCount` | `post_count` |
| `Category4` | `descriptionText` | `description_text` |
| `Category4` | `descriptionExcerpt` | `description_excerpt` |
| `Category4` | `topicUrl` | `topic_url` |
| `Category4` | `readRestricted` | `read_restricted` |
| `Category4` | `notificationLevel` | `notification_level` |
| `Category4` | `topicTemplate` | `topic_template` |
| `Category4` | `topicTitlePlaceholder` | `topic_title_placeholder` |
| `Category4` | `hasChildren` | `has_children` |
| `Category4` | `subcategoryCount` | `subcategory_count` |
| `Category4` | `sortOrder` | `sort_order` |
| `Category4` | `sortAscending` | `sort_ascending` |
| `Category4` | `showSubcategoryList` | `show_subcategory_list` |
| `Category4` | `numFeaturedTopics` | `num_featured_topics` |
| `Category4` | `defaultView` | `default_view` |
| `Category4` | `subcategoryListStyle` | `subcategory_list_style` |
| `Category4` | `defaultTopPeriod` | `default_top_period` |
| `Category4` | `defaultListFilter` | `default_list_filter` |
| `Category4` | `minimumRequiredTags` | `minimum_required_tags` |
| `Category4` | `navigateToFirstPostAfterRead` | `navigate_to_first_post_after_read` |
| `Category4` | `allowedTags` | `allowed_tags` |
| `Category4` | `allowedTagGroups` | `allowed_tag_groups` |
| `Category4` | `allowGlobalTags` | `allow_global_tags` |
| `Category4` | `requiredTagGroups` | `required_tag_groups` |
| `Category4` | `readOnlyBanner` | `read_only_banner` |
| `Category4` | `uploadedLogo` | `uploaded_logo` |
| `Category4` | `uploadedLogoDark` | `uploaded_logo_dark` |
| `Category4` | `uploadedBackground` | `uploaded_background` |
| `Category4` | `uploadedBackgroundDark` | `uploaded_background_dark` |
| `Category4` | `canEdit` | `can_edit` |
| `Category4` | `customFields` | `custom_fields` |
| `Category4` | `parentCategoryId` | `parent_category_id` |
| `Category4` | `formTemplateIds` | `form_template_ids` |
| `Category4` | `categoryTypes` | `category_types` |
| `CategoryList` | `canCreateCategory` | `can_create_category` |
| `CategoryList` | `canCreateTopic` | `can_create_topic` |
| `CategorySetting` | `autoBumpCooldownDays` | `auto_bump_cooldown_days` |
| `CategorySetting` | `numAutoBumpDaily` | `num_auto_bump_daily` |
| `CategorySetting` | `requireReplyApproval` | `require_reply_approval` |
| `CategorySetting` | `requireTopicApproval` | `require_topic_approval` |
| `CategorySetting` | `nestedRepliesDefault` | `nested_replies_default` |
| `CategorySetting` | `topicPostingReviewMode` | `topic_posting_review_mode` |
| `CategorySetting` | `replyPostingReviewMode` | `reply_posting_review_mode` |
| `CategoryType` | `configurationSchema` | `configuration_schema` |
| `CreatedBy` | `avatarTemplate` | `avatar_template` |
| `Creator` | `avatarTemplate` | `avatar_template` |
| `CustomFields` | `firstName` | `first_name` |
| `Data` | `badgeId` | `badge_id` |
| `Data` | `badgeName` | `badge_name` |
| `Data` | `badgeSlug` | `badge_slug` |
| `Data` | `badgeTitle` | `badge_title` |
| `Details` | `canEdit` | `can_edit` |
| `Details` | `notificationLevel` | `notification_level` |
| `Details` | `canMovePosts` | `can_move_posts` |
| `Details` | `canDelete` | `can_delete` |
| `Details` | `canRemoveAllowedUsers` | `can_remove_allowed_users` |
| `Details` | `canCreatePost` | `can_create_post` |
| `Details` | `canReplyAsNewTopic` | `can_reply_as_new_topic` |
| `Details` | `canInviteTo` | `can_invite_to` |
| `Details` | `canInviteViaEmail` | `can_invite_via_email` |
| `Details` | `canFlagTopic` | `can_flag_topic` |
| `Details` | `canConvertTopic` | `can_convert_topic` |
| `Details` | `canReviewTopic` | `can_review_topic` |
| `Details` | `canCloseTopic` | `can_close_topic` |
| `Details` | `canArchiveTopic` | `can_archive_topic` |
| `Details` | `canSplitMergeTopic` | `can_split_merge_topic` |
| `Details` | `canEditStaffNotes` | `can_edit_staff_notes` |
| `Details` | `canToggleTopicVisibility` | `can_toggle_topic_visibility` |
| `Details` | `canPinUnpinTopic` | `can_pin_unpin_topic` |
| `Details` | `canBannerTopic` | `can_banner_topic` |
| `Details` | `canModerateCategory` | `can_moderate_category` |
| `Details` | `canRemoveSelfId` | `can_remove_self_id` |
| `Details` | `createdBy` | `created_by` |
| `Details` | `lastPoster` | `last_poster` |
| `DirectoryItemsJsonResponse` | `directoryItems` | `directory_items` |
| `DirectoryItem` | `likesReceived` | `likes_received` |
| `DirectoryItem` | `likesGiven` | `likes_given` |
| `DirectoryItem` | `topicsEntered` | `topics_entered` |
| `DirectoryItem` | `topicCount` | `topic_count` |
| `DirectoryItem` | `postCount` | `post_count` |
| `DirectoryItem` | `postsRead` | `posts_read` |
| `DirectoryItem` | `daysVisited` | `days_visited` |
| `Event` | `categoryId` | `category_id` |
| `Event` | `recurrenceUntil` | `recurrence_until` |
| `Event` | `startsAt` | `starts_at` |
| `Event` | `endsAt` | `ends_at` |
| `Event` | `showLocalTime` | `show_local_time` |
| `Event` | `allDay` | `all_day` |
| `Event` | `customFields` | `custom_fields` |
| `Event` | `canActOnDiscoursePostEvent` | `can_act_on_discourse_post_event` |
| `Event` | `canUpdateAttendance` | `can_update_attendance` |
| `Event` | `isClosed` | `is_closed` |
| `Event` | `isExpired` | `is_expired` |
| `Event` | `isOngoing` | `is_ongoing` |
| `Event` | `isPrivate` | `is_private` |
| `Event` | `isPublic` | `is_public` |
| `Event` | `isStandalone` | `is_standalone` |
| `Event` | `rawInvitees` | `raw_invitees` |
| `Event` | `sampleInvitees` | `sample_invitees` |
| `Event` | `shouldDisplayInvitees` | `should_display_invitees` |
| `Event` | `descriptionHtml` | `description_html` |
| `Event` | `watchingInvitee` | `watching_invitee` |
| `Event` | `chatEnabled` | `chat_enabled` |
| `Event` | `livestreamOnebox` | `livestream_onebox` |
| `Event` | `isZoomLivestream` | `is_zoom_livestream` |
| `Event` | `maxAttendees` | `max_attendees` |
| `Event` | `atCapacity` | `at_capacity` |
| `Event` | `imageUpload` | `image_upload` |
| `Extras` | `visibleGroupNames` | `visible_group_names` |
| `Extras2` | `typeFilters` | `type_filters` |
| `FeaturedTopic` | `fancyTitle` | `fancy_title` |
| `FeaturedTopic` | `postsCount` | `posts_count` |
| `GrantedBy` | `avatarTemplate` | `avatar_template` |
| `GrantedBy` | `flairName` | `flair_name` |
| `GrantedBy` | `trustLevel` | `trust_level` |
| `Group` | `fullName` | `full_name` |
| `Group` | `bioRaw` | `bio_raw` |
| `Group` | `ownerUsernames` | `owner_usernames` |
| `Group` | `automaticMembershipEmailDomains` | `automatic_membership_email_domains` |
| `Group` | `visibilityLevel` | `visibility_level` |
| `Group` | `primaryGroup` | `primary_group` |
| `Group` | `flairIcon` | `flair_icon` |
| `Group` | `flairUploadId` | `flair_upload_id` |
| `Group` | `flairBgColor` | `flair_bg_color` |
| `Group` | `publicAdmission` | `public_admission` |
| `Group` | `publicExit` | `public_exit` |
| `Group` | `defaultNotificationLevel` | `default_notification_level` |
| `Group` | `mutedCategoryIds` | `muted_category_ids` |
| `Group` | `regularCategoryIds` | `regular_category_ids` |
| `Group` | `watchingCategoryIds` | `watching_category_ids` |
| `Group` | `trackingCategoryIds` | `tracking_category_ids` |
| `Group` | `watchingFirstPostCategoryIds` | `watching_first_post_category_ids` |
| `Group1` | `userCount` | `user_count` |
| `Group1` | `mentionableLevel` | `mentionable_level` |
| `Group1` | `messageableLevel` | `messageable_level` |
| `Group1` | `visibilityLevel` | `visibility_level` |
| `Group1` | `primaryGroup` | `primary_group` |
| `Group1` | `grantTrustLevel` | `grant_trust_level` |
| `Group1` | `incomingEmail` | `incoming_email` |
| `Group1` | `hasMessages` | `has_messages` |
| `Group1` | `flairUrl` | `flair_url` |
| `Group1` | `flairBgColor` | `flair_bg_color` |
| `Group1` | `flairColor` | `flair_color` |
| `Group1` | `bioRaw` | `bio_raw` |
| `Group1` | `bioCooked` | `bio_cooked` |
| `Group1` | `bioExcerpt` | `bio_excerpt` |
| `Group1` | `publicAdmission` | `public_admission` |
| `Group1` | `publicExit` | `public_exit` |
| `Group1` | `allowMembershipRequests` | `allow_membership_requests` |
| `Group1` | `fullName` | `full_name` |
| `Group1` | `defaultNotificationLevel` | `default_notification_level` |
| `Group1` | `membershipRequestTemplate` | `membership_request_template` |
| `Group1` | `isGroupUser` | `is_group_user` |
| `Group1` | `membersVisibilityLevel` | `members_visibility_level` |
| `Group1` | `canSeeMembers` | `can_see_members` |
| `Group1` | `canAdminGroup` | `can_admin_group` |
| `Group1` | `canEditGroup` | `can_edit_group` |
| `Group1` | `publishReadState` | `publish_read_state` |
| `Group1` | `isGroupOwnerDisplay` | `is_group_owner_display` |
| `Group1` | `automaticMembershipEmailDomains` | `automatic_membership_email_domains` |
| `Group1` | `smtpUpdatedAt` | `smtp_updated_at` |
| `Group1` | `smtpUpdatedBy` | `smtp_updated_by` |
| `Group1` | `smtpEnabled` | `smtp_enabled` |
| `Group1` | `smtpServer` | `smtp_server` |
| `Group1` | `smtpPort` | `smtp_port` |
| `Group1` | `smtpSslMode` | `smtp_ssl_mode` |
| `Group1` | `emailUsername` | `email_username` |
| `Group1` | `emailFromAlias` | `email_from_alias` |
| `Group1` | `emailPassword` | `email_password` |
| `Group1` | `messageCount` | `message_count` |
| `Group1` | `allowUnknownSenderTopicReplies` | `allow_unknown_sender_topic_replies` |
| `Group1` | `associatedGroupIds` | `associated_group_ids` |
| `Group1` | `watchingCategoryIds` | `watching_category_ids` |
| `Group1` | `trackingCategoryIds` | `tracking_category_ids` |
| `Group1` | `watchingFirstPostCategoryIds` | `watching_first_post_category_ids` |
| `Group1` | `regularCategoryIds` | `regular_category_ids` |
| `Group1` | `mutedCategoryIds` | `muted_category_ids` |
| `Group1` | `watchingTags` | `watching_tags` |
| `Group1` | `watchingFirstPostTags` | `watching_first_post_tags` |
| `Group1` | `trackingTags` | `tracking_tags` |
| `Group1` | `regularTags` | `regular_tags` |
| `Group1` | `mutedTags` | `muted_tags` |
| `Group10` | `displayName` | `display_name` |
| `Group10` | `userCount` | `user_count` |
| `Group10` | `mentionableLevel` | `mentionable_level` |
| `Group10` | `messageableLevel` | `messageable_level` |
| `Group10` | `visibilityLevel` | `visibility_level` |
| `Group10` | `primaryGroup` | `primary_group` |
| `Group10` | `grantTrustLevel` | `grant_trust_level` |
| `Group10` | `incomingEmail` | `incoming_email` |
| `Group10` | `hasMessages` | `has_messages` |
| `Group10` | `flairUrl` | `flair_url` |
| `Group10` | `flairBgColor` | `flair_bg_color` |
| `Group10` | `flairColor` | `flair_color` |
| `Group10` | `flairGroupId` | `flair_group_id` |
| `Group10` | `bioRaw` | `bio_raw` |
| `Group10` | `bioCooked` | `bio_cooked` |
| `Group10` | `bioExcerpt` | `bio_excerpt` |
| `Group10` | `publicAdmission` | `public_admission` |
| `Group10` | `publicExit` | `public_exit` |
| `Group10` | `allowMembershipRequests` | `allow_membership_requests` |
| `Group10` | `fullName` | `full_name` |
| `Group10` | `defaultNotificationLevel` | `default_notification_level` |
| `Group10` | `membershipRequestTemplate` | `membership_request_template` |
| `Group10` | `membersVisibilityLevel` | `members_visibility_level` |
| `Group10` | `canSeeMembers` | `can_see_members` |
| `Group10` | `canAdminGroup` | `can_admin_group` |
| `Group10` | `publishReadState` | `publish_read_state` |
| `Group4` | `displayName` | `display_name` |
| `Group4` | `userCount` | `user_count` |
| `Group4` | `mentionableLevel` | `mentionable_level` |
| `Group4` | `messageableLevel` | `messageable_level` |
| `Group4` | `visibilityLevel` | `visibility_level` |
| `Group4` | `primaryGroup` | `primary_group` |
| `Group4` | `grantTrustLevel` | `grant_trust_level` |
| `Group4` | `incomingEmail` | `incoming_email` |
| `Group4` | `hasMessages` | `has_messages` |
| `Group4` | `flairUrl` | `flair_url` |
| `Group4` | `flairBgColor` | `flair_bg_color` |
| `Group4` | `flairColor` | `flair_color` |
| `Group4` | `bioRaw` | `bio_raw` |
| `Group4` | `bioCooked` | `bio_cooked` |
| `Group4` | `bioExcerpt` | `bio_excerpt` |
| `Group4` | `publicAdmission` | `public_admission` |
| `Group4` | `publicExit` | `public_exit` |
| `Group4` | `allowMembershipRequests` | `allow_membership_requests` |
| `Group4` | `fullName` | `full_name` |
| `Group4` | `defaultNotificationLevel` | `default_notification_level` |
| `Group4` | `membershipRequestTemplate` | `membership_request_template` |
| `Group4` | `isGroupUser` | `is_group_user` |
| `Group4` | `isGroupOwner` | `is_group_owner` |
| `Group4` | `membersVisibilityLevel` | `members_visibility_level` |
| `Group4` | `canSeeMembers` | `can_see_members` |
| `Group4` | `canAdminGroup` | `can_admin_group` |
| `Group4` | `canEditGroup` | `can_edit_group` |
| `Group4` | `publishReadState` | `publish_read_state` |
| `Group5` | `fullName` | `full_name` |
| `Group5` | `displayName` | `display_name` |
| `Group5` | `flairUrl` | `flair_url` |
| `Group5` | `flairBgColor` | `flair_bg_color` |
| `Group5` | `flairColor` | `flair_color` |
| `Group7` | `displayName` | `display_name` |
| `Group7` | `userCount` | `user_count` |
| `Group7` | `mentionableLevel` | `mentionable_level` |
| `Group7` | `messageableLevel` | `messageable_level` |
| `Group7` | `visibilityLevel` | `visibility_level` |
| `Group7` | `primaryGroup` | `primary_group` |
| `Group7` | `grantTrustLevel` | `grant_trust_level` |
| `Group7` | `incomingEmail` | `incoming_email` |
| `Group7` | `hasMessages` | `has_messages` |
| `Group7` | `flairUrl` | `flair_url` |
| `Group7` | `flairBgColor` | `flair_bg_color` |
| `Group7` | `flairColor` | `flair_color` |
| `Group7` | `bioRaw` | `bio_raw` |
| `Group7` | `bioCooked` | `bio_cooked` |
| `Group7` | `bioExcerpt` | `bio_excerpt` |
| `Group7` | `publicAdmission` | `public_admission` |
| `Group7` | `publicExit` | `public_exit` |
| `Group7` | `allowMembershipRequests` | `allow_membership_requests` |
| `Group7` | `fullName` | `full_name` |
| `Group7` | `defaultNotificationLevel` | `default_notification_level` |
| `Group7` | `membershipRequestTemplate` | `membership_request_template` |
| `Group7` | `membersVisibilityLevel` | `members_visibility_level` |
| `Group7` | `canSeeMembers` | `can_see_members` |
| `Group7` | `canAdminGroup` | `can_admin_group` |
| `Group7` | `publishReadState` | `publish_read_state` |
| `GroupPermission` | `permissionType` | `permission_type` |
| `GroupPermission` | `groupName` | `group_name` |
| `GroupPermission` | `groupId` | `group_id` |
| `GroupUser` | `groupId` | `group_id` |
| `GroupUser` | `userId` | `user_id` |
| `GroupUser` | `notificationLevel` | `notification_level` |
| `GroupedSearchResult` | `morePosts` | `more_posts` |
| `GroupedSearchResult` | `moreUsers` | `more_users` |
| `GroupedSearchResult` | `moreCategories` | `more_categories` |
| `GroupedSearchResult` | `searchLogId` | `search_log_id` |
| `GroupedSearchResult` | `moreFullPageResults` | `more_full_page_results` |
| `GroupedSearchResult` | `canCreateTopic` | `can_create_topic` |
| `GroupedSearchResult` | `postIds` | `post_ids` |
| `GroupedSearchResult` | `userIds` | `user_ids` |
| `GroupedSearchResult` | `categoryIds` | `category_ids` |
| `GroupedSearchResult` | `tagIds` | `tag_ids` |
| `GroupedSearchResult` | `groupIds` | `group_ids` |
| `GroupsMembersJsonResponse2` | `skippedUsernames` | `skipped_usernames` |
| `GroupsJsonResponse2` | `totalRowsGroups` | `total_rows_groups` |
| `GroupsJsonResponse2` | `loadMoreGroups` | `load_more_groups` |
| `InvitesCreateMultipleJsonRequest` | `skipEmail` | `skip_email` |
| `InvitesCreateMultipleJsonRequest` | `customMessage` | `custom_message` |
| `InvitesCreateMultipleJsonRequest` | `maxRedemptionsAllowed` | `max_redemptions_allowed` |
| `InvitesCreateMultipleJsonRequest` | `topicId` | `topic_id` |
| `InvitesCreateMultipleJsonRequest` | `groupIds` | `group_ids` |
| `InvitesCreateMultipleJsonRequest` | `groupNames` | `group_names` |
| `InvitesCreateMultipleJsonRequest` | `expiresAt` | `expires_at` |
| `InvitesCreateMultipleJsonResponse` | `numSuccessfullyCreatedInvitations` | `num_successfully_created_invitations` |
| `InvitesCreateMultipleJsonResponse` | `numFailedInvitations` | `num_failed_invitations` |
| `InvitesCreateMultipleJsonResponse` | `failedInvitations` | `failed_invitations` |
| `InvitesCreateMultipleJsonResponse` | `successfulInvitations` | `successful_invitations` |
| `InvitesJsonRequest` | `skipEmail` | `skip_email` |
| `InvitesJsonRequest` | `customMessage` | `custom_message` |
| `InvitesJsonRequest` | `maxRedemptionsAllowed` | `max_redemptions_allowed` |
| `InvitesJsonRequest` | `topicId` | `topic_id` |
| `InvitesJsonRequest` | `groupIds` | `group_ids` |
| `InvitesJsonRequest` | `groupNames` | `group_names` |
| `InvitesJsonRequest` | `expiresAt` | `expires_at` |
| `InvitesJsonResponse` | `inviteKey` | `invite_key` |
| `InvitesJsonResponse` | `canDeleteInvite` | `can_delete_invite` |
| `InvitesJsonResponse` | `customMessage` | `custom_message` |
| `InvitesJsonResponse` | `createdAt` | `created_at` |
| `InvitesJsonResponse` | `updatedAt` | `updated_at` |
| `InvitesJsonResponse` | `expiresAt` | `expires_at` |
| `InvitesJsonResponse` | `grantsAdmin` | `grants_admin` |
| `InvitesJsonResponse` | `grantsModerator` | `grants_moderator` |
| `LastPoster` | `avatarTemplate` | `avatar_template` |
| `LatestJsonResponse` | `primaryGroups` | `primary_groups` |
| `LatestJsonResponse` | `topicList` | `topic_list` |
| `LatestPost` | `avatarTemplate` | `avatar_template` |
| `LatestPost` | `createdAt` | `created_at` |
| `LatestPost` | `postNumber` | `post_number` |
| `LatestPost` | `postType` | `post_type` |
| `LatestPost` | `postsCount` | `posts_count` |
| `LatestPost` | `updatedAt` | `updated_at` |
| `LatestPost` | `replyCount` | `reply_count` |
| `LatestPost` | `replyToPostNumber` | `reply_to_post_number` |
| `LatestPost` | `quoteCount` | `quote_count` |
| `LatestPost` | `incomingLinkCount` | `incoming_link_count` |
| `LatestPost` | `readersCount` | `readers_count` |
| `LatestPost` | `topicId` | `topic_id` |
| `LatestPost` | `topicSlug` | `topic_slug` |
| `LatestPost` | `topicTitle` | `topic_title` |
| `LatestPost` | `topicHtmlTitle` | `topic_html_title` |
| `LatestPost` | `categoryId` | `category_id` |
| `LatestPost` | `displayUsername` | `display_username` |
| `LatestPost` | `primaryGroupName` | `primary_group_name` |
| `LatestPost` | `flairName` | `flair_name` |
| `LatestPost` | `flairUrl` | `flair_url` |
| `LatestPost` | `flairBgColor` | `flair_bg_color` |
| `LatestPost` | `flairColor` | `flair_color` |
| `LatestPost` | `flairGroupId` | `flair_group_id` |
| `LatestPost` | `badgesGranted` | `badges_granted` |
| `LatestPost` | `canEdit` | `can_edit` |
| `LatestPost` | `canDelete` | `can_delete` |
| `LatestPost` | `canRecover` | `can_recover` |
| `LatestPost` | `canSeeHiddenPost` | `can_see_hidden_post` |
| `LatestPost` | `canWiki` | `can_wiki` |
| `LatestPost` | `userTitle` | `user_title` |
| `LatestPost` | `actionsSummary` | `actions_summary` |
| `LatestPost` | `userId` | `user_id` |
| `LatestPost` | `trustLevel` | `trust_level` |
| `LatestPost` | `deletedAt` | `deleted_at` |
| `LatestPost` | `userDeleted` | `user_deleted` |
| `LatestPost` | `editReason` | `edit_reason` |
| `LatestPost` | `canViewEditHistory` | `can_view_edit_history` |
| `LatestPost` | `reviewableId` | `reviewable_id` |
| `LatestPost` | `reviewableScoreCount` | `reviewable_score_count` |
| `LatestPost` | `reviewableScorePendingCount` | `reviewable_score_pending_count` |
| `LatestPost` | `postUrl` | `post_url` |
| `Member` | `avatarTemplate` | `avatar_template` |
| `Member` | `lastPostedAt` | `last_posted_at` |
| `Member` | `lastSeenAt` | `last_seen_at` |
| `Member` | `addedAt` | `added_at` |
| `Meta1` | `lastUpdatedAt` | `last_updated_at` |
| `Meta1` | `totalRowsDirectoryItems` | `total_rows_directory_items` |
| `Meta1` | `loadMoreDirectoryItems` | `load_more_directory_items` |
| `Metadata` | `sha1Checksum` | `sha1-checksum` |
| `Notification` | `userId` | `user_id` |
| `Notification` | `notificationType` | `notification_type` |
| `Notification` | `createdAt` | `created_at` |
| `Notification` | `postNumber` | `post_number` |
| `Notification` | `topicId` | `topic_id` |
| `NotificationTypes` | `privateMessage` | `private_message` |
| `NotificationTypes` | `invitedToPrivateMessage` | `invited_to_private_message` |
| `NotificationTypes` | `inviteeAccepted` | `invitee_accepted` |
| `NotificationTypes` | `watchingCategoryOrTag` | `watching_category_or_tag` |
| `NotificationTypes` | `newFeatures` | `new_features` |
| `NotificationTypes` | `adminProblems` | `admin_problems` |
| `NotificationTypes` | `movedPost` | `moved_post` |
| `NotificationTypes` | `grantedBadge` | `granted_badge` |
| `NotificationTypes` | `invitedToTopic` | `invited_to_topic` |
| `NotificationTypes` | `groupMentioned` | `group_mentioned` |
| `NotificationTypes` | `groupMessageSummary` | `group_message_summary` |
| `NotificationTypes` | `watchingFirstPost` | `watching_first_post` |
| `NotificationTypes` | `topicReminder` | `topic_reminder` |
| `NotificationTypes` | `likedConsolidated` | `liked_consolidated` |
| `NotificationTypes` | `linkedConsolidated` | `linked_consolidated` |
| `NotificationTypes` | `postApproved` | `post_approved` |
| `NotificationTypes` | `codeReviewCommitApproved` | `code_review_commit_approved` |
| `NotificationTypes` | `membershipRequestAccepted` | `membership_request_accepted` |
| `NotificationTypes` | `membershipRequestConsolidated` | `membership_request_consolidated` |
| `NotificationTypes` | `bookmarkReminder` | `bookmark_reminder` |
| `NotificationTypes` | `votesReleased` | `votes_released` |
| `NotificationTypes` | `eventReminder` | `event_reminder` |
| `NotificationTypes` | `eventInvitation` | `event_invitation` |
| `NotificationTypes` | `chatMention` | `chat_mention` |
| `NotificationTypes` | `chatMessage` | `chat_message` |
| `NotificationTypes` | `chatInvitation` | `chat_invitation` |
| `NotificationTypes` | `chatGroupMention` | `chat_group_mention` |
| `NotificationTypes` | `chatQuoted` | `chat_quoted` |
| `NotificationTypes` | `chatWatchedThread` | `chat_watched_thread` |
| `NotificationTypes` | `upcomingChangeAvailable` | `upcoming_change_available` |
| `NotificationTypes` | `upcomingChangeAutomaticallyPromoted` | `upcoming_change_automatically_promoted` |
| `NotificationTypes` | `questionAnswerUserCommented` | `question_answer_user_commented` |
| `NotificationTypes` | `followingCreatedTopic` | `following_created_topic` |
| `NotificationTypes` | `followingReplied` | `following_replied` |
| `NotificationTypes` | `circlesActivity` | `circles_activity` |
| `NotificationTypes` | `suggestedEditCreated` | `suggested_edit_created` |
| `NotificationTypes` | `suggestedEditAccepted` | `suggested_edit_accepted` |
| `NotificationsJsonResponse` | `totalRowsNotifications` | `total_rows_notifications` |
| `NotificationsJsonResponse` | `seenNotificationId` | `seen_notification_id` |
| `NotificationsJsonResponse` | `loadMoreNotifications` | `load_more_notifications` |
| `Occurrence` | `startsAt` | `starts_at` |
| `Occurrence` | `endsAt` | `ends_at` |
| `OptimizedVideo` | `uploadId` | `upload_id` |
| `OptimizedVideo` | `originalFilename` | `original_filename` |
| `Owner` | `avatarTemplate` | `avatar_template` |
| `Owner` | `lastPostedAt` | `last_posted_at` |
| `Owner` | `lastSeenAt` | `last_seen_at` |
| `Owner` | `addedAt` | `added_at` |
| `Participant` | `userId` | `user_id` |
| `Participant` | `primaryGroupId` | `primary_group_id` |
| `Participant1` | `avatarTemplate` | `avatar_template` |
| `Participant1` | `postCount` | `post_count` |
| `Participant1` | `primaryGroupName` | `primary_group_name` |
| `Participant1` | `flairName` | `flair_name` |
| `Participant1` | `flairUrl` | `flair_url` |
| `Participant1` | `flairColor` | `flair_color` |
| `Participant1` | `flairBgColor` | `flair_bg_color` |
| `Participant1` | `flairGroupId` | `flair_group_id` |
| `Participant1` | `trustLevel` | `trust_level` |
| `Post` | `postNumber` | `post_number` |
| `Post` | `categorySlug` | `category_slug` |
| `PostActionsJsonRequest` | `postActionTypeId` | `post_action_type_id` |
| `PostActionsJsonRequest` | `flagTopic` | `flag_topic` |
| `PostActionsJsonResponse` | `avatarTemplate` | `avatar_template` |
| `PostActionsJsonResponse` | `createdAt` | `created_at` |
| `PostActionsJsonResponse` | `postNumber` | `post_number` |
| `PostActionsJsonResponse` | `postType` | `post_type` |
| `PostActionsJsonResponse` | `postsCount` | `posts_count` |
| `PostActionsJsonResponse` | `updatedAt` | `updated_at` |
| `PostActionsJsonResponse` | `replyCount` | `reply_count` |
| `PostActionsJsonResponse` | `replyToPostNumber` | `reply_to_post_number` |
| `PostActionsJsonResponse` | `quoteCount` | `quote_count` |
| `PostActionsJsonResponse` | `incomingLinkCount` | `incoming_link_count` |
| `PostActionsJsonResponse` | `readersCount` | `readers_count` |
| `PostActionsJsonResponse` | `topicId` | `topic_id` |
| `PostActionsJsonResponse` | `topicSlug` | `topic_slug` |
| `PostActionsJsonResponse` | `displayUsername` | `display_username` |
| `PostActionsJsonResponse` | `primaryGroupName` | `primary_group_name` |
| `PostActionsJsonResponse` | `flairName` | `flair_name` |
| `PostActionsJsonResponse` | `flairUrl` | `flair_url` |
| `PostActionsJsonResponse` | `flairBgColor` | `flair_bg_color` |
| `PostActionsJsonResponse` | `flairColor` | `flair_color` |
| `PostActionsJsonResponse` | `flairGroupId` | `flair_group_id` |
| `PostActionsJsonResponse` | `badgesGranted` | `badges_granted` |
| `PostActionsJsonResponse` | `canEdit` | `can_edit` |
| `PostActionsJsonResponse` | `canDelete` | `can_delete` |
| `PostActionsJsonResponse` | `canRecover` | `can_recover` |
| `PostActionsJsonResponse` | `canSeeHiddenPost` | `can_see_hidden_post` |
| `PostActionsJsonResponse` | `canWiki` | `can_wiki` |
| `PostActionsJsonResponse` | `userTitle` | `user_title` |
| `PostActionsJsonResponse` | `actionsSummary` | `actions_summary` |
| `PostActionsJsonResponse` | `userId` | `user_id` |
| `PostActionsJsonResponse` | `trustLevel` | `trust_level` |
| `PostActionsJsonResponse` | `deletedAt` | `deleted_at` |
| `PostActionsJsonResponse` | `userDeleted` | `user_deleted` |
| `PostActionsJsonResponse` | `editReason` | `edit_reason` |
| `PostActionsJsonResponse` | `canViewEditHistory` | `can_view_edit_history` |
| `PostActionsJsonResponse` | `reviewableId` | `reviewable_id` |
| `PostActionsJsonResponse` | `reviewableScoreCount` | `reviewable_score_count` |
| `PostActionsJsonResponse` | `reviewableScorePendingCount` | `reviewable_score_pending_count` |
| `PostActionsJsonResponse` | `postUrl` | `post_url` |
| `Post1` | `editReason` | `edit_reason` |
| `Post2` | `avatarTemplate` | `avatar_template` |
| `Post2` | `createdAt` | `created_at` |
| `Post2` | `postNumber` | `post_number` |
| `Post2` | `postType` | `post_type` |
| `Post2` | `postsCount` | `posts_count` |
| `Post2` | `updatedAt` | `updated_at` |
| `Post2` | `replyCount` | `reply_count` |
| `Post2` | `replyToPostNumber` | `reply_to_post_number` |
| `Post2` | `quoteCount` | `quote_count` |
| `Post2` | `incomingLinkCount` | `incoming_link_count` |
| `Post2` | `readersCount` | `readers_count` |
| `Post2` | `topicId` | `topic_id` |
| `Post2` | `topicSlug` | `topic_slug` |
| `Post2` | `primaryGroupName` | `primary_group_name` |
| `Post2` | `flairName` | `flair_name` |
| `Post2` | `flairUrl` | `flair_url` |
| `Post2` | `flairBgColor` | `flair_bg_color` |
| `Post2` | `flairColor` | `flair_color` |
| `Post2` | `flairGroupId` | `flair_group_id` |
| `Post2` | `badgesGranted` | `badges_granted` |
| `Post2` | `canEdit` | `can_edit` |
| `Post2` | `canDelete` | `can_delete` |
| `Post2` | `canRecover` | `can_recover` |
| `Post2` | `canSeeHiddenPost` | `can_see_hidden_post` |
| `Post2` | `canWiki` | `can_wiki` |
| `Post2` | `userTitle` | `user_title` |
| `Post2` | `actionsSummary` | `actions_summary` |
| `Post2` | `userId` | `user_id` |
| `Post2` | `draftSequence` | `draft_sequence` |
| `Post2` | `trustLevel` | `trust_level` |
| `Post2` | `deletedAt` | `deleted_at` |
| `Post2` | `userDeleted` | `user_deleted` |
| `Post2` | `editReason` | `edit_reason` |
| `Post2` | `canViewEditHistory` | `can_view_edit_history` |
| `Post2` | `reviewableId` | `reviewable_id` |
| `Post2` | `reviewableScoreCount` | `reviewable_score_count` |
| `Post2` | `reviewableScorePendingCount` | `reviewable_score_pending_count` |
| `Post2` | `postUrl` | `post_url` |
| `Post2` | `postLocalizations` | `post_localizations` |
| `Post2` | `mentionedUsers` | `mentioned_users` |
| `Post2` | `displayUsername` | `display_username` |
| `Post3` | `avatarTemplate` | `avatar_template` |
| `Post3` | `createdAt` | `created_at` |
| `Post3` | `postNumber` | `post_number` |
| `Post3` | `postType` | `post_type` |
| `Post3` | `updatedAt` | `updated_at` |
| `Post3` | `replyCount` | `reply_count` |
| `Post3` | `replyToPostNumber` | `reply_to_post_number` |
| `Post3` | `quoteCount` | `quote_count` |
| `Post3` | `incomingLinkCount` | `incoming_link_count` |
| `Post3` | `readersCount` | `readers_count` |
| `Post3` | `topicId` | `topic_id` |
| `Post3` | `topicSlug` | `topic_slug` |
| `Post3` | `displayUsername` | `display_username` |
| `Post3` | `primaryGroupName` | `primary_group_name` |
| `Post3` | `flairName` | `flair_name` |
| `Post3` | `flairUrl` | `flair_url` |
| `Post3` | `flairBgColor` | `flair_bg_color` |
| `Post3` | `flairColor` | `flair_color` |
| `Post3` | `canEdit` | `can_edit` |
| `Post3` | `canDelete` | `can_delete` |
| `Post3` | `canRecover` | `can_recover` |
| `Post3` | `canWiki` | `can_wiki` |
| `Post3` | `userTitle` | `user_title` |
| `Post3` | `actionsSummary` | `actions_summary` |
| `Post3` | `userId` | `user_id` |
| `Post3` | `trustLevel` | `trust_level` |
| `Post3` | `deletedAt` | `deleted_at` |
| `Post3` | `userDeleted` | `user_deleted` |
| `Post3` | `editReason` | `edit_reason` |
| `Post3` | `canViewEditHistory` | `can_view_edit_history` |
| `Post3` | `reviewableId` | `reviewable_id` |
| `Post3` | `reviewableScoreCount` | `reviewable_score_count` |
| `Post3` | `reviewableScorePendingCount` | `reviewable_score_pending_count` |
| `Post4` | `avatarTemplate` | `avatar_template` |
| `Post4` | `createdAt` | `created_at` |
| `Post4` | `postNumber` | `post_number` |
| `Post4` | `postType` | `post_type` |
| `Post4` | `updatedAt` | `updated_at` |
| `Post4` | `replyCount` | `reply_count` |
| `Post4` | `replyToPostNumber` | `reply_to_post_number` |
| `Post4` | `quoteCount` | `quote_count` |
| `Post4` | `incomingLinkCount` | `incoming_link_count` |
| `Post4` | `readersCount` | `readers_count` |
| `Post4` | `topicId` | `topic_id` |
| `Post4` | `topicSlug` | `topic_slug` |
| `Post4` | `displayUsername` | `display_username` |
| `Post4` | `primaryGroupName` | `primary_group_name` |
| `Post4` | `flairName` | `flair_name` |
| `Post4` | `flairUrl` | `flair_url` |
| `Post4` | `flairBgColor` | `flair_bg_color` |
| `Post4` | `flairColor` | `flair_color` |
| `Post4` | `canEdit` | `can_edit` |
| `Post4` | `canDelete` | `can_delete` |
| `Post4` | `canRecover` | `can_recover` |
| `Post4` | `canSeeHiddenPost` | `can_see_hidden_post` |
| `Post4` | `canWiki` | `can_wiki` |
| `Post4` | `linkCounts` | `link_counts` |
| `Post4` | `userTitle` | `user_title` |
| `Post4` | `actionsSummary` | `actions_summary` |
| `Post4` | `userId` | `user_id` |
| `Post4` | `trustLevel` | `trust_level` |
| `Post4` | `deletedAt` | `deleted_at` |
| `Post4` | `userDeleted` | `user_deleted` |
| `Post4` | `editReason` | `edit_reason` |
| `Post4` | `canViewEditHistory` | `can_view_edit_history` |
| `Post4` | `reviewableId` | `reviewable_id` |
| `Post4` | `reviewableScoreCount` | `reviewable_score_count` |
| `Post4` | `reviewableScorePendingCount` | `reviewable_score_pending_count` |
| `PostActionType` | `nameKey` | `name_key` |
| `PostActionType` | `shortDescription` | `short_description` |
| `PostActionType` | `isFlag` | `is_flag` |
| `PostActionType` | `requireMessage` | `require_message` |
| `PostActionType` | `appliesTo` | `applies_to` |
| `PostActionType` | `isUsed` | `is_used` |
| `PostActionType` | `autoActionType` | `auto_action_type` |
| `PostTypes` | `moderatorAction` | `moderator_action` |
| `PostTypes` | `smallAction` | `small_action` |
| `Poster` | `userId` | `user_id` |
| `Poster` | `primaryGroupId` | `primary_group_id` |
| `Poster1` | `userId` | `user_id` |
| `Poster1` | `primaryGroupId` | `primary_group_id` |
| `Poster6` | `userId` | `user_id` |
| `Poster6` | `primaryGroupId` | `primary_group_id` |
| `PostsJsonRequest1` | `bypassBump` | `bypass_bump` |
| `PostsJsonRequest2` | `forceDestroy` | `force_destroy` |
| `PostsJsonResponse2` | `avatarTemplate` | `avatar_template` |
| `PostsJsonResponse2` | `createdAt` | `created_at` |
| `PostsJsonResponse2` | `postNumber` | `post_number` |
| `PostsJsonResponse2` | `postType` | `post_type` |
| `PostsJsonResponse2` | `postsCount` | `posts_count` |
| `PostsJsonResponse2` | `updatedAt` | `updated_at` |
| `PostsJsonResponse2` | `replyCount` | `reply_count` |
| `PostsJsonResponse2` | `replyToPostNumber` | `reply_to_post_number` |
| `PostsJsonResponse2` | `quoteCount` | `quote_count` |
| `PostsJsonResponse2` | `incomingLinkCount` | `incoming_link_count` |
| `PostsJsonResponse2` | `readersCount` | `readers_count` |
| `PostsJsonResponse2` | `topicId` | `topic_id` |
| `PostsJsonResponse2` | `topicSlug` | `topic_slug` |
| `PostsJsonResponse2` | `primaryGroupName` | `primary_group_name` |
| `PostsJsonResponse2` | `flairName` | `flair_name` |
| `PostsJsonResponse2` | `flairUrl` | `flair_url` |
| `PostsJsonResponse2` | `flairBgColor` | `flair_bg_color` |
| `PostsJsonResponse2` | `flairColor` | `flair_color` |
| `PostsJsonResponse2` | `flairGroupId` | `flair_group_id` |
| `PostsJsonResponse2` | `canEdit` | `can_edit` |
| `PostsJsonResponse2` | `canDelete` | `can_delete` |
| `PostsJsonResponse2` | `canRecover` | `can_recover` |
| `PostsJsonResponse2` | `canSeeHiddenPost` | `can_see_hidden_post` |
| `PostsJsonResponse2` | `canWiki` | `can_wiki` |
| `PostsJsonResponse2` | `userTitle` | `user_title` |
| `PostsJsonResponse2` | `actionsSummary` | `actions_summary` |
| `PostsJsonResponse2` | `userId` | `user_id` |
| `PostsJsonResponse2` | `trustLevel` | `trust_level` |
| `PostsJsonResponse2` | `deletedAt` | `deleted_at` |
| `PostsJsonResponse2` | `userDeleted` | `user_deleted` |
| `PostsJsonResponse2` | `editReason` | `edit_reason` |
| `PostsJsonResponse2` | `canViewEditHistory` | `can_view_edit_history` |
| `PostsJsonResponse2` | `reviewableId` | `reviewable_id` |
| `PostsJsonResponse2` | `reviewableScoreCount` | `reviewable_score_count` |
| `PostsJsonResponse2` | `reviewableScorePendingCount` | `reviewable_score_pending_count` |
| `PostsJsonResponse2` | `postUrl` | `post_url` |
| `PostsJsonResponse2` | `mentionedUsers` | `mentioned_users` |
| `PostsJsonResponse2` | `displayUsername` | `display_username` |
| `PostsRepliesJsonResponse` | `avatarTemplate` | `avatar_template` |
| `PostsRepliesJsonResponse` | `createdAt` | `created_at` |
| `PostsRepliesJsonResponse` | `postNumber` | `post_number` |
| `PostsRepliesJsonResponse` | `postType` | `post_type` |
| `PostsRepliesJsonResponse` | `postsCount` | `posts_count` |
| `PostsRepliesJsonResponse` | `updatedAt` | `updated_at` |
| `PostsRepliesJsonResponse` | `replyCount` | `reply_count` |
| `PostsRepliesJsonResponse` | `replyToPostNumber` | `reply_to_post_number` |
| `PostsRepliesJsonResponse` | `quoteCount` | `quote_count` |
| `PostsRepliesJsonResponse` | `incomingLinkCount` | `incoming_link_count` |
| `PostsRepliesJsonResponse` | `readersCount` | `readers_count` |
| `PostsRepliesJsonResponse` | `topicId` | `topic_id` |
| `PostsRepliesJsonResponse` | `topicSlug` | `topic_slug` |
| `PostsRepliesJsonResponse` | `displayUsername` | `display_username` |
| `PostsRepliesJsonResponse` | `primaryGroupName` | `primary_group_name` |
| `PostsRepliesJsonResponse` | `flairName` | `flair_name` |
| `PostsRepliesJsonResponse` | `flairUrl` | `flair_url` |
| `PostsRepliesJsonResponse` | `flairBgColor` | `flair_bg_color` |
| `PostsRepliesJsonResponse` | `flairColor` | `flair_color` |
| `PostsRepliesJsonResponse` | `flairGroupId` | `flair_group_id` |
| `PostsRepliesJsonResponse` | `canEdit` | `can_edit` |
| `PostsRepliesJsonResponse` | `canDelete` | `can_delete` |
| `PostsRepliesJsonResponse` | `canRecover` | `can_recover` |
| `PostsRepliesJsonResponse` | `canSeeHiddenPost` | `can_see_hidden_post` |
| `PostsRepliesJsonResponse` | `canWiki` | `can_wiki` |
| `PostsRepliesJsonResponse` | `userTitle` | `user_title` |
| `PostsRepliesJsonResponse` | `replyToUser` | `reply_to_user` |
| `PostsRepliesJsonResponse` | `actionsSummary` | `actions_summary` |
| `PostsRepliesJsonResponse` | `userId` | `user_id` |
| `PostsRepliesJsonResponse` | `trustLevel` | `trust_level` |
| `PostsRepliesJsonResponse` | `deletedAt` | `deleted_at` |
| `PostsRepliesJsonResponse` | `userDeleted` | `user_deleted` |
| `PostsRepliesJsonResponse` | `editReason` | `edit_reason` |
| `PostsRepliesJsonResponse` | `canViewEditHistory` | `can_view_edit_history` |
| `PostsRepliesJsonResponse` | `reviewableId` | `reviewable_id` |
| `PostsRepliesJsonResponse` | `reviewableScoreCount` | `reviewable_score_count` |
| `PostsRepliesJsonResponse` | `reviewableScorePendingCount` | `reviewable_score_pending_count` |
| `PostsRepliesJsonResponse` | `postUrl` | `post_url` |
| `PostsJsonRequest` | `topicId` | `topic_id` |
| `PostsJsonRequest` | `targetRecipients` | `target_recipients` |
| `PostsJsonRequest` | `targetUsernames` | `target_usernames` |
| `PostsJsonRequest` | `createdAt` | `created_at` |
| `PostsJsonRequest` | `replyToPostNumber` | `reply_to_post_number` |
| `PostsJsonRequest` | `embedUrl` | `embed_url` |
| `PostsJsonRequest` | `externalId` | `external_id` |
| `PostsJsonRequest` | `autoTrack` | `auto_track` |
| `PostsJsonResponse` | `latestPosts` | `latest_posts` |
| `PostsJsonResponse1` | `avatarTemplate` | `avatar_template` |
| `PostsJsonResponse1` | `createdAt` | `created_at` |
| `PostsJsonResponse1` | `postNumber` | `post_number` |
| `PostsJsonResponse1` | `postType` | `post_type` |
| `PostsJsonResponse1` | `postsCount` | `posts_count` |
| `PostsJsonResponse1` | `updatedAt` | `updated_at` |
| `PostsJsonResponse1` | `replyCount` | `reply_count` |
| `PostsJsonResponse1` | `replyToPostNumber` | `reply_to_post_number` |
| `PostsJsonResponse1` | `quoteCount` | `quote_count` |
| `PostsJsonResponse1` | `incomingLinkCount` | `incoming_link_count` |
| `PostsJsonResponse1` | `readersCount` | `readers_count` |
| `PostsJsonResponse1` | `topicId` | `topic_id` |
| `PostsJsonResponse1` | `topicSlug` | `topic_slug` |
| `PostsJsonResponse1` | `displayUsername` | `display_username` |
| `PostsJsonResponse1` | `primaryGroupName` | `primary_group_name` |
| `PostsJsonResponse1` | `flairName` | `flair_name` |
| `PostsJsonResponse1` | `flairUrl` | `flair_url` |
| `PostsJsonResponse1` | `flairBgColor` | `flair_bg_color` |
| `PostsJsonResponse1` | `flairColor` | `flair_color` |
| `PostsJsonResponse1` | `flairGroupId` | `flair_group_id` |
| `PostsJsonResponse1` | `badgesGranted` | `badges_granted` |
| `PostsJsonResponse1` | `canEdit` | `can_edit` |
| `PostsJsonResponse1` | `canDelete` | `can_delete` |
| `PostsJsonResponse1` | `canRecover` | `can_recover` |
| `PostsJsonResponse1` | `canSeeHiddenPost` | `can_see_hidden_post` |
| `PostsJsonResponse1` | `canWiki` | `can_wiki` |
| `PostsJsonResponse1` | `userTitle` | `user_title` |
| `PostsJsonResponse1` | `actionsSummary` | `actions_summary` |
| `PostsJsonResponse1` | `userId` | `user_id` |
| `PostsJsonResponse1` | `draftSequence` | `draft_sequence` |
| `PostsJsonResponse1` | `trustLevel` | `trust_level` |
| `PostsJsonResponse1` | `deletedAt` | `deleted_at` |
| `PostsJsonResponse1` | `userDeleted` | `user_deleted` |
| `PostsJsonResponse1` | `editReason` | `edit_reason` |
| `PostsJsonResponse1` | `canViewEditHistory` | `can_view_edit_history` |
| `PostsJsonResponse1` | `reviewableId` | `reviewable_id` |
| `PostsJsonResponse1` | `reviewableScoreCount` | `reviewable_score_count` |
| `PostsJsonResponse1` | `reviewableScorePendingCount` | `reviewable_score_pending_count` |
| `PostsJsonResponse1` | `postUrl` | `post_url` |
| `PostsJsonResponse1` | `postLocalizations` | `post_localizations` |
| `PostsJsonResponse1` | `mentionedUsers` | `mentioned_users` |
| `ReplyToUser` | `avatarTemplate` | `avatar_template` |
| `RequiredTagGroup` | `minCount` | `min_count` |
| `SearchJsonResponse` | `groupedSearchResult` | `grouped_search_result` |
| `SessionForgotPasswordJsonResponse` | `userFound` | `user_found` |
| `Silence` | `silenceReason` | `silence_reason` |
| `Silence` | `fullSilenceReason` | `full_silence_reason` |
| `Silence` | `silencedTill` | `silenced_till` |
| `Silence` | `silencedAt` | `silenced_at` |
| `Silence` | `silencedBy` | `silenced_by` |
| `SilencedBy` | `avatarTemplate` | `avatar_template` |
| `SiteBasicInfoJsonResponse` | `logoUrl` | `logo_url` |
| `SiteBasicInfoJsonResponse` | `logoSmallUrl` | `logo_small_url` |
| `SiteBasicInfoJsonResponse` | `appleTouchIconUrl` | `apple_touch_icon_url` |
| `SiteBasicInfoJsonResponse` | `faviconUrl` | `favicon_url` |
| `SiteBasicInfoJsonResponse` | `headerPrimaryColor` | `header_primary_color` |
| `SiteBasicInfoJsonResponse` | `headerBackgroundColor` | `header_background_color` |
| `SiteBasicInfoJsonResponse` | `loginRequired` | `login_required` |
| `SiteBasicInfoJsonResponse` | `includeInDiscourseDiscover` | `include_in_discourse_discover` |
| `SiteBasicInfoJsonResponse` | `mobileLogoUrl` | `mobile_logo_url` |
| `SiteJsonResponse` | `defaultArchetype` | `default_archetype` |
| `SiteJsonResponse` | `notificationTypes` | `notification_types` |
| `SiteJsonResponse` | `postTypes` | `post_types` |
| `SiteJsonResponse` | `trustLevels` | `trust_levels` |
| `SiteJsonResponse` | `userTips` | `user_tips` |
| `SiteJsonResponse` | `homepageChoices` | `homepage_choices` |
| `SiteJsonResponse` | `topMenuItems` | `top_menu_items` |
| `SiteJsonResponse` | `anonymousTopMenuItems` | `anonymous_top_menu_items` |
| `SiteJsonResponse` | `uncategorizedCategoryId` | `uncategorized_category_id` |
| `SiteJsonResponse` | `userFieldMaxLength` | `user_field_max_length` |
| `SiteJsonResponse` | `postActionTypes` | `post_action_types` |
| `SiteJsonResponse` | `topicFlagTypes` | `topic_flag_types` |
| `SiteJsonResponse` | `canCreateTag` | `can_create_tag` |
| `SiteJsonResponse` | `canTagTopics` | `can_tag_topics` |
| `SiteJsonResponse` | `canTagPms` | `can_tag_pms` |
| `SiteJsonResponse` | `tagsFilterRegexp` | `tags_filter_regexp` |
| `SiteJsonResponse` | `topTags` | `top_tags` |
| `SiteJsonResponse` | `wizardRequired` | `wizard_required` |
| `SiteJsonResponse` | `canAssociateGroups` | `can_associate_groups` |
| `SiteJsonResponse` | `emailConfigured` | `email_configured` |
| `SiteJsonResponse` | `upcomingChangesWithCss` | `upcoming_changes_with_css` |
| `SiteJsonResponse` | `topicFeaturedLinkAllowedCategoryIds` | `topic_featured_link_allowed_category_ids` |
| `SiteJsonResponse` | `userThemes` | `user_themes` |
| `SiteJsonResponse` | `userColorSchemes` | `user_color_schemes` |
| `SiteJsonResponse` | `defaultLightColorScheme` | `default_light_color_scheme` |
| `SiteJsonResponse` | `defaultDarkColorScheme` | `default_dark_color_scheme` |
| `SiteJsonResponse` | `censoredRegexp` | `censored_regexp` |
| `SiteJsonResponse` | `customEmojiTranslation` | `custom_emoji_translation` |
| `SiteJsonResponse` | `watchedWordsReplace` | `watched_words_replace` |
| `SiteJsonResponse` | `watchedWordsLink` | `watched_words_link` |
| `SiteJsonResponse` | `markdownAdditionalOptions` | `markdown_additional_options` |
| `SiteJsonResponse` | `hashtagConfigurations` | `hashtag_configurations` |
| `SiteJsonResponse` | `hashtagIcons` | `hashtag_icons` |
| `SiteJsonResponse` | `displayedAboutPluginStatGroups` | `displayed_about_plugin_stat_groups` |
| `SiteJsonResponse` | `userFields` | `user_fields` |
| `SiteJsonResponse` | `authProviders` | `auth_providers` |
| `SiteJsonResponse` | `whispersAllowedGroupsNames` | `whispers_allowed_groups_names` |
| `SiteJsonResponse` | `deniedEmojis` | `denied_emojis` |
| `SiteJsonResponse` | `validFlagAppliesToTypes` | `valid_flag_applies_to_types` |
| `SiteJsonResponse` | `navigationMenuSiteTopTags` | `navigation_menu_site_top_tags` |
| `SiteJsonResponse` | `fullNameRequiredForSignup` | `full_name_required_for_signup` |
| `SiteJsonResponse` | `fullNameVisibleInSignup` | `full_name_visible_in_signup` |
| `SiteJsonResponse` | `adminConfigLoginRoutes` | `admin_config_login_routes` |
| `SiteJsonResponse` | `accessControl` | `access_control` |
| `SiteJsonResponse` | `permanentUpcomingChangeNames` | `permanent_upcoming_change_names` |
| `SiteJsonResponse` | `categoryTypes` | `category_types` |
| `SuggestedTopic` | `fancyTitle` | `fancy_title` |
| `SuggestedTopic` | `postsCount` | `posts_count` |
| `SuggestedTopic` | `replyCount` | `reply_count` |
| `SuggestedTopic` | `highestPostNumber` | `highest_post_number` |
| `SuggestedTopic` | `imageUrl` | `image_url` |
| `SuggestedTopic` | `createdAt` | `created_at` |
| `SuggestedTopic` | `lastPostedAt` | `last_posted_at` |
| `SuggestedTopic` | `bumpedAt` | `bumped_at` |
| `SuggestedTopic` | `tagsDescriptions` | `tags_descriptions` |
| `SuggestedTopic` | `likeCount` | `like_count` |
| `SuggestedTopic` | `categoryId` | `category_id` |
| `SuggestedTopic` | `featuredLink` | `featured_link` |
| `SuspendedBy` | `avatarTemplate` | `avatar_template` |
| `Suspension` | `suspendReason` | `suspend_reason` |
| `Suspension` | `fullSuspendReason` | `full_suspend_reason` |
| `Suspension` | `suspendedTill` | `suspended_till` |
| `Suspension` | `suspendedAt` | `suspended_at` |
| `Suspension` | `suspendedBy` | `suspended_by` |
| `TInviteGroupJsonRequest` | `shouldNotify` | `should_notify` |
| `TJsonResponse` | `postStream` | `post_stream` |
| `TJsonResponse` | `timelineLookup` | `timeline_lookup` |
| `TJsonResponse` | `suggestedTopics` | `suggested_topics` |
| `TJsonResponse` | `tagsDescriptions` | `tags_descriptions` |
| `TJsonResponse` | `fancyTitle` | `fancy_title` |
| `TJsonResponse` | `postsCount` | `posts_count` |
| `TJsonResponse` | `createdAt` | `created_at` |
| `TJsonResponse` | `replyCount` | `reply_count` |
| `TJsonResponse` | `likeCount` | `like_count` |
| `TJsonResponse` | `lastPostedAt` | `last_posted_at` |
| `TJsonResponse` | `hasSummary` | `has_summary` |
| `TJsonResponse` | `categoryId` | `category_id` |
| `TJsonResponse` | `wordCount` | `word_count` |
| `TJsonResponse` | `deletedAt` | `deleted_at` |
| `TJsonResponse` | `userId` | `user_id` |
| `TJsonResponse` | `featuredLink` | `featured_link` |
| `TJsonResponse` | `pinnedGlobally` | `pinned_globally` |
| `TJsonResponse` | `pinnedAt` | `pinned_at` |
| `TJsonResponse` | `pinnedUntil` | `pinned_until` |
| `TJsonResponse` | `imageUrl` | `image_url` |
| `TJsonResponse` | `slowModeSeconds` | `slow_mode_seconds` |
| `TJsonResponse` | `draftKey` | `draft_key` |
| `TJsonResponse` | `draftSequence` | `draft_sequence` |
| `TJsonResponse` | `currentPostNumber` | `current_post_number` |
| `TJsonResponse` | `highestPostNumber` | `highest_post_number` |
| `TJsonResponse` | `deletedBy` | `deleted_by` |
| `TJsonResponse` | `hasDeleted` | `has_deleted` |
| `TJsonResponse` | `actionsSummary` | `actions_summary` |
| `TJsonResponse` | `chunkSize` | `chunk_size` |
| `TJsonResponse` | `topicTimer` | `topic_timer` |
| `TJsonResponse` | `messageBusLastId` | `message_bus_last_id` |
| `TJsonResponse` | `participantCount` | `participant_count` |
| `TJsonResponse` | `showReadIndicator` | `show_read_indicator` |
| `TJsonResponse` | `slowModeEnabledUntil` | `slow_mode_enabled_until` |
| `TJsonResponse1` | `basicTopic` | `basic_topic` |
| `TNotificationsJsonRequest` | `notificationLevel` | `notification_level` |
| `TPostsJsonResponse` | `postStream` | `post_stream` |
| `TStatusJsonResponse` | `topicStatusUpdate` | `topic_status_update` |
| `TTimerJsonRequest` | `statusType` | `status_type` |
| `TTimerJsonRequest` | `basedOnLastPost` | `based_on_last_post` |
| `TTimerJsonRequest` | `categoryId` | `category_id` |
| `TTimerJsonResponse` | `executeAt` | `execute_at` |
| `TTimerJsonResponse` | `basedOnLastPost` | `based_on_last_post` |
| `TTimerJsonResponse` | `categoryId` | `category_id` |
| `TagGroupsJsonResponse2` | `tagGroup` | `tag_group` |
| `TagGroupsJsonResponse3` | `tagGroup` | `tag_group` |
| `TagGroupsJsonResponse` | `tagGroups` | `tag_groups` |
| `TagGroupsJsonResponse1` | `tagGroup` | `tag_group` |
| `TagJsonResponse` | `primaryGroups` | `primary_groups` |
| `TagJsonResponse` | `topicList` | `topic_list` |
| `Tag3` | `pmCount` | `pm_count` |
| `Tag3` | `targetTag` | `target_tag` |
| `Tag4` | `topicCount` | `topic_count` |
| `TagGroup` | `parentTag` | `parent_tag` |
| `TagGroup` | `onePerTopic` | `one_per_topic` |
| `TagGroup1` | `parentTag` | `parent_tag` |
| `TagGroup1` | `onePerTopic` | `one_per_topic` |
| `TagGroup2` | `tagNames` | `tag_names` |
| `TagGroup2` | `parentTagName` | `parent_tag_name` |
| `TagGroup2` | `onePerTopic` | `one_per_topic` |
| `Thumbnail` | `uploadId` | `upload_id` |
| `Tl3Requirements` | `timePeriod` | `time_period` |
| `Tl3Requirements` | `requirementsMet` | `requirements_met` |
| `Tl3Requirements` | `requirementsLost` | `requirements_lost` |
| `Tl3Requirements` | `trustLevelLocked` | `trust_level_locked` |
| `Tl3Requirements` | `onGracePeriod` | `on_grace_period` |
| `Tl3Requirements` | `daysVisited` | `days_visited` |
| `Tl3Requirements` | `minDaysVisited` | `min_days_visited` |
| `Tl3Requirements` | `numTopicsRepliedTo` | `num_topics_replied_to` |
| `Tl3Requirements` | `minTopicsRepliedTo` | `min_topics_replied_to` |
| `Tl3Requirements` | `topicsViewed` | `topics_viewed` |
| `Tl3Requirements` | `minTopicsViewed` | `min_topics_viewed` |
| `Tl3Requirements` | `postsRead` | `posts_read` |
| `Tl3Requirements` | `minPostsRead` | `min_posts_read` |
| `Tl3Requirements` | `topicsViewedAllTime` | `topics_viewed_all_time` |
| `Tl3Requirements` | `minTopicsViewedAllTime` | `min_topics_viewed_all_time` |
| `Tl3Requirements` | `postsReadAllTime` | `posts_read_all_time` |
| `Tl3Requirements` | `minPostsReadAllTime` | `min_posts_read_all_time` |
| `Tl3Requirements` | `numFlaggedPosts` | `num_flagged_posts` |
| `Tl3Requirements` | `maxFlaggedPosts` | `max_flagged_posts` |
| `Tl3Requirements` | `numFlaggedByUsers` | `num_flagged_by_users` |
| `Tl3Requirements` | `maxFlaggedByUsers` | `max_flagged_by_users` |
| `Tl3Requirements` | `numLikesGiven` | `num_likes_given` |
| `Tl3Requirements` | `minLikesGiven` | `min_likes_given` |
| `Tl3Requirements` | `numLikesReceived` | `num_likes_received` |
| `Tl3Requirements` | `minLikesReceived` | `min_likes_received` |
| `Tl3Requirements` | `numLikesReceivedDays` | `num_likes_received_days` |
| `Tl3Requirements` | `minLikesReceivedDays` | `min_likes_received_days` |
| `Tl3Requirements` | `numLikesReceivedUsers` | `num_likes_received_users` |
| `Tl3Requirements` | `minLikesReceivedUsers` | `min_likes_received_users` |
| `Tl3Requirements` | `penaltyCounts` | `penalty_counts` |
| `TopJsonResponse` | `primaryGroups` | `primary_groups` |
| `TopJsonResponse` | `topicList` | `topic_list` |
| `Topic` | `tagsDescriptions` | `tags_descriptions` |
| `Topic1` | `fancyTitle` | `fancy_title` |
| `Topic1` | `postsCount` | `posts_count` |
| `Topic1` | `replyCount` | `reply_count` |
| `Topic1` | `highestPostNumber` | `highest_post_number` |
| `Topic1` | `imageUrl` | `image_url` |
| `Topic1` | `createdAt` | `created_at` |
| `Topic1` | `lastPostedAt` | `last_posted_at` |
| `Topic1` | `bumpedAt` | `bumped_at` |
| `Topic1` | `likeCount` | `like_count` |
| `Topic1` | `hasSummary` | `has_summary` |
| `Topic1` | `lastPosterUsername` | `last_poster_username` |
| `Topic1` | `categoryId` | `category_id` |
| `Topic1` | `pinnedGlobally` | `pinned_globally` |
| `Topic1` | `featuredLink` | `featured_link` |
| `Topic2` | `fancyTitle` | `fancy_title` |
| `Topic2` | `postsCount` | `posts_count` |
| `Topic2` | `replyCount` | `reply_count` |
| `Topic2` | `highestPostNumber` | `highest_post_number` |
| `Topic2` | `imageUrl` | `image_url` |
| `Topic2` | `createdAt` | `created_at` |
| `Topic2` | `lastPostedAt` | `last_posted_at` |
| `Topic2` | `bumpedAt` | `bumped_at` |
| `Topic2` | `lastReadPostNumber` | `last_read_post_number` |
| `Topic2` | `unreadPosts` | `unread_posts` |
| `Topic2` | `notificationLevel` | `notification_level` |
| `Topic2` | `likeCount` | `like_count` |
| `Topic2` | `hasSummary` | `has_summary` |
| `Topic2` | `lastPosterUsername` | `last_poster_username` |
| `Topic2` | `categoryId` | `category_id` |
| `Topic2` | `pinnedGlobally` | `pinned_globally` |
| `Topic2` | `featuredLink` | `featured_link` |
| `Topic2` | `allowedUserCount` | `allowed_user_count` |
| `Topic3` | `fancyTitle` | `fancy_title` |
| `Topic3` | `postsCount` | `posts_count` |
| `Topic3` | `replyCount` | `reply_count` |
| `Topic3` | `highestPostNumber` | `highest_post_number` |
| `Topic3` | `imageUrl` | `image_url` |
| `Topic3` | `createdAt` | `created_at` |
| `Topic3` | `lastPostedAt` | `last_posted_at` |
| `Topic3` | `bumpedAt` | `bumped_at` |
| `Topic3` | `lastReadPostNumber` | `last_read_post_number` |
| `Topic3` | `unreadPosts` | `unread_posts` |
| `Topic3` | `notificationLevel` | `notification_level` |
| `Topic3` | `likeCount` | `like_count` |
| `Topic3` | `hasSummary` | `has_summary` |
| `Topic3` | `lastPosterUsername` | `last_poster_username` |
| `Topic3` | `categoryId` | `category_id` |
| `Topic3` | `pinnedGlobally` | `pinned_globally` |
| `Topic3` | `featuredLink` | `featured_link` |
| `Topic3` | `allowedUserCount` | `allowed_user_count` |
| `Topic4` | `fancyTitle` | `fancy_title` |
| `Topic4` | `postsCount` | `posts_count` |
| `Topic4` | `replyCount` | `reply_count` |
| `Topic4` | `highestPostNumber` | `highest_post_number` |
| `Topic4` | `imageUrl` | `image_url` |
| `Topic4` | `createdAt` | `created_at` |
| `Topic4` | `lastPostedAt` | `last_posted_at` |
| `Topic4` | `bumpedAt` | `bumped_at` |
| `Topic4` | `lastReadPostNumber` | `last_read_post_number` |
| `Topic4` | `unreadPosts` | `unread_posts` |
| `Topic4` | `notificationLevel` | `notification_level` |
| `Topic4` | `likeCount` | `like_count` |
| `Topic4` | `hasSummary` | `has_summary` |
| `Topic4` | `lastPosterUsername` | `last_poster_username` |
| `Topic4` | `categoryId` | `category_id` |
| `Topic4` | `pinnedGlobally` | `pinned_globally` |
| `Topic4` | `featuredLink` | `featured_link` |
| `Topic5` | `categoryId` | `category_id` |
| `Topic6` | `fancyTitle` | `fancy_title` |
| `Topic6` | `postsCount` | `posts_count` |
| `Topic6` | `replyCount` | `reply_count` |
| `Topic6` | `highestPostNumber` | `highest_post_number` |
| `Topic6` | `imageUrl` | `image_url` |
| `Topic6` | `createdAt` | `created_at` |
| `Topic6` | `lastPostedAt` | `last_posted_at` |
| `Topic6` | `bumpedAt` | `bumped_at` |
| `Topic6` | `lastReadPostNumber` | `last_read_post_number` |
| `Topic6` | `unreadPosts` | `unread_posts` |
| `Topic6` | `notificationLevel` | `notification_level` |
| `Topic6` | `likeCount` | `like_count` |
| `Topic6` | `hasSummary` | `has_summary` |
| `Topic6` | `lastPosterUsername` | `last_poster_username` |
| `Topic6` | `categoryId` | `category_id` |
| `Topic6` | `opLikeCount` | `op_like_count` |
| `Topic6` | `pinnedGlobally` | `pinned_globally` |
| `Topic6` | `featuredLink` | `featured_link` |
| `Topic7` | `fancyTitle` | `fancy_title` |
| `Topic7` | `postsCount` | `posts_count` |
| `Topic7` | `replyCount` | `reply_count` |
| `Topic7` | `highestPostNumber` | `highest_post_number` |
| `Topic7` | `imageUrl` | `image_url` |
| `Topic7` | `createdAt` | `created_at` |
| `Topic7` | `lastPostedAt` | `last_posted_at` |
| `Topic7` | `bumpedAt` | `bumped_at` |
| `Topic7` | `lastReadPostNumber` | `last_read_post_number` |
| `Topic7` | `unreadPosts` | `unread_posts` |
| `Topic7` | `notificationLevel` | `notification_level` |
| `Topic7` | `likeCount` | `like_count` |
| `Topic7` | `hasSummary` | `has_summary` |
| `Topic7` | `lastPosterUsername` | `last_poster_username` |
| `Topic7` | `categoryId` | `category_id` |
| `Topic7` | `opLikeCount` | `op_like_count` |
| `Topic7` | `pinnedGlobally` | `pinned_globally` |
| `Topic7` | `featuredLink` | `featured_link` |
| `TopicFlagType` | `nameKey` | `name_key` |
| `TopicFlagType` | `shortDescription` | `short_description` |
| `TopicFlagType` | `isFlag` | `is_flag` |
| `TopicFlagType` | `requireMessage` | `require_message` |
| `TopicFlagType` | `appliesTo` | `applies_to` |
| `TopicFlagType` | `isUsed` | `is_used` |
| `TopicFlagType` | `autoActionType` | `auto_action_type` |
| `TopicList` | `canCreateTopic` | `can_create_topic` |
| `TopicList` | `perPage` | `per_page` |
| `TopicList` | `topTags` | `top_tags` |
| `TopicList1` | `canCreateTopic` | `can_create_topic` |
| `TopicList1` | `draftKey` | `draft_key` |
| `TopicList1` | `draftSequence` | `draft_sequence` |
| `TopicList1` | `perPage` | `per_page` |
| `TopicList2` | `canCreateTopic` | `can_create_topic` |
| `TopicList2` | `draftKey` | `draft_key` |
| `TopicList2` | `draftSequence` | `draft_sequence` |
| `TopicList2` | `perPage` | `per_page` |
| `TopicList3` | `canCreateTopic` | `can_create_topic` |
| `TopicList3` | `draftKey` | `draft_key` |
| `TopicList3` | `draftSequence` | `draft_sequence` |
| `TopicList3` | `perPage` | `per_page` |
| `TopicList4` | `canCreateTopic` | `can_create_topic` |
| `TopicList4` | `draftKey` | `draft_key` |
| `TopicList4` | `draftSequence` | `draft_sequence` |
| `TopicList4` | `perPage` | `per_page` |
| `TopicList5` | `canCreateTopic` | `can_create_topic` |
| `TopicList5` | `draftKey` | `draft_key` |
| `TopicList5` | `draftSequence` | `draft_sequence` |
| `TopicList5` | `forPeriod` | `for_period` |
| `TopicList5` | `perPage` | `per_page` |
| `TopicsPrivateMessagesJsonResponse` | `primaryGroups` | `primary_groups` |
| `TopicsPrivateMessagesJsonResponse` | `topicList` | `topic_list` |
| `TopicsPrivateMessagesSentJsonResponse` | `primaryGroups` | `primary_groups` |
| `TopicsPrivateMessagesSentJsonResponse` | `topicList` | `topic_list` |
| `Triggers` | `userChange` | `user_change` |
| `Triggers` | `postRevision` | `post_revision` |
| `Triggers` | `trustLevelChange` | `trust_level_change` |
| `Triggers` | `postAction` | `post_action` |
| `UByExternalJsonResponse` | `userBadges` | `user_badges` |
| `UEmailsJsonResponse` | `secondaryEmails` | `secondary_emails` |
| `UEmailsJsonResponse` | `unconfirmedEmails` | `unconfirmed_emails` |
| `UEmailsJsonResponse` | `associatedAccounts` | `associated_accounts` |
| `UJsonRequest` | `externalIds` | `external_ids` |
| `UJsonResponse` | `userBadges` | `user_badges` |
| `UPreferencesAvatarPickJsonRequest` | `uploadId` | `upload_id` |
| `UPreferencesUsernameJsonRequest` | `newUsername` | `new_username` |
| `UpcomingChangesStat` | `humanizedName` | `humanized_name` |
| `UpcomingChangesStat` | `specificGroups` | `specific_groups` |
| `UploadsAbortMultipartJsonRequest` | `externalUploadIdentifier` | `external_upload_identifier` |
| `UploadsBatchPresignMultipartPartsJsonRequest` | `partNumbers` | `part_numbers` |
| `UploadsBatchPresignMultipartPartsJsonRequest` | `uniqueIdentifier` | `unique_identifier` |
| `UploadsBatchPresignMultipartPartsJsonResponse` | `presignedUrls` | `presigned_urls` |
| `UploadsCompleteExternalUploadJsonRequest` | `uniqueIdentifier` | `unique_identifier` |
| `UploadsCompleteExternalUploadJsonRequest` | `forPrivateMessage` | `for_private_message` |
| `UploadsCompleteExternalUploadJsonRequest` | `forSiteSetting` | `for_site_setting` |
| `UploadsCompleteExternalUploadJsonResponse` | `originalFilename` | `original_filename` |
| `UploadsCompleteExternalUploadJsonResponse` | `thumbnailWidth` | `thumbnail_width` |
| `UploadsCompleteExternalUploadJsonResponse` | `thumbnailHeight` | `thumbnail_height` |
| `UploadsCompleteExternalUploadJsonResponse` | `shortUrl` | `short_url` |
| `UploadsCompleteExternalUploadJsonResponse` | `shortPath` | `short_path` |
| `UploadsCompleteExternalUploadJsonResponse` | `retainHours` | `retain_hours` |
| `UploadsCompleteExternalUploadJsonResponse` | `humanFilesize` | `human_filesize` |
| `UploadsCompleteExternalUploadJsonResponse` | `dominantColor` | `dominant_color` |
| `UploadsCompleteExternalUploadJsonResponse` | `optimizedVideo` | `optimized_video` |
| `UploadsCompleteMultipartJsonRequest` | `uniqueIdentifier` | `unique_identifier` |
| `UploadsCompleteMultipartJsonResponse` | `originalFilename` | `original_filename` |
| `UploadsCompleteMultipartJsonResponse` | `thumbnailWidth` | `thumbnail_width` |
| `UploadsCompleteMultipartJsonResponse` | `thumbnailHeight` | `thumbnail_height` |
| `UploadsCompleteMultipartJsonResponse` | `shortUrl` | `short_url` |
| `UploadsCompleteMultipartJsonResponse` | `shortPath` | `short_path` |
| `UploadsCompleteMultipartJsonResponse` | `retainHours` | `retain_hours` |
| `UploadsCompleteMultipartJsonResponse` | `humanFilesize` | `human_filesize` |
| `UploadsCompleteMultipartJsonResponse` | `dominantColor` | `dominant_color` |
| `UploadsCompleteMultipartJsonResponse` | `optimizedVideo` | `optimized_video` |
| `UploadsCreateMultipartJsonRequest` | `uploadType` | `upload_type` |
| `UploadsCreateMultipartJsonRequest` | `fileName` | `file_name` |
| `UploadsCreateMultipartJsonRequest` | `fileSize` | `file_size` |
| `UploadsCreateMultipartJsonResponse` | `externalUploadIdentifier` | `external_upload_identifier` |
| `UploadsCreateMultipartJsonResponse` | `uniqueIdentifier` | `unique_identifier` |
| `UploadsGeneratePresignedPutJsonRequest` | `fileName` | `file_name` |
| `UploadsGeneratePresignedPutJsonRequest` | `fileSize` | `file_size` |
| `UploadsGeneratePresignedPutJsonResponse` | `signedHeaders` | `signed_headers` |
| `UploadsGeneratePresignedPutJsonResponse` | `uniqueIdentifier` | `unique_identifier` |
| `UploadsJsonResponse` | `originalFilename` | `original_filename` |
| `UploadsJsonResponse` | `thumbnailWidth` | `thumbnail_width` |
| `UploadsJsonResponse` | `thumbnailHeight` | `thumbnail_height` |
| `UploadsJsonResponse` | `shortUrl` | `short_url` |
| `UploadsJsonResponse` | `shortPath` | `short_path` |
| `UploadsJsonResponse` | `retainHours` | `retain_hours` |
| `UploadsJsonResponse` | `humanFilesize` | `human_filesize` |
| `UploadsJsonResponse` | `dominantColor` | `dominant_color` |
| `UploadsJsonResponse` | `optimizedVideo` | `optimized_video` |
| `User` | `avatarTemplate` | `avatar_template` |
| `UserActionsJsonResponse` | `userActions` | `user_actions` |
| `UserAvatarRefreshGravatarJsonResponse` | `gravatarUploadId` | `gravatar_upload_id` |
| `UserAvatarRefreshGravatarJsonResponse` | `gravatarAvatarTemplate` | `gravatar_avatar_template` |
| `UserBadgesJsonResponse` | `badgeTypes` | `badge_types` |
| `UserBadgesJsonResponse` | `grantedBies` | `granted_bies` |
| `UserBadgesJsonResponse` | `userBadges` | `user_badges` |
| `User1` | `avatarTemplate` | `avatar_template` |
| `User11` | `avatarTemplate` | `avatar_template` |
| `User2` | `avatarTemplate` | `avatar_template` |
| `User8` | `avatarTemplate` | `avatar_template` |
| `User8` | `lastPostedAt` | `last_posted_at` |
| `User8` | `lastSeenAt` | `last_seen_at` |
| `User8` | `createdAt` | `created_at` |
| `User8` | `canIgnoreUser` | `can_ignore_user` |
| `User8` | `canIgnoreUsers` | `can_ignore_users` |
| `User8` | `canMuteUser` | `can_mute_user` |
| `User8` | `canMuteUsers` | `can_mute_users` |
| `User8` | `canSendPrivateMessages` | `can_send_private_messages` |
| `User8` | `canSendPrivateMessageToUser` | `can_send_private_message_to_user` |
| `User8` | `trustLevel` | `trust_level` |
| `User8` | `badgeCount` | `badge_count` |
| `User8` | `secondFactorBackupEnabled` | `second_factor_backup_enabled` |
| `User8` | `userFields` | `user_fields` |
| `User8` | `customFields` | `custom_fields` |
| `User8` | `timeRead` | `time_read` |
| `User8` | `recentTimeRead` | `recent_time_read` |
| `User8` | `primaryGroupId` | `primary_group_id` |
| `User8` | `primaryGroupName` | `primary_group_name` |
| `User8` | `flairGroupId` | `flair_group_id` |
| `User8` | `flairName` | `flair_name` |
| `User8` | `flairUrl` | `flair_url` |
| `User8` | `flairBgColor` | `flair_bg_color` |
| `User8` | `flairColor` | `flair_color` |
| `User8` | `featuredTopic` | `featured_topic` |
| `User8` | `canEdit` | `can_edit` |
| `User8` | `canEditUsername` | `can_edit_username` |
| `User8` | `canEditEmail` | `can_edit_email` |
| `User8` | `canEditName` | `can_edit_name` |
| `User8` | `uploadedAvatarId` | `uploaded_avatar_id` |
| `User8` | `hasTitleBadges` | `has_title_badges` |
| `User8` | `pendingCount` | `pending_count` |
| `User8` | `pendingPostsCount` | `pending_posts_count` |
| `User8` | `profileViewCount` | `profile_view_count` |
| `User8` | `secondFactorEnabled` | `second_factor_enabled` |
| `User8` | `canUploadProfileHeader` | `can_upload_profile_header` |
| `User8` | `canUploadUserCardBackground` | `can_upload_user_card_background` |
| `User8` | `postCount` | `post_count` |
| `User8` | `topicCount` | `topic_count` |
| `User8` | `canBeDeleted` | `can_be_deleted` |
| `User8` | `canDeleteAllPosts` | `can_delete_all_posts` |
| `User8` | `mutedCategoryIds` | `muted_category_ids` |
| `User8` | `regularCategoryIds` | `regular_category_ids` |
| `User8` | `watchedTags` | `watched_tags` |
| `User8` | `watchingFirstPostTags` | `watching_first_post_tags` |
| `User8` | `trackedTags` | `tracked_tags` |
| `User8` | `mutedTags` | `muted_tags` |
| `User8` | `trackedCategoryIds` | `tracked_category_ids` |
| `User8` | `watchedCategoryIds` | `watched_category_ids` |
| `User8` | `watchedFirstPostCategoryIds` | `watched_first_post_category_ids` |
| `User8` | `systemAvatarUploadId` | `system_avatar_upload_id` |
| `User8` | `systemAvatarTemplate` | `system_avatar_template` |
| `User8` | `mutedUsernames` | `muted_usernames` |
| `User8` | `ignoredUsernames` | `ignored_usernames` |
| `User8` | `allowedPmUsernames` | `allowed_pm_usernames` |
| `User8` | `mailingListPostsPerDay` | `mailing_list_posts_per_day` |
| `User8` | `canChangeBio` | `can_change_bio` |
| `User8` | `canChangeLocation` | `can_change_location` |
| `User8` | `canChangeWebsite` | `can_change_website` |
| `User8` | `canChangeTrackingPreferences` | `can_change_tracking_preferences` |
| `User8` | `userApiKeys` | `user_api_keys` |
| `User8` | `userPasskeys` | `user_passkeys` |
| `User8` | `sidebarTags` | `sidebar_tags` |
| `User8` | `sidebarCategoryIds` | `sidebar_category_ids` |
| `User8` | `displaySidebarTags` | `display_sidebar_tags` |
| `User8` | `canPickThemeWithCustomHomepage` | `can_pick_theme_with_custom_homepage` |
| `User8` | `userAuthTokens` | `user_auth_tokens` |
| `User8` | `userNotificationSchedule` | `user_notification_schedule` |
| `User8` | `useLogoSmallAsAvatar` | `use_logo_small_as_avatar` |
| `User8` | `featuredUserBadgeIds` | `featured_user_badge_ids` |
| `User8` | `invitedBy` | `invited_by` |
| `User8` | `groupUsers` | `group_users` |
| `User8` | `userOption` | `user_option` |
| `UserAction` | `actionType` | `action_type` |
| `UserAction` | `createdAt` | `created_at` |
| `UserAction` | `avatarTemplate` | `avatar_template` |
| `UserAction` | `actingAvatarTemplate` | `acting_avatar_template` |
| `UserAction` | `topicId` | `topic_id` |
| `UserAction` | `targetUserId` | `target_user_id` |
| `UserAction` | `targetName` | `target_name` |
| `UserAction` | `targetUsername` | `target_username` |
| `UserAction` | `postNumber` | `post_number` |
| `UserAction` | `postId` | `post_id` |
| `UserAction` | `userId` | `user_id` |
| `UserAction` | `actingUsername` | `acting_username` |
| `UserAction` | `actingName` | `acting_name` |
| `UserAction` | `actingUserId` | `acting_user_id` |
| `UserAction` | `postType` | `post_type` |
| `UserAction` | `actionCode` | `action_code` |
| `UserAction` | `categoryId` | `category_id` |
| `UserAuthToken` | `clientIp` | `client_ip` |
| `UserAuthToken` | `createdAt` | `created_at` |
| `UserAuthToken` | `seenAt` | `seen_at` |
| `UserAuthToken` | `isActive` | `is_active` |
| `UserBadge` | `grantedAt` | `granted_at` |
| `UserBadge` | `groupingPosition` | `grouping_position` |
| `UserBadge` | `isFavorite` | `is_favorite` |
| `UserBadge` | `canFavorite` | `can_favorite` |
| `UserBadge` | `badgeId` | `badge_id` |
| `UserBadge` | `grantedById` | `granted_by_id` |
| `UserColorScheme` | `isDark` | `is_dark` |
| `UserColorScheme` | `themeId` | `theme_id` |
| `UserNotificationSchedule` | `day0StartTime` | `day_0_start_time` |
| `UserNotificationSchedule` | `day0EndTime` | `day_0_end_time` |
| `UserNotificationSchedule` | `day1StartTime` | `day_1_start_time` |
| `UserNotificationSchedule` | `day1EndTime` | `day_1_end_time` |
| `UserNotificationSchedule` | `day2StartTime` | `day_2_start_time` |
| `UserNotificationSchedule` | `day2EndTime` | `day_2_end_time` |
| `UserNotificationSchedule` | `day3StartTime` | `day_3_start_time` |
| `UserNotificationSchedule` | `day3EndTime` | `day_3_end_time` |
| `UserNotificationSchedule` | `day4StartTime` | `day_4_start_time` |
| `UserNotificationSchedule` | `day4EndTime` | `day_4_end_time` |
| `UserNotificationSchedule` | `day5StartTime` | `day_5_start_time` |
| `UserNotificationSchedule` | `day5EndTime` | `day_5_end_time` |
| `UserNotificationSchedule` | `day6StartTime` | `day_6_start_time` |
| `UserNotificationSchedule` | `day6EndTime` | `day_6_end_time` |
| `UserOption` | `userId` | `user_id` |
| `UserOption` | `mailingListMode` | `mailing_list_mode` |
| `UserOption` | `mailingListModeFrequency` | `mailing_list_mode_frequency` |
| `UserOption` | `emailDigests` | `email_digests` |
| `UserOption` | `emailLevel` | `email_level` |
| `UserOption` | `emailMessagesLevel` | `email_messages_level` |
| `UserOption` | `externalLinksInNewTab` | `external_links_in_new_tab` |
| `UserOption` | `bookmarkAutoDeletePreference` | `bookmark_auto_delete_preference` |
| `UserOption` | `colorSchemeId` | `color_scheme_id` |
| `UserOption` | `darkSchemeId` | `dark_scheme_id` |
| `UserOption` | `dynamicFavicon` | `dynamic_favicon` |
| `UserOption` | `enableQuoting` | `enable_quoting` |
| `UserOption` | `enableSmartLists` | `enable_smart_lists` |
| `UserOption` | `enableMarkdownMonospaceFont` | `enable_markdown_monospace_font` |
| `UserOption` | `enableDefer` | `enable_defer` |
| `UserOption` | `digestAfterMinutes` | `digest_after_minutes` |
| `UserOption` | `automaticallyUnpinTopics` | `automatically_unpin_topics` |
| `UserOption` | `autoTrackTopicsAfterMsecs` | `auto_track_topics_after_msecs` |
| `UserOption` | `notificationLevelWhenReplying` | `notification_level_when_replying` |
| `UserOption` | `newTopicDurationMinutes` | `new_topic_duration_minutes` |
| `UserOption` | `emailPreviousReplies` | `email_previous_replies` |
| `UserOption` | `emailInReplyTo` | `email_in_reply_to` |
| `UserOption` | `likeNotificationFrequency` | `like_notification_frequency` |
| `UserOption` | `notifyOnLinkedPosts` | `notify_on_linked_posts` |
| `UserOption` | `pushNotificationLevel` | `push_notification_level` |
| `UserOption` | `enableUpcomingChangeAvailableNotifications` | `enable_upcoming_change_available_notifications` |
| `UserOption` | `includeTl0InDigests` | `include_tl0_in_digests` |
| `UserOption` | `themeIds` | `theme_ids` |
| `UserOption` | `themeKeySeq` | `theme_key_seq` |
| `UserOption` | `allowPrivateMessages` | `allow_private_messages` |
| `UserOption` | `enableAllowedPmUsers` | `enable_allowed_pm_users` |
| `UserOption` | `homepageId` | `homepage_id` |
| `UserOption` | `hideProfileAndPresence` | `hide_profile_and_presence` |
| `UserOption` | `hideProfile` | `hide_profile` |
| `UserOption` | `hidePresence` | `hide_presence` |
| `UserOption` | `textSize` | `text_size` |
| `UserOption` | `textSizeSeq` | `text_size_seq` |
| `UserOption` | `titleCountMode` | `title_count_mode` |
| `UserOption` | `skipNewUserTips` | `skip_new_user_tips` |
| `UserOption` | `defaultCalendar` | `default_calendar` |
| `UserOption` | `oldestSearchLogDate` | `oldest_search_log_date` |
| `UserOption` | `sidebarLinkToFilteredList` | `sidebar_link_to_filtered_list` |
| `UserOption` | `sidebarShowCountOfNewItems` | `sidebar_show_count_of_new_items` |
| `UserOption` | `watchedPrecedenceOverMuted` | `watched_precedence_over_muted` |
| `UserOption` | `seenPopups` | `seen_popups` |
| `UserOption` | `topicsUnreadWhenClosed` | `topics_unread_when_closed` |
| `UserOption` | `compositionMode` | `composition_mode` |
| `UserOption` | `interfaceColorMode` | `interface_color_mode` |
| `UserOption` | `showOriginalContent` | `show_original_content` |
| `UserTheme` | `themeId` | `theme_id` |
| `UserTheme` | `colorSchemeId` | `color_scheme_id` |
| `UserTheme` | `darkColorSchemeId` | `dark_color_scheme_id` |
| `UserTheme` | `onlyThemeColorSchemes` | `only_theme_color_schemes` |
| `UserTips` | `firstNotification` | `first_notification` |
| `UserTips` | `topicTimeline` | `topic_timeline` |
| `UserTips` | `postMenu` | `post_menu` |
| `UserTips` | `topicNotificationLevels` | `topic_notification_levels` |
| `UserTips` | `suggestedTopics` | `suggested_topics` |
| `UsersJsonRequest` | `userFields` | `user_fields` |
| `UsersJsonRequest` | `externalIds` | `external_ids` |
| `UsersJsonResponse` | `userId` | `user_id` |

---

## Servers & auth

**Auth — none.** The spec declares no security schemes, so every operation is public and the client sends no credential.

**Environments.** `ClientOptions.serverEnvironment` selects one for the whole client (source: `src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type, not a TypeScript `enum` — and unlike the model enums it is **closed**, so only the values below are assignable.

| `ServerEnvironment` member | Value |
| --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` |

**Server groups.** 1 logical server; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `default`.

| Group | Options type |
| --- | --- |
| `default` | `DefaultServerOptions` |

**Base URLs and overrides.** One row per group-and-environment pair, so the table stays four columns wide however many environments a spec declares. Every cell is overridden at `serverOptions.<group>.<environment>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **per pair, key by key**.

| Group | Environment | Base URL template | Template variables (default) |
| --- | --- | --- | --- |
| `default` | `production` | `https://{defaultHost}` | `defaultHost` = `"discourse.example.com"` |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it, and templates are expanded per request rather than once at construction. An environment value the SDK does not know throws `SdkError` when a server is resolved — at the first call, not at construction. It is the one failure on this surface that throws **synchronously** out of the operation method, so a `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("discourse")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `Headers`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`. Nothing else — no credential this SDK sends reaches for a further global. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor comes from the emitted output rather than the sources: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`.

| Browser | Minimum | Set by |
| --- | --- | --- |
| Chrome / Edge | **85** | `String.prototype.replaceAll`, logical assignment (`??=`) |
| Firefox | **90** | private class fields and methods |
| Safari / iOS Safari | **15** | private class **methods** |

That table is the **module-load** floor: below it the SDK fails while the module is evaluating, not at the first call. Two things degrade quietly above it. `{ cause }` on the `Error` constructor needs Chrome 93, Firefox 91 or Safari 15, so below that `err.cause` is `undefined`. More consequentially, **cancellation needs `AbortController.abort(reason)` and `AbortSignal.reason`**, which arrived in Chrome 98, Firefox 97 and Safari 15.4 — between the module-load floor and those versions the engine still aborts the request but produces no typed error at all.

