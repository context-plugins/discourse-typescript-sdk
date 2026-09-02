import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { approvedBySchema, type ApprovedBy } from "./approved-by.js";
import { group10Schema, type Group10 } from "./group10.js";
import { penaltyCountsSchema, type PenaltyCounts } from "./penalty-counts.js";
import { tl3RequirementsSchema, type Tl3Requirements } from "./tl3-requirements.js";
import { upcomingChangesStatSchema, type UpcomingChangesStat } from "./upcoming-changes-stat.js";

export type AdminUsersJsonResponse = {
  id: number;
  username: string;
  name: string | null;
  avatarTemplate: string;
  active: boolean;
  admin: boolean;
  moderator: boolean;
  lastSeenAt: string | null;
  lastEmailedAt: string | null;
  createdAt: string;
  lastSeenAge: number | null;
  lastEmailedAge: number | null;
  createdAtAge: number | null;
  trustLevel: number;
  manualLockedTrustLevel: string | null;
  title: string | null;
  timeRead: number;
  staged: boolean;
  daysVisited: number;
  postsReadCount: number;
  topicsEntered: number;
  postCount: number;
  associatedAccounts?: Record<string, unknown>[];
  canSendActivationEmail: boolean;
  canActivate: boolean;
  canDeactivate: boolean;
  canChangeTrustLevel?: boolean;
  ipAddress: string;
  registrationIpAddress: string | null;
  canGrantAdmin: boolean;
  canRevokeAdmin: boolean;
  canGrantModeration: boolean;
  canRevokeModeration: boolean;
  canImpersonate: boolean;
  likeCount: number;
  likeGivenCount: number;
  topicCount: number;
  flagsGivenCount: number;
  flagsReceivedCount: number;
  privateTopicsCount: number;
  canDeleteAllPosts: boolean;
  canBeDeleted?: boolean;
  canBeAnonymized: boolean;
  canBeMerged: boolean;
  fullSuspendReason: string | null;
  latestExport?: Record<string, unknown> | null;
  fullSilenceReason?: string | null;
  silenceReason?: string | null;
  postEditsCount?: number | null;
  primaryGroupId: number | null;
  badgeCount: number;
  warningsReceivedCount: number;
  bounceScore: number | null;
  resetBounceScoreAfter: string | null;
  canViewActionLogs: boolean;
  canDisableSecondFactor: boolean;
  canDeleteSsoRecord: boolean;
  apiKeyCount: number;
  similarUsersCount?: number;
  singleSignOnRecord: string | null;
  approvedBy: ApprovedBy | null;
  suspendedBy: string | null;
  silencedBy: string | null;
  penaltyCounts?: PenaltyCounts;
  nextPenalty?: string;
  tl3Requirements?: Tl3Requirements;
  groups: Group10[];
  externalIds: Record<string, unknown>;
  includeIp: boolean;
  upcomingChangesStats?: UpcomingChangesStat[];
};

export const adminUsersJsonResponseSchema: Schema<AdminUsersJsonResponse> = s.object<AdminUsersJsonResponse>({
  id: s.number(),
  username: s.string(),
  name: s.nullable(s.string()),
  avatarTemplate: s.string(),
  active: s.boolean(),
  admin: s.boolean(),
  moderator: s.boolean(),
  lastSeenAt: s.nullable(s.string()),
  lastEmailedAt: s.nullable(s.string()),
  createdAt: s.string(),
  lastSeenAge: s.nullable(s.number()),
  lastEmailedAge: s.nullable(s.number()),
  createdAtAge: s.nullable(s.number()),
  trustLevel: s.number(),
  manualLockedTrustLevel: s.nullable(s.string()),
  title: s.nullable(s.string()),
  timeRead: s.number(),
  staged: s.boolean(),
  daysVisited: s.number(),
  postsReadCount: s.number(),
  topicsEntered: s.number(),
  postCount: s.number(),
  associatedAccounts: s.optional(s.array(s.record(s.string(), s.unknown()))),
  canSendActivationEmail: s.boolean(),
  canActivate: s.boolean(),
  canDeactivate: s.boolean(),
  canChangeTrustLevel: s.optional(s.boolean()),
  ipAddress: s.string(),
  registrationIpAddress: s.nullable(s.string()),
  canGrantAdmin: s.boolean(),
  canRevokeAdmin: s.boolean(),
  canGrantModeration: s.boolean(),
  canRevokeModeration: s.boolean(),
  canImpersonate: s.boolean(),
  likeCount: s.number(),
  likeGivenCount: s.number(),
  topicCount: s.number(),
  flagsGivenCount: s.number(),
  flagsReceivedCount: s.number(),
  privateTopicsCount: s.number(),
  canDeleteAllPosts: s.boolean(),
  canBeDeleted: s.optional(s.boolean()),
  canBeAnonymized: s.boolean(),
  canBeMerged: s.boolean(),
  fullSuspendReason: s.nullable(s.string()),
  latestExport: s.optionalNullable(s.record(s.string(), s.unknown())),
  fullSilenceReason: s.optionalNullable(s.string()),
  silenceReason: s.optionalNullable(s.string()),
  postEditsCount: s.optionalNullable(s.number()),
  primaryGroupId: s.nullable(s.number()),
  badgeCount: s.number(),
  warningsReceivedCount: s.number(),
  bounceScore: s.nullable(s.number()),
  resetBounceScoreAfter: s.nullable(s.string()),
  canViewActionLogs: s.boolean(),
  canDisableSecondFactor: s.boolean(),
  canDeleteSsoRecord: s.boolean(),
  apiKeyCount: s.number(),
  similarUsersCount: s.optional(s.number()),
  singleSignOnRecord: s.nullable(s.string()),
  approvedBy: s.nullable(s.lazy(() => approvedBySchema)),
  suspendedBy: s.nullable(s.string()),
  silencedBy: s.nullable(s.string()),
  penaltyCounts: s.optional(s.lazy(() => penaltyCountsSchema)),
  nextPenalty: s.optional(s.string()),
  tl3Requirements: s.optional(s.lazy(() => tl3RequirementsSchema)),
  groups: s.array(s.lazy(() => group10Schema)),
  externalIds: s.record(s.string(), s.unknown()),
  includeIp: s.boolean(),
  upcomingChangesStats: s.optional(s.array(s.lazy(() => upcomingChangesStatSchema))),
  _keysMap: {
    avatarTemplate: "avatar_template",
    lastSeenAt: "last_seen_at",
    lastEmailedAt: "last_emailed_at",
    createdAt: "created_at",
    lastSeenAge: "last_seen_age",
    lastEmailedAge: "last_emailed_age",
    createdAtAge: "created_at_age",
    trustLevel: "trust_level",
    manualLockedTrustLevel: "manual_locked_trust_level",
    timeRead: "time_read",
    daysVisited: "days_visited",
    postsReadCount: "posts_read_count",
    topicsEntered: "topics_entered",
    postCount: "post_count",
    associatedAccounts: "associated_accounts",
    canSendActivationEmail: "can_send_activation_email",
    canActivate: "can_activate",
    canDeactivate: "can_deactivate",
    canChangeTrustLevel: "can_change_trust_level",
    ipAddress: "ip_address",
    registrationIpAddress: "registration_ip_address",
    canGrantAdmin: "can_grant_admin",
    canRevokeAdmin: "can_revoke_admin",
    canGrantModeration: "can_grant_moderation",
    canRevokeModeration: "can_revoke_moderation",
    canImpersonate: "can_impersonate",
    likeCount: "like_count",
    likeGivenCount: "like_given_count",
    topicCount: "topic_count",
    flagsGivenCount: "flags_given_count",
    flagsReceivedCount: "flags_received_count",
    privateTopicsCount: "private_topics_count",
    canDeleteAllPosts: "can_delete_all_posts",
    canBeDeleted: "can_be_deleted",
    canBeAnonymized: "can_be_anonymized",
    canBeMerged: "can_be_merged",
    fullSuspendReason: "full_suspend_reason",
    latestExport: "latest_export",
    fullSilenceReason: "full_silence_reason",
    silenceReason: "silence_reason",
    postEditsCount: "post_edits_count",
    primaryGroupId: "primary_group_id",
    badgeCount: "badge_count",
    warningsReceivedCount: "warnings_received_count",
    bounceScore: "bounce_score",
    resetBounceScoreAfter: "reset_bounce_score_after",
    canViewActionLogs: "can_view_action_logs",
    canDisableSecondFactor: "can_disable_second_factor",
    canDeleteSsoRecord: "can_delete_sso_record",
    apiKeyCount: "api_key_count",
    similarUsersCount: "similar_users_count",
    singleSignOnRecord: "single_sign_on_record",
    approvedBy: "approved_by",
    suspendedBy: "suspended_by",
    silencedBy: "silenced_by",
    penaltyCounts: "penalty_counts",
    nextPenalty: "next_penalty",
    tl3Requirements: "tl3_requirements",
    externalIds: "external_ids",
    includeIp: "include_ip",
    upcomingChangesStats: "upcoming_changes_stats",
  },
});
