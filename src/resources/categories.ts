import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  categoriesJsonRequestSchema,
  type CategoriesJsonRequest,
} from "../models/categories-json-request.js";
import {
  categoriesJsonRequest1Schema,
  type CategoriesJsonRequest1,
} from "../models/categories-json-request1.js";
import {
  categoriesJsonResponseSchema,
  type CategoriesJsonResponse,
} from "../models/categories-json-response.js";
import {
  categoriesJsonResponse1Schema,
  type CategoriesJsonResponse1,
} from "../models/categories-json-response1.js";
import {
  categoriesJsonResponse2Schema,
  type CategoriesJsonResponse2,
} from "../models/categories-json-response2.js";
import { cJsonResponseSchema, type CJsonResponse } from "../models/cjson-response.js";
import { cShowJsonResponseSchema, type CShowJsonResponse } from "../models/cshow-json-response.js";
import { siteJsonResponseSchema, type SiteJsonResponse } from "../models/site-json-response.js";
import type { Servers } from "../servers.js";

export class Categories {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  createCategory(
    request: Categories.CreateCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoriesJsonResponse, ResponseError> {
    return this.#rawClient.execute<CategoriesJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/categories.json"),
        auth: noneAuth,
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => categoriesJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: categoriesJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getCategory(
    request: Categories.GetCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<CShowJsonResponse, ResponseError> {
    return this.#rawClient.execute<CShowJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/c/{id}/show.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cShowJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
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

  listCategories(
    request: Categories.ListCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoriesJsonResponse1, ResponseError> {
    return this.#rawClient.execute<CategoriesJsonResponse1, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/categories.json"),
        auth: noneAuth,
        query: [
          {
            name: "include_subcategories",
            value: request.includeSubcategories,
            schema: s.optional(s.boolean()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoriesJsonResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCategoryTopics(
    request: Categories.ListCategoryTopicsRequest,
    options?: RequestOptions,
  ): ApiPromise<CJsonResponse, ResponseError> {
    return this.#rawClient.execute<CJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/c/{slug}/{id}.json"),
        auth: noneAuth,
        pathParams: [
          { name: "slug", value: request.slug, schema: s.string() },
          { name: "id", value: request.id, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateCategory(
    request: Categories.UpdateCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoriesJsonResponse2, ResponseError> {
    return this.#rawClient.execute<CategoriesJsonResponse2, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/categories/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.number() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => categoriesJsonRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: categoriesJsonResponse2Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Categories {
  export type CreateCategoryRequest = {
    body?: CategoriesJsonRequest;
  };

  export type GetCategoryRequest = {
    id: number;
  };

  export type ListCategoriesRequest = {
    includeSubcategories?: boolean;
  };

  export type ListCategoryTopicsRequest = {
    slug: string;
    id: number;
  };

  export type UpdateCategoryRequest = {
    id: number;
    body?: CategoriesJsonRequest1;
  };
}
