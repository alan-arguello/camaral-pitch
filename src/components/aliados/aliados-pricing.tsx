"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

interface AliadosPricingProps {
  heading: string;
  description: string;
  plans: Array<{
    name: string;
    price: string;
    minutes: string;
    features: string[];
  }>;
  customization: {
    title: string;
    description: string;
    pricing: string;
  };
  videoProduction: {
    title: string;
    description: string;
    pricing: string[];
  };
}

export function AliadosPricing({
  heading,
  description,
  plans,
  customization,
  videoProduction,
}: AliadosPricingProps) {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--brand-ink)] mb-4 sm:mb-6 tracking-tight px-2">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-[var(--brand-ink-muted)] max-w-3xl mx-auto px-2">
            {description}
          </p>
        </motion.div>

        {/* Standard Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-[var(--color-cyan)] transition-colors"
            >
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--brand-ink)] mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-bold text-[var(--brand-ink)]">
                    {plan.price}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--brand-ink-muted)]">
                  {plan.minutes}
                </p>
              </div>

              <ul className="space-y-2 sm:space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-[var(--brand-ink-muted)]"
                  >
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-cyan)] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Customization Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-[var(--color-cyan)]/10 to-[var(--color-magenta)]/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-[var(--color-cyan)]/20"
        >
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--color-cyan)] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--brand-ink)] mb-2 sm:mb-3">
                {customization.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[var(--brand-ink-muted)] mb-3 sm:mb-4">
                {customization.description}
              </p>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-[var(--brand-ink)]">
                💰 {customization.pricing}
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[var(--brand-ink)]/10">
            <p className="text-xs sm:text-sm text-[var(--brand-ink-muted)] italic">
              * Los precios se ajustan según la complejidad del proyecto, tiempo de entrega requerido,
              y necesidades específicas del cliente. Trabajamos juntos para crear propuestas competitivas
              que maximicen el valor para todas las partes.
            </p>
          </div>
        </motion.div>

        {/* Video Production Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-[var(--color-magenta)]/10 to-[var(--color-cyan)]/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-[var(--color-magenta)]/20 mt-6 sm:mt-8"
        >
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--color-magenta)] flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--brand-ink)] mb-2 sm:mb-3">
                {videoProduction.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[var(--brand-ink-muted)] mb-4 sm:mb-6">
                {videoProduction.description}
              </p>
              <div className="space-y-2">
                {videoProduction.pricing.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5 sm:mt-1">
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-magenta)]" />
                    </div>
                    <p className="text-sm sm:text-base text-[var(--brand-ink)] font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
