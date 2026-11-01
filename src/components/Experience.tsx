import { experience, rnd } from "@/data/content";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative bg-paper py-24 md:py-32">
      <div className="container-wide">
        <Reveal>
          <div className="mb-14 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="sec-num">02</span>
                <p className="eyebrow !text-accent-deep">Experience</p>
              </div>
              <h2 className="font-display text-[clamp(2rem,4.2vw,3.1rem)] font-bold tracking-tight text-ink">
                Roles & delivery
              </h2>
            </div>
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-text">
              Freelance, product teams and enterprise systems — shipping UI and
              full-stack features that hold up in production.
            </p>
          </div>
        </Reveal>

        <div className="border-t border-line">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${job.role}`} delay={i * 0.06}>
              <article className="grid gap-6 border-b border-line py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] md:gap-12 md:py-12">
                <div>
                  <p className="font-mono text-[0.68rem] font-extrabold tracking-[0.14em] text-accent uppercase">
                    {job.period}
                  </p>
                  <h3 className="font-display mt-3 text-xl font-bold tracking-tight text-ink md:text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-2 text-[0.98rem] font-semibold text-accent-deep">
                    {job.company}
                  </p>
                </div>

                <ul className="space-y-3.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 text-[0.97rem] leading-relaxed text-text before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.18}>
            <article className="grid gap-6 border-b border-line py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] md:gap-12 md:py-12">
              <div>
                <p className="font-mono text-[0.68rem] font-extrabold tracking-[0.14em] text-accent uppercase">
                  R&D
                </p>
                <h3 className="font-display mt-3 text-xl font-bold tracking-tight text-ink md:text-2xl">
                  Concept work
                </h3>
              </div>
              <div>
                <p className="font-semibold text-ink">{rnd.title}</p>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-text">
                  {rnd.detail}
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
