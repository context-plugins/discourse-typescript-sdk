import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvitesJsonResponse = {
  id: number;
  inviteKey: string;
  link: string;
  description: string | null;
  email: string;
  domain: string | null;
  emailed: boolean;
  canDeleteInvite: boolean;
  customMessage: string | null;
  createdAt: string;
  updatedAt: string;
  expiresAt: string;
  expired: boolean;
  grantsAdmin: boolean;
  grantsModerator: boolean;
  topics: Record<string, unknown>[];
  groups: Record<string, unknown>[];
};

export const invitesJsonResponseSchema: Schema<InvitesJsonResponse> = s.object<InvitesJsonResponse>({
  id: s.number(),
  inviteKey: s.string(),
  link: s.string(),
  description: s.nullable(s.string()),
  email: s.string(),
  domain: s.nullable(s.string()),
  emailed: s.boolean(),
  canDeleteInvite: s.boolean(),
  customMessage: s.nullable(s.string()),
  createdAt: s.string(),
  updatedAt: s.string(),
  expiresAt: s.string(),
  expired: s.boolean(),
  grantsAdmin: s.boolean(),
  grantsModerator: s.boolean(),
  topics: s.array(s.record(s.string(), s.unknown())),
  groups: s.array(s.record(s.string(), s.unknown())),
  _keysMap: {
    inviteKey: "invite_key",
    canDeleteInvite: "can_delete_invite",
    customMessage: "custom_message",
    createdAt: "created_at",
    updatedAt: "updated_at",
    expiresAt: "expires_at",
    grantsAdmin: "grants_admin",
    grantsModerator: "grants_moderator",
  },
});
