"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { MoveOnSlides, SetFullScreen } from "./screen-controls";
import { CurrentSlide } from "./current-slide";

import { useFullScreen } from "../hooks/useFullScreen";
import { usePresentation } from "../providers/presentation-provider";

export function Screen() {
	const params = useParams();

	const { slides } = usePresentation();
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
		<div className="w-full bg-zinc-800 relative grid grid-rows-[1fr_2rem]">
			<main className="max-h-[calc(100vh-2rem)] overflow-y-auto">
				<CurrentSlide />
			</main>
			<footer className="bg-zinc-900 text-zinc-300 flex items-center justify-end px-2 gap-2 h-8">
				<span>
					{currentSlideNumber} / {totalSlides}
				</span>
				<MoveOnSlides />
				<SetFullScreen />
			</footer>
		</div>
	);
}
