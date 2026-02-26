"use client";

import Image from "next/image";
import {useEffect, useState} from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8b3b6d7c2a9e4f1b0c3d2e1f5a6b7c8d",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b7f018a2c1a2a0d9f4d6d3a9b8fb2d6",
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6",
];

export default function HeroOptionLeftCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % IMAGES.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-stretch">
        <div className="md:w-1/2 relative h-80 md:h-[64vh] overflow-hidden">
          {IMAGES.map((src, i) => (
            <Image
              key={src}
              src={src}
              width={1920}
              height={1080}
              alt={`room ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        <div className="md:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold">
              Choose with confidence — see & feel the difference in person.
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-200">
              We keep the process simple: samples laid out, clear pricing, and
              friendly guidance so you can leave with an idea and a next step.
            </p>

            <div className="mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                Reserve a 15‑minute showroom slot
              </button>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                We’ll prepare a short, focused tour so your visit is worth your
                time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
