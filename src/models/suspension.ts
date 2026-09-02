import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { suspendedBySchema, type SuspendedBy } from "./suspended-by.js";

export type Suspension = {
  suspendReason: string;
  fullSuspendReason: string;
  suspendedTill: string;
  suspendedAt: string;
  suspendedBy: SuspendedBy;
};

export const suspensionSchema: Schema<Suspension> = s.object<Suspension>({
  suspendReason: s.string(),
  fullSuspendReason: s.string(),
  suspendedTill: s.string(),
  suspendedAt: s.string(),
  suspendedBy: suspendedBySchema,
  _keysMap: {
    suspendReason: "suspend_reason",
    fullSuspendReason: "full_suspend_reason",
    suspendedTill: "suspended_till",
    suspendedAt: "suspended_at",
    suspendedBy: "suspended_by",
  },
});
