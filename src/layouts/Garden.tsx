import { AppPreview } from "../components/AppPreview";
import { GitHubButton, Mascot, Wordmark } from "../components/Brand";
import { BoltIcon, LeafIcon, PaletteIcon, ShieldIcon, UsersIcon } from "../icons";
import { REPO_URL } from "../look";

const features = [
  {
    icon: LeafIcon,
    title: "Built for communities",
    text: "From a tiny plant club to a public garden. Channels, roles, and rooms that feel like yours.",
  },
  {
    icon: ShieldIcon,
    title: "Powerful permissions",
    text: "Granular roles, locked rooms, and quiet corners. Keep the vibe kind without the clutter.",
  },
  {
    icon: PaletteIcon,
    title: "Customize everything",
    text: "Soft themes, round corners, and a look you can grow into. Light, dark, and everything between.",
  },
  {
    icon: BoltIcon,
    title: "Fast & reliable",
    text: "Voice, text, and presence that stay out of the way so the conversation can breathe.",
  },
];

export function Garden() {
  return (
    <div className="page page-garden">
      <header className="topnav">
        <Wordmark />
        <nav className="topnav-links" aria-label="Page">
          <a href="#preview">Product</a>
          <a href="#features">Features</a>
          <a href={REPO_URL} target="_blank" rel="noreferrer">
            Changelog
          </a>
        </nav>
        <div className="topnav-actions">
          <GitHubButton variant="ghost">GitHub</GitHubButton>
          <GitHubButton short="GitHub">Keep up with latest changes</GitHubButton>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot-live" />
            A modern community chat platform
            <span className="jp-inline">コミュニティ</span>
          </p>
          <h1>
            Chat, connect, and <em>grow together.</em>
          </h1>
          <p className="lede">
            lettuce.talk is a playful Discord-style space for your people. Soft edges, quiet greens, and rooms you can
            shape however you want.
          </p>
          <div className="hero-actions">
            <GitHubButton />
            <GitHubButton variant="soft">View the repo</GitHubButton>
          </div>
          <ul className="pills">
            <li>
              <LeafIcon className="icon" /> Fully customizable
            </li>
            <li>
              <BoltIcon className="icon" /> Powerful & fast
            </li>
            <li>
              <UsersIcon className="icon" /> Private by design
            </li>
          </ul>
        </div>
        <Mascot />
      </section>

      <section id="preview" className="preview-wrap">
        <div className="preview-caption">
          <p className="jp-kicker">プレビュー</p>
          <h2>The garden, already in bloom.</h2>
          <p>A sample of the product UI — channels, voice, members, and a send button you’ll actually want to press.</p>
        </div>
        <AppPreview />
      </section>

      <section id="features" className="features">
        {features.map((feature) => (
          <article key={feature.title}>
            <span className="feature-icon">
              <feature.icon className="icon" />
            </span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <footer className="foot">
        <Wordmark compact />
        <p>A playful chat app for communities. Talk, connect, and grow together.</p>
        <GitHubButton variant="ghost">Keep up with latest changes</GitHubButton>
      </footer>
    </div>
  );
}
