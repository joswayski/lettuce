import {
  BellIcon,
  ChevronIcon,
  GiftIcon,
  GearIcon,
  HashIcon,
  HeadphoneIcon,
  HouseIcon,
  LockIcon,
  MicIcon,
  PinIcon,
  PlaneIcon,
  PlusIcon,
  SearchIcon,
  SmileIcon,
  VolumeIcon,
} from "../icons";

type Member = {
  name: string;
  role?: string;
  status: "online" | "idle" | "dnd" | "offline";
  activity?: string;
  self?: boolean;
};

const servers = [
  { id: "home", label: "lettuce.talk", kind: "home" as const, badge: 3 },
  { id: "garden", label: "The Garden", kind: "active" as const },
  { id: "mountains", label: "Trail Club", kind: "plain" as const },
  { id: "cafe", label: "Night Cafe", kind: "plain" as const },
  { id: "waves", label: "Tide Pool", kind: "plain" as const },
];

const textChannels = [
  { group: "WELCOME", items: ["start-here", "announcements"] },
  { group: "GROW", items: ["general", "plant-care", "share-your-space"] },
  { group: "CREATE", items: ["design-lab", "botany-illustration"] },
];

const voiceChannels = [
  { name: "Voice Lounge", live: true, count: 4 },
  { name: "Study Spot", live: false, count: 1 },
  { name: "Gaming Garden", live: false, count: 0 },
];

const members: { title: string; people: Member[] }[] = [
  {
    title: "GARDENERS",
    people: [
      { name: "mochi", status: "online", activity: "Growth Gardener", self: true },
      { name: "saxe", status: "idle", activity: "Listening to lo-fi" },
    ],
  },
  {
    title: "BLOOMING",
    people: [
      { name: "hana", status: "online", activity: "In the potting shed" },
      { name: "kai", status: "online" },
      { name: "sage", status: "dnd" },
      { name: "lumi", status: "online", activity: "Keep growing 🌿" },
    ],
  },
  {
    title: "SEEDS",
    people: [
      { name: "chiko", status: "online" },
      { name: "fern", status: "idle" },
      { name: "ivy", status: "offline" },
    ],
  },
];

const messages = [
  {
    user: "Letty",
    bot: true,
    time: "Today at 9:02 AM",
    text: "Welcome to the garden. Be kind, have fun, and keep it growing.",
    reactions: [
      { emoji: "🌿", count: 12, active: true },
      { emoji: "✨", count: 4, active: false },
    ],
  },
  {
    user: "hana",
    time: "Today at 9:14 AM",
    text: "Just repotted my monstera. She looks so proud.",
    reactions: [{ emoji: "🪴", count: 8, active: true }],
  },
  {
    user: "kai",
    time: "Today at 9:16 AM",
    text: "what soil mix are you using? I keep overwatering mine in #plant-care",
  },
  {
    user: "sage",
    time: "Today at 9:18 AM",
    text: "bark, perlite, and worm castings — chunky and airy. happy to drop a thread.",
    thread: { title: "Texture ideas", count: 6 },
  },
  {
    user: "GreenLeaf",
    time: "Today at 9:22 AM",
    text: "banner sketches for Lettuce Lounge are in Figma if anyone wants eyes on them.",
    embed: true,
    reactions: [
      { emoji: "👍", count: 5, active: false },
      { emoji: "🥬", count: 3, active: true },
    ],
  },
];

function Avatar({ name, size = 32 }: { name: string; size?: number }) {
  const hue = [...name].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 50;
  return (
    <span
      className="avatar"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(145deg, hsl(${110 + hue} 38% 58%), hsl(${90 + hue} 32% 38%))`,
      }}
      aria-hidden="true"
    >
      {name.slice(0, 1).toLowerCase()}
    </span>
  );
}

function Wave() {
  return (
    <span className="wave" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

export function AppPreview({ stage = false }: { stage?: boolean }) {
  return (
    <div className={`app-preview${stage ? " app-preview-stage" : ""}`} {...(!stage ? { inert: true } : {})}>
      <aside className="rail">
        {servers.map((server) => (
          <button
            key={server.id}
            className={`server${server.kind === "active" ? " is-active" : ""}${server.kind === "home" ? " is-home" : ""}`}
            type="button"
            title={server.label}
          >
            {server.kind === "home" ? (
              <img src="/assets/letty.webp" alt="" />
            ) : (
              <span className={`server-glyph server-${server.id}`} />
            )}
            {server.badge ? <span className="badge">{server.badge}</span> : null}
          </button>
        ))}
        <button className="server server-add" type="button" title="Add a community">
          <PlusIcon className="icon" />
        </button>
      </aside>

      <aside className="channels">
        <header className="channels-head">
          <div>
            <p className="jp-kicker">コミュニティ</p>
            <h2>
              The Garden
              <ChevronIcon className="icon tiny" />
            </h2>
          </div>
          <button type="button" className="icon-btn" title="Invite">
            <PlusIcon className="icon" />
          </button>
        </header>

        <button type="button" className="home-link">
          <HouseIcon className="icon" />
          Community home
        </button>

        {textChannels.map((group) => (
          <div key={group.group} className="channel-group">
            <p className="channel-label">
              <ChevronIcon className="icon tiny" />
              {group.group}
            </p>
            {group.items.map((item) => (
              <button
                key={item}
                type="button"
                className={`channel${item === "general" ? " is-active" : ""}`}
              >
                <HashIcon className="icon" />
                {item}
                {item === "general" ? <span className="badge">3</span> : null}
                {item === "announcements" ? <LockIcon className="icon tiny mute" /> : null}
              </button>
            ))}
          </div>
        ))}

        <div className="channel-group">
          <p className="channel-label">
            <ChevronIcon className="icon tiny" />
            VOICE CHANNELS
          </p>
          {voiceChannels.map((channel) => (
            <button key={channel.name} type="button" className={`channel${channel.live ? " is-live" : ""}`}>
              <VolumeIcon className="icon" />
              {channel.name}
              {channel.live ? <Wave /> : null}
            </button>
          ))}
        </div>

        <div className="user-bar">
          <Avatar name="mochi" size={34} />
          <div className="user-meta">
            <strong>mochi</strong>
            <span>Online</span>
          </div>
          <div className="user-actions">
            <button type="button" className="icon-btn" title="Mute">
              <MicIcon className="icon" />
            </button>
            <button type="button" className="icon-btn" title="Deafen">
              <HeadphoneIcon className="icon" />
            </button>
            <button type="button" className="icon-btn" title="Settings">
              <GearIcon className="icon" />
            </button>
          </div>
        </div>
      </aside>

      <section className="chat">
        <header className="chat-head">
          <div className="chat-title">
            <HashIcon className="icon" />
            <strong>general</strong>
            <span className="chat-desc">everyday chatter in the garden</span>
          </div>
          <div className="chat-tools">
            <PinIcon className="icon" />
            <BellIcon className="icon" />
            <label className="search">
              <SearchIcon className="icon" />
              <input readOnly placeholder="Search" />
            </label>
          </div>
        </header>

        <div className="transcript">
          <div className="welcome-block">
            <span className="welcome-hash">#</span>
            <h3>Welcome to #general</h3>
            <p>This is the start of the garden. Pull up a chair.</p>
          </div>

          {messages.map((message) => (
            <article key={message.user + message.time} className="message">
              <Avatar name={message.user} size={38} />
              <div>
                <header>
                  <strong>{message.user}</strong>
                  {message.bot ? <span className="bot-pill">BOT</span> : null}
                  <time>{message.time}</time>
                </header>
                <p>
                  {message.text.split(/(#plant-care)/).map((chunk) =>
                    chunk.startsWith("#") ? (
                      <span key={chunk} className="mention">
                        {chunk}
                      </span>
                    ) : (
                      chunk
                    ),
                  )}
                </p>
                {message.embed ? (
                  <div className="embed">
                    <p className="embed-kicker">Event starting soon</p>
                    <strong>Sunday Hangout · Game Night</strong>
                    <span>Voice Lounge · 8:00 PM</span>
                    <button type="button" className="embed-cta">
                      RSVP
                    </button>
                  </div>
                ) : null}
                {message.thread ? (
                  <div className="thread">
                    <span>
                      {message.thread.count} replies · {message.thread.title}
                    </span>
                    <button type="button">View thread</button>
                  </div>
                ) : null}
                {message.reactions ? (
                  <div className="reactions">
                    {message.reactions.map((reaction) => (
                      <span key={reaction.emoji} className={reaction.active ? "is-active" : ""}>
                        {reaction.emoji} {reaction.count}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <form className="composer" onSubmit={(event) => event.preventDefault()}>
          <button type="button" className="icon-btn" title="Upload">
            <PlusIcon className="icon" />
          </button>
          <input readOnly placeholder="Message #general" />
          <GiftIcon className="icon mute" />
          <SmileIcon className="icon mute" />
          <button type="button" className="send" title="Send">
            <PlaneIcon className="icon" />
          </button>
        </form>
      </section>

      <aside className="members">
        <header>
          <strong>Members</strong>
          <span>24</span>
        </header>
        {members.map((group) => (
          <div key={group.title} className="member-group">
            <p className="channel-label">
              {group.title} — {group.people.length}
            </p>
            {group.people.map((person) => (
              <div key={person.name} className="member">
                <span className="avatar-wrap">
                  <Avatar name={person.name} size={30} />
                  <i className={`status status-${person.status}`} />
                </span>
                <div>
                  <strong>{person.name}</strong>
                  {person.activity ? <span>{person.activity}</span> : null}
                </div>
              </div>
            ))}
          </div>
        ))}
      </aside>
    </div>
  );
}
