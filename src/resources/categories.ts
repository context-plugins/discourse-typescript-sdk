import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Creates a category
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCategory(
    request: Categories.CreateCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoriesJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/categories.json"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => categoriesJsonRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: categoriesJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Show category
   *
   * @returns response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCategory(
    request: Categories.GetCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<CShowJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/c/{id}/show.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cShowJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
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
   * Retrieves a list of categories
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCategories(
    request: Categories.ListCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoriesJsonResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/categories.json"),
        auth: noneAuth,
        pathParams: [],
        query: [
          {
            name: "include_subcategories",
            value: request.includeSubcategories,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: categoriesJsonResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List topics
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCategoryTopics(
    request: Categories.ListCategoryTopicsRequest,
    options?: RequestOptions,
  ): ApiPromise<CJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/c/{slug}/{id}.json"),
        auth: noneAuth,
        pathParams: [
          { name: "slug", value: request.slug, schema: s.string() },
          { name: "id", value: request.id, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Updates a category
   *
   * @returns success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCategory(
    request: Categories.UpdateCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoriesJsonResponse2, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/categories/{id}.json"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => categoriesJsonRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: categoriesJsonResponse2Schema },
        errorFactory: ApiError,
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
