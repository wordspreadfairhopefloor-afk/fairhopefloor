"use client"

import React, { useEffect, useState } from "react";

export default function ScrollWheel() {
	const words = ["Tile", "Wood", "Carpet", "Laminate", "Vinyl"];
	const items = [...words, ...words]; // duplicate for seamless loop

	const [index, setIndex] = useState(0);
	const [transitionEnabled, setTransitionEnabled] = useState(true);
	const [isLarge, setIsLarge] = useState(false);

	const moveDuration = 800; // ms for ease-in-out transition
	const pauseDuration = 1000; // ms pause before next move

	// Determine text size and item height based on viewport width
	const textSize = isLarge ? "text-8xl" : "text-4xl";
	const itemHeight = isLarge ? 320 : 160; // doubled for 8xl, original for 4xl
	const containerHeight = isLarge ? 360 : 180; // proportional to item height

	useEffect(() => {
		const handleResize = () => {
			setIsLarge(window.innerWidth > 1080);
		};

		// Check on mount
		handleResize();

		// Listen for resize events
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const advance = () => {
			setIndex((prev) => {
				const next = prev + 1;
				// seamless loop: when we reach the middle (5), jump back to 0 without transition
				if (next === words.length) {
                    setIndex(0);
					return next;
				}
				return next;
			});
		};

		// total cycle: move + pause
		const interval = setInterval(advance, moveDuration + pauseDuration);
		return () => clearInterval(interval);
	}, [words.length]);

	return (
		<div className="relative w-[50vw] mx-auto">
			<div className={`overflow-hidden relative flex items-center justify-center transition-all duration-300`} style={{ height: `${containerHeight}px` }}>
				{/* Scrolling items container */}
				<div
					className={`flex flex-col items-center justify-bottom w-full ${
						transitionEnabled ? "transition-all duration-[800ms] ease-in-out" : ""
					}`}
					style={{
						transform: `translateY(${-index * itemHeight - (itemHeight / 2)}px)`,
					}}
				>
					{items.map((word, idx) => (
						<div
							key={idx}
							className={`w-full flex items-center justify-center flex-shrink-0`}
							style={{ height: `${itemHeight}px` }}
						>
							<span className={`${textSize} font-extrabold uppercase text-center`}>
								{word}
							</span>
						</div>
					))}
				</div>

				{/* Top fade gradient */}
				<div className="absolute top-0 left-0 right-0 h-1/4 pointer-events-none bg-gradient-to-b from-black/0 to-transparent" />
				{/* Bottom fade gradient */}
				<div className="absolute bottom-0 left-0 right-0 h-1/4 pointer-events-none bg-gradient-to-t from-black/0 to-transparent" />
			</div>
		</div>
	);
}
