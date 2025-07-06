"use client";

import Link from "next/link";
import { useEffect } from "react";

import { type Slide, useSlides } from "../stores/slides.store";
import { SlidesProvider } from "../providers/slides-provider";
import { useFullScreen } from "../hooks/useFullScreen";

export function SlidesPreview({ components }: { components: Slide[] }) {
	const { slides } = useSlides();
	const { isFullScreen } = useFullScreen();

	useEffect(() => {
		useSlides.setState({ slides: components });
	}, [components]);

	if (isFullScreen) {
		return null;
	}

	return (
		<SlidesProvider>
			<aside className="h-dvh overflow-y-auto">
				{slides?.map((slide, index) => (
					<Link
						href={`/${index + 1}`}
						key={slide.name}
						className="overflow-hidden w-full aspect-video border border-gray-300 inline-block"
					>
						{slide.component}
						<small>{index + 1}</small>
					</Link>
				))}
			</aside>
		</SlidesProvider>
	);
}
