"use client";

import { createContext, useContext } from "react";

type Dictionary = {
  [key: string]: string | Dictionary;
};

const I18nContext = createContext<Dictionary | null>(null);

export function I18nProvider({
  children,
  dictionary,
}: {
  children: React.ReactNode;
  dictionary: Dictionary;
}) {
  return (
    <I18nContext.Provider value={dictionary}>{children}</I18nContext.Provider>
  );
}

export function useTranslations() {
  const dict = useContext(I18nContext);
  if (!dict) {
    throw new Error("useTranslations must be used inside I18nProvider");
  }

  // naive lookup: dict.section.key
  return (key: string): string => {
    const result = key
      .split(".")
      .reduce<string | Dictionary | undefined>((acc, part) => {
        if (typeof acc === "string") return undefined; // can't go deeper
        return acc?.[part];
      }, dict);

    return typeof result === "string" ? result : key; // fallback to key itself
  };
}
