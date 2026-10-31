import type { Metadata } from "next";
import { Manrope, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sina Rostamabadi — Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js and NestJS. Production web and mobile products — accounting, POS and payment platforms.",
  keywords: [
    "Sina Rostamabadi",
    "Full Stack Developer",
    "React",
    "Next.js",
    "NestJS",
    "TypeScript",
  ],
  authors: [{ name: "Sina Rostamabadi" }],
  openGraph: {
    title: "Sina Rostamabadi — Full Stack Developer",
    description:
      "Building scalable web and mobile products end-to-end with React, Next.js and NestJS.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${syne.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-soft font-sans text-ink">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
