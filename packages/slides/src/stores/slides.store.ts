"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Slide {
	name: string;
	component: React.ReactNode;
}

interface SlidesStore {
	slides: Slide[];
	currentSlideInFullScreen: number;
	setSlides: (slides: Slide[]) => void;
	setCurrentSlideInFullScreen: (slide: number) => void;
}

export const useSlides = create<SlidesStore>()(
	persist(
		(set) => ({
			slides: [],
			currentSlideInFullScreen: 1,
			setSlides: (slides) => set({ slides }),
			setCurrentSlideInFullScreen: (slide) =>
				set({ currentSlideInFullScreen: slide }),
		}),
		{
			name: "slides",
			storage: createJSONStorage(() => localStorage),
		},
	),
);
