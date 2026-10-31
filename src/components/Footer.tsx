import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-navy-soft bg-navy py-8 text-slate-400">
      <div className="section-pad container-wide flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}</p>
        <p className="font-mono text-xs tracking-wider text-sky uppercase">
          {profile.stackLine}
        </p>
        <a href="#top" className="transition-colors hover:text-white">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
