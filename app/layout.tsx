import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Portfolio of Subham, a junior full-stack developer building web applications with React, Node.js, Express and MongoDB — REST APIs, realtime features and polished interfaces.",
  keywords: [
    "full-stack developer",
    "React developer",
    "Node.js developer",
    "Next.js",
    "TypeScript",
    "MongoDB",
    "portfolio",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: site.tagline }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      data-scroll-behavior="smooth"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var valid=["dark","forest","purple","orange"];var t=localStorage.getItem("theme");if(t==="light"||t==="white")t="dark";if(valid.indexOf(t)===-1)t="dark";var el=document.documentElement;el.setAttribute("data-theme",t);el.classList.add("dark")}catch(e){document.documentElement.setAttribute("data-theme","dark");document.documentElement.classList.add("dark")}})();`,
          }}
        />
      </head>
      <body className="grain min-h-full flex flex-col">
        <div id="top">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-brand"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <BackToTop />
      </body>
    </html>
  );
}