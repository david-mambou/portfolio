"use client";

import { useTheme } from "next-themes";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import MenuItem from "@/components/ui/MenuItem";
import { FaMoon, FaRegSun } from "react-icons/fa6";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* Button */}
      <MenuButton className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white dark:bg-black px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        {/* Sun/Moon icons crossfade */}
        <FaRegSun className="h-5 w-5 transition-all dark:hidden" />
        <FaMoon className="h-5 w-5 hidden dark:block transition-all" />
      </MenuButton>

      {/* Dropdown */}
      <MenuItems
        className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black/5 focus:outline-none"
        modal={false}
      >
        <div className="py-1">
          <MenuItem text="Light" onClick={() => setTheme("light")} />
          <MenuItem text="Dark" onClick={() => setTheme("dark")} />
          <MenuItem text="System" onClick={() => setTheme("system")} />
        </div>
      </MenuItems>
    </Menu>
  );
}
