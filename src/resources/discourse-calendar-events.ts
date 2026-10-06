import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Export calendar events in iCalendar format
   *
   * @returns iCalendar file
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exportEventsIcs(
    request: DiscourseCalendarEvents.ExportEventsIcsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/discourse-post-event/events.ics"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "category_id", value: request.categoryId, schema: s.optional(s.int()) },
          {
            name: "include_subcategories",
            value: request.includeSubcategories,
            schema: s.optional(s.lazy(() => includeSubcategoriesSchema)),
          },
          { name: "attending_user", value: request.attendingUser, schema: s.optional(s.string()) },
          { name: "before", value: request.before, schema: s.optional(s.dateTime()) },
          { name: "after", value: request.after, schema: s.optional(s.dateTime()) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => orderSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List calendar events
   *
   * @returns success response (detailed)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DiscourseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEvents(
    request: DiscourseCalendarEvents.ListEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<DiscoursePostEventEventsJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/discourse-post-event/events.json"),
        auth: noneAuth,
        pathParams: [],
        query: [
          {
            name: "include_details",
            value: request.includeDetails,
            schema: s.optional(s.lazy(() => includeDetailsSchema)),
          },
          { name: "category_id", value: request.categoryId, schema: s.optional(s.int()) },
          {
            name: "include_subcategories",
            value: request.includeSubcategories,
            schema: s.optional(s.lazy(() => includeSubcategoriesSchema)),
          },
          { name: "post_id", value: request.postId, schema: s.optional(s.int()) },
          { name: "attending_user", value: request.attendingUser, schema: s.optional(s.string()) },
          { name: "before", value: request.before, schema: s.optional(s.dateTime()) },
          { name: "after", value: request.after, schema: s.optional(s.dateTime()) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => orderSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: discoursePostEventEventsJsonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace DiscourseCalendarEvents {
  export type ExportEventsIcsRequest = {
    /** Filter events by category ID */
    categoryId?: number;
    /** Include events from subcategories when filtering by category */
    includeSubcategories?: IncludeSubcategories;
    /** Filter to events where the specified user (username) has RSVP'd as going */
    attendingUser?: string;
    /** Return events starting before this date/time (ISO 8601 format) */
    before?: Date;
    /** Return events starting after this date/time (ISO 8601 format) */
    after?: Date;
    /** Sort order for events by start date (default: asc) */
    order?: Order;
    /** Maximum number of events to return (default: 200) */
    limit?: number;
  };

  export type ListEventsRequest = {
    /** Include detailed event information (creator, invitees, stats, etc.) */
    includeDetails?: IncludeDetails;
    /** Filter events by category ID */
    categoryId?: number;
    /** Include events from subcategories when filtering by category */
    includeSubcategories?: IncludeSubcategories;
    /** Filter to events associated with a specific post ID */
    postId?: number;
    /** Filter to events where the specified user (username) has RSVP'd as going */
    attendingUser?: string;
    /** Return events starting before this date/time (ISO 8601 format) */
    before?: Date;
    /** Return events starting after this date/time (ISO 8601 format) */
    after?: Date;
    /** Sort order for events by start date (default: asc) */
    order?: Order;
    /** Maximum number of events to return (default: 200) */
    limit?: number;
  };
}
