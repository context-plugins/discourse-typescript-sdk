import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { searchJsonResponseSchema, type SearchJsonResponse } from "../models/search-json-response.js";
import type { Servers } from "../servers.js";

export class Search {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Search for a term
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  search(request: Search.SearchRequest, options?: RequestOptions): ApiPromise<SearchJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/search.json"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Search {
  export type SearchRequest = {
    /**
     * The query string needs to be url encoded and is made up of the following options:
     * - Search term. This is just a string. Usually it would be the first item in the query.
     * - `@<username>`: Use the `@` followed by the username to specify posts by this user.
     * - `#<category>`: Use the `#` followed by the category slug to search within this category.
     * - `tags:`: `api,solved` or for posts that have all the specified tags `api+solved`.
     * - `before:`: `yyyy-mm-dd`
     * - `after:`: `yyyy-mm-dd`
     * - `order:`: `latest`, `likes`, `views`, `latest_topic`
     * - `assigned:`: username (without `@`)
     * - `in:`: `title`, `likes`, `personal`, `messages`, `seen`, `unseen`, `posted`, `created`,
     *   `watching`, `tracking`, `bookmarks`, `assigned`, `unassigned`, `first`, `pinned`, `wiki`
     * - `with:`: `images`
     * - `status:`: `open`, `closed`, `public`, `archived`, `noreplies`, `single_user`, `solved`,
     *   `unsolved`
     * - `group:`: group_name or group_id
     * - `group_messages:`: group_name or group_id
     * - `min_posts:`: 1
     * - `max_posts:`: 10
     * - `min_views:`: 1
     * - `max_views:`: 10
     *
     * If you are using cURL you can use the `-G` and the `--data-urlencode` flags to encode the
     * query:
     *
     * ```
     * curl -i -sS -X GET -G "http://localhost:3000/search.json" \
     * --data-urlencode 'q=wordpress @scossar #fun after:2020-01-01'
     * ```
     */
    q?: string;
    page?: number;
  };
}
