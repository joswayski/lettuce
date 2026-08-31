import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function LeafMark({ className = "" }: { className?: string }) {
  return <img className={className} src="/assets/letty.png" alt="Letty" />;
}

function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark" href="/" aria-label="lettuce.talk home">
          <span className="wordmark-mark" aria-hidden="true">
            <LeafMark />
          </span>
          <span>lettuce.talk<span className="wordmark-dot">.</span></span>
        </a>
        <a className="nav-link" href="mailto:hello@lettuce.talk?subject=lettuce.talk%20updates">
          Say hello
        </a>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A new kind of community space</p>
          <h1 id="hero-title">Talk about anything.<br /><em>Make it yours.</em></h1>
          <p className="lede">
            lettuce.talk is a quieter, more personal place for your people to hang out,
            organize, and keep the conversation going.
          </p>
          <div className="actions">
            <a className="button button-primary" href="mailto:hello@lettuce.talk?subject=lettuce.talk%20updates">
              Get updates <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-ghost" href="#more">
              See the idea <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="star star-one">✦</div>
          <div className="star star-two">✦</div>
          <div className="mascot-shadow" />
          <LeafMark className="mascot" />
          <p className="art-caption">meet Letty</p>
        </div>
      </section>

      <section className="principles" id="more" aria-label="What lettuce.talk is about">
        <article>
          <span className="principle-number">01</span>
          <h2>Personal by default.</h2>
          <p>Set the mood, the rules, and the little details that make a space feel like home.</p>
        </article>
        <article>
          <span className="principle-number">02</span>
          <h2>Community, not content.</h2>
          <p>Built around the people you want to hear from—not an endless feed competing for attention.</p>
        </article>
        <article>
          <span className="principle-number">03</span>
          <h2>Room to grow.</h2>
          <p>Start with a group chat. Make a whole world when you are ready.</p>
        </article>
      </section>

      <section className="preview" aria-label="A glimpse of a lettuce.talk community">
        <div className="preview-copy">
          <p className="eyebrow"><span /> Built for your corner of the internet</p>
          <h2>Everything has a place.<br />Even the silly stuff.</h2>
          <p>Keep the group chat alive without making it feel like work.</p>
        </div>
        <div className="chat-window" aria-hidden="true">
          <aside>
            <div className="mini-mark"><LeafMark /></div>
            <div className="rail-dot active" />
            <div className="rail-dot" />
            <div className="rail-dot" />
          </aside>
          <div className="channels">
            <strong>After Hours</strong>
            <small>TEXT CHANNELS</small>
            <span className="selected"># general</span>
            <span># ideas</span>
            <span># movie-night</span>
            <small>VOICE CHANNELS</small>
            <span>◖ lounge</span>
          </div>
          <div className="messages">
            <div className="chat-header"># general <span>24 members</span></div>
            <div className="message"><b>Mika</b><time>9:41 AM</time><p>Okay, this feels like our little corner of the internet now.</p></div>
            <div className="message"><b>Jordan</b><time>9:42 AM</time><p>Movie night is officially back on ✦</p></div>
            <div className="message letty-message"><LeafMark /><div><b>Letty <i>BOT</i></b><time>9:43 AM</time><p>I saved the vote for later.</p></div></div>
            <div className="message-input">Message #general <span>＋</span></div>
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="/">
          <span className="wordmark-mark" aria-hidden="true"><LeafMark /></span>
          <span>lettuce.talk<span className="wordmark-dot">.</span></span>
        </a>
        <p>Where conversations grow.</p>
        <a href="mailto:hello@lettuce.talk">hello@lettuce.talk</a>
      </footer>
    </main>
  );
}
