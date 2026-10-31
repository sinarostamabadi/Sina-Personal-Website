import { projects } from "@/data/content";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="section-pad relative bg-soft py-24 md:py-32">
      <div className="container-wide">
        <Reveal>
          <div className="mb-14 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="sec-num">01</span>
                <p className="eyebrow !text-accent-deep">Selected projects</p>
              </div>
              <h2 className="font-display text-[clamp(2rem,4.2vw,3.1rem)] font-bold tracking-tight text-ink">
                Live platforms shipped
              </h2>
            </div>
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-text">
              Full-stack production systems — accounting, payments, POS and
              enterprise workflow — from API contracts to UI and mobile.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <article className="group relative overflow-hidden rounded-2xl border border-line bg-paper p-6 shadow-[0_10px_40px_rgba(16,21,28,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-line hover:shadow-[0_18px_50px_rgba(29,78,216,0.1)] md:p-8">
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-1 opacity-80"
                  style={{ background: project.accent }}
                />

                <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:gap-10 lg:grid-cols-[72px_minmax(0,1fr)_minmax(0,1.2fr)]">
                  <div className="hidden lg:block">
                    <span className="font-mono text-sm font-bold text-accent">
                      {project.id}
                    </span>
                  </div>

                  <div>
                    <p
                      className="mb-2 font-mono text-[0.68rem] font-extrabold tracking-[0.14em] uppercase"
                      style={{ color: project.accent }}
                    >
                      {project.category}
                    </p>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-[1.7rem]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-text">{project.subtitle}</p>

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent transition-all hover:gap-3 hover:text-accent-deep"
                      >
                        {project.urlLabel}
                        <span aria-hidden>↗</span>
                      </a>
                    ) : (
                      <p className="mt-5 text-sm font-semibold text-muted">
                        Enterprise system · private deployment
                      </p>
                    )}
                  </div>

                  <div>
                    <p className="text-[0.98rem] leading-relaxed text-text">
                      {project.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-accent-line bg-accent-soft px-2.5 py-1 text-[0.72rem] font-semibold text-accent-deep"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
