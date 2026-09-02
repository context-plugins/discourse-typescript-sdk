import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  search(
    request: Search.SearchRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchJsonResponse, ResponseError> {
    return this.#rawClient.execute<SearchJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/search.json"),
        auth: noneAuth,
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Search {
  export type SearchRequest = {
    q?: string;
    page?: number;
  };
}
