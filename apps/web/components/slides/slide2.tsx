import { Slide, ViewTransition } from "@repo/slides";

export function Slide2() {
	return (
		<Slide>
			<div className="flex items-end justify-between flex-col w-full h-full">
				<ViewTransition name="square-1">
					<div className="size-12 bg-purple-500" />
				</ViewTransition>
				<ViewTransition name="square-2">
					<div className="size-12 bg-purple-500" />
				</ViewTransition>
			</div>
		</Slide>
	);
}
