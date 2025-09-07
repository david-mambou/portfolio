import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  fr: () => import("./fr.json").then((module) => module.default),
  ja: () => import("./ja.json").then((module) => module.default),
};

export const getDictionary = async (lang: string) => {
  if (!(lang in dictionaries)) {
    lang = "en";
  }
  return dictionaries[lang as keyof typeof dictionaries]();
};
