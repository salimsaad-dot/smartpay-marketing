"use client";

import { useSyncExternalStore } from "react";

// The visitor's light/dark choice, stored in localStorage and applied as
// data-theme on <html>. Before they choose, the page follows their device
// (prefers-color-scheme), and THEME_INIT_SCRIPT in layout.js applies a saved
// choice before first paint so there's no flash of the wrong theme.
// Read through useSyncExternalStore so the icon always matches the page,
// including the device setting changing while the page is open.
const STORAGE_KEY = "smartpay-theme";

function currentTheme() {
  const chosen = document.documentElement.getAttribute("data-theme");
  if (chosen === "dark" || chosen === "light") return chosen;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribe(onChange) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  media.addEventListener("change", onChange);
  return () => {
    observer.disconnect();
    media.removeEventListener("change", onChange);
  };
}

export const THEME_INIT_SCRIPT = `try{var t=localStorage.getItem("${STORAGE_KEY}");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function ThemeToggle() {
  // Server render has no theme; null renders an empty, same-size button.
  const theme = useSyncExternalStore(subscribe, currentTheme, () => null);

  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing or blocked storage: the choice lasts for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-11 w-11 items-center justify-center rounded-lg text-slate transition-colors hover:bg-border/50 hover:text-ink"
    >
      {theme === "dark" && (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      )}
      {theme === "light" && (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
