"use client";

import { useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#sales", label: "Sales" },
  { href: "#services", label: "Services" },
  { href: "#records", label: "Records" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d2d1cf] bg-white">
      <div className="mx-auto max-w-7xl px-2 py-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-1.5">
          <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden sm:gap-3">
            <div className="flex shrink-0 items-center overflow-hidden">
              <img
                src="/sml-mahindra-logo.jpg"
                alt="SML Mahindra logo"
                className="h-14 w-32 object-contain mix-blend-multiply sm:h-16 sm:w-40"
              />
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#ed1b3b]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 md:hidden">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#ed1b3b] px-2.5 py-1.5 text-[0.6rem] font-semibold text-white shadow-[0_10px_20px_rgba(237,27,59,0.26)] transition hover:bg-[#c91430]"
            >
              Enquire
            </a>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d2d1cf] bg-white text-[#242424] shadow-sm transition hover:border-[#ed1b3b] hover:text-[#ed1b3b]"
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-4 rounded-full bg-current transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-4 rounded-full bg-current transition ${mobileOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`block h-0.5 w-4 rounded-full bg-current transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>

          <a
            href="#contact"
            className="hidden items-center justify-center rounded-full bg-[#ed1b3b] px-4 py-2.5 text-xs font-semibold text-white shadow-[0_10px_20px_rgba(237,27,59,0.26)] transition hover:bg-[#c91430] sm:text-sm md:inline-flex"
          >
            Enquire Now
          </a>
        </div>

        {mobileOpen && (
          <div id="mobile-menu" className="mt-3 rounded-2xl border border-[#dedddb] bg-white p-3 shadow-[0_20px_40px_rgba(36,36,36,0.08)] md:hidden">
            <nav className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-2.5 transition hover:bg-[#fbe7ea] hover:text-[#c91430]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
