export const profile = {
  name: "Sina Rostamabadi",
  role: "Full Stack Developer",
  stackLine: "React · Next.js · NestJS",
  location: "Karaj, Iran · Remote OK",
  phone: "+98 903 897 0963",
  phoneHref: "tel:+989038970963",
  email: "sinarostamabadi2183@gmail.com",
  emailHref: "mailto:sinarostamabadi2183@gmail.com",
  linkedin: "https://www.linkedin.com/in/sina-rostamabadi",
  headline: "Production systems, end to end.",
  summary:
    "Full Stack Developer with 3+ years shipping web and mobile products — from REST APIs, auth and SQL models to polished admin panels and real-time dashboards.",
  focus:
    "I specialize in React, Next.js and NestJS with strong TypeScript foundations. Clean architecture, maintainable code, and delivery that holds up in production.",
};

export const highlights = [
  {
    label: "One TypeScript stack",
    detail: "React · Next · Nest — frontend to API",
  },
  {
    label: "Web + Mobile",
    detail: "Admin panels and Expo apps",
  },
  {
    label: "Live products",
    detail: "Accounting & POS platforms shipped",
  },
];

export const projects = [
  {
    id: "01",
    category: "Accounting & Payments",
    title: "Fintechsoft Accounting",
    subtitle: "Multi-tenant Accounting SaaS",
    url: "https://muhasebetest.fintechsoft.com",
    urlLabel: "muhasebetest.fintechsoft.com",
    description:
      "Multi-tenant accounting for invoices, transactions, bank accounts, partners, multi-currency, tax, employees and payroll — with workspaces, granular roles, and fully bilingual EN / TR.",
    tags: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Ant Design",
      "RBAC",
      "i18next",
      "Recharts",
    ],
    accent: "#1D4ED8",
  },
  {
    id: "02",
    category: "Accounting & Payments",
    title: "POSTaxi",
    subtitle: "Payment Platform for Taxi Fleets",
    url: "https://panel.pos.taxi",
    urlLabel: "panel.pos.taxi",
    description:
      "Admin panel and mobile apps for POS terminals, drivers, stations and integrators — commissions, payments, payouts, reconciliations, plus transaction, activity and risk reports.",
    tags: [
      "React",
      "TypeScript",
      "JWT / OTP",
      "TanStack Query",
      "ExcelJS",
      "React Native",
    ],
    accent: "#2563EB",
  },
  {
    id: "03",
    category: "Accounting & Payments",
    title: "POSPazar",
    subtitle: "POS & Payments Management",
    url: "https://panel.pospazar.net",
    urlLabel: "panel.pospazar.net",
    description:
      "Multi-party payment operations for PSPs, integrators and sub-integrators: terminal lifecycle, payment approvals, bank payouts, e-invoicing and data-change approval workflows.",
    tags: [
      "React",
      "TypeScript",
      "PSP Integrations",
      "E-Invoicing",
      "Zustand",
      "React Native",
    ],
    accent: "#1E3A8A",
  },
  {
    id: "04",
    category: "Workflow Platform",
    title: "Free-Zone Vehicle Clearance",
    subtitle: "Configurable multi-stage process engine",
    url: null,
    urlLabel: null,
    description:
      "Parallel stages, expert workload balancing, process payments and real-time session presence — web cartable plus React Native mobile app for an enterprise clearance workflow.",
    tags: ["React", "SignalR", "dnd-kit", "Ant Design", "React Native"],
    accent: "#3B82F6",
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Upwork",
    period: "1 year",
    points: [
      "Delivered production products end-to-end — accounting, POS / payments and multi-stage workflows, from API contracts to UI.",
      "Designed a shared feature-based architecture (React + TypeScript, TanStack Query, Zustand, Ant Design) reused across products.",
      "Built modules for PSP / bank integrations, commissions, payouts and e-invoicing, with secure JWT + OTP auth and claim-based RBAC.",
      "Implemented SignalR real-time features and shipped React Native (Expo) apps for integrators and drivers.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Tejarat Pardazan Electronic",
    period: "Contract",
    points: [
      "Developed the front end of the Free-Zone Vehicle Clearance system — a configurable multi-stage enterprise workflow platform.",
      "Built the web cartable UI for parallel process stages, expert workload balancing, process payments and session presence.",
      "Worked with React, TypeScript, Ant Design, SignalR and dnd-kit to deliver a production clearance experience for operators.",
      "Collaborated on the React Native (Expo) mobile companion for field and operational use.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "FutureWaves · London, Remote",
    period: "2023 — Present",
    points: [
      "Developed production React / Next.js apps for an international team using SSR / SSG, TypeScript and component-driven architecture.",
      "Owned state / data layers (Redux Toolkit, React Query) and reusable UI kits with MUI, Styled Components and SASS in agile delivery.",
    ],
  },
];

export const rnd = {
  title: "AI-powered CRM concept",
  detail:
    "Product and system architecture for an AI-assisted CRM for sales and customer operations.",
};

export const education = {
  degree: "M.Sc. Software Engineering",
  note: "Graduate degree",
  language: "English — Professional",
};

export const coreSkills = [
  { name: "React", level: "Expert" },
  { name: "Next.js", level: "Expert" },
  { name: "NestJS / Node.js", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "React Native", level: "Advanced" },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "SQL", "HTML / CSS"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vite", "SSR / SSG", "Component architecture"],
  },
  {
    title: "Backend",
    items: ["NestJS", "Node.js", "Express", "REST APIs", "DTO Validation"],
  },
  {
    title: "Data",
    items: ["SQL", "Prisma", "TypeORM", "Sequelize", "Multi-tenant models"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo", "Integrator apps", "Driver apps"],
  },
  {
    title: "UI systems",
    items: ["Ant Design", "MUI", "Tailwind", "SASS", "Framer Motion", "Styled Components"],
  },
  {
    title: "State & forms",
    items: ["TanStack Query", "Zustand", "Redux Toolkit", "React Hook Form"],
  },
  {
    title: "Security",
    items: ["JWT / OTP Auth", "Claim-based RBAC", "DTO Validation", "Secure API contracts"],
  },
  {
    title: "Product features",
    items: [
      "SignalR realtime",
      "i18n EN / TR",
      "RTL / Jalali",
      "Recharts",
      "ExcelJS",
      "PSP / bank integrations",
      "E-invoicing",
    ],
  },
  {
    title: "Tools & delivery",
    items: ["Git", "GitHub", "Chrome DevTools", "Agile", "Feature-based architecture"],
  },
] as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];
