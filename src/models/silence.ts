import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { silencedBySchema, type SilencedBy } from "./silenced-by.js";

export type Silence = {
  silenced: boolean;
  silenceReason: string;
  fullSilenceReason: string;
  silencedTill: string;
  silencedAt: string;
  silencedBy: SilencedBy;
};

export const silenceSchema: Schema<Silence> = s.object<Silence>({
  silenced: s.boolean(),
  silenceReason: s.string(),
  fullSilenceReason: s.string(),
  silencedTill: s.string(),
  silencedAt: s.string(),
  silencedBy: silencedBySchema,
  _keysMap: {
    silenceReason: "silence_reason",
    fullSilenceReason: "full_silence_reason",
    silencedTill: "silenced_till",
    silencedAt: "silenced_at",
    silencedBy: "silenced_by",
  },
});
