"use client";

import Link from "next/link";
import { useEffect } from "react";

import { type Slide, useSlides } from "../stores/slides.store";
import { SlidesProvider } from "../providers/slides";

export function Slides({ components }: { components: Slide[] }) {
	const { setSlides, slides } = useSlides();

	useEffect(() => {
		setSlides(components);
	}, [components]);

	return (
		<SlidesProvider>
			<div className="h-dvh overflow-y-auto">
				{slides.map((slide, index) => (
					<Link
						href={`/${index + 1}`}
						key={slide.name}
						className="overflow-hidden w-full aspect-video border border-gray-300 inline-block"
					>
						{slide.component}
						<small>{index + 1}</small>
					</Link>
				))}
			</div>
		</SlidesProvider>
	);
}
