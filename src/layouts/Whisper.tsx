import { GitHubButton, Mascot, Wordmark } from "../components/Brand";

export function Whisper() {
  return (
    <div className="page page-whisper">
      <header className="whisper-nav">
        <Wordmark />
        <GitHubButton variant="ghost">GitHub</GitHubButton>
      </header>

      <section className="whisper-hero">
        <div className="hero-copy">
          <p className="jp-kicker" lang="ja">
            コミュニティのためのチャット
          </p>
          <h1>
            talk about
            <br />
            anything.
          </h1>
          <p className="lede">
            lettuce.talk is a chat app for your people. Channels, voice, and a space you can shape however you want.
          </p>
          <GitHubButton />
          <p className="whisper-meta">Lightweight · Secure · Ad-free</p>
        </div>
        <Mascot />
      </section>
    </div>
  );
}
