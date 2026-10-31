"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, profile } from "@/data/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-white/10 bg-navy/95 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-white/10 bg-navy/80 backdrop-blur-md"
      }`}
    >
      <div className="section-pad container-wide flex h-16 items-center justify-between md:h-[4.25rem]">
        <a
          href="#top"
          className="font-display text-[1.1rem] font-bold tracking-tight text-white"
        >
          {profile.name.split(" ")[0]}
          <span className="text-accent-bright">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-[0.88rem] font-bold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-accent px-4 py-2 text-[0.84rem] font-bold text-white shadow-[0_8px_24px_rgba(29,78,216,0.45)] transition-colors hover:bg-accent-bright hover:text-navy"
          >
            Hire me
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full rounded-full bg-white transition-transform ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-white transition-transform ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-white/10 bg-navy md:hidden"
          >
            <nav className="section-pad flex flex-col gap-1 py-4">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className="rounded-xl px-4 py-3.5 text-lg font-bold text-white hover:bg-white/10"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-accent px-4 py-3.5 text-center text-base font-bold text-white"
              >
                Hire me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
