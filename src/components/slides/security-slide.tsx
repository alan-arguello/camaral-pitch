"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Database } from "lucide-react";

export function SecuritySlide() {
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
          <span className="text-sm text-gray-700">Pricing</span>
          <span className="text-sm text-gray-700">Get a demo</span>
          <span className="text-sm text-gray-700">Login</span>
          <button className="rounded-full bg-[var(--color-cyan)] px-5 py-2.5 text-sm font-semibold text-white">
            Start free trial →
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-6xl font-bold leading-tight tracking-tight text-gray-900">
              Enterprise-grade security & privacy
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              We take security and compliance seriously. Chatbase is SOC 2 Type II and GDPR compliant, trusted by thousands of businesses to build secure and compliant AI Agents.
            </p>

            {/* SOC2 and GDPR Badges */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                <div className="text-center">
                  <div className="text-xs font-bold text-gray-700">AICPA</div>
                  <div className="text-2xl font-bold text-gray-900">SOC 2</div>
                </div>
              </div>
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                <div className="text-center">
                  <Shield className="mx-auto h-8 w-8 text-gray-700" />
                  <div className="mt-1 text-xs font-bold text-gray-700">GDPR</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center gap-6"
          >
            {/* Card 1: Data Privacy */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200">
                  <Lock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Your data stays yours</h3>
              </div>
              <p className="text-base leading-relaxed text-gray-600">
                Your data is only accessible to your AI Avatar and is never used to train models.
              </p>
            </div>

            {/* Card 2: Encryption */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200">
                  <Database className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Data encryption</h3>
              </div>
              <p className="text-base leading-relaxed text-gray-600">
                All data is encrypted at rest and in transit. We use industry-standard encryption algorithms.
              </p>
            </div>

            {/* Card 3: Secure Integrations */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200">
                  <Shield className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Secure integrations</h3>
              </div>
              <p className="text-base leading-relaxed text-gray-600">
                We use verified variables to ensure users can access only their own data in your systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
