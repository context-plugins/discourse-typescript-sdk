import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  getSite(options?: RequestOptions): ApiPromise<SiteJsonResponse, ResponseError> {
    return this.#rawClient.execute<SiteJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/site.json"),
        auth: noneAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: siteJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getSiteBasicInfo(options?: RequestOptions): ApiPromise<SiteBasicInfoJsonResponse, ResponseError> {
    return this.#rawClient.execute<SiteBasicInfoJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/site/basic-info.json"),
        auth: noneAuth,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: siteBasicInfoJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}
