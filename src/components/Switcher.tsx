import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(() => window.matchMedia("(min-width: 721px)").matches);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 721px)");
    const sync = () => {
      if (media.matches) setOpen(true);
    };
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <aside className={`looks${open ? " is-open" : ""}`} aria-label="Landing looks">
      <header>
        <div>
          <p className="jp-kicker">見た目</p>
          <strong>Looks</strong>
        </div>
        <button
          type="button"
          className="looks-toggle"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Hide" : "Show"}
        </button>
      </header>

      {open ? (
        <div className="looks-body">
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
        </div>
      ) : null}
    </aside>
  );
}
