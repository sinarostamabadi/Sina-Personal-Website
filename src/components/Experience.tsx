import { experience, rnd } from "@/data/content";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative bg-paper py-24 md:py-32">
      <div className="container-wide">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="sec-num">02</span>
            <p className="eyebrow !text-accent-deep">Experience</p>
          </div>
          <h2 className="font-display mb-14 max-w-[16ch] text-[clamp(2rem,4.2vw,3.1rem)] font-bold tracking-tight text-ink md:mb-16">
            Building where product meets production
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute top-2 bottom-2 left-[11px] hidden w-px bg-line md:block" />

          <div className="flex flex-col gap-5">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.08}>
                <div className="relative grid gap-5 rounded-2xl border border-line bg-soft/80 p-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.55fr)] md:gap-10 md:p-8">
                  <div className="absolute top-8 -left-[5px] hidden h-3 w-3 rounded-full border-2 border-paper bg-accent md:block" />
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-2 font-semibold text-accent-deep">{job.company}</p>
                    <p className="mt-3 inline-flex rounded-full bg-accent-soft px-3 py-1 font-mono text-[0.68rem] font-bold tracking-wider text-accent uppercase">
                      {job.period}
                    </p>
                  </div>
                  <ul className="space-y-3.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="relative pl-5 text-[0.97rem] leading-relaxed text-text before:absolute before:left-0 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.16}>
              <div className="relative grid gap-5 rounded-2xl border border-dashed border-accent-line bg-accent-soft/50 p-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.55fr)] md:gap-10 md:p-8">
                <div className="absolute top-8 -left-[5px] hidden h-3 w-3 rounded-full border-2 border-paper bg-accent-bright md:block" />
                <div>
                  <h3 className="font-display text-xl font-bold text-ink md:text-2xl">R&D</h3>
                  <p className="mt-2 font-semibold text-accent-deep">Concept work</p>
                </div>
                <div>
                  <p className="font-bold text-ink">{rnd.title}</p>
                  <p className="mt-3 text-[0.97rem] leading-relaxed text-text">
                    {rnd.detail}
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
