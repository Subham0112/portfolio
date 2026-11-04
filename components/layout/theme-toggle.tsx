"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Check, Palette } from "lucide-react";
import {
  getServerTheme,
  getTheme,
  setTheme,
  subscribeTheme,
  themes,
} from "@/lib/theme-store";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  align?: "left" | "right";
  placement?: "top" | "bottom";
}

export function ThemeToggle({
  className,
  align = "right",
  placement = "bottom",
}: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Change color theme"
        aria-haspopup="menu"
        aria-expanded={open}
        title="Change color theme"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-edge bg-surface text-muted transition-all duration-200 hover:border-edge-strong hover:text-fg"
      >
        <Palette className="h-4 w-4" aria-hidden />
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Color themes"
          className={cn(
            "absolute z-[90] w-56 rounded-2xl border border-edge bg-surface p-1.5 shadow-xl shadow-black/10 dark:shadow-black/40",
            align === "right" ? "right-0" : "left-0",
            placement === "top" ? "bottom-full mb-2" : "top-full mt-2",
          )}
        >
          {themes.map((option) => {
            const isActive = theme === option.id;
            return (
              <button
                key={option.id}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => {
                  setTheme(option.id);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left transition-colors",
                  isActive ? "bg-surface-2" : "hover:bg-surface-2",
                )}
              >
                <span className="flex shrink-0 -space-x-1" aria-hidden>
                  {option.swatches.map((swatch) => (
                    <span
                      key={swatch}
                      className="h-4 w-4 rounded-full border border-black/10 ring-1 ring-white/40 dark:border-white/20 dark:ring-black/20"
                      style={{ backgroundColor: swatch }}
                    />
                  ))}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-fg">
                    {option.label}
                  </span>
                  <span className="block text-xs text-faint">
                    {option.hint}
                  </span>
                </span>
                {isActive ? (
                  <Check
                    className="h-4 w-4 shrink-0 text-brand-500"
                    aria-hidden
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
