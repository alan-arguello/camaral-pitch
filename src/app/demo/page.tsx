import { LanguageProvider } from "@/components/language-provider";
import { DeckExperience } from "@/components/deck-experience";
import { resolveLocale } from "@/lib/locale";

interface DemoPageProps {
  searchParams?: {
    lang?: string;
  };
}

export default async function Demo({ searchParams }: DemoPageProps) {
  const awaitedSearchParams = await searchParams;
  const langParam =
    typeof awaitedSearchParams?.lang === "string"
      ? awaitedSearchParams?.lang
      : undefined;
  const locale = resolveLocale(langParam);
  const hasLocaleInUrl = Boolean(langParam && langParam === locale);

  return (
    <LanguageProvider initialLocale={locale}>
      <DeckExperience
        showLanguageDialog={!hasLocaleInUrl}
        showTraction={false}
        showInvestors={true}
        showInvestorConcerns={false}
      />
    </LanguageProvider>
  );
}
