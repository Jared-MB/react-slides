"use client";

import { useParams } from "next/navigation";
import { useSlides } from "../stores/slides.store";
import { MoveOnSlides, SetFullScreen } from "./screen-controls";
import { CurrentSlide } from "./current-slide";
import { useFullScreen } from "../hooks/useFullScreen";
import { useEffect } from "react";

export function Screen() {
	const params = useParams();
	const { slides } = useSlides();
	const { setIsFullScreen } = useFullScreen();

	const currentSlideNumber = Number(params.slide);
	const totalSlides = slides.length;

	useEffect(() => {
		const handleFullScreenChange = () => {
			const isCurrentlyFullScreen = Boolean(document.fullscreenElement);
			setIsFullScreen(isCurrentlyFullScreen);
		};

		document.addEventListener("fullscreenchange", handleFullScreenChange);
		return () =>
			document.removeEventListener("fullscreenchange", handleFullScreenChange);
	}, []);

	return (
		<div className="w-full h-dvh bg-zinc-800 relative grid grid-rows-[1fr_2rem]">
			<main>
				<CurrentSlide />
			</main>
			<footer className="bg-zinc-900 text-zinc-300 flex items-center justify-end px-2 gap-2">
				<span>
					{currentSlideNumber} / {totalSlides}
				</span>
				<MoveOnSlides />
				<SetFullScreen />
			</footer>
		</div>
	);
}
