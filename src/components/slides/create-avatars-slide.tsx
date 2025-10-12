"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function CreateAvatarsSlide() {
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
      </header>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-12">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-6xl font-bold leading-tight tracking-tight text-gray-900">
            Create AI avatars that look real, sound natural
            <br />
            and participate meaningfully in live meetings
          </h1>
        </motion.div>

        {/* Three Column Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-8"
        >
          {/* Column 1: Create */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-pink-50 to-white p-8 shadow-sm">
              <div className="mb-6 flex items-center justify-center">
                <div className="relative">
                  <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-white shadow-lg">
                    <Sparkles className="h-16 w-16 text-[var(--color-magenta)]" />
                  </div>
                  <div className="absolute -right-2 -top-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-magenta)] to-[var(--color-cyan)]">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Platform Icons */}
              <div className="mb-6 flex items-center justify-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                  <span className="text-xs font-bold text-white">Z</span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500">
                  <span className="text-xs font-bold text-white">M</span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500">
                  <span className="text-xs font-bold text-white">T</span>
                </div>
              </div>

              <div className="mb-4 flex items-center justify-center">
                <button className="flex items-center gap-2 rounded-full border-2 border-dashed border-[var(--color-cyan)] bg-[var(--color-cyan)]/10 px-6 py-3 font-semibold text-[var(--color-cyan)] transition-all hover:bg-[var(--color-cyan)]/20">
                  <Sparkles className="h-5 w-5" />
                  Create avatar
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Create realistic avatars in seconds</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Create AI Avatars that look and sound real with unique appearances and voices. Powered by the smartest AI models available.
              </p>
            </div>
          </div>

          {/* Column 2: Train */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-orange-50 to-white p-8 shadow-sm">
              <div className="mb-6 flex items-center justify-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-3xl bg-gradient-to-br from-orange-300 to-yellow-300 shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-white/50" />
                  </div>
                </div>
              </div>

              {/* Knowledge Sources */}
              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-green-500">
                    <span className="text-xs font-bold text-white">D</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Google Drive</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-800">
                    <span className="text-xs font-bold text-white">N</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Notion</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-red-500">
                    <span className="text-xs font-bold text-white">P</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">PDF Files</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Give them knowledge and powers</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Train your avatars with business knowledge, assign their roles, and connect it with 50+ apps for enhanced capabilities.
              </p>
            </div>
          </div>

          {/* Column 3: Deploy */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
              <div className="mb-6 flex items-center justify-center">
                <div className="relative">
                  <div className="h-32 w-32 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg">
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl font-bold">AI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Grid */}
              <div className="mb-6 grid grid-cols-3 gap-2">
                <div className="flex h-12 items-center justify-center rounded-lg bg-purple-500">
                  <span className="text-xs font-bold text-white">Teams</span>
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-green-500">
                  <span className="text-xs font-bold text-white">Meet</span>
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-blue-500">
                  <span className="text-xs font-bold text-white">Zoom</span>
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-gray-800">
                  <span className="text-xs font-bold text-white">Slack</span>
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-orange-500">
                  <span className="text-xs font-bold text-white">Cal</span>
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-red-500">
                  <span className="text-xs font-bold text-white">Plus</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-gray-900">Deploy on every platform you use</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Connect your calendar and let your avatar join meetings on Zoom, Teams, Meets, Slack, and 50+ other platforms instantly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
