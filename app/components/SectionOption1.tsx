"use client"

import React from "react";
import ScrollWheel from "./ScrollWheel";

export default function SectionOption1() {
	const yearsInBusiness = 40; // adjust as needed

	return (
		<section className="w-full min-h-screen py-16 px-8 bg-white flex items-center relative">
			{/* Background image */}
			<div
				className="absolute inset-0 opacity-80"
				style={{
					backgroundImage: "url('/boardwallpaper.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed"
				}}
			/>
			<div className="max-w-6xl mx-auto w-full relative z-10">
				{/* Header */}
				<h2 className="text-6xl font-bold text-center mb-16 text-gray-900">
					{yearsInBusiness} Years Dedicated to Giving You the Best of...
				</h2>

				{/* Two-column layout: Text on left, ScrollWheel on right */}
				<div className="flex gap-12 items-center">
					{/* Left: Text content */}
					<div className="flex-1">
						<p className="text-2xl text-gray-900 leading-relaxed mb-8 font-semibold">
							With over {yearsInBusiness} years of expertise, we've perfected the art of flooring.
							From luxurious tile to warm wood, durable carpet to practical laminate, and modern vinyl—
							we offer the finest selection to elevate your space.
						</p>
						<p className="text-xl text-gray-800 leading-relaxed">
							Our commitment to quality ensures every floor tells your story.
						</p>
					</div>

					{/* Right: ScrollWheel */}
					<div className="flex-1 flex justify-center">
						<ScrollWheel />
					</div>
				</div>
			</div>
		</section>
	);
}
