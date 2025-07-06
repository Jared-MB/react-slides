"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import { useFullScreen } from "../hooks/useFullScreen";
import { useScreenStore } from "../stores/screen.store";

interface ScreenContextType {
	screen: React.RefObject<HTMLDivElement | null> | null;
}

export const ScreenContext = createContext<ScreenContextType | null>(null);

export const ScreenProvider = ({ children }: { children: React.ReactNode }) => {
	const screenRef = useRef<HTMLDivElement | null>(null);
	const { setIsFullScreen } = useFullScreen();

	useEffect(() => {
		const handleFullScreenChange = () => {
			const isCurrentlyFullScreen = Boolean(document.fullscreenElement);
			setIsFullScreen(isCurrentlyFullScreen);
		};

		document.addEventListener("fullscreenchange", handleFullScreenChange);
		return () =>
			document.removeEventListener("fullscreenchange", handleFullScreenChange);
	}, []);

	useEffect(() => {
		useScreenStore.setState({ screen: screenRef });
	}, [screenRef]);

	return (
		<ScreenContext value={{ screen: screenRef }}>{children}</ScreenContext>
	);
};

export interface UseScreenProps {
	/**
	 * If true, the hook will not throw an error if it is used outside of a **ScreenProvider**.
	 *
	 * This will be used only to detect if the component that uses this hook is inside a **ScreenProvider**.
	 */
	ignoreProvider?: boolean;
}

export function useScreen({ ignoreProvider }: UseScreenProps = {}) {
	const context = useContext(ScreenContext);

	if (!context && !ignoreProvider) {
		throw new Error("useScreen must be used within a **ScreenProvider**");
	}

	return context;
}
