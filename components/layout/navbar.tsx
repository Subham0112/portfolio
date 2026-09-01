"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/theme-toggle";

function Logo() {
  return (
    <Link
      href="/"
      aria-label="Back to home"
      className="group flex items-center gap-2.5"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-sky-500 font-mono text-sm font-bold text-brand-950 shadow-[0_4px_16px_-4px_rgba(45,212,191,0.6)]">
        s
      </span>
      <span className="text-sm font-semibold tracking-tight text-fg">
        {site.name}
      </span>
    </Link>
  );
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav aria-label="Primary" className="flex items-center">
      <ul className="flex items-center gap-1">
        {navLinks.map((link) => {
          const active = isActive(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200",
                  active
                    ? "font-medium text-fg"
                    : "text-muted hover:text-fg",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3.5 -bottom-px h-px rounded-full bg-gradient-to-r from-brand-400 to-sky-400 transition-transform duration-200",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                  aria-hidden
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [previousPathname, setPreviousPathname] = useState(pathname);
  const reduceMotion = useReducedMotion();

  if (pathname !== previousPathname) {
    setPreviousPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="print-hidden fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          "mx-auto max-w-5xl rounded-2xl border transition-all duration-300",
          scrolled || menuOpen
            ? "glass border-edge shadow-lg shadow-black/5"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="flex h-14 items-center justify-between px-3 sm:px-4">
          <Logo />

          <div className="hidden items-center gap-1 md:flex">
            <NavLinks />
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:flex" />
            <Link
              href="/contact"
              className="hidden items-center gap-1.5 rounded-full bg-brand-500 px-4 py-2 text-xs font-semibold text-brand-950 transition-colors duration-200 hover:bg-brand-400 md:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-edge bg-surface text-fg md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X className="h-4 w-4" aria-hidden />
              ) : (
                <Menu className="h-4 w-4" aria-hidden />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              id="mobile-menu"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="border-t border-edge px-4 pb-5 pt-3 md:hidden"
            >
              <ul className="flex flex-col">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between rounded-lg px-2 py-3 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
                    >
                      <span>{link.label}</span>
                      <span className="font-mono text-xs text-faint">
                        0{index + 1}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between border-t border-edge pt-4">
                <ThemeToggle />
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center gap-1.5 rounded-full bg-brand-500 px-5 text-sm font-semibold text-brand-950 transition-colors hover:bg-brand-400"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}