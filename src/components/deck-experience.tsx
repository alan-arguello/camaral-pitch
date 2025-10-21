"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { locales, type Locale } from "@/content/deck";

interface DeckExperienceProps {
  showLanguageDialog: boolean;
}

export function DeckExperience({ showLanguageDialog }: DeckExperienceProps) {
  const { content, locale, setLocale, isPending } = useLanguage();
  const [languageDialogOpen, setLanguageDialogOpen] =
    useState(showLanguageDialog);

  useEffect(() => {
    setLanguageDialogOpen(showLanguageDialog);
  }, [showLanguageDialog]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <LanguageModal
        open={languageDialogOpen}
        locale={locale}
        onSelect={(lang) => {
          setLocale(lang);
          setLanguageDialogOpen(false);
        }}
      />
      {/* Language switcher button */}
      <button
        onClick={() => setLanguageDialogOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-lg transition-all hover:border-gray-400 hover:shadow-xl"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        {locale === "en" ? "Change language" : "Cambiar idioma"}
      </button>
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-8 pb-16 pt-20 md:px-12">
        <main className="space-y-32">
          <Hero
            title={content.hero.title}
            subtitle={content.hero.subtitle}
            primaryCta={content.hero.primaryCta}
          />
          <TeamSection
            heading={content.team.heading}
            caption={content.team.caption}
            members={content.team.members}
          />
          <TractionSection
            heading={content.traction.heading}
            caption={content.traction.caption}
            metrics={content.traction.metrics}
            image={content.traction.image}
          />
          <CompaniesCarousel />
          <InvestorsSection
            locale={locale}
            heading={content.investors.heading}
            caption={content.investors.caption}
            investors={content.investors.people}
          />
          <UseCasesSection
            locale={locale}
            heading={content.useCases.heading}
            caption={content.useCases.caption}
            cases={content.useCases.cases}
          />
          <MediaSection
            locale={locale}
            heading={content.media.heading}
            caption={content.media.caption}
            items={content.media.items}
          />
          <PricingSection
            locale={locale}
            heading={content.pricing.interactive.heading}
            caption={content.pricing.interactive.caption}
            plans={content.pricing.interactive.plans}
            contentHeading={content.pricing.content.heading}
            contentDescription={content.pricing.content.description}
            bullets={content.pricing.content.bullets}
          />
          <InvestorConcernsSection
            heading={content.investorConcerns.heading}
            caption={content.investorConcerns.caption}
            concerns={content.investorConcerns.concerns}
          />
        </main>
        <footer className="mt-24 flex flex-col gap-4 border-t border-gray-200 pt-8 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Image src="/Camaral.svg" alt="Camaral" width={100} height={20} />
          </div>
          <p>{content.footer.rights}</p>
        </footer>
      </div>
    </div>
  );
}

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
}

function Hero({ title, subtitle, primaryCta }: HeroProps) {
  return (
    <section className="mx-auto max-w-4xl space-y-12 text-center">
      <div className="flex justify-center">
        <Image
          src="/Camaral.svg"
          alt="Camaral"
          width={200}
          height={40}
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-6">
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
          {subtitle}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href={primaryCta.href}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full bg-[#0dc7ff] px-6 py-3 font-semibold text-white transition hover:bg-[#06b6ef]"
        >
          {primaryCta.label}
        </Link>
      </div>
    </section>
  );
}

function CompaniesCarousel() {
  const companies = [
    "/empresa1.png",
    "/empresa2.png",
    "/empresa3.png",
    "/empresa4.svg",
    "/empresa5.png",
    "/empresa6.png",
    "/empresa7.png",
    "/empresa8.png",
    "/empresa9.png",
    "/empresa10.jpeg",
    "/empresa12.webp",
  ];

  return (
    <section className="overflow-hidden py-8">
      <div className="relative">
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

        {/* Scrolling container */}
        <div className="flex animate-scroll space-x-16">
          {/* First set of logos */}
          {companies.map((company, index) => (
            <div
              key={`first-${index}`}
              className="flex h-20 w-40 flex-shrink-0 items-center justify-center grayscale transition hover:grayscale-0"
            >
              <Image
                src={company}
                alt={`Company ${index + 1}`}
                width={160}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {companies.map((company, index) => (
            <div
              key={`second-${index}`}
              className="flex h-20 w-40 flex-shrink-0 items-center justify-center grayscale transition hover:grayscale-0"
            >
              <Image
                src={company}
                alt={`Company ${index + 1}`}
                width={160}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface TeamSectionProps {
  heading: string;
  caption: string;
  members: Array<{
    name: string;
    role: string;
    summary: string;
    highlights: string[];
    linkedin: string;
  }>;
}

function TeamSection({ heading, caption, members }: TeamSectionProps) {
  const memberImages: Record<string, string> = {
    "Samuel Santa": "/samuel.jpeg",
    "Alan Arguello": "/alan.jpeg",
    "Octavio Razo": "/octavio.jpeg",
  };

  return (
    <section id="team" className="space-y-12">
      <SectionHeader title={heading} caption={caption} />
      <div className="grid gap-8 md:grid-cols-3">
        {members.map((member) => (
          <article
            key={member.name}
            className="group flex h-full flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-xl border-2 border-gray-200">
                <Image
                  src={memberImages[member.name] || "/samuel.jpeg"}
                  alt={member.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
            <ul className="flex flex-1 flex-col gap-3 text-sm leading-snug text-gray-700">
              {member.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span
                    className="mt-2 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-[#0dc7ff]"
                    aria-hidden
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <Link
              href={member.linkedin}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition hover:text-[#0dc7ff]"
            >
              LinkedIn
              <span aria-hidden>↗</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

interface TractionSectionProps {
  heading: string;
  caption: string;
  metrics: Array<{
    label: string;
    value: string;
  }>;
  image: string;
}

function TractionSection({
  heading,
  caption,
  metrics,
  image,
}: TractionSectionProps) {
  return (
    <section className="space-y-12">
      <SectionHeader title={heading} caption={caption} />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid gap-6 md:grid-cols-2">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                {metric.label}
              </h3>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-gray-200">
            <Image
              src={image}
              alt="Team in San Francisco"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface InvestorsSectionProps {
  locale: Locale;
  heading: string;
  caption: string;
  investors: Array<{
    name: string;
    title: string;
    highlights: string[];
    linkedin: string;
  }>;
}

function InvestorsSection({
  heading,
  caption,
  investors,
}: InvestorsSectionProps) {
  const investorImages: Record<string, string> = {
    "Andrés Bilbao": "/andres.png",
    "Martha Hurtado": "/martha.jpeg",
    "Alberto Aramayo": "/alberto.jpeg",
  };

  const companyLogos: Record<string, string> = {
    "Andrés Bilbao": "/rappi.svg.png",
    "Martha Hurtado": "/microsoft.svg.png",
    "Alberto Aramayo": "/diio.png",
  };

  return (
    <section className="space-y-12">
      <SectionHeader title={heading} caption={caption} />
      <div className="grid gap-8 md:grid-cols-3">
        {investors.map((investor) => (
          <article
            key={investor.name}
            className="flex h-full flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border-2 border-gray-200">
                  <Image
                    src={investorImages[investor.name] || "/andres.png"}
                    alt={investor.name}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {investor.name}
                  </h3>
                  <p className="text-sm text-gray-600">{investor.title}</p>
                </div>
              </div>
              <div className="flex h-12 w-20 flex-shrink-0 items-center justify-center">
                <Image
                  src={companyLogos[investor.name] || "/rappi.svg.png"}
                  alt={`${investor.name} company`}
                  width={80}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <ul className="flex flex-1 flex-col gap-3 text-sm leading-snug text-gray-700">
              {investor.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span
                    className="mt-2 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-[#0dc7ff]"
                    aria-hidden
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <Link
              href={investor.linkedin}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition hover:text-[#0dc7ff]"
            >
              LinkedIn
              <span aria-hidden>↗</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

interface UseCasesSectionProps {
  locale: Locale;
  heading: string;
  caption: string;
  cases: Array<{
    client: string;
    summary: string;
    link: string;
  }>;
}

function UseCasesSection({
  locale,
  heading,
  caption,
  cases,
}: UseCasesSectionProps) {
  const clientImages: Record<string, string> = {
    ANDE: "/ande.jpg",
    "Salvador Nasralla": "/salvador.jpg",
  };

  const [firstCase, secondCase, ...otherCases] = cases;
  const featuredCase =
    firstCase.client === "Salvador Nasralla" ? firstCase : secondCase;
  const otherFeaturedCase =
    firstCase.client === "Salvador Nasralla" ? secondCase : firstCase;

  return (
    <section className="space-y-12">
      <SectionHeader title={heading} caption={caption} />

      {/* Featured Salvador Nasralla case */}
      <article className="rounded-3xl border-2 border-[#0dc7ff] bg-gradient-to-br from-[#0dc7ff]/5 to-white p-8 shadow-lg">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            {clientImages[featuredCase.client] && (
              <div className="relative h-16 w-16 overflow-hidden rounded-xl border-2 border-gray-200">
                <Image
                  src={clientImages[featuredCase.client]}
                  alt={`${featuredCase.client} logo`}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {featuredCase.client}
              </h3>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0dc7ff] px-4 py-2 text-sm font-bold text-white">
                {locale === "es" ? "Caso destacado" : "Featured case"}
              </span>
            </div>
          </div>
          <span className="rounded-full bg-[#0dc7ff]/10 px-4 py-2 text-sm font-semibold text-[#0dc7ff]">
            {locale === "es" ? "En negociación" : "In negotiation"}
          </span>
        </div>
        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          {featuredCase.summary}
        </p>
        <Link
          href={featuredCase.link}
          target={featuredCase.link.startsWith("http") ? "_blank" : undefined}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0dc7ff] px-6 py-3 font-semibold text-white transition hover:bg-[#06b6ef]"
        >
          {locale === "es" ? "Ver perfil" : "View profile"}
          <span aria-hidden>↗</span>
        </Link>
      </article>

      {/* Featured ANDE case */}
      <article className="rounded-3xl border-2 border-[#0dc7ff] bg-gradient-to-br from-[#0dc7ff]/5 to-white p-8 shadow-lg">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            {clientImages[otherFeaturedCase.client] && (
              <div className="relative h-16 w-16 overflow-hidden rounded-xl border-2 border-gray-200">
                <Image
                  src={clientImages[otherFeaturedCase.client]}
                  alt={`${otherFeaturedCase.client} logo`}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {otherFeaturedCase.client}
              </h3>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0dc7ff] px-4 py-2 text-sm font-bold text-white">
                {locale === "es" ? "Caso destacado" : "Featured case"}
              </span>
            </div>
          </div>
          <span className="rounded-full bg-[#0dc7ff]/10 px-4 py-2 text-sm font-semibold text-[#0dc7ff]">
            {locale === "es" ? "En vivo" : "Live"}
          </span>
        </div>
        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          {otherFeaturedCase.summary}
        </p>
        <Link
          href={otherFeaturedCase.link}
          target={
            otherFeaturedCase.link.startsWith("http") ? "_blank" : undefined
          }
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0dc7ff] px-6 py-3 font-semibold text-white transition hover:bg-[#06b6ef]"
        >
          {locale === "es" ? "Ver caso" : "View case"}
          <span aria-hidden>↗</span>
        </Link>
      </article>

      {/* Other cases */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {otherCases.map((useCase) => (
          <article
            key={useCase.client}
            className="flex h-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-900">{useCase.client}</h3>
              <span className="rounded-full bg-[#0dc7ff]/10 px-3 py-1 text-xs font-semibold text-[#0dc7ff]">
                {locale === "es" ? "En vivo" : "Live"}
              </span>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-gray-700">
              {useCase.summary}
            </p>
            <Link
              href={useCase.link}
              target={useCase.link.startsWith("http") ? "_blank" : undefined}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition hover:text-[#0dc7ff]"
            >
              {locale === "es" ? "Ver caso" : "View case"}
              <span aria-hidden>↗</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

interface MediaSectionProps {
  locale: Locale;
  heading: string;
  caption: string;
  items: Array<{ label: string; href: string }>;
}

function MediaSection({ locale, heading, caption, items }: MediaSectionProps) {
  const videoFiles: Record<string, string> = {
    "Live interview with an AI avatar": "/entrevista.mp4",
    "Entrevista en vivo con un avatar de IA": "/entrevista.mp4",
    "Generating content by cloning personas": "/clon.mp4",
    "Generando contenido clonando personas": "/clon.mp4",
    "Replacing actors in video campaigns": "/clon2.mp4",
    "Reemplazo de actores en campañas de video": "/clon2.mp4",
  };

  return (
    <section className="space-y-12">
      <SectionHeader title={heading} caption={caption} />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.href}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="relative aspect-video bg-gray-900">
              <video controls className="h-full w-full" preload="metadata">
                <source
                  src={videoFiles[item.label] || "/entrevista.mp4"}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4">
              <h3 className="mb-2 font-semibold text-gray-900">{item.label}</h3>
              <Link
                href={item.href}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0dc7ff] transition hover:text-[#06b6ef]"
              >
                {locale === "es" ? "Ver en LinkedIn" : "View on LinkedIn"}
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

interface PricingSectionProps {
  locale: Locale;
  heading: string;
  caption: string;
  plans: Array<{
    name: string;
    price: string;
    description: string;
    perks: string[];
  }>;
  contentHeading: string;
  contentDescription: string;
  bullets: string[];
}

interface InvestorConcernsSectionProps {
  heading: string;
  caption: string;
  concerns: Array<{
    title: string;
    description: string;
  }>;
}

function InvestorConcernsSection({
  heading,
  caption,
  concerns,
}: InvestorConcernsSectionProps) {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
          {heading}
        </h2>
        <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
          {caption}
        </p>
      </div>
      <div className="space-y-8">
        {concerns.map((concern, index) => (
          <div
            key={concern.title}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border-4 border-red-200 p-8 shadow-2xl"
          >
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500 rounded-full opacity-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 rounded-full opacity-10"></div>

            <div className="relative z-10">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg">
                  🚨 Concern {index + 1}
                </span>
                <h3 className="mt-6 text-3xl font-bold text-gray-900 leading-tight">
                  {concern.title}
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-800 font-medium whitespace-pre-line">
                {concern.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PricingSection({
  locale,
  heading,
  caption,
  plans,
  contentHeading,
  contentDescription,
  bullets,
}: PricingSectionProps) {
  return (
    <section id="pricing" className="space-y-16">
      <SectionHeader
        title={locale === "es" ? "Precios" : "Pricing"}
        caption={
          locale === "es"
            ? "Dos productos potentes para diferentes necesidades"
            : "Two powerful products for different needs"
        }
      />

      {/* Product 1: Real-time Interactive Avatars */}
      <div className="space-y-8">
        <div className="rounded-3xl border-2 border-[#0dc7ff] bg-gradient-to-br from-[#0dc7ff]/5 to-white p-8">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0dc7ff] px-4 py-2 text-sm font-bold text-white">
              {locale === "es" ? "Producto 1" : "Product 1"}
            </span>
            <h3 className="mt-4 text-3xl font-bold text-gray-900">{heading}</h3>
            <p className="mt-2 text-gray-600">{caption}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className="flex h-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {plan.name}
                  </h4>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#0dc7ff]">
                      {plan.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {plan.description}
                  </p>
                </div>
                <ul className="flex flex-1 flex-col gap-2 text-sm text-gray-700">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-[#0dc7ff]"
                        aria-hidden
                      />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://cal.com/camaral/discovery-demo"
                  target="_blank"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0dc7ff] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#06b6ef]"
                >
                  {locale === "es" ? "Hablar con ventas" : "Talk to sales"}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Product 2: AI Content Generation */}
      <div className="space-y-8">
        <div className="rounded-3xl border-2 border-[#ff55c6] bg-gradient-to-br from-[#ff55c6]/5 to-white p-8">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#ff55c6] px-4 py-2 text-sm font-bold text-white">
              {locale === "es" ? "Producto 2" : "Product 2"}
            </span>
            <h3 className="mt-4 text-3xl font-bold text-gray-900">
              {contentHeading}
            </h3>
            <p className="mt-2 text-gray-600">{contentDescription}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h4 className="mb-4 text-xl font-bold text-gray-900">
                {locale === "es" ? "Características" : "Features"}
              </h4>
              <ul className="space-y-3 text-sm text-gray-700">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-[#ff55c6]"
                      aria-hidden
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-6 text-center">
                <div className="mb-2 text-5xl font-bold text-[#ff55c6]">
                  $20 USD
                </div>
                <p className="text-gray-600">
                  {locale === "es"
                    ? "por minuto finalizado"
                    : "per finished minute"}
                </p>
              </div>
              <Link
                href="mailto:a@camaral.ai"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff55c6] px-6 py-3 font-semibold text-white transition hover:bg-[#e04bb3]"
              >
                {locale === "es"
                  ? "Solicita una cotización"
                  : "Request a quote"}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactSectionProps {
  locale: Locale;
  heading: string;
  caption: string;
  ctas: Array<
    | { type: "link"; label: string; href: string }
    | { type: "contact"; label: string; detail: string }
  >;
}

function ContactSection({
  locale,
  heading,
  caption,
  ctas,
}: ContactSectionProps) {
  return (
    <section className="space-y-12">
      <SectionHeader title={heading} caption={caption} />
      <div className="grid gap-6 md:grid-cols-2">
        {ctas.map((cta) => (
          <div
            key={cta.type === "link" ? cta.href : cta.detail}
            className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-8 py-6 shadow-sm"
          >
            <div>
              <h3 className="font-bold text-gray-900">{cta.label}</h3>
              {cta.type === "contact" ? (
                <p className="text-sm text-gray-600">{cta.detail}</p>
              ) : (
                <p className="text-sm text-gray-600">
                  {locale === "es" ? "Contáctanos" : "Contact us"}
                </p>
              )}
            </div>
            {cta.type === "link" ? (
              <Link
                href={cta.href}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                className="inline-flex items-center gap-2 rounded-full bg-[#0dc7ff] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#06b6ef]"
              >
                {locale === "es" ? "Abrir" : "Open"}
                <span aria-hidden>↗</span>
              </Link>
            ) : (
              <Link
                href={`mailto:${cta.detail}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition hover:text-[#0dc7ff]"
              >
                {locale === "es" ? "Enviar correo" : "Email"}
                <span aria-hidden>→</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ title, caption }: { title: string; caption: string }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
        {title}
      </h2>
      <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
        {caption}
      </p>
    </div>
  );
}

interface LanguageModalProps {
  open: boolean;
  locale: Locale;
  onSelect: (locale: Locale) => void;
}

function LanguageModal({ open, locale, onSelect }: LanguageModalProps) {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setVisible(true);
    } else {
      const timeout = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [open]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm transition ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-8 rounded-3xl border border-gray-200 bg-white px-12 py-12 text-center shadow-2xl">
        <Image src="/Camaral.svg" alt="Camaral" width={140} height={28} />
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">
            Choose your language · Elige tu idioma
          </h2>
          <p className="text-sm text-gray-600">
            Select the language you want to experience Camaral in. / Selecciona
            el idioma en el que quieres vivir Camaral.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          {locales.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => onSelect(code)}
              className={`min-w-[160px] rounded-full px-8 py-3 font-semibold transition ${
                code === locale
                  ? "bg-[#0dc7ff] text-white shadow-lg"
                  : "border-2 border-gray-200 bg-white text-gray-900 hover:border-[#0dc7ff]"
              }`}
            >
              {code === "en" ? "English" : "Español"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
