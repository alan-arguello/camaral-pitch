"use client";

import { motion } from "framer-motion";
import {
  Search,
  FileText,
  Presentation,
  DollarSign,
} from "lucide-react";

interface AliadosHowItWorksProps {
  heading: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
}

const icons = [Search, FileText, Presentation, DollarSign];

export function AliadosHowItWorks({
  heading,
  steps,
}: AliadosHowItWorksProps) {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--brand-ink)] mb-3 tracking-tight px-2">
            {heading}
          </h2>
          <div className="w-16 h-1 bg-[var(--color-cyan)] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--color-cyan)]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-cyan)]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <span className="text-xs sm:text-sm font-bold text-[var(--color-cyan)]">
                        Paso {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--brand-ink)] mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--brand-ink-muted)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
