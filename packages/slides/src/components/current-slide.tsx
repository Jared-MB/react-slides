"use client";

import { useParams } from "next/navigation";
import { useSlides } from "../stores/slides.store";
import { ViewTransition } from "./view-transition";

export function CurrentSlide() {
	const params = useParams();
	const { slides } = useSlides();

	const slideNumber = Number(params.slide);
	const currentSlide = slides[slideNumber - 1];

	if (!currentSlide) {
		return <div className="h-full">No slide found</div>;
	}

	return (
		<ViewTransition name={currentSlide.name}>
			<div className="h-full">{currentSlide.component}</div>
		</ViewTransition>
	);
}
