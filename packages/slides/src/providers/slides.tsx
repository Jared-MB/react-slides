"use client";

import { createContext, useContext } from "react";

export const SlidesContext = createContext<null | string>(null);

export const SlidesProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<SlidesContext value={"__SLIDES__PROVIDER__"}>{children}</SlidesContext>
	);
};

export const useSlidesContext = () => {
	const context = useContext(SlidesContext);

	return context;
};
