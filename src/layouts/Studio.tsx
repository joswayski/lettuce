import { AppPreview } from "../components/AppPreview";
import { GitHubButton, Wordmark } from "../components/Brand";

export function Studio() {
  return (
    <div className="page page-studio">
      <header className="studio-bar">
        <Wordmark compact />
        <p className="studio-tag">
          <span className="jp-inline">部屋</span>
          Step inside the product. This is lettuce.talk as a living room, not a brochure.
        </p>
        <GitHubButton short="GitHub">Keep up with latest changes</GitHubButton>
      </header>
      <AppPreview stage />
    </div>
  );
}
