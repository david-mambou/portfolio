import { MenuItem } from "@headlessui/react";

type MenuItemProps = {
  text: string;
  onClick: () => void;
};

export default function CustomMenuItem({ text, onClick }: MenuItemProps) {
  return (
    <MenuItem>
      <button
        onClick={onClick}
        className="data-focus:bg-gray-100 dark:data-focus:bg-gray-800 block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 text-left"
      >
        {text}
      </button>
    </MenuItem>
  );
}
