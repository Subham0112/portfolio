"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    let frame = 0;

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setVisible(window.scrollY > 360);
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: reduceMotion ? "auto" : "smooth",
        })
      }
      className={cn(
        "print-hidden fixed right-4 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-40 flex h-10 w-10 items-center justify-center rounded-full border border-edge bg-surface text-muted shadow-lg shadow-black/10 transition-opacity duration-200 hover:border-brand-500/40 hover:text-brand-500 sm:right-6 sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))]",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <ArrowUp className="h-4 w-4" aria-hidden />
    </button>,
    document.body,
  );
}
