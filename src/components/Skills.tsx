import { coreSkills, skillGroups } from "@/data/content";
import { Reveal } from "./Reveal";

const levels: Record<string, string> = {
  Expert: "94%",
  Advanced: "84%",
};

export function Skills() {
  return (
    <section id="skills" className="section-pad relative bg-soft py-24 md:py-32">
      <div className="container-wide">
        <Reveal>
          <div className="mb-14 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="sec-num">03</span>
                <p className="eyebrow !text-accent-deep">Capabilities</p>
              </div>
              <h2 className="font-display text-[clamp(2rem,4.2vw,3.1rem)] font-bold tracking-tight text-ink">
                A TypeScript stack from UI to API
              </h2>
            </div>
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-text">
              The same production stack used across accounting, POS and mobile
              products — frontend to API.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreSkills.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-line bg-paper p-5 shadow-[0_10px_40px_rgba(16,21,28,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-line hover:shadow-[0_18px_50px_rgba(29,78,216,0.1)]"
              >
                <div className="mb-3 flex items-start justify-between gap-2">
                  <p className="font-display text-[0.98rem] font-bold text-ink">{item.name}</p>
                  <span className="font-mono text-[0.62rem] font-extrabold tracking-wide text-accent uppercase">
                    {item.level}
                  </span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-bright"
                    style={{ width: levels[item.level] ?? "75%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.05}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 shadow-[0_10px_40px_rgba(16,21,28,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-line hover:shadow-[0_18px_50px_rgba(29,78,216,0.1)] md:p-7">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-ink">{group.title}</h3>
                  <span className="font-mono text-[0.68rem] font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-accent-line bg-accent-soft px-2 py-1 text-[0.7rem] font-semibold text-accent-deep"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
