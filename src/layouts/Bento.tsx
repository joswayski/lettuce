import { GitHubButton, Mascot, Wordmark } from "../components/Brand";
import { BoltIcon, HashIcon, LeafIcon, MicIcon, ShieldIcon, UsersIcon, VolumeIcon } from "../icons";
import { REPO_URL } from "../look";

const tiles = [
  { kicker: "テキスト", title: "# general", text: "Everyday chatter. Soft bubbles, round reactions, no noise for noise’s sake.", icon: HashIcon },
  { kicker: "ボイス", title: "Sunday Hangout", text: "A cozy lounge with live presence, pronouns on tiles, and a leave-quietly button.", icon: VolumeIcon },
  { kicker: "メンバー", title: "Gardeners & seeds", text: "Roles that feel grown, not gamified. Online, idle, blooming.", icon: UsersIcon },
];

export function Bento() {
  return (
    <div className="page page-bento">
      <header className="topnav">
        <Wordmark />
        <p className="jp-mark" lang="ja">
          レタストーク
        </p>
        <GitHubButton short="GitHub">Keep up with latest changes</GitHubButton>
      </header>

      <div className="bento">
        <article className="tile tile-hero">
          <p className="jp-kicker">話そう · つながろう · 育てよう</p>
          <h1 lang="ja">
            話そう。
            <br />
            つながろう。
            <br />
            育てよう。
          </h1>
          <p className="lede">
            Chat, connect, and grow together. A clean community platform with Satoshi for Latin type and Zen Maru Gothic
            for Japanese — round, calm, a little leafy.
          </p>
          <div className="hero-actions">
            <GitHubButton />
            <a className="btn btn-soft" href={REPO_URL} target="_blank" rel="noreferrer">
              Open source on GitHub
            </a>
          </div>
        </article>

        <article className="tile tile-mascot">
          <Mascot />
        </article>

        {tiles.map((tile) => (
          <article key={tile.title} className="tile tile-feature">
            <span className="feature-icon">
              <tile.icon className="icon" />
            </span>
            <p className="jp-kicker">{tile.kicker}</p>
            <h2>{tile.title}</h2>
            <p>{tile.text}</p>
          </article>
        ))}

        <article className="tile tile-voice">
          <div className="voice-people">
            {["mossy", "kai", "sprout", "olive"].map((name, index) => (
              <div key={name} className="voice-tile">
                <img src="/assets/letty.webp" alt="" style={{ filter: `hue-rotate(${index * 32}deg)` }} />
                <span>
                  {name}
                  <small>in room</small>
                </span>
                <i className="wave mini">
                  <b />
                  <b />
                  <b />
                </i>
              </div>
            ))}
          </div>
          <div className="voice-bar">
            <button type="button">
              <MicIcon className="icon" /> Mic
            </button>
            <button type="button">Leave quietly</button>
          </div>
        </article>

        <article className="tile tile-cta">
          <LeafIcon className="icon" />
          <h2>Keep growing with the repo.</h2>
          <p>The product is early. The best way to follow along is GitHub — stars, issues, and the latest commits.</p>
          <GitHubButton />
        </article>

        <article className="tile tile-values">
          <ul>
            <li>
              <ShieldIcon className="icon" />
              Private by design
            </li>
            <li>
              <BoltIcon className="icon" />
              Lightweight · secure · ad-free
            </li>
            <li>
              <LeafIcon className="icon" />
              Soft UI, plant-coded
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}
