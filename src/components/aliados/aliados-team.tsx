"use client";

import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  summary: string;
  highlights: string[];
  linkedin: string;
}

interface AliadosTeamProps {
  heading: string;
  caption: string;
  members: TeamMember[];
}

export function AliadosTeam({ heading, caption, members }: AliadosTeamProps) {
  const memberImages: Record<string, string> = {
    "Samuel Santa": "/samuel.jpeg",
    "Alan Arguello": "/alan.jpeg",
    "Octavio Razo": "/octavio.jpeg",
  };

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
  ];

  return (
    <section id="team" className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">{caption}</p>
        </div>

        {/* Team Grid */}
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

        {/* Companies Carousel */}
        <div className="relative mt-16 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

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
      </div>
    </section>
  );
}
