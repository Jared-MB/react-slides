"use client";

import { PresentationView } from "../components/presentation";
import type { Slide } from "../types/slide";
import { createContext, useContext, useMemo, useState } from "react";

interface PresentationContextType {
	slides: Slide[];
	preview: {
		isPreview: boolean;
		setIsPreview: (value: boolean) => void;
	};
}

export const PresentationContext =
	createContext<PresentationContextType | null>(null);

export function Presentation({
	children,
	slides,
}: {
	children: React.ReactNode;
	slides: Slide[];
}) {
	const memoizedSlides = useMemo(() => slides, [slides]);
	const [isPreview, setIsPreview] = useState(false);

	return (
		<PresentationContext
			value={{ slides: memoizedSlides, preview: { isPreview, setIsPreview } }}
		>
			<PresentationView>{children}</PresentationView>
		</PresentationContext>
	);
}

export const usePresentation = () => {
	const context = useContext(PresentationContext);
	if (!context) {
		throw new Error(
			"usePresentation must be used within a Presentation context",
		);
	}
	return context;
};
