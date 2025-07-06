"use client";

import { create } from "zustand";

interface ScreenStore {
	isFullScreen: boolean;
	setIsFullScreen: (isFullScreen: boolean) => void;
}

export const useScreenStore = create<ScreenStore>()((set) => ({
	isFullScreen: false,
	setIsFullScreen: (isFullScreen) => set({ isFullScreen }),
}));
