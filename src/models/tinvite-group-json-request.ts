import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TInviteGroupJsonRequest = {
  /** The name of the group to invite */
  group?: string;
  /** Whether to notify the group, it defaults to true */
  shouldNotify?: boolean;
};

export const tInviteGroupJsonRequestSchema: Schema<TInviteGroupJsonRequest> =
  s.object<TInviteGroupJsonRequest>({
    group: s.optional(s.string()),
    shouldNotify: s.optional(s.boolean()),
    _keysMap: {
      shouldNotify: "should_notify",
    },
  });
