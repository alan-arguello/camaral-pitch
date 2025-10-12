"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

interface Investor {
  name: string;
  title: string;
  highlights: string[];
  linkedin: string;
}

interface AndeInvestorsProps {
  heading: string;
  caption: string;
  people: Investor[];
}

const investorImages: Record<string, string> = {
  "Andrés Bilbao": "/andres.png",
  "Martha Hurtado": "/martha.jpeg",
  "Alberto Aramayo": "/alberto.jpeg",
};

export function AndeInvestors({
  heading,
  caption,
  people,
}: AndeInvestorsProps) {
  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-ink)] mb-6 tracking-tight">
            {heading}
          </h2>
          <p className="text-xl text-[var(--brand-ink-muted)] leading-relaxed">
            {caption}
          </p>
          <div className="w-16 h-1 bg-[var(--color-cyan)] mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {people.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-50 rounded-xl overflow-hidden border border-[var(--brand-border)] hover:border-[var(--color-cyan)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full aspect-square bg-gray-200 overflow-hidden">
                <Image
                  src={investorImages[person.name] || "/placeholder.jpg"}
                  alt={person.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[var(--brand-ink)] mb-1">
                    {person.name}
                  </h3>
                  <p className="text-sm text-[var(--brand-ink-muted)] font-medium">
                    {person.title}
                  </p>
                </div>

                <div className="space-y-2">
                  {person.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="flex items-start gap-2 text-xs text-[var(--brand-ink-muted)]"
                    >
                      <div className="flex-shrink-0 w-1 h-1 bg-[var(--color-cyan)] rounded-full mt-1.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--brand-ink)] hover:text-[var(--color-cyan)] font-medium transition-colors text-sm pt-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
