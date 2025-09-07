"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useTranslations } from "./I18nContext";
import { LanguageToggle } from "./LanguageToggle";

export default function Navbar() {
  const dict = useTranslations();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 text-gray-800 dark:text-gray-100 bg-white dark:bg-neutral-900 shadow-md dark:shadow-[0_2px_8px_rgba(255,255,255,0.08)]
"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-semibold">David Mambou Fotie</h1>
        <nav className="flex space-x-4 items-center">
          <div className="hidden sm:flex space-x-4">
            <Link
              href="#hero"
              className="px-2 transition-transform duration-200 hover:scale-105"
              scroll
            >
              {dict("home")}
            </Link>
            <Link
              href="#about"
              className="px-2 transition-transform duration-200 hover:scale-105"
              scroll
            >
              {dict("about")}
            </Link>
            <Link
              href="#contact"
              className="px-2 transition-transform duration-200 hover:scale-105"
              scroll
            >
              {dict("contact")}
            </Link>
          </div>
          <LanguageToggle />
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
