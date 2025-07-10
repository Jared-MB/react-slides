"use client";

import { useSlides, type Slide } from "../stores/slides.store";

import { useFullScreen } from "../hooks/useFullScreen";
import { SlidesPreview } from "./slides-preview";
import { useEffect } from "react";

export function Presentation({
	children,
	slides,
}: {
	children: React.ReactNode;
	slides: Slide[];
}) {
	const { isFullScreen } = useFullScreen();
	const { setSlides } = useSlides();

	useEffect(() => {
		setSlides(slides);
	}, [slides]);

	return (
		<div
			className={`h-full grid ${isFullScreen ? "grid-cols-1" : "grid-cols-[25%_1fr]"}`}
		>
			<SlidesPreview />
			{children}
		</div>
	);
}
