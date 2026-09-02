import { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";
import { RawClient } from "./core/raw-client.js";
import { Admin } from "./resources/admin.js";
import { Backups } from "./resources/backups.js";
import { Badges } from "./resources/badges.js";
import { Categories } from "./resources/categories.js";
import { DiscourseCalendarEvents } from "./resources/discourse-calendar-events.js";
import { Groups } from "./resources/groups.js";
import { Invites } from "./resources/invites.js";
import { Notifications } from "./resources/notifications.js";
import { Posts } from "./resources/posts.js";
import { PrivateMessages } from "./resources/private-messages.js";
import { Search } from "./resources/search.js";
import { Site } from "./resources/site.js";
import { Tags } from "./resources/tags.js";
import { Topics } from "./resources/topics.js";
import { Uploads } from "./resources/uploads.js";
import { Users } from "./resources/users.js";
import { buildServers, type Servers } from "./servers.js";

export class DiscourseClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  #discourseCalendarEvents?: DiscourseCalendarEvents;
  #backups?: Backups;
  #badges?: Badges;
  #categories?: Categories;
  #groups?: Groups;
  #invites?: Invites;
  #notifications?: Notifications;
  #posts?: Posts;
  #topics?: Topics;
  #privateMessages?: PrivateMessages;
  #search?: Search;
  #site?: Site;
  #tags?: Tags;
  #uploads?: Uploads;
  #users?: Users;
  #admin?: Admin;

  constructor(clientOptions: Partial<ClientOptions> = {}) {
    const options = { ...DEFAULT_CLIENT_OPTIONS, ...clientOptions };

    this.#rawClient = new RawClient({
      timeout: options.timeout,
      defaultHeaders: [],
      defaultQuery: [],
      defaultPathParams: [],
      fetch: options.fetch,
    });

    this.#servers = buildServers(options.serverEnvironment, options.serverOptions);
  }

  get discourseCalendarEvents(): DiscourseCalendarEvents {
    return (this.#discourseCalendarEvents ??= new DiscourseCalendarEvents(this.#rawClient, this.#servers));
  }

  get backups(): Backups {
    return (this.#backups ??= new Backups(this.#rawClient, this.#servers));
  }

  get badges(): Badges {
    return (this.#badges ??= new Badges(this.#rawClient, this.#servers));
  }

  get categories(): Categories {
    return (this.#categories ??= new Categories(this.#rawClient, this.#servers));
  }

  get groups(): Groups {
    return (this.#groups ??= new Groups(this.#rawClient, this.#servers));
  }

  get invites(): Invites {
    return (this.#invites ??= new Invites(this.#rawClient, this.#servers));
  }

  get notifications(): Notifications {
    return (this.#notifications ??= new Notifications(this.#rawClient, this.#servers));
  }

  get posts(): Posts {
    return (this.#posts ??= new Posts(this.#rawClient, this.#servers));
  }

  get topics(): Topics {
    return (this.#topics ??= new Topics(this.#rawClient, this.#servers));
  }

  get privateMessages(): PrivateMessages {
    return (this.#privateMessages ??= new PrivateMessages(this.#rawClient, this.#servers));
  }

  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers));
  }

  get site(): Site {
    return (this.#site ??= new Site(this.#rawClient, this.#servers));
  }

  get tags(): Tags {
    return (this.#tags ??= new Tags(this.#rawClient, this.#servers));
  }

  get uploads(): Uploads {
    return (this.#uploads ??= new Uploads(this.#rawClient, this.#servers));
  }

  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers));
  }

  get admin(): Admin {
    return (this.#admin ??= new Admin(this.#rawClient, this.#servers));
  }
}
