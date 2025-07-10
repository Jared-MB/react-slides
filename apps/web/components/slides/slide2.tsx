import { Slide, ViewTransition } from "presivio";

export function Slide2() {
	return (
		<Slide>
			<div className="grid place-content-center h-full">
				<h2 className="text-white text-4xl mb-4">
					<ViewTransition name="slide-title">
						<strong className="font-mono text-6xl">Presivio</strong>
					</ViewTransition>
				</h2>
				<p className="text-white text-2xl text-pretty max-w-[48ch]">
					A simple and easy to use library to create interactive slides with
					React for developers.
				</p>
			</div>
		</Slide>
	);
}
