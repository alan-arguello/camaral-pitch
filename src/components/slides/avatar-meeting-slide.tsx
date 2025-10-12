"use client";

import { motion } from "framer-motion";
import { Video, Calendar } from "lucide-react";

export function AvatarMeetingSlide() {
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
          <button className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-400">
            Talk to sales
          </button>
          <button className="rounded-full bg-[var(--color-cyan)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-cyan-hover)]">
            Start free trial
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Avatar Creation Flow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-pink-50 via-white to-white p-8 shadow-lg">
              {/* Avatar Creation */}
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600" />
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600" />
                </div>
              </div>

              <div className="mb-6 flex items-center justify-center">
                <button className="flex items-center gap-2 rounded-full border-2 border-dashed border-[var(--color-cyan)] bg-white px-8 py-4 text-lg font-semibold text-[var(--color-cyan)] shadow-sm transition-all hover:bg-[var(--color-cyan)]/5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-magenta)] to-[var(--color-cyan)]">
                    <span className="text-white">+</span>
                  </div>
                  Create avatar
                </button>
              </div>

              {/* Calendar Integration */}
              <div className="mb-4 flex items-center justify-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Create and deploy your AI avatar</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Design your real-time AI avatar in seconds, connect it to your calendar and deploy it to take meetings on your behalf.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Live Meeting */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
              {/* Video Feed */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
                <div className="flex h-full items-center justify-center p-8">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-purple-500 ring-4 ring-white" />
                    <p className="text-xl font-semibold text-gray-800">AI Avatar</p>
                    <p className="text-sm text-gray-600">In meeting</p>
                  </div>
                </div>

                {/* Recording Badge */}
                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 backdrop-blur">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                  <span className="text-sm font-semibold text-white">Recording</span>
                </div>

                {/* Avatar Controls */}
                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-br from-green-400 to-blue-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Your avatar handles meetings in real time</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                The AI avatar joins calls, responds naturally, takes notes, and follows your agenda—just like a human assistant would.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
