import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  discoursePostEventEventsJsonResponseSchema,
  type DiscoursePostEventEventsJsonResponse,
} from "../models/discourse-post-event-events-json-response.js";
import { includeDetailsSchema, type IncludeDetails } from "../models/include-details.js";
import { includeSubcategoriesSchema, type IncludeSubcategories } from "../models/include-subcategories.js";
import { orderSchema, type Order } from "../models/order.js";
import type { Servers } from "../servers.js";

export class DiscourseCalendarEvents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  exportEventsIcs(
    request: DiscourseCalendarEvents.ExportEventsIcsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/discourse-post-event/events.ics"),
        auth: noneAuth,
        query: [
          { name: "category_id", value: request.categoryId, schema: s.optional(s.number()) },
          {
            name: "include_subcategories",
            value: request.includeSubcategories,
            schema: s.optional(s.lazy(() => includeSubcategoriesSchema)),
          },
          { name: "attending_user", value: request.attendingUser, schema: s.optional(s.string()) },
          { name: "before", value: request.before, schema: s.optional(s.dateTime()) },
          { name: "after", value: request.after, schema: s.optional(s.dateTime()) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => orderSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listEvents(
    request: DiscourseCalendarEvents.ListEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<DiscoursePostEventEventsJsonResponse, ResponseError> {
    return this.#rawClient.execute<DiscoursePostEventEventsJsonResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/discourse-post-event/events.json"),
        auth: noneAuth,
        query: [
          {
            name: "include_details",
            value: request.includeDetails,
            schema: s.optional(s.lazy(() => includeDetailsSchema)),
          },
          { name: "category_id", value: request.categoryId, schema: s.optional(s.number()) },
          {
            name: "include_subcategories",
            value: request.includeSubcategories,
            schema: s.optional(s.lazy(() => includeSubcategoriesSchema)),
          },
          { name: "post_id", value: request.postId, schema: s.optional(s.number()) },
          { name: "attending_user", value: request.attendingUser, schema: s.optional(s.string()) },
          { name: "before", value: request.before, schema: s.optional(s.dateTime()) },
          { name: "after", value: request.after, schema: s.optional(s.dateTime()) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => orderSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: discoursePostEventEventsJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace DiscourseCalendarEvents {
  export type ExportEventsIcsRequest = {
    categoryId?: number;
    includeSubcategories?: IncludeSubcategories;
    attendingUser?: string;
    before?: Date;
    after?: Date;
    order?: Order;
    limit?: number;
  };

  export type ListEventsRequest = {
    includeDetails?: IncludeDetails;
    categoryId?: number;
    includeSubcategories?: IncludeSubcategories;
    postId?: number;
    attendingUser?: string;
    before?: Date;
    after?: Date;
    order?: Order;
    limit?: number;
  };
}
