import { Slide, ViewTransition } from "presivio";
import { Slide1 } from "@/components/slides/slide1";
import { Slide2 } from "@/components/slides/slide2";
import { Slide3 } from "@/components/slides/slide3";

export const slides = [
	{
		name: "slide-1",
		component: <Slide1 />,
	},
	{
		name: "slide-2",
		component: <Slide2 />,
	},
	{
		name: "slide-3",
		component: <Slide3 />,
	},
	{
		name: "slide-4",
		component: (
			<Slide>
				<ViewTransition name="slide-title">Slide 4 Content</ViewTransition>
			</Slide>
		),
	},
];
