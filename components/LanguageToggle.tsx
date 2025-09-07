"use client";

import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import MenuItem from "@/components/ui/MenuItem";
import { usePathname, useRouter } from "next/navigation";

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* Button */}
      <MenuButton className="inline-flex items-center justify-center rounded-md px-2 py-1 bg-white dark:bg-neutral-900 text-xl font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none">
        {pathname.startsWith("/fr")
          ? "🇫🇷"
          : pathname.startsWith("/ja")
            ? "🇯🇵"
            : "🇺🇸"}
      </MenuButton>

      {/* Dropdown */}
      <MenuItems
        className="absolute right-0 mt-2 w-12 origin-top-right rounded-md bg-white dark:bg-neutral-900 shadow-lg ring-1 ring-black/5 focus:outline-none"
        modal={false}
      >
        <div className="py-1">
          <MenuItem
            className="text-lg"
            text="🇺🇸"
            onClick={() => router.push("/en")}
          />
          <MenuItem
            className="text-lg"
            text="🇫🇷"
            onClick={() => router.push("/fr")}
          />
          <MenuItem
            className="text-lg"
            text="🇯🇵"
            onClick={() => router.push("/ja")}
          />
        </div>
      </MenuItems>
    </Menu>
  );
}
