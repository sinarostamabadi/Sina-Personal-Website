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

        <div className="flex flex-col gap-5">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <article className="group relative overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_10px_40px_rgba(16,21,28,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-line hover:shadow-[0_20px_55px_rgba(29,78,216,0.12)]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, ${project.accent}0D 0%, transparent 42%)`,
                  }}
                />

                <div className="relative grid gap-8 p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10 md:p-8 lg:grid-cols-[88px_minmax(0,1fr)_minmax(0,1.15fr)] lg:p-9">
                  <div className="hidden lg:flex lg:flex-col lg:items-start lg:justify-between">
                    <span className="font-display text-3xl font-bold tracking-tight text-accent/25 transition-colors group-hover:text-accent/45">
                      {project.id}
                    </span>
                    <span
                      className={`mt-auto inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.62rem] font-extrabold tracking-[0.12em] uppercase ${
                        project.url
                          ? "bg-accent-soft text-accent"
                          : "bg-soft text-muted"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          project.url ? "bg-accent" : "bg-muted"
                        }`}
                      />
                      {project.url ? "Live" : "Private"}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <div className="mb-3 flex flex-wrap items-center gap-2 lg:hidden">
                      <span className="font-mono text-[0.68rem] font-bold text-accent">
                        {project.id}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.62rem] font-extrabold tracking-[0.12em] uppercase ${
                          project.url
                            ? "bg-accent-soft text-accent"
                            : "bg-soft text-muted"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            project.url ? "bg-accent" : "bg-muted"
                          }`}
                        />
                        {project.url ? "Live" : "Private"}
                      </span>
                    </div>

                    <p className="mb-2 font-mono text-[0.68rem] font-extrabold tracking-[0.14em] text-accent uppercase">
                      {project.category}
                    </p>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-[1.75rem]">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-[0.98rem] text-text">{project.subtitle}</p>

                    <div className="mt-auto pt-6">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-accent-line bg-accent-soft px-3.5 py-2 text-[0.8rem] font-bold text-accent-deep transition-all hover:border-accent hover:bg-accent hover:text-white"
                        >
                          {project.urlLabel}
                          <span aria-hidden>↗</span>
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-muted">
                          Enterprise system · private deployment
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col border-t border-line pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-10">
                    <p className="text-[0.98rem] leading-relaxed text-text">
                      {project.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-line bg-soft px-2 py-1 text-[0.7rem] font-semibold text-text transition-colors group-hover:border-accent-line group-hover:bg-accent-soft group-hover:text-accent-deep"
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
