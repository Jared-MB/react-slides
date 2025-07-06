"use client";

import type { Slide } from "../stores/slides.store";

import { useFullScreen } from "../hooks/useFullScreen";
import { SlidesPreview } from "./slides-preview";

export function Presentation({
	children,
	slides,
}: {
	children: React.ReactNode;
	slides: Slide[];
}) {
	const { isFullScreen } = useFullScreen();

	return (
		<div
			className={`grid ${isFullScreen ? "grid-cols-1" : "grid-cols-[25%_1fr]"}`}
		>
			<SlidesPreview components={slides} />
			{children}
		</div>
	);
}
