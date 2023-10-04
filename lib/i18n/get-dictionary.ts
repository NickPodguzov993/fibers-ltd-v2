import "server-only";
import type { Locale } from "./config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("@/content/i18n/en.json").then((module) => module.default),
  zh: () => import("@/content/i18n/zh.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
