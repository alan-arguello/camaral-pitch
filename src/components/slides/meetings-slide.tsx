"use client";

import { motion } from "framer-motion";
import { Calendar, Video } from "lucide-react";

export function MeetingsSlide() {
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
          <button className="rounded-full bg-[var(--color-cyan)] px-5 py-2.5 text-sm font-semibold text-white">
            Start free trial
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h1 className="mb-6 text-6xl font-bold leading-tight tracking-tight text-gray-900">
              Deploy real time AI Avatars in your meetings
            </h1>
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-gray-900 px-6 py-3 font-semibold text-white transition-all hover:bg-gray-800">
                Talk to sales
              </button>
              <button className="rounded-full bg-[var(--color-cyan)] px-6 py-3 font-semibold text-white transition-all hover:bg-[var(--color-cyan-hover)]">
                Start free trial
              </button>
            </div>
          </motion.div>

          {/* Right Column - Meeting Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border-4 border-[var(--color-cyan)] bg-gray-900 shadow-2xl">
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 p-6">
                {/* Meeting participant */}
                <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
                      <p className="text-xl font-semibold text-gray-800">Roger Wallace</p>
                      <p className="text-sm text-gray-600">English Teacher</p>
                    </div>
                  </div>

                  {/* Join Call Button */}
                  <div className="absolute bottom-6 right-6">
                    <button className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105">
                      <Video className="h-5 w-5" />
                      Join Call
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Meeting List */}
            <div className="absolute -right-8 top-1/2 w-80 -translate-y-1/2 space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
                <h3 className="mb-3 text-sm font-semibold text-gray-500">Upcoming</h3>
                <div className="mb-3 flex items-start gap-3 rounded-lg bg-blue-50 p-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Kick Off Meeting</p>
                    <p className="text-xs text-gray-600">5:00 p.m. to 6:30 p.m.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg p-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500">
                    <Video className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Fintech Summit</p>
                    <p className="text-xs text-gray-600">7:30 p.m. to 8:45 p.m.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
                <h3 className="mb-3 text-sm font-semibold text-gray-500">Now</h3>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-500">
                      <Video className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Deploy Invoices (Pro...</p>
                      <p className="text-xs text-gray-600">Now</p>
                    </div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500">
                      <Video className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Lab10 + Lovable</p>
                      <p className="text-xs text-gray-600">Now</p>
                    </div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500">
                      <Video className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Sales Meeting</p>
                      <p className="text-xs text-gray-600">Now</p>
                    </div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
                <h3 className="mb-3 text-sm font-semibold text-gray-500">Past</h3>
                <div className="mb-2 flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Onboarding call</p>
                    <p className="text-xs text-gray-600">1:30 p.m. to 1:45 p.m.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500">
                    <Video className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Luna Daily</p>
                    <p className="text-xs text-gray-600">2:00 p.m. to 2:30 p.m.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
