"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSlide() {
  return (
    <div className="relative flex h-full w-full items-center bg-white">
      {/* Top bar stripe */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-[var(--color-cyan)]" />

      {/* Header */}
      <header className="absolute left-0 right-0 top-0 flex items-center justify-between px-12 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-magenta)] to-[var(--color-cyan)]">
            <div className="h-7 w-7 rounded-full bg-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-gray-900">Camaral</span>
        </div>
        <nav className="flex items-center gap-8">
          <Link href="#pricing" className="text-sm text-gray-700 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="https://cal.com/camaral/discovery-demo" target="_blank" className="text-sm text-gray-700 hover:text-gray-900">
            Get a demo
          </Link>
          <Link href="#login" className="text-sm text-gray-700 hover:text-gray-900">
            Login
          </Link>
          <Link
            href="https://cal.com/camaral/discovery-demo"
            target="_blank"
            className="rounded-full bg-[var(--color-cyan)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-cyan-hover)]"
          >
            Start free trial →
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-16 px-12 lg:grid-cols-2">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-8 flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-[var(--color-cyan)]" />
            <div className="h-6 w-6 rounded-full bg-[var(--color-magenta)]" />
            <div className="h-6 w-6 rounded-full bg-gray-900" />
          </div>

          <h1 className="mb-6 text-6xl font-bold leading-tight tracking-tight text-gray-900">
            AI Avatars that attend your{" "}
            <span className="inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-500">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                </svg>
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-green-500">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                </svg>
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-purple-500">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                </svg>
              </span>
            </span>{" "}
            meetings autonomously
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
            Camaral lets you create and deploy real-time AI avatars that join meetings, respond naturally, take notes, and follow agendas automatically.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://cal.com/camaral/discovery-demo"
              target="_blank"
              className="rounded-full bg-[var(--color-cyan)] px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-[var(--color-cyan-hover)]"
            >
              Start free trial →
            </Link>
            <Link
              href="#demo"
              className="rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition-all hover:border-gray-400"
            >
              Get a demo
            </Link>
          </div>
        </motion.div>

        {/* Right Column - Avatar Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Main Card */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 p-8 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
                {/* Placeholder for avatar video/image */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-[var(--color-magenta)] to-[var(--color-cyan)]" />
                    <p className="text-lg font-semibold text-gray-700">Samuel Santa</p>
                    <p className="text-sm text-gray-500">Founder at Camaral</p>
                  </div>
                </div>

                {/* Join Call Button */}
                <div className="absolute bottom-4 right-4">
                  <button className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                    </svg>
                    Join Call
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[var(--color-cyan)] opacity-20 blur-3xl" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-[var(--color-magenta)] opacity-20 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
