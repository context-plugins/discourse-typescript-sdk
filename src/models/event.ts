import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creatorSchema, type Creator } from "./creator.js";
import { occurrenceSchema, type Occurrence } from "./occurrence.js";
import { postSchema, type Post } from "./post.js";
import { reminderSchema, type Reminder } from "./reminder.js";
import { statusSchema, type Status } from "./status.js";

export type Event = {
  id: number;
  categoryId: number | null;
  name?: string | null;
  recurrence?: string | null;
  recurrenceUntil?: Date | null;
  startsAt: Date | null;
  endsAt: Date | null;
  rrule?: string;
  showLocalTime: boolean;
  timezone: string | null;
  duration?: string;
  allDay?: boolean;
  customFields?: Record<string, unknown> | null;
  post: Post;
  occurrences: Occurrence[];
  canActOnDiscoursePostEvent: boolean | null;
  canUpdateAttendance: boolean | null;
  creator?: Creator;
  isClosed: boolean;
  isExpired: boolean;
  isOngoing: boolean;
  isPrivate: boolean;
  isPublic: boolean;
  isStandalone: boolean;
  minimal?: boolean | null;
  rawInvitees?: string[] | null;
  reminders?: Reminder[];
  sampleInvitees?: Record<string, unknown>[];
  shouldDisplayInvitees: boolean;
  stats?: Record<string, unknown>;
  status: Status;
  url?: string;
  description?: string | null;
  descriptionHtml?: string | null;
  location?: string | null;
  watchingInvitee?: Record<string, unknown> | null;
  chatEnabled?: boolean | null;
  channel?: Record<string, unknown>;
  livestream?: boolean;
  livestreamOnebox?: string | null;
  isZoomLivestream?: boolean;
  maxAttendees?: number | null;
  atCapacity: boolean;
  imageUpload?: Record<string, unknown> | null;
};

export const eventSchema: Schema<Event> = s.object<Event>({
  id: s.number(),
  categoryId: s.nullable(s.number()),
  name: s.optionalNullable(s.string()),
  recurrence: s.optionalNullable(s.string()),
  recurrenceUntil: s.optionalNullable(s.dateTime()),
  startsAt: s.nullable(s.dateTime()),
  endsAt: s.nullable(s.dateTime()),
  rrule: s.optional(s.string()),
  showLocalTime: s.boolean(),
  timezone: s.nullable(s.string()),
  duration: s.optional(s.string()),
  allDay: s.optional(s.boolean()),
  customFields: s.optionalNullable(s.record(s.string(), s.unknown())),
  post: postSchema,
  occurrences: s.array(s.lazy(() => occurrenceSchema)),
  canActOnDiscoursePostEvent: s.nullable(s.boolean()),
  canUpdateAttendance: s.nullable(s.boolean()),
  creator: s.optional(s.lazy(() => creatorSchema)),
  isClosed: s.boolean(),
  isExpired: s.boolean(),
  isOngoing: s.boolean(),
  isPrivate: s.boolean(),
  isPublic: s.boolean(),
  isStandalone: s.boolean(),
  minimal: s.optionalNullable(s.boolean()),
  rawInvitees: s.optionalNullable(s.array(s.string())),
  reminders: s.optional(s.array(s.lazy(() => reminderSchema))),
  sampleInvitees: s.optional(s.array(s.record(s.string(), s.unknown()))),
  shouldDisplayInvitees: s.boolean(),
  stats: s.optional(s.record(s.string(), s.unknown())),
  status: statusSchema,
  url: s.optional(s.string()),
  description: s.optionalNullable(s.string()),
  descriptionHtml: s.optionalNullable(s.string()),
  location: s.optionalNullable(s.string()),
  watchingInvitee: s.optionalNullable(s.record(s.string(), s.unknown())),
  chatEnabled: s.optionalNullable(s.boolean()),
  channel: s.optional(s.record(s.string(), s.unknown())),
  livestream: s.optional(s.boolean()),
  livestreamOnebox: s.optionalNullable(s.string()),
  isZoomLivestream: s.optional(s.boolean()),
  maxAttendees: s.optionalNullable(s.number()),
  atCapacity: s.boolean(),
  imageUpload: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    categoryId: "category_id",
    recurrenceUntil: "recurrence_until",
    startsAt: "starts_at",
    endsAt: "ends_at",
    showLocalTime: "show_local_time",
    allDay: "all_day",
    customFields: "custom_fields",
    canActOnDiscoursePostEvent: "can_act_on_discourse_post_event",
    canUpdateAttendance: "can_update_attendance",
    isClosed: "is_closed",
    isExpired: "is_expired",
    isOngoing: "is_ongoing",
    isPrivate: "is_private",
    isPublic: "is_public",
    isStandalone: "is_standalone",
    rawInvitees: "raw_invitees",
    sampleInvitees: "sample_invitees",
    shouldDisplayInvitees: "should_display_invitees",
    descriptionHtml: "description_html",
    watchingInvitee: "watching_invitee",
    chatEnabled: "chat_enabled",
    livestreamOnebox: "livestream_onebox",
    isZoomLivestream: "is_zoom_livestream",
    maxAttendees: "max_attendees",
    atCapacity: "at_capacity",
    imageUpload: "image_upload",
  },
});
