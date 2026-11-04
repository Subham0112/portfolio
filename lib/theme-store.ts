export type Theme = "dark" | "forest" | "white" | "purple" | "orange";

export interface ThemeOption {
  id: Theme;
  label: string;
  hint: string;
  swatches: [string, string, string];
}

export const themes: ThemeOption[] = [
  {
    id: "dark",
    label: "Dark",
    hint: "Midnight teal",
    swatches: ["#09090b", "#18181b", "#2dd4bf"],
  },
  {
    id: "forest",
    label: "Forest",
    hint: "Sage forest",
    swatches: ["#0c1511", "#111d17", "#93bf8f"],
  },
  {
    id: "white",
    label: "White",
    hint: "Soft sage",
    swatches: ["#e2e5df", "#f6f8f3", "#10b981"],
  },
  {
    id: "purple",
    label: "Light Purple",
    hint: "Royal lavender",
    swatches: ["#e0d2f2", "#f6f1fd", "#7c3aed"],
  },
  {
    id: "orange",
    label: "Soft Orange",
    hint: "Golden ember",
    swatches: ["#f4e4d2", "#fdf8f2", "#f97316"],
  },
];

export const defaultTheme: Theme = "dark";

type Listener = () => void;

const listeners = new Set<Listener>();

export function normalizeTheme(value: string | null | undefined): Theme {
  if (value === "light") return "white";
  return themes.some((theme) => theme.id === value)
    ? (value as Theme)
    : defaultTheme;
}

export function getTheme(): Theme {
  if (typeof document === "undefined") return defaultTheme;
  return normalizeTheme(document.documentElement.dataset.theme);
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark");
}

export function setTheme(theme: Theme) {
  applyTheme(theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* private mode */
  }
  listeners.forEach((listener) => listener());
}

export function cycleTheme() {
  const current = getTheme();
  const index = themes.findIndex((theme) => theme.id === current);
  const next = themes[(index + 1) % themes.length];
  setTheme(next.id);
}

export function toggleTheme() {
  setTheme(getTheme() === "dark" ? "white" : "dark");
}

export function subscribeTheme(listener: Listener) {
  listeners.add(listener);

  function onStorage(event: StorageEvent) {
    if (event.key !== "theme") return;
    applyTheme(normalizeTheme(event.newValue));
    listener();
  }

  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export const getServerTheme = (): Theme => defaultTheme;
