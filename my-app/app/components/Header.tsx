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
    <header className="sticky top-0 z-50 border-b border-orange-200/70 bg-[#fffaf3]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-2 py-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-1.5">
          <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden sm:gap-3">
            <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-orange-200 bg-white px-1.5 py-1 shadow-sm sm:px-2">
              <img
                src="https://www.mahalakshmiautoagencies.com/assets/images/SML_ISUZU_LIMITED.jpg"
                alt="Mahalakshmi Auto Agencies logo"
                className="h-7 w-7 object-contain sm:h-10 sm:w-10"
              />
            </div>
            <div className="min-w-0 flex-1 overflow-hidden">
              <p className="hidden text-[0.48rem] font-bold uppercase tracking-[0.22em] text-orange-700 sm:block sm:text-[0.58rem]">
                Exclusive showroom
              </p>
              <h1 className="truncate max-w-[9rem] text-[0.42rem] font-black tracking-[-0.04em] text-slate-900 sm:max-w-none sm:text-sm lg:text-lg">
                MAHALAKSHMI AUTO AGENCIES
              </h1>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-orange-700">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 md:hidden">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-2.5 py-1.5 text-[0.6rem] font-semibold text-white shadow-[0_10px_20px_rgba(249,115,22,0.26)] transition hover:bg-orange-600"
            >
              Enquire
            </a>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-200 bg-white text-slate-800 shadow-sm transition hover:border-orange-300 hover:text-orange-700"
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
            className="hidden items-center justify-center rounded-full bg-orange-500 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_10px_20px_rgba(249,115,22,0.26)] transition hover:bg-orange-600 sm:text-sm md:inline-flex"
          >
            Enquire Now
          </a>
        </div>

        {mobileOpen && (
          <div id="mobile-menu" className="mt-3 rounded-2xl border border-orange-100 bg-white p-3 shadow-[0_20px_40px_rgba(249,115,22,0.08)] md:hidden">
            <nav className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-2.5 transition hover:bg-orange-50 hover:text-orange-700"
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
