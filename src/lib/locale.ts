import { defaultLocale, isLocale, type Locale } from "@/content/deck";

export function resolveLocale(langParam?: string | null): Locale {
  if (langParam && isLocale(langParam)) {
    return langParam;
  }

  return defaultLocale;
}
