"use client";

import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-semibold">David Mambou Fotie</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>

          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
