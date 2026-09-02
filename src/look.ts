export const REPO_URL = "https://github.com/joswayski/lettuce";

export const layouts = ["garden", "studio", "bento", "whisper"] as const;
export const modes = ["light", "dark"] as const;
export const accents = ["lettuce", "ocean", "sunset", "lavender", "forest"] as const;

export type Layout = (typeof layouts)[number];
export type Mode = (typeof modes)[number];
export type Accent = (typeof accents)[number];

export type Look = {
  layout: Layout;
  mode: Mode;
  accent: Accent;
};

export const defaultLook: Look = {
  layout: "garden",
  mode: "dark",
  accent: "lettuce",
};

export const layoutMeta: Record<
  Layout,
  { label: string; jp: string; blurb: string }
> = {
  garden: {
    label: "Garden",
    jp: "庭",
    blurb: "Full landing with a Discord-style preview",
  },
  studio: {
    label: "Studio",
    jp: "部屋",
    blurb: "App-first — live inside the product",
  },
  bento: {
    label: "Bento",
    jp: "弁当",
    blurb: "Japanese editorial grid",
  },
  whisper: {
    label: "Whisper",
    jp: "静",
    blurb: "Quiet two-column hero",
  },
};

export const accentMeta: Record<Accent, { label: string; swatch: string }> = {
  lettuce: { label: "Lettuce", swatch: "#9ed163" },
  ocean: { label: "Ocean", swatch: "#5eead4" },
  sunset: { label: "Sunset", swatch: "#f4a261" },
  lavender: { label: "Lavender", swatch: "#c4b5fd" },
  forest: { label: "Forest", swatch: "#6bba7a" },
};

const STORAGE_KEY = "lettuce.look";

function isLayout(value: string | null): value is Layout {
  return layouts.includes(value as Layout);
}

function isMode(value: string | null): value is Mode {
  return modes.includes(value as Mode);
}

function isAccent(value: string | null): value is Accent {
  return accents.includes(value as Accent);
}

export function readLook(): Look {
  const params = new URLSearchParams(window.location.search);
  const layoutParam = params.get("layout");
  const modeParam = params.get("mode");
  const accentParam = params.get("accent");
  let stored: Partial<Look> = {};
  try {
    stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as Partial<Look>;
  } catch {
    stored = {};
  }

  const storedLayout = stored.layout ?? null;
  const storedMode = stored.mode ?? null;
  const storedAccent = stored.accent ?? null;

  return {
    layout: isLayout(layoutParam)
      ? layoutParam
      : isLayout(storedLayout)
        ? storedLayout
        : defaultLook.layout,
    mode: isMode(modeParam)
      ? modeParam
      : isMode(storedMode)
        ? storedMode
        : defaultLook.mode,
    accent: isAccent(accentParam)
      ? accentParam
      : isAccent(storedAccent)
        ? storedAccent
        : defaultLook.accent,
  };
}

export function persistLook(look: Look) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(look));
  const params = new URLSearchParams();
  params.set("layout", look.layout);
  params.set("mode", look.mode);
  params.set("accent", look.accent);
  const next = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState(null, "", next);
}

export function applyLook(look: Look) {
  const root = document.documentElement;
  root.dataset.layout = look.layout;
  root.dataset.mode = look.mode;
  root.dataset.accent = look.accent;
  root.style.colorScheme = look.mode;
}
