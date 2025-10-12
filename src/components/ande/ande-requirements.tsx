"use client";

import { motion } from "framer-motion";

interface AndeRequirementsProps {
  heading: string;
  sections: Array<{
    title: string;
    items: string[];
  }>;
}

export function AndeRequirements({
  heading,
  sections,
}: AndeRequirementsProps) {
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
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-[var(--brand-ink)] mb-6">
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-[var(--brand-ink-muted)]"
                  >
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-[var(--color-cyan)] rounded-full mt-2.5" />
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
