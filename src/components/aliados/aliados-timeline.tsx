"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface AliadosTimelineProps {
  heading: string;
  items: Array<{
    phase: string;
    duration: string;
    description: string;
  }>;
}

export function AliadosTimeline({ heading, items }: AliadosTimelineProps) {
  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-ink)] mb-3 tracking-tight">
            {heading}
          </h2>
          <div className="w-16 h-1 bg-[var(--color-cyan)] mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--color-cyan)]/20 hidden md:block" />

          <div className="space-y-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 items-start"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex w-16 h-16 rounded-full bg-[var(--color-cyan)] items-center justify-center flex-shrink-0 relative z-10">
                  <Clock className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-[var(--brand-ink)]">
                      {item.phase}
                    </h3>
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] font-semibold text-sm">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-[var(--brand-ink-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
