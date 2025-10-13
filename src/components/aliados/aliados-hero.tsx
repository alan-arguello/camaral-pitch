"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AliadosHeroProps {
  clientName: string;
  greeting: string;
  subtitle: string;
}

export function AliadosHero({
  clientName,
  greeting,
  subtitle,
}: AliadosHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--brand-bg)]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-16"
        >
          {/* Dual Logos - White Lion + Camaral */}
          <div className="flex items-center justify-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative w-48 h-24 md:w-56 md:h-28"
            >
              <Image
                src="/whitelion.png"
                alt="White Lion"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="h-px w-12 bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-magenta)]"></div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Partner
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-[var(--color-magenta)] to-[var(--color-cyan)]"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative w-48 h-24 md:w-56 md:h-28"
            >
              <Image
                src="/Camaral.svg"
                alt="Camaral"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </motion.div>
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-[var(--brand-ink)] leading-tight tracking-tight"
            >
              {greeting}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-[var(--brand-ink-muted)] max-w-3xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6"
          >
            <button
              onClick={() => {
                document
                  .getElementById("benefits")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 bg-[var(--brand-ink)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[var(--brand-ink)]/90 transition-all duration-200"
            >
              Ver solución completa
              <svg
                className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
