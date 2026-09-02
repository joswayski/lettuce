import { MoonIcon, SunIcon } from "../icons";
import {
  accentMeta,
  accents,
  layoutMeta,
  layouts,
  type Look,
} from "../look";

type Props = {
  look: Look;
  onChange: (next: Look) => void;
};

export function Switcher({ look, onChange }: Props) {
  return (
    <aside className="looks" aria-label="Landing looks">
      <header>
        <p className="jp-kicker">見た目</p>
        <strong>Looks</strong>
      </header>

      <div className="looks-row" role="radiogroup" aria-label="Layout">
        {layouts.map((layout) => (
          <button
            key={layout}
            type="button"
            role="radio"
            aria-checked={look.layout === layout}
            className={look.layout === layout ? "is-active" : ""}
            onClick={() => onChange({ ...look, layout })}
            title={layoutMeta[layout].blurb}
          >
            <span className="jp-mini">{layoutMeta[layout].jp}</span>
            {layoutMeta[layout].label}
          </button>
        ))}
      </div>

      <div className="looks-split">
        <div className="looks-row looks-mode" role="radiogroup" aria-label="Color mode">
          <button
            type="button"
            role="radio"
            aria-checked={look.mode === "light"}
            className={look.mode === "light" ? "is-active" : ""}
            onClick={() => onChange({ ...look, mode: "light" })}
          >
            <SunIcon className="icon" />
            Light
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={look.mode === "dark"}
            className={look.mode === "dark" ? "is-active" : ""}
            onClick={() => onChange({ ...look, mode: "dark" })}
          >
            <MoonIcon className="icon" />
            Dark
          </button>
        </div>

        <div className="swatches" role="radiogroup" aria-label="Accent color">
          {accents.map((accent) => (
            <button
              key={accent}
              type="button"
              role="radio"
              aria-checked={look.accent === accent}
              className={look.accent === accent ? "is-active" : ""}
              style={{ background: accentMeta[accent].swatch }}
              title={accentMeta[accent].label}
              onClick={() => onChange({ ...look, accent })}
            >
              <span className="sr-only">{accentMeta[accent].label}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
