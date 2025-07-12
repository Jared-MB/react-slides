"use client";

import { useFullScreen } from "../hooks/useFullScreen";
import { usePresentation } from "../providers/presentation-provider";

export function PresentationView({ children }: { children: React.ReactNode }) {
	const { isFullScreen } = useFullScreen();
	const { preview } = usePresentation();

	return (
		<div
			className={`h-full max-h-dvh grid ${isFullScreen || !preview.isPreview ? "grid-cols-1" : "grid-cols-[25%_1fr]"}`}
		>
			{children}
		</div>
	);
}
