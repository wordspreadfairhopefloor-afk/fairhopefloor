"use client";

import {useEffect, useState} from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b7f018a2c1a2a0d9f4d6d3a9b8fb2d6",
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d",
];

export default function HeroOptionSplit() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % IMAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-stretch">
        <div className="md:w-1/2 h-80 md:h-[64vh] relative overflow-hidden">
          {IMAGES.map((src, i) => (
            <img
              key={src}
              src={src}
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
              Imagine walking into a room that already feels like "you".
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-200">
              Bring in a sketch or just your ideas — we’ll match the right
              materials and lay out options you can experience in person.
            </p>

            <div className="mt-6">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md font-medium">
                Schedule a quick showroom walk-through
              </button>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Short, friendly, and focused — we help you make decisions
                faster.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
