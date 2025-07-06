"use client";

import { useParams } from "next/navigation";
import { useSlides } from "../stores/slides.store";
import { MoveOnSlides, SetFullScreen } from "./screen-controls";
import { ScreenProvider, useScreen } from "../providers/screen-provider";

function ScreenWrapper({ children }: { children: React.ReactNode }) {
	const params = useParams();

	const screenContext = useScreen();
	const { slides } = useSlides();

	const currentSlideNumber = Number(params.slide);

	const totalSlides = slides.length;

	if (!screenContext) {
		throw new Error("ScreenProvider not found");
	}

	return (
		<div className="w-full h-dvh bg-zinc-800 relative grid grid-rows-[1fr_2rem]">
			<main ref={screenContext.screen}>{children}</main>
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

export function Screen({ children }: { children: React.ReactNode }) {
	return (
		<ScreenProvider>
			<ScreenWrapper>{children}</ScreenWrapper>
		</ScreenProvider>
	);
}
