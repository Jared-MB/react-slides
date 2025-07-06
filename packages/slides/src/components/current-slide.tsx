"use client";

import { useParams, useRouter } from "next/navigation";
import { useSlides } from "../stores/slides.store";
import { useEffect } from "react";
import { useFullScreen } from "../hooks/useFullScreen";

export function CurrentSlide() {
	const params = useParams();
	const { slides, currentSlideInFullScreen } = useSlides();
	const router = useRouter();
	const { isFullScreen } = useFullScreen();

	const slideNumber = Number(params.slide);

	const displaySlideNumber = isFullScreen
		? currentSlideInFullScreen
		: slideNumber;
	const currentSlide = slides[displaySlideNumber - 1];

	useEffect(() => {
		if (slideNumber < 1 || slideNumber > slides.length) {
			return router.replace(`/1`);
		}
		if (slides.length === 0) {
			return router.replace(`/`);
		}
	}, [slideNumber, slides]);

	return <div className="h-full">{currentSlide?.component}</div>;
}
