import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { SignalLoomLogo } from "@/components/signalloom-logo";
import { contactDetails } from "@/data/site-content";

import "./globals.css";

export const metadata: Metadata = {
  title: "SignalLoom | Signal Loom",
  description:
    "SignalLoom is the AI decision-rehearsal platform from Signal Loom, built by James Solomon to help teams rehearse launches and critical decisions before they go live.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="ambientGlow ambientGlowLeft" />
        <div className="ambientGlow ambientGlowRight" />
        <div className="siteFrame">
          <header className="siteHeader">
            <Link href="/" className="brand">
              <SignalLoomLogo className="brandMark" decorative />
              <span className="brandWordmark">
                SignalLoom
                <small>Decision rehearsal for ambitious teams</small>
              </span>
            </Link>

            <nav className="siteNav" aria-label="Primary navigation">
              <Link href="/#product">Product</Link>
              <Link href="/#how-it-works">How It Works</Link>
              <Link href="/#founder">Founder</Link>
              <Link href="/#security">Security</Link>
              <Link href="/#faq">FAQ</Link>
              <Link href="/rehearse">Rehearse</Link>
            </nav>

            <Link href="/rehearse" className="pillButton">
              Open App
            </Link>
          </header>

          {children}

          <footer className="siteFooter">
            <p>SignalLoom helps teams rehearse decisions before launch day arrives. Built by James Solomon.</p>
            <div>
              <Link href="/#product">Product</Link>
              <Link href="/security">Security</Link>
              <Link href="/privacy">Privacy</Link>
              <a href={`mailto:${contactDetails.email}`}>Contact</a>
              <Link href="/rehearse">Rehearsal Lab</Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
