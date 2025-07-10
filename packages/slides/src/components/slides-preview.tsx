"use client";

import Link from "next/link";

import { useSlides } from "../stores/slides.store";
import { SlidesProvider } from "../providers/slides-provider";
import { useFullScreen } from "../hooks/useFullScreen";

export function SlidesPreview() {
	const { slides } = useSlides();
	const { isFullScreen } = useFullScreen();

	if (isFullScreen) {
		return null;
	}

	if (!slides) {
		return null;
	}

	return (
		<SlidesProvider>
			<aside className="overflow-y-auto">
				{slides?.map((slide, index) => (
					<Link
						href={`/${index + 1}`}
						key={slide.name}
						className="overflow-hidden w-full aspect-video border bg-zinc-800 border-gray-300 inline-block"
					>
						{slide?.component ?? null}
						<small>{index + 1}</small>
					</Link>
				))}
			</aside>
		</SlidesProvider>
	);
}
