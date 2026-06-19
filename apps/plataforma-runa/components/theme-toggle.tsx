"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={`Mudar para tema ${theme === "forest" ? "papel" : "forest"}`}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
        bg-surface-2 text-text border border-border hover:bg-surface-1"
    >
      {theme === "forest" ? "☀" : "🌿"}
      <span>{theme === "forest" ? "Papel" : "Forest"}</span>
    </button>
  );
}
