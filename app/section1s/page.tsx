"use client"

import SectionOption1 from "../components/SectionOption1";
import SectionOption2 from "../components/SectionOption2";

export default function SectionCatalog() {
	return (
		<main className="w-full">
			{/* Option 1: With ScrollWheel - Full screen */}
			<div className="w-full min-h-screen flex flex-col">
				<SectionOption1 />
			</div>

			{/* Option 2: Expandable Cards Grid - Full screen */}
			<div className="w-full min-h-screen flex flex-col">
				<SectionOption2 />
			</div>
		</main>
	);
}
