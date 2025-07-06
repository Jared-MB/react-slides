"use client";

import { create } from "zustand";

interface ScreenStore {
	screen: React.RefObject<HTMLDivElement | null> | null;
	isFullScreen: boolean;
	setIsFullScreen: (isFullScreen: boolean) => void;
}

export const useScreenStore = create<ScreenStore>()((set) => ({
	screen: null,
	isFullScreen: false,
	setIsFullScreen: (isFullScreen) => set({ isFullScreen }),
}));
