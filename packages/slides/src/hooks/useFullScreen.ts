"use client";

import { useContext } from "react";

import { ScreenContext } from "../providers/screen";

export function useFullScreen() {
	const context = useContext(ScreenContext);

	if (!context) {
		throw new Error("Screen not found");
	}

	const { screen, setIsFullScreen, isFullScreen } = context;

	const setFullScreen = () => {
		const element = screen?.current;

		if (!element) {
			return;
		}

		if (element.requestFullscreen) {
			element.requestFullscreen();
			setIsFullScreen(true);
		}
	};

	const exitFullScreen = () => {
		if (typeof document === "undefined") {
			return;
		}

		if (document.exitFullscreen) {
			document.exitFullscreen();
			setIsFullScreen(false);
		}
	};

	return {
		setFullScreen,
		exitFullScreen,
		isFullScreen,
	};
}
