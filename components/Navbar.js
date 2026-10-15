"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { MenuIcon, CloseIcon } from "./icons";
import { APP_LOGIN_URL } from "@/lib/site";

const LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8">
        <a href="#top" aria-label="SmartPay home" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <a href={APP_LOGIN_URL} className="hidden px-2 text-sm font-medium text-slate transition-colors hover:text-ink sm:block">
            Log in
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-blue px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-deep dark:text-[#0B1120]"
          >
            Book a demo
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-paper px-4 pb-4 md:hidden">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-ink">
              {l.label}
            </a>
          ))}
          <a href={APP_LOGIN_URL} className="block py-3 text-base font-medium text-slate">
            Log in to SmartPay
          </a>
        </div>
      )}
    </header>
  );
}
