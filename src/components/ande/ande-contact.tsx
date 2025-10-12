"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

interface AndeContactProps {
  name: string;
  phone: string;
  email: string;
}

export function AndeContact({ name, phone, email }: AndeContactProps) {
  return (
    <section className="relative py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-ink)] mb-6 tracking-tight">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-[var(--brand-ink-muted)] max-w-2xl mx-auto leading-relaxed">
            Contáctanos por cualquiera de estos medios y comenzaremos la
            producción de inmediato
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto space-y-4"
        >
          <div className="bg-white rounded-xl p-6 border border-[var(--brand-border)]">
            <p className="text-sm text-[var(--brand-ink-muted)] mb-4">
              Tu contacto directo
            </p>
            <p className="text-2xl font-bold text-[var(--brand-ink)] mb-2">
              {name}
            </p>
            <p className="text-sm text-[var(--brand-ink-muted)] mb-6">
              Chief Revenue Officer
            </p>

            <div className="space-y-3">
              <a
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-[var(--brand-ink)] hover:text-[var(--color-cyan)] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[var(--color-cyan)]/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">{phone}</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-[var(--brand-ink)] hover:text-[var(--color-cyan)] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[var(--color-cyan)]/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">{email}</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16 pt-8 border-t border-[var(--brand-border)]"
        >
          <p className="text-sm text-[var(--brand-ink-muted)]">
            © {new Date().getFullYear()} Camaral. Todos los derechos
            reservados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
