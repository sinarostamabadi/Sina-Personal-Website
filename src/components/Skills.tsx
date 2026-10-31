import { coreSkills, skillGroups } from "@/data/content";
import { Reveal } from "./Reveal";

const levels: Record<string, string> = {
  Expert: "92%",
  Advanced: "82%",
};

export function Skills() {
  return (
    <section id="skills" className="section-pad relative bg-soft py-24 md:py-32">
      <div className="container-wide">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="sec-num">03</span>
            <p className="eyebrow !text-accent-deep">Capabilities</p>
          </div>
          <h2 className="font-display mb-14 max-w-[18ch] text-[clamp(2rem,4.2vw,3.1rem)] font-bold tracking-tight text-ink md:mb-16">
            A TypeScript stack from UI to API
          </h2>
        </Reveal>

        <Reveal>
          <div className="mb-8 rounded-2xl border border-line bg-paper p-6 md:mb-10 md:p-8">
            <p className="mb-6 font-mono text-[0.7rem] font-extrabold tracking-[0.14em] text-accent-deep uppercase">
              Core stack
            </p>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {coreSkills.map((item) => (
                <li key={item.name}>
                  <div className="mb-2 flex items-end justify-between gap-2">
                    <p className="font-display text-base font-bold text-ink">{item.name}</p>
                    <span className="font-mono text-[0.65rem] font-extrabold tracking-wide text-accent uppercase">
                      {item.level}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-line">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent-bright"
                      style={{ width: levels[item.level] ?? "75%" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-paper p-5 md:p-6">
                <p className="mb-4 flex items-center gap-2 font-mono text-[0.68rem] font-extrabold tracking-[0.12em] text-accent-deep uppercase">
                  <span className="inline-block h-1.5 w-1.5 rounded-[2px] bg-accent" />
                  {group.title}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-soft px-2.5 py-1 text-[0.78rem] font-semibold text-text"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
