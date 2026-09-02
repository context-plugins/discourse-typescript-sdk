import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UEmailsJsonResponse = {
  email: string;
  secondaryEmails: Record<string, unknown>[];
  unconfirmedEmails: Record<string, unknown>[];
  associatedAccounts: Record<string, unknown>[];
};

export const uEmailsJsonResponseSchema: Schema<UEmailsJsonResponse> = s.object<UEmailsJsonResponse>({
  email: s.string(),
  secondaryEmails: s.array(s.record(s.string(), s.unknown())),
  unconfirmedEmails: s.array(s.record(s.string(), s.unknown())),
  associatedAccounts: s.array(s.record(s.string(), s.unknown())),
  _keysMap: {
    secondaryEmails: "secondary_emails",
    unconfirmedEmails: "unconfirmed_emails",
    associatedAccounts: "associated_accounts",
  },
});
