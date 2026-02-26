"use client"

import React, { useRef, useState, useEffect } from "react";

const materials = ["Tile", "Wood", "Carpet", "Laminate", "Vinyl"];

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b7f018a2c1a2a0d9f4d6d3a9b8fb2d6",
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d",
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=e1f2d3c4b5a69788796a5b4c3d2e1f0a"
];

interface CardProps {
	material: string;
	imageUrl: string;
}

function ExpandableCard({ material, imageUrl }: CardProps) {
	const cardRef = useRef<HTMLDivElement>(null);
	const [isObservedMobile, setIsObservedMobile] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [isMobile, setIsMobile] = useState(true);

	// Detect screen size
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768); // md breakpoint is 768px
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // Check on mount

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Mobile: scroll-based scaling (middle 30% of viewport)
	useEffect(() => {
		if (!isMobile) return;

		const handleScroll = () => {
			if (!cardRef.current) return;

			const cardRect = cardRef.current.getBoundingClientRect();
			const viewportHeight = window.innerHeight;
			const cardCenter = cardRect.top + cardRect.height / 2;

			// Middle 20% of the viewport (from 40% to 60%)
			const topThreshold = viewportHeight * 0.4;
			const bottomThreshold = viewportHeight * 0.6;

			if (cardCenter >= topThreshold && cardCenter <= bottomThreshold) {
				setIsObservedMobile(true);
			} else {
				setIsObservedMobile(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Call on mount

		return () => window.removeEventListener("scroll", handleScroll);
	}, [isMobile]);

	// Determine scale based on screen size and state
	const scale = isMobile 
		? (isObservedMobile ? "scale-125" : "scale-100")
		: (isHovered ? "scale-110" : "scale-100");

	return (
		<div
			ref={cardRef}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={`relative overflow-hidden cursor-pointer transition-transform duration-500 ease-out w-full h-48 md:h-64 md:w-64 md:aspect-square ${scale}`}
			style={{
				backgroundImage: `url('${imageUrl}')`,
				backgroundSize: "cover",
				backgroundPosition: "center"
			}}
		>
			{/* Transparent black overlay */}
			<div className="absolute inset-0 opacity-50 bg-black" />

			{/* Label text */}
			<div className="absolute inset-0 flex items-center justify-center">
				<h3 className="text-2xl md:text-4xl font-bold text-white text-center drop-shadow-lg">
					{material}
				</h3>
			</div>
		</div>
	);
}

export default function SectionOption2() {
	const yearsInBusiness = 25;

	return (
		<section className="w-full min-h-screen py-16 px-8 bg-white flex flex-col relative">
			{/* Background image */}
			<div
				className="absolute inset-0 opacity-10"
				style={{
					backgroundImage: "url('/boardwallpaper.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			{/* Header - constrained width */}
			<div className="max-w-6xl mx-auto w-full relative z-10 mb-12">
				<h2 className="text-6xl font-bold text-center mb-4 text-gray-900">
					{yearsInBusiness} Years Dedicated to Giving You the Best of...
				</h2>
				<p className="text-center text-2xl text-gray-800 font-semibold">
					Explore our premium flooring materials
				</p>
			</div>

			{/* Grid of 5 cards - full width mobile (no gap), fixed size desktop (with gap) */}
			<div className="w-full flex flex-col md:flex-row md:gap-6 md:justify-center md:items-center md:flex-wrap relative z-10 flex-1">
				{materials.map((material, idx) => (
					<div key={material} className="w-full md:w-auto md:flex md:justify-center md:items-center">
						<ExpandableCard
							material={material}
							imageUrl={images[idx]}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
