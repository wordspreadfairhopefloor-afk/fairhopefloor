"use client";

import {useEffect, useState, useRef} from "react";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b7f018a2c1a2a0d9f4d6d3a9b8fb2d6",
    alt: "Modern light wood flooring in a bright living room with large windows",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=8b3b6d7c2a9e4f1b0c3d2e1f5a6b7c8d",
    alt: "Dark hardwood flooring in an elegant dining room with contemporary furniture",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=1c8f9d9a1e4b6c7d8e9f0a1b2c3d4e5f",
    alt: "Neutral tile flooring in a bathroom with spa-like ambiance and modern fixtures",
  },
  {
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d",
    alt: "Warm ceramic tile in a kitchen with natural lighting and modern design",
  },
];

export default function HeroOptionFull() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!autoplay) return;

    autoplayIntervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % IMAGES.length);
    }, 4500);

    return () => {
      if (autoplayIntervalRef.current)
        clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay]);

  const handlePrevious = () => {
    setIndex(i => (i - 1 + IMAGES.length) % IMAGES.length);
    setAutoplay(false);
  };

  const handleNext = () => {
    setIndex(i => (i + 1) % IMAGES.length);
    setAutoplay(false);
  };

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
    setAutoplay(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrevious();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  const handleVisitStore = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="w-full relative"
      aria-label="Featured flooring showcase carousel"
    >
      <div
        className="relative w-full h-[72vh] overflow-hidden"
        onKeyDown={handleKeyDown}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured flooring gallery"
      >
        {/* Carousel Images */}
        {IMAGES.map((image, i) => (
          <img
            key={i}
            src={image.src}
            alt={image.alt}
            aria-hidden={i !== index}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{left: 0}}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Durable, Beautiful Floors -- Measured, Installed, and Guaranteed.
          </h1>
          <p className="mt-4 text-white/90 max-w-xl text-lg">
            Explore our carefully chosen flooring and tile in person — see how
            light, texture, and scale combine to make a room feel like you.
          </p>

          <div className="mt-6">
            <button
              onClick={handleVisitStore}
              className="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white px-5 py-3 rounded-md font-medium shadow transition-colors"
              aria-label="Visit our showroom"
            >
              Visit Our Store
            </button>
            <div className="mt-2 text-sm text-white/80">
              No pressure — drop in or reserve a quick consult.
            </div>
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white text-white p-3 rounded-full transition-colors"
          aria-label={`View previous image. Currently showing image ${
            index + 1
          } of ${IMAGES.length}`}
          type="button"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white text-white p-3 rounded-full transition-colors"
          aria-label={`View next image. Currently showing image ${
            index + 1
          } of ${IMAGES.length}`}
          type="button"
        >
          <span aria-hidden="true">›</span>
        </button>

        {/* Slide Indicators */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10"
          role="tablist"
          aria-label="Slide selection"
        >
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`transition-all focus:outline-none focus:ring-2 focus:ring-white ${
                i === index ? "bg-white w-8 h-2" : (
                  "bg-white/50 hover:bg-white/70 w-2 h-2"
                )
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
              role="tab"
              type="button"
            />
          ))}
        </div>

        {/* Live Region for Screen Readers */}
        <div
          className="sr-only"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {`Showing image ${index + 1} of ${IMAGES.length}: ${
            IMAGES[index].alt
          }`}
        </div>
      </div>
    </section>
  );
}
