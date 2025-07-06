"use client";

import { useScreenStore } from "../stores/screen.store";

export function useFullScreen() {
	const { isFullScreen, setIsFullScreen, screen } = useScreenStore();

	const setFullScreen = () => {
		const element = screen?.current;

		if (!element) {
			return;
		}

		if (document.body.requestFullscreen) {
			document.body.requestFullscreen();
		}
	};

	const exitFullScreen = () => {
		if (typeof document === "undefined") {
			return;
		}

		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	};

	return {
		setFullScreen,
		exitFullScreen,
		isFullScreen,
		setIsFullScreen,
		screen,
	};
}
