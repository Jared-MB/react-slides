import { Slide, ViewTransition } from "@repo/slides";

export function Slide1() {
	return (
		<Slide>
			<div>
				<ViewTransition name="slide-title">Slide 1 Content</ViewTransition>
				<ViewTransition name="square-1">
					<div className="size-12 bg-purple-500" />
				</ViewTransition>
				<div className="size-12 bg-purple-500" />
				<div className="size-12 bg-purple-500" />
				<div className="size-12 bg-purple-500" />
				<div className="size-12 bg-purple-500" />
				<div className="size-12 bg-purple-500" />
				<div className="size-12 bg-purple-500" />
				<div className="size-12 bg-purple-500" />
				<ViewTransition name="square-2">
					<div className="size-20 bg-purple-500" />
				</ViewTransition>
				<div className="size-12 bg-purple-500" />
				<div className="size-12 bg-purple-500" />
			</div>
		</Slide>
	);
}
