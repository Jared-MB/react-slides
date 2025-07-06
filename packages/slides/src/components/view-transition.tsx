"use client";

import { unstable_ViewTransition as UnstableViewTransition } from "react";
import { useSlidesContext } from "../providers/slides";

export function ViewTransition({
	children,
	...props
}: React.ComponentProps<typeof UnstableViewTransition>) {
	const slidesContext = useSlidesContext();

	if (slidesContext) {
		return children;
	}

	return <UnstableViewTransition {...props}>{children}</UnstableViewTransition>;
}
