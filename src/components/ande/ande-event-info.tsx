"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface AndeEventInfoProps {
  heading: string;
  items: string[];
}

export function AndeEventInfo({ heading, items }: AndeEventInfoProps) {
  return (
    <section className="relative py-32 bg-white">
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

        <div className="space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-6 h-6 mt-1">
                <Calendar className="w-6 h-6 text-[var(--color-cyan)]" />
              </div>
              <p className="text-lg text-[var(--brand-ink)] leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
