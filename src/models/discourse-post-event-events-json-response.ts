import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type DiscoursePostEventEventsJsonResponse = {
  events: Event[];
};

export const discoursePostEventEventsJsonResponseSchema: Schema<DiscoursePostEventEventsJsonResponse> =
  s.object<DiscoursePostEventEventsJsonResponse>({
    events: s.array(s.lazy(() => eventSchema)),
  });
