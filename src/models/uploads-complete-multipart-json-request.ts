import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadsCompleteMultipartJsonRequest = {
  /** The unique identifier returned in the original /create-multipart request. */
  uniqueIdentifier: string;
  /**
   * All of the part numbers and their corresponding ETags that have been uploaded must be provided.
   */
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
