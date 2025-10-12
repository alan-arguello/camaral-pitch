"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SlideDeckProps {
  children: React.ReactNode[];
}

export function SlideDeck({ children }: SlideDeckProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y",
    loop: false,
    duration: 25,
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        scrollNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollNext, scrollPrev]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full flex-col">
          {children.map((child, index) => (
            <div key={index} className="min-h-screen min-w-0 flex-[0_0_100%]">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={`flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition-all hover:scale-105 ${
            !canScrollPrev ? "cursor-not-allowed opacity-30" : "hover:border-[var(--color-cyan)]"
          }`}
          aria-label="Previous slide"
        >
          <ChevronUp className="h-5 w-5 text-gray-700" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={`flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition-all hover:scale-105 ${
            !canScrollNext ? "cursor-not-allowed opacity-30" : "hover:border-[var(--color-cyan)]"
          }`}
          aria-label="Next slide"
        >
          <ChevronDown className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 gap-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-[var(--color-cyan)]"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-8 left-8 z-50 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-lg">
        {currentSlide + 1} / {children.length}
      </div>
    </div>
  );
}

export function Slide({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex h-screen w-full items-center justify-center ${className}`}>
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
