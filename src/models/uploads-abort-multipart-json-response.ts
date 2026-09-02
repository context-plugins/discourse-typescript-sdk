import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadsAbortMultipartJsonResponse = {
  success: string;
};

export const uploadsAbortMultipartJsonResponseSchema: Schema<UploadsAbortMultipartJsonResponse> =
  s.object<UploadsAbortMultipartJsonResponse>({
    success: s.string(),
  });
