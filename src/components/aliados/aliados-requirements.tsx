"use client";

import { motion } from "framer-motion";
import { FileImage, Mic, Brain } from "lucide-react";

interface AliadosRequirementsProps {
  heading: string;
  sections: Array<{
    title: string;
    items: string[];
  }>;
}

const icons = [FileImage, Mic, Brain];

export function AliadosRequirements({
  heading,
  sections,
}: AliadosRequirementsProps) {
  return (
    <section className="relative py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-ink)] mb-3 tracking-tight">
            {heading}
          </h2>
          <div className="w-16 h-1 bg-[var(--color-cyan)]" />
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, sectionIndex) => {
            const Icon = icons[sectionIndex] || Brain;
            return (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-cyan)]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[var(--color-cyan)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--brand-ink)]">
                    {section.title}
                  </h3>
                </div>

                <ul className="space-y-3 ml-16">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-[var(--brand-ink-muted)]"
                    >
                      <span className="text-[var(--color-cyan)] mt-1">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
