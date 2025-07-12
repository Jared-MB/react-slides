"use client";

import Link from "next/link";
import { Children, useEffect } from "react";

import { SlidesProvider } from "../providers/slides-provider";
import { useFullScreen } from "../hooks/useFullScreen";
import { usePresentation } from "../providers/presentation-provider";

export function SlidesPreview() {
	const { slides, preview } = usePresentation();
	const { isFullScreen } = useFullScreen();

	useEffect(() => {
		preview.setIsPreview(true);
	}, []);

	if (isFullScreen) {
		return null;
	}

	return (
		<SlidesProvider>
			<aside className="overflow-y-auto max-h-dvh">
				{slides?.map((slide, index) => (
					<Link
						href={`/${index + 1}`}
						key={slide.name}
						id={`preview-slide-${slide.name}`}
						className="overflow-hidden w-full aspect-video border bg-zinc-800 border-gray-300 inline-block"
					>
						{Children.toArray(slide?.component ?? null)}
						<small>{index + 1}</small>
					</Link>
				))}
			</aside>
		</SlidesProvider>
	);
}
