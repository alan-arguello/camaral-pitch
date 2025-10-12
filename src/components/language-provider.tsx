"use client";

import { createContext, useCallback, useContext, useMemo, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { deckCopy, type DeckContent, type Locale } from "@/content/deck";

interface LanguageProviderProps {
  initialLocale: Locale;
  children: React.ReactNode;
}

interface LanguageContextValue {
  locale: Locale;
  content: DeckContent;
  isPending: boolean;
  setLocale: (next: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ initialLocale, children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const content = useMemo(() => deckCopy[locale], [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) {
        return;
      }

      setLocaleState(next);

      startTransition(() => {
        const params = new URLSearchParams(searchParams?.toString());
        params.set("lang", next);
        const query = params.toString();
        router.replace(query ? `${pathname}?${query}` : pathname, {
          scroll: false,
        });
      });
    },
    [locale, pathname, router, searchParams]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      content,
      isPending,
      setLocale,
    }),
    [content, isPending, locale, setLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);

  if (!value) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return value;
}
