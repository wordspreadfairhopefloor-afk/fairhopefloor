import React from "react";

interface Material {
  name: string;
  description: string;
}

const materials: Material[] = [
  {
    name: "Wood",
    description:
      "Perfect for traditional and contemporary homes. Durable, warm, and timeless appeal for living spaces and bedrooms.",
  },
  {
    name: "Tile",
    description:
      "Ideal for kitchens, bathrooms, and high-moisture areas. Easy to clean and maintain with excellent durability.",
  },
  {
    name: "Laminate",
    description:
      "Budget-friendly and versatile option for any room. Resistant to stains and scratches with a wide variety of designs.",
  },
  {
    name: "Vinyl",
    description:
      "Waterproof and comfortable underfoot. Great for basements, kitchens, and commercial applications.",
  },
  {
    name: "Carpet",
    description:
      "Soft and comfortable for bedrooms and living areas. Excellent for sound absorption and warmth.",
  },
];

export default function MaterialsSection() {
  return (
    <section
      className="w-full bg-gray-900 py-12 md:py-16 lg:py-20"
      aria-labelledby="materials-section-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="materials-section-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          >
            Serving Baldwin and Mobile Counties since 1985
          </h2>
          <h3 className="mt-4 text-lg md:text-xl text-white">
            Explore our wide selection of quality flooring materials
          </h3>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
          role="list"
        >
          {materials.map(material => (
            <article
              key={material.name}
              className="bg-gray-800 rounded-lg p-6 md:p-8 min-h-48 sm:min-h-auto hover:bg-gray-700 focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-gray-900 transition-colors duration-300 flex flex-col"
              role="listitem"
              tabIndex={0}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {material.name}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-grow">
                {material.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
