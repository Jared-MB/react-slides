"use client";

import { useParams } from "next/navigation";
import { ViewTransition } from "./view-transition";
import { usePresentation } from "../providers/presentation-provider";

export function CurrentSlide() {
	const params = useParams();
	const { slides } = usePresentation();

	const slideNumber = Number(params.slide);
	const currentSlide = slides[slideNumber - 1];

	if (!currentSlide) {
		return <div className="h-full">No slide found</div>;
	}

	return (
		<ViewTransition name="current-slide">
			<div className="h-full">{currentSlide.component}</div>
		</ViewTransition>
	);
}
