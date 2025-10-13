"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface AliadosPartnershipProps {
  heading: string;
  whiteLion: {
    title: string;
    description: string;
    strengths: string[];
  };
  camaral: {
    title: string;
    description: string;
    strengths: string[];
  };
}

export function AliadosPartnership({
  heading,
  whiteLion,
  camaral,
}: AliadosPartnershipProps) {
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
          {/* White Lion Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-12 sm:w-24 sm:h-16">
                <Image
                  src="/whitelion.png"
                  alt="White Lion"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--brand-ink)] mb-2">
              {whiteLion.title}
            </h3>
            <p className="text-[var(--color-cyan)] font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
              {whiteLion.description}
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {whiteLion.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-cyan)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--brand-ink-muted)] text-sm sm:text-base">
                    {strength}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Camaral Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-24 h-12 sm:w-32 sm:h-16">
                <Image
                  src="/Camaral.svg"
                  alt="Camaral"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--brand-ink)] mb-2">
              {camaral.title}
            </h3>
            <p className="text-[var(--color-magenta)] font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
              {camaral.description}
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {camaral.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-magenta)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--brand-ink-muted)] text-sm sm:text-base">
                    {strength}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-12 bg-gradient-to-br from-[var(--color-cyan)]/10 to-[var(--color-magenta)]/10 rounded-2xl p-6 sm:p-8 text-center"
        >
          <p className="text-sm sm:text-base md:text-lg text-[var(--brand-ink)] leading-relaxed">
            <span className="font-bold">Juntos</span>, combinamos la{" "}
            <span className="text-[var(--color-cyan)] font-semibold">
              experiencia local y capacidad de ejecución de White Lion
            </span>{" "}
            con la{" "}
            <span className="text-[var(--color-magenta)] font-semibold">
              tecnología de vanguardia de Camaral
            </span>
            , garantizando implementaciones exitosas con el mejor soporte del
            mercado.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
