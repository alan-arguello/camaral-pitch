"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface AndePricingProps {
  heading: string;
  amount: string;
  paymentLink: string;
  note: string;
}

export function AndePricing({
  heading,
  amount,
  paymentLink,
  note,
}: AndePricingProps) {
  return (
    <section className="relative py-32 bg-[var(--brand-ink)]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            {heading}
          </h2>
          <div className="w-16 h-1 bg-[var(--color-cyan)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Price Display */}
          <div className="text-center py-12">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4 font-semibold">
              Inversión Total
            </p>
            <p className="text-7xl md:text-8xl font-bold text-white">
              {amount}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-6">
            <a
              href={paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[var(--color-cyan)] text-[var(--brand-ink)] px-10 py-5 rounded-full font-bold text-lg hover:bg-[var(--color-cyan-hover)] transition-all duration-200"
            >
              Proceder al pago
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-gray-400 text-sm text-center max-w-2xl">
              También puedes pagar mediante transferencia bancaria o consultar
              otras opciones en la factura adjunta
            </p>
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-t border-white/10 pt-8"
          >
            <p className="text-gray-300 text-center text-lg leading-relaxed">
              {note}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
