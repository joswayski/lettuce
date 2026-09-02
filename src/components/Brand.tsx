import { GitHubIcon, LeafIcon } from "../icons";
import { REPO_URL } from "../look";

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`wordmark${compact ? " wordmark-compact" : ""}`} href="/" aria-label="lettuce.talk home">
      <img className="wordmark-mark" src="/assets/letty.webp" alt="" width={36} height={36} />
      <span className="wordmark-text">
        lettuce<span className="dot">.</span>talk
      </span>
    </a>
  );
}

export function GitHubButton({
  children = "Keep up with latest changes",
  short,
  variant = "primary",
  icon = true,
}: {
  children?: string;
  short?: string;
  variant?: "primary" | "ghost" | "soft";
  icon?: boolean;
}) {
  return (
    <a className={`btn btn-${variant}`} href={REPO_URL} target="_blank" rel="noreferrer">
      {icon ? <GitHubIcon className="icon" /> : <LeafIcon className="icon" />}
      <span className="btn-full">{children}</span>
      {short ? <span className="btn-short">{short}</span> : null}
    </a>
  );
}

export function Mascot({ className = "" }: { className?: string }) {
  return (
    <figure className={`mascot ${className}`.trim()}>
      <img src="/assets/letty.webp" alt="Letty, the lettuce.talk mascot" width={489} height={442} />
      <figcaption className="speech">let’s chat!</figcaption>
    </figure>
  );
}
