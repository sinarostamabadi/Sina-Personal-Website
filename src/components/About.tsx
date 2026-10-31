import Image from "next/image";
import { education, highlights, profile } from "@/data/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-paper py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 100% 0%, rgba(29,78,216,0.08), transparent 55%), radial-gradient(ellipse 40% 40% at 0% 100%, rgba(96,165,250,0.08), transparent 50%)",
        }}
      />

      <div className="container-wide relative">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="sec-num">04</span>
            <p className="eyebrow !text-accent-deep">About</p>
          </div>
        </Reveal>

        <div className="grid items-start gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <div className="photo-ring mx-auto w-[180px] lg:mx-0 lg:w-full">
              <div className="photo-ring-inner aspect-square">
                <Image
                  src="/sina.jpg"
                  alt={profile.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-ink">
                Clean architecture. Maintainable delivery.
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-text">
                {profile.summary}
              </p>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-text">
                {profile.focus}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-line bg-soft">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-line px-5 py-4 last:border-b-0"
                  >
                    <p className="font-display text-base font-bold text-ink">{item.label}</p>
                    <p className="mt-1 text-sm text-muted">{item.detail}</p>
                  </div>
                ))}
                <div className="border-t border-line bg-accent-soft/60 px-5 py-4">
                  <p className="font-display text-base font-bold text-ink">
                    {education.degree}
                  </p>
                  <p className="mt-1 text-sm text-accent-deep">
                    {education.note} · {education.language}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
