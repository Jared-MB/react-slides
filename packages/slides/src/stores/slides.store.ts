"use client";

import { create } from "zustand";

export interface Slide {
	name: string;
	component: React.ReactNode;
}

interface SlidesStore {
	slides: Slide[];
	setSlides: (slides: Slide[]) => void;
}

export const useSlides = create<SlidesStore>()((set) => ({
	slides: [],
	setSlides: (slides) => set({ slides }),
}));
