import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { SignalLoomLogo } from "@/components/signalloom-logo";
import { contactDetails } from "@/data/site-content";

import "./globals.css";

export const metadata: Metadata = {
  title: "SignalLoom | Signal Loom",
  description:
    "SignalLoom is a decision-planning product from Signal Loom that helps teams review launches and other important changes before they go live.",
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
                <small>Decision planning for product teams</small>
              </span>
            </Link>

            <nav className="siteNav" aria-label="Primary navigation">
              <Link href="/#product">Product</Link>
              <Link href="/#how-it-works">How It Works</Link>
              <Link href="/#team">Team</Link>
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
            <p>SignalLoom helps teams review launches, pricing changes, and other important decisions before they go live.</p>
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
