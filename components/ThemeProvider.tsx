"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  hydrated: boolean;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const STORAGE_KEY = "portfolio-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const initialTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";

    setTheme(initialTheme);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [hydrated, theme]);

  const value = useMemo(
    () => ({
      hydrated,
      theme,
      setTheme,
      toggleTheme: () =>
        setTheme((currentTheme) =>
          currentTheme === "dark" ? "light" : "dark"
        ),
    }),
    [hydrated, theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
