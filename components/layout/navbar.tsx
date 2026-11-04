"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

function Logo({
  onClick,
}: {
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Link
      href="/"
      aria-label="Back to home"
      className="group flex items-center gap-2.5"
      onClick={onClick}
    >
      <span className="text-base text-brand-600 dark:text-brand-400 font-semibold tracking-tight sm:text-lg">
        {site.name}
      </span>
    </Link>
  );
}

function useActiveSection() {
  const pathname = usePathname();
  const [active, setActive] = useState("");
  const lockedRef = useRef(false);
  const unlockTimerRef = useRef<number>(0);

  const lockActive = useCallback((href: string) => {
    lockedRef.current = true;
    setActive(href);
    window.clearTimeout(unlockTimerRef.current);
    const unlock = () => {
      lockedRef.current = false;
    };
    const onScrollEnd = () => {
      unlock();
      window.removeEventListener("scrollend", onScrollEnd);
    };
    window.addEventListener("scrollend", onScrollEnd);
    unlockTimerRef.current = window.setTimeout(unlock, 1400);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navLinks
      .map((link) => {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        return el ? { id, el } : null;
      })
      .filter(Boolean) as Array<{ id: string; el: HTMLElement }>;

    if (sections.length === 0) return;

    let ticking = false;
    function onScroll() {
      if (ticking || lockedRef.current) return;
      ticking = true;
      requestAnimationFrame(() => {
        const navBottom = 200;
        let current = sections[0].id;
        for (const { id, el } of sections) {
          if (el.getBoundingClientRect().top <= navBottom) {
            current = id;
          }
        }
        const last = sections[sections.length - 1];
        if (last.el.getBoundingClientRect().top < window.innerHeight * 0.55) {
          current = last.id;
        }
        setActive((prev) => {
          const next = `#${current}`;
          return prev === next ? prev : next;
        });
        ticking = false;
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(unlockTimerRef.current);
    };
  }, [pathname]);

  return { active: pathname === "/" ? active : "", lockActive, pathname };
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  const reduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { active, lockActive, pathname } = useActiveSection();

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

  useEffect(() => {
    if (menuOpen) closeButtonRef.current?.focus();
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleLogoClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      closeMenu();
      if (pathname !== "/") return;

      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: reduceMotion ? "auto" : "smooth",
      });
      window.history.replaceState(null, "", "/");
    },
    [closeMenu, pathname, reduceMotion],
  );

  const handleNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      closeMenu();
      if (pathname !== "/") return;

      event.preventDefault();
      lockActive(href);
      const target = document.getElementById(href.replace("#", ""));
      target?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", href);
    },
    [closeMenu, lockActive, pathname, reduceMotion],
  );

  return (
    <header className="print-hidden fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          "mx-auto max-w-5xl rounded-2xl border transition-all duration-300",
          scrolled
            ? "glass border-edge shadow-lg shadow-black/5"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="flex h-14 items-center justify-between px-3 sm:px-4">
          <Logo onClick={handleLogoClick} />

          <nav aria-label="Primary" className="hidden items-center md:flex">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={`/${link.href}`}
                      onClick={(event) => handleNavClick(event, link.href)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200",
                        isActive
                          ? "font-medium text-fg"
                          : "text-muted hover:text-fg",
                      )}
                    >
                      {link.label}
                      <span
                        className={cn(
                          "absolute inset-x-3.5 -bottom-px h-px rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-transform duration-200",
                          isActive ? "scale-x-100" : "scale-x-0",
                        )}
                        aria-hidden
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:flex" align="right" />
            <Link
              href="/#contact"
              onClick={(event) => handleNavClick(event, "#contact")}
              className="hidden items-center gap-1.5 rounded-full bg-brand-500 px-4 py-2 text-xs font-semibold text-on-brand transition-colors duration-200 hover:bg-brand-400 md:inline-flex"
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
      </div>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {menuOpen ? (
                <>
                  <motion.button
                    type="button"
                    key="mobile-nav-backdrop"
                    aria-label="Close menu"
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px] md:hidden"
                    onClick={closeMenu}
                  />
                  <motion.aside
                    key="mobile-nav-panel"
                    id="mobile-menu"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation"
                    initial={reduceMotion ? false : { x: "100%" }}
                    animate={{ x: 0 }}
                    exit={reduceMotion ? undefined : { x: "100%" }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-y-0 right-0 z-[70] flex h-dvh w-[min(22rem,88vw)] flex-col border-l border-edge bg-surface shadow-2xl shadow-black/20 md:hidden"
                  >
              <div className="flex h-16 items-center justify-between border-b border-edge px-4">
                <span className="text-sm font-semibold tracking-tight text-fg">
                  Menu
                </span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-edge bg-surface-2 text-fg"
                  aria-label="Close menu"
                  onClick={closeMenu}
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, index) => {
                    const isActive = active === link.href;
                    return (
                      <li key={link.href}>
                        <Link
                          href={`/${link.href}`}
                          onClick={(event) => handleNavClick(event, link.href)}
                          aria-current={isActive ? "true" : undefined}
                          className={cn(
                            "flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                            isActive
                              ? "bg-brand-500/10 text-fg"
                              : "text-muted hover:bg-surface-2 hover:text-fg",
                          )}
                        >
                          <span>{link.label}</span>
                          <span
                            className={cn(
                              "font-mono text-xs",
                              isActive ? "text-brand-600 dark:text-brand-400" : "text-faint",
                            )}
                          >
                            0{index + 1}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="flex items-center justify-between gap-3 border-t border-edge px-4 py-4">
                <ThemeToggle align="left" placement="top" />
                <Link
                  href="/#contact"
                  onClick={(event) => handleNavClick(event, "#contact")}
                  className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-brand-500 px-4 text-sm font-semibold text-on-brand transition-colors hover:bg-brand-400"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
                  </motion.aside>
                </>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </header>
  );
}
