"use client";

import Image from "next/image";
import Link from "next/link";

interface Investor {
  name: string;
  title: string;
  highlights: string[];
  linkedin: string;
}

interface AliadosInvestorsProps {
  heading: string;
  caption: string;
  people: Investor[];
}

export function AliadosInvestors({
  heading,
  caption,
  people,
}: AliadosInvestorsProps) {
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
    <section className="relative py-16 sm:py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-2">{caption}</p>
        </div>

        {/* Investors Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {people.map((investor) => (
            <article
              key={investor.name}
              className="flex h-full flex-col gap-4 sm:gap-6 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 overflow-hidden rounded-xl border-2 border-gray-200">
                    <Image
                      src={investorImages[investor.name] || "/andres.png"}
                      alt={investor.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      {investor.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">{investor.title}</p>
                  </div>
                </div>
                <div className="flex h-10 w-16 sm:h-12 sm:w-20 flex-shrink-0 items-center justify-center">
                  <Image
                    src={companyLogos[investor.name] || "/rappi.svg.png"}
                    alt={`${investor.name} company`}
                    width={80}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <ul className="flex flex-1 flex-col gap-2 sm:gap-3 text-xs sm:text-sm leading-snug text-gray-700">
                {investor.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 sm:mt-2 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-[#0dc7ff]"
                      aria-hidden
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={investor.linkedin}
                target="_blank"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-900 transition hover:text-[#0dc7ff]"
              >
                LinkedIn
                <span aria-hidden>↗</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
