import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Metadata = {
  /**
   * The SHA1 checksum of the upload binary blob. Optionally be provided and serves as an additional
   * security check when later processing the file in complete-external-upload endpoint.
   */
  sha1Checksum?: string;
};

export const metadataSchema: Schema<Metadata> = s.object<Metadata>({
  sha1Checksum: s.optional(s.string()),
  _keysMap: {
    sha1Checksum: "sha1-checksum",
  },
});
