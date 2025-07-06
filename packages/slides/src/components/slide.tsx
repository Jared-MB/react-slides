"use client";

import { useSlidesContext } from "../providers/slides-provider";

export function Slide({ children }: { children: React.ReactNode }) {
	const slidesContext = useSlidesContext();

	if (slidesContext) {
		return (
			<div className="scale-20 origin-top-left w-[500%] h-[500%] aspect-video">
				{children}
			</div>
		);
	}

	return <div className="w-full h-full">{children}</div>;
}
