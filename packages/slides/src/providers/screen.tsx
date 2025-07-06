"use client";

import {
	createContext,
	useEffect,
	useRef,
	useState,
	unstable_ViewTransition as ViewTransition,
} from "react";

import { useSlides } from "../stores/slides.store";
import { MoveOnSlides, SetFullScreen } from "../components/screen-controls";

interface ScreenContextType {
	screen: React.RefObject<HTMLDivElement | null> | null;
	isFullScreen: boolean;
	setIsFullScreen: (isFullScreen: boolean) => void;
}

export const ScreenContext = createContext<ScreenContextType>({
	screen: null,
	isFullScreen: false,
	setIsFullScreen: () => {},
});

export const Screen = ({
	children,
	currentSlide,
}: {
	children: React.ReactNode;
	currentSlide: number;
}) => {
	const screenRef = useRef<HTMLDivElement | null>(null);
	const [isFullScreen, setIsFullScreen] = useState(false);
	const { slides, currentSlideInFullScreen, setCurrentSlideInFullScreen } =
		useSlides();

	useEffect(() => {
		const handleFullScreenChange = () => {
			const isCurrentlyFullScreen = Boolean(document.fullscreenElement);
			setIsFullScreen(isCurrentlyFullScreen);
		};

		document.addEventListener("fullscreenchange", handleFullScreenChange);
		return () =>
			document.removeEventListener("fullscreenchange", handleFullScreenChange);
	}, []);

	// useEffect(() => {
	// 	setCurrentSlideInFullScreen(currentSlide);
	// }, [currentSlide]);

	const displaySlideNumber = isFullScreen
		? currentSlideInFullScreen
		: currentSlide;

	const totalSlides = slides.length;

	return (
		<ViewTransition>
			<ScreenContext
				value={{ screen: screenRef, isFullScreen, setIsFullScreen }}
			>
				<div className="w-full h-dvh bg-zinc-800 relative grid grid-rows-[1fr_2rem]">
					<main ref={screenRef}>{children}</main>
					<footer className="bg-zinc-900 text-zinc-300 flex items-center justify-end px-2 gap-2">
						<span>
							{displaySlideNumber} / {totalSlides}
						</span>
						<MoveOnSlides
							currentSlide={displaySlideNumber}
							totalSlides={totalSlides}
						/>
						<SetFullScreen />
					</footer>
				</div>
			</ScreenContext>
		</ViewTransition>
	);
};
