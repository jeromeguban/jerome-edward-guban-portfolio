"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle({
  className,
}: {
  className?: string;
}) {
  const { hydrated, theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = hydrated
    ? isDark
      ? "Light mode"
      : "Dark mode"
    : "Theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-all duration-300",
        className
      )}
      style={{
        background: "var(--bg-surface-strong)",
        border: "1px solid var(--border-soft)",
        color: "var(--text-main)",
        boxShadow: "var(--shadow-soft)",
      }}
      aria-label={hydrated ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      aria-pressed={hydrated ? isDark : undefined}
    >
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
        style={{
          background:
            hydrated && !isDark
              ? "linear-gradient(135deg, #312e81 0%, #7c3aed 100%)"
              : "linear-gradient(135deg, #f59e0b 0%, #fb7185 100%)",
          color: "#ffffff",
        }}
      >
        {hydrated ? (isDark ? <Sun size={16} /> : <Moon size={16} />) : <Sun size={16} />}
      </span>
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
