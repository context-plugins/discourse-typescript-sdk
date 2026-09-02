import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvitesCreateMultipleJsonResponse = {
  numSuccessfullyCreatedInvitations?: number;
  numFailedInvitations?: number;
  failedInvitations?: Record<string, unknown>[];
  successfulInvitations?: Record<string, unknown>[];
};

export const invitesCreateMultipleJsonResponseSchema: Schema<InvitesCreateMultipleJsonResponse> =
  s.object<InvitesCreateMultipleJsonResponse>({
    numSuccessfullyCreatedInvitations: s.optional(s.number()),
    numFailedInvitations: s.optional(s.number()),
    failedInvitations: s.optional(s.array(s.record(s.string(), s.unknown()))),
    successfulInvitations: s.optional(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      numSuccessfullyCreatedInvitations: "num_successfully_created_invitations",
      numFailedInvitations: "num_failed_invitations",
      failedInvitations: "failed_invitations",
      successfulInvitations: "successful_invitations",
    },
  });
