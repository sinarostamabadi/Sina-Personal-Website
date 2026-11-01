"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_10px_40px_rgba(0,0,0,0.35)]" : ""
      }`}
    >
      {/* Desktop */}
      <div className="section-pad container-wide hidden h-[4.25rem] items-center justify-between md:flex">
        <a href="#top" className="nav-brand font-display text-[1.1rem] font-bold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="dot">.</span>
        </a>

        <nav className="flex items-center gap-1" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link rounded-lg px-3.5 py-2 text-[0.9rem] font-bold"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-cta ml-2 rounded-full px-4 py-2 text-[0.84rem] font-bold shadow-[0_8px_24px_rgba(29,78,216,0.45)]"
          >
            Hire me
          </a>
        </nav>
      </div>

      {/* Mobile — always-visible links, no hamburger */}
      <div className="md:hidden">
        <div className="section-pad flex h-14 items-center justify-between gap-3">
          <a href="#top" className="nav-brand font-display text-[1.05rem] font-bold tracking-tight">
            {profile.name.split(" ")[0]}
            <span className="dot">.</span>
          </a>
          <a
            href="#contact"
            className="nav-cta shrink-0 rounded-full px-3.5 py-1.5 text-[0.78rem] font-bold"
          >
            Hire me
          </a>
        </div>

        <nav
          className="nav-scroll border-t border-white/10 px-4 pb-2.5"
          aria-label="Primary mobile"
        >
          <div className="flex items-center gap-1 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link shrink-0 rounded-full px-3 py-1.5 text-[0.78rem] font-bold whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
