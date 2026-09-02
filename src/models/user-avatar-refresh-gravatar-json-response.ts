import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserAvatarRefreshGravatarJsonResponse = {
  gravatarUploadId: number | null;
  gravatarAvatarTemplate: string | null;
};

export const userAvatarRefreshGravatarJsonResponseSchema: Schema<UserAvatarRefreshGravatarJsonResponse> =
  s.object<UserAvatarRefreshGravatarJsonResponse>({
    gravatarUploadId: s.nullable(s.number()),
    gravatarAvatarTemplate: s.nullable(s.string()),
    _keysMap: {
      gravatarUploadId: "gravatar_upload_id",
      gravatarAvatarTemplate: "gravatar_avatar_template",
    },
  });
