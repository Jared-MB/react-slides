"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Slide {
	name: string;
	component: React.ReactNode;
}

interface SlidesStore {
	slides: Slide[];
	setSlides: (slides: Slide[]) => void;
}

export const useSlides = create<SlidesStore>()(
	persist(
		(set) => ({
			slides: [],
			setSlides: (slides) => set({ slides }),
		}),
		{
			name: "slides",
			storage: createJSONStorage(() => localStorage),
		},
	),
);
