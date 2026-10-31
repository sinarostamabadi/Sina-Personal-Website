"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";
import { Reveal } from "./Reveal";

const links = [
  { label: "Email", value: profile.email, href: profile.emailHref },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "LinkedIn", value: "Sina Rostamabadi", href: profile.linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 hero-mesh" />

      <div className="container-wide relative z-10 text-white">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="sec-num !bg-accent-bright !text-navy">05</span>
            <p className="eyebrow !text-sky">Contact</p>
          </div>
          <h2 className="font-display max-w-[14ch] text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.05] tracking-tight">
            Let&apos;s build the next product.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-slate-300">
            Open to remote roles and serious freelance collaborations — React,
            Next.js, NestJS and mobile.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/15 bg-white/5 sm:grid-cols-3">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group border-b border-white/10 px-6 py-7 transition-colors hover:bg-white/10 sm:border-r sm:border-b-0 last:sm:border-r-0"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25 }}
              >
                <p className="mb-2 font-mono text-[0.68rem] font-extrabold tracking-[0.14em] text-accent-bright uppercase">
                  {link.label}
                </p>
                <p className="text-lg font-bold tracking-tight break-all text-slate-100 group-hover:text-white">
                  {link.value}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-sky">
                  Connect →
                </span>
              </motion.a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={profile.emailHref} className="btn-primary">
              Send an email
            </a>
            <a href={profile.phoneHref} className="btn-ghost">
              Call / WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
