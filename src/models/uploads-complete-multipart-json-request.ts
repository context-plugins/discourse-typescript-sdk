import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadsCompleteMultipartJsonRequest = {
  uniqueIdentifier: string;
  parts: Record<string, unknown>[];
};

export const uploadsCompleteMultipartJsonRequestSchema: Schema<UploadsCompleteMultipartJsonRequest> =
  s.object<UploadsCompleteMultipartJsonRequest>({
    uniqueIdentifier: s.string(),
    parts: s.array(s.record(s.string(), s.unknown())),
    _keysMap: {
      uniqueIdentifier: "unique_identifier",
    },
  });
