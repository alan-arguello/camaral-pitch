"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  summary: string;
  highlights: string[];
  linkedin: string;
  image?: string;
}

interface AndeTeamProps {
  heading: string;
  caption: string;
  members: TeamMember[];
}

const memberImages: Record<string, string> = {
  "Samuel Santa": "/samuel.jpeg",
  "Alan Arguello": "/alan.jpeg",
  "Octavio Razo": "/octavio.jpeg",
};

export function AndeTeam({ heading, caption, members }: AndeTeamProps) {
  return (
    <section id="team" className="relative py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-ink)] mb-6 tracking-tight">
            {heading}
          </h2>
          <p className="text-xl text-[var(--brand-ink-muted)] leading-relaxed">
            {caption}
          </p>
          <div className="w-16 h-1 bg-[var(--color-cyan)] mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden border border-[var(--brand-border)] hover:border-[var(--color-cyan)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src={memberImages[member.name] || "/placeholder.jpg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[var(--brand-ink)] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[var(--brand-ink-muted)] font-medium">
                    {member.role}
                  </p>
                </div>

                <p className="text-sm text-[var(--brand-ink-muted)] leading-relaxed">
                  {member.summary}
                </p>

                <div className="space-y-2 pt-2">
                  {member.highlights.slice(0, 2).map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="flex items-start gap-2 text-xs text-[var(--brand-ink-muted)]"
                    >
                      <div className="flex-shrink-0 w-1 h-1 bg-[var(--color-cyan)] rounded-full mt-1.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--brand-ink)] hover:text-[var(--color-cyan)] font-medium transition-colors text-sm pt-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
