"use client"

import React from "react";
import { GiTiles, GiWoodPlank, FaVolumeUp, FiLayers, FaFlask } from "react-icons";
import {Tiles}

interface MaterialCard {
	title: string;
	description: string;
	icon: React.ComponentType<{ className: string }>;
}

const materials: MaterialCard[] = [
	{
		title: "Tile",
		description: "Perfect for kitchens, bathrooms, and high-moisture areas. Durable, easy to clean, and adds elegance.",
		icon: GiTiles,
	},
	{
		title: "Vinyl",
		description: "Waterproof and budget-friendly, ideal for kitchens and basements. Comfortable underfoot with realistic looks.",
		icon: FiLayers,
	},
	{
		title: "Laminate",
		description: "Affordable and durable option that mimics natural wood. Great for living areas and moderate-traffic zones.",
		icon: FaFlask,
	},
	{
		title: "Carpet",
		description: "Soft and warm, perfect for bedrooms and living rooms. Offers comfort and excellent sound insulation.",
		icon: FaVolumeUp,
	},
	{
		title: "Wood",
		description: "Timeless and luxurious, adds warmth to any space. Ideal for main living areas and premium finishes.",
		icon: GiWoodPlank,
	},
];

export default function SectionOption3() {
	return (
		<section className="w-full min-h-screen py-16 px-4 sm:px-8 bg-white">
			<div className="max-w-6xl mx-auto w-full">
				{/* Header */}
				<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 text-gray-900">
					Flooring Materials
				</h2>
				<p className="text-center text-gray-600 mb-16 text-lg">
					Explore our premium selection of flooring options for every space
				</p>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
					{materials.map((material) => {
						const Icon = material.icon;
						return (
							<div
								key={material.title}
								className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center hover:border-gray-300"
							>
								{/* Icon */}
								<div className="mb-6 text-5xl sm:text-6xl text-gray-800">
									<Icon className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" />
								</div>

								{/* Title */}
								<h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
									{material.title}
								</h3>

								{/* Description */}
								<p className="text-gray-700 text-sm sm:text-base leading-relaxed">
									{material.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
