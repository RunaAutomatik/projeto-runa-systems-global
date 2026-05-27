"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "forest" | "papel";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "forest",
  toggle: () => {},
});

export function ThemeProvider({
  children,
  defaultTheme,
}: {
  children: React.ReactNode;
  defaultTheme: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    document.documentElement.classList.remove("theme-forest", "theme-papel");
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem("runa-theme", theme);
    document.cookie = `runa-theme=${theme}; path=/; max-age=31536000; SameSite=Lax`;
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "forest" ? "papel" : "forest"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
