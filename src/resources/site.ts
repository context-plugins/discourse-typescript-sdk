import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import {
  siteBasicInfoJsonResponseSchema,
  type SiteBasicInfoJsonResponse,
} from "../models/site-basic-info-json-response.js";
import { siteJsonResponseSchema, type SiteJsonResponse } from "../models/site-json-response.js";
import type { Servers } from "../servers.js";

export class Site {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get site info
   *
   * @remarks
   * Can be used to fetch all categories and subcategories
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSite(options?: RequestOptions): ApiPromise<SiteJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/site.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: siteJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get site basic info
   *
   * @remarks
   * Can be used to fetch basic info about a site
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSiteBasicInfo(options?: RequestOptions): ApiPromise<SiteBasicInfoJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/site/basic-info.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: siteBasicInfoJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
