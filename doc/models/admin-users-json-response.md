
# Admin Users Json Response

## Structure

`AdminUsersJsonResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `username` | `string` | Required | - |
| `name` | `string \| null` | Required | - |
| `avatarTemplate` | `string` | Required | - |
| `active` | `boolean` | Required | - |
| `admin` | `boolean` | Required | - |
| `moderator` | `boolean` | Required | - |
| `lastSeenAt` | `string \| null` | Required | - |
| `lastEmailedAt` | `string \| null` | Required | - |
| `createdAt` | `string` | Required | - |
| `lastSeenAge` | `number \| null` | Required | - |
| `lastEmailedAge` | `number \| null` | Required | - |
| `createdAtAge` | `number \| null` | Required | - |
| `trustLevel` | `number` | Required | - |
| `manualLockedTrustLevel` | `string \| null` | Required | - |
| `title` | `string \| null` | Required | - |
| `timeRead` | `number` | Required | - |
| `staged` | `boolean` | Required | - |
| `daysVisited` | `number` | Required | - |
| `postsReadCount` | `number` | Required | - |
| `topicsEntered` | `number` | Required | - |
| `postCount` | `number` | Required | - |
| `associatedAccounts` | `unknown[] \| undefined` | Optional | - |
| `canSendActivationEmail` | `boolean` | Required | - |
| `canActivate` | `boolean` | Required | - |
| `canDeactivate` | `boolean` | Required | - |
| `canChangeTrustLevel` | `boolean \| undefined` | Optional | - |
| `ipAddress` | `string` | Required | - |
| `registrationIpAddress` | `string \| null` | Required | - |
| `canGrantAdmin` | `boolean` | Required | - |
| `canRevokeAdmin` | `boolean` | Required | - |
| `canGrantModeration` | `boolean` | Required | - |
| `canRevokeModeration` | `boolean` | Required | - |
| `canImpersonate` | `boolean` | Required | - |
| `likeCount` | `number` | Required | - |
| `likeGivenCount` | `number` | Required | - |
| `topicCount` | `number` | Required | - |
| `flagsGivenCount` | `number` | Required | - |
| `flagsReceivedCount` | `number` | Required | - |
| `privateTopicsCount` | `number` | Required | - |
| `canDeleteAllPosts` | `boolean` | Required | - |
| `canBeDeleted` | `boolean \| undefined` | Optional | - |
| `canBeAnonymized` | `boolean` | Required | - |
| `canBeMerged` | `boolean` | Required | - |
| `fullSuspendReason` | `string \| null` | Required | - |
| `latestExport` | `unknown \| null \| undefined` | Optional | - |
| `fullSilenceReason` | `string \| null \| undefined` | Optional | - |
| `silenceReason` | `string \| null \| undefined` | Optional | - |
| `postEditsCount` | `number \| null \| undefined` | Optional | - |
| `primaryGroupId` | `number \| null` | Required | - |
| `badgeCount` | `number` | Required | - |
| `warningsReceivedCount` | `number` | Required | - |
| `bounceScore` | `number \| null` | Required | - |
| `resetBounceScoreAfter` | `string \| null` | Required | - |
| `canViewActionLogs` | `boolean` | Required | - |
| `canDisableSecondFactor` | `boolean` | Required | - |
| `canDeleteSsoRecord` | `boolean` | Required | - |
| `apiKeyCount` | `number` | Required | - |
| `similarUsersCount` | `number \| undefined` | Optional | - |
| `singleSignOnRecord` | `string \| null` | Required | - |
| `approvedBy` | [`ApprovedBy \| null`](../../doc/models/approved-by.md) | Required | - |
| `suspendedBy` | `string \| null` | Required | - |
| `silencedBy` | `string \| null` | Required | - |
| `penaltyCounts` | [`PenaltyCounts \| undefined`](../../doc/models/penalty-counts.md) | Optional | - |
| `nextPenalty` | `string \| undefined` | Optional | - |
| `tl3Requirements` | [`Tl3Requirements \| undefined`](../../doc/models/tl-3-requirements.md) | Optional | - |
| `groups` | [`Group10[]`](../../doc/models/group-10.md) | Required | - |
| `externalIds` | `unknown` | Required | - |
| `includeIp` | `boolean` | Required | - |
| `upcomingChangesStats` | [`UpcomingChangesStat[] \| undefined`](../../doc/models/upcoming-changes-stat.md) | Optional | - |

## Example

```ts
import { AdminUsersJsonResponse } from 'discourse';

const adminUsersJsonResponse: AdminUsersJsonResponse = {
  id: 194,
  username: 'username4',
  name: 'name4',
  avatarTemplate: 'avatar_template6',
  active: false,
  admin: false,
  moderator: false,
  lastSeenAt: 'last_seen_at0',
  lastEmailedAt: 'last_emailed_at8',
  createdAt: 'created_at2',
  lastSeenAge: 114.24,
  lastEmailedAge: 27.26,
  createdAtAge: 180.52,
  trustLevel: 178,
  manualLockedTrustLevel: 'manual_locked_trust_level8',
  title: 'title0',
  timeRead: 142,
  staged: false,
  daysVisited: 214,
  postsReadCount: 50,
  topicsEntered: 208,
  postCount: 166,
  canSendActivationEmail: false,
  canActivate: false,
  canDeactivate: false,
  ipAddress: 'ip_address4',
  registrationIpAddress: 'registration_ip_address0',
  canGrantAdmin: false,
  canRevokeAdmin: false,
  canGrantModeration: false,
  canRevokeModeration: false,
  canImpersonate: false,
  likeCount: 192,
  likeGivenCount: 210,
  topicCount: 94,
  flagsGivenCount: 34,
  flagsReceivedCount: 188,
  privateTopicsCount: 2,
  canDeleteAllPosts: false,
  canBeAnonymized: false,
  canBeMerged: false,
  fullSuspendReason: 'full_suspend_reason6',
  primaryGroupId: 206,
  badgeCount: 20,
  warningsReceivedCount: 176,
  bounceScore: 4,
  resetBounceScoreAfter: 'reset_bounce_score_after8',
  canViewActionLogs: false,
  canDisableSecondFactor: false,
  canDeleteSsoRecord: false,
  apiKeyCount: 228,
  singleSignOnRecord: 'single_sign_on_record4',
  approvedBy: {
    id: 188,
    username: 'username6',
    name: 'name4',
    avatarTemplate: 'avatar_template6',
  },
  suspendedBy: 'suspended_by8',
  silencedBy: 'silenced_by8',
  groups: [
    {
      id: 152,
      automatic: false,
      name: 'name6',
      displayName: 'display_name6',
      userCount: 248,
      mentionableLevel: 236,
      messageableLevel: 92,
      visibilityLevel: 196,
      primaryGroup: false,
      title: 'title2',
      grantTrustLevel: 'grant_trust_level8',
      incomingEmail: 'incoming_email6',
      hasMessages: false,
      flairUrl: 'flair_url6',
      flairBgColor: 'flair_bg_color0',
      flairColor: 'flair_color0',
      bioRaw: 'bio_raw8',
      bioCooked: 'bio_cooked2',
      bioExcerpt: 'bio_excerpt0',
      publicAdmission: false,
      publicExit: false,
      allowMembershipRequests: false,
      fullName: 'full_name2',
      defaultNotificationLevel: 112,
      membershipRequestTemplate: 'membership_request_template2',
      membersVisibilityLevel: 0,
      canSeeMembers: false,
      canAdminGroup: false,
      publishReadState: false,
      flairGroupId: 202,
    }
  ],
  externalIds: { 'key1': 'val1', 'key2': 'val2' },
  includeIp: false,
  associatedAccounts: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  canChangeTrustLevel: false,
  canBeDeleted: false,
  latestExport: { 'key1': 'val1', 'key2': 'val2' },
  fullSilenceReason: 'full_silence_reason0',
};
```

