"use client";

import Link from "next/link";

interface AliadosMediaProps {
  heading: string;
  caption: string;
  items: Array<{ label: string; href: string }>;
}

export function AliadosMedia({ heading, caption, items }: AliadosMediaProps) {
  const videoFiles: Record<string, string> = {
    "Live interview with an AI avatar": "/entrevista.mp4",
    "Entrevista en vivo con un avatar de IA": "/entrevista.mp4",
    "Generating content by cloning personas": "/clon.mp4",
    "Generando contenido clonando personas": "/clon.mp4",
    "Replacing actors in video campaigns": "/clon2.mp4",
    "Reemplazo de actores en campañas de video": "/clon2.mp4",
  };

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-2">{caption}</p>
        </div>

        {/* Videos Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                <h3 className="mb-2 font-semibold text-gray-900 text-sm sm:text-base">
                  {item.label}
                </h3>
                <Link
                  href={item.href}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0dc7ff] transition hover:text-[#06b6ef]"
                >
                  Ver en LinkedIn
                  <span aria-hidden>↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
