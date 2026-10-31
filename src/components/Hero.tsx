"use client";

import Image from "next/image";
import { profile } from "@/data/content";

const focusTags = ["React", "Next.js", "NestJS", "TypeScript", "Node.js", "REST APIs"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden text-white"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 hero-mesh" />

      <div className="section-pad relative z-10 flex min-h-[100svh] flex-col justify-center pb-16 pt-28">
        <div className="container-wide">
          <div className="grid items-center gap-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-14 xl:gap-16">
            <div
              className="hero-rise mx-auto w-[168px] sm:w-[190px] lg:mx-0 lg:w-[220px]"
              style={{ animationDelay: "0.05s" }}
            >
              <div className="photo-ring">
                <div className="photo-ring-inner aspect-square">
                  <Image
                    src="/sina.jpg"
                    alt={profile.name}
                    width={440}
                    height={440}
                    priority
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="min-w-0 text-center lg:text-left">
              <p
                className="hero-rise mb-4 font-mono text-[0.72rem] tracking-[0.18em] text-sky uppercase"
                style={{ animationDelay: "0.1s" }}
              >
                {profile.role} · {profile.location}
              </p>

              <h1
                className="font-display hero-rise text-[clamp(2.6rem,7vw,5.4rem)] font-bold leading-[0.95] tracking-[-0.035em]"
                style={{ animationDelay: "0.16s" }}
              >
                {profile.name}
              </h1>

              <p
                className="hero-rise mx-auto mt-5 max-w-2xl text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-slate-200 lg:mx-0"
                style={{ animationDelay: "0.24s" }}
              >
                {profile.headline}{" "}
                <span className="font-semibold text-accent-bright">
                  {profile.stackLine}
                </span>{" "}
                — strong TypeScript, clean APIs, production-ready delivery.
              </p>

              <div
                className="hero-rise mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
                style={{ animationDelay: "0.3s" }}
              >
                {focusTags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1.5 text-[0.75rem] font-bold ${
                      i < 3
                        ? "border-accent-bright/70 bg-accent text-white"
                        : "border-white/25 bg-white/12 text-slate-100"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="hero-rise mt-9 flex flex-wrap justify-center gap-3 lg:justify-start"
                style={{ animationDelay: "0.38s" }}
              >
                <a href="#work" className="btn-primary">
                  View selected work
                  <span aria-hidden>→</span>
                </a>
                <a href="#contact" className="btn-ghost">
                  Get in touch
                </a>
              </div>
            </div>
          </div>

          <div
            className="hero-rise mt-14 grid overflow-hidden rounded-2xl border border-white/15 bg-white/5 sm:grid-cols-2 lg:grid-cols-4"
            style={{ animationDelay: "0.46s" }}
          >
            {[
              { label: "Email", value: profile.email, href: profile.emailHref },
              { label: "Phone", value: profile.phone, href: profile.phoneHref },
              { label: "LinkedIn", value: "Sina Rostamabadi", href: profile.linkedin },
              { label: "Based in", value: "Karaj · Remote OK", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="border-b border-white/10 px-5 py-4 transition-colors hover:bg-white/10 sm:border-r sm:odd:border-r lg:border-b-0 last:lg:border-r-0"
              >
                <span className="mb-1 block font-mono text-[0.65rem] font-extrabold tracking-[0.14em] text-accent-bright uppercase">
                  {item.label}
                </span>
                <span className="block truncate text-sm font-semibold text-slate-200">
                  {item.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
