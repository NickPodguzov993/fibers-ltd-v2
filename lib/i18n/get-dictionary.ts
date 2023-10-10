import "server-only";
import { Locale, dictionaries } from "./config";

type Content = (typeof dictionaries)["en"];
export async function getDictionary<T extends keyof Content>(
  locale: Locale,
  content: T
) {
  const langDicts = dictionaries[locale] ?? dictionaries["en"];
  return langDicts[content]?.() as ReturnType<Content[T]>;
}
