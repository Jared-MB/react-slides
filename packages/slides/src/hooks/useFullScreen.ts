"use client";

import { useScreenStore } from "../stores/screen.store";

export function useFullScreen() {
	const { isFullScreen, setIsFullScreen } = useScreenStore();

	const setFullScreen = () => {
		if (typeof document === "undefined") {
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
	};
}
