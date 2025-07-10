import { Slide, ViewTransition } from "presivio";

export function Slide1() {
	return (
		<Slide>
			<div className="grid place-content-center h-full">
				<h2 className="text-white text-4xl">
					What is <br />
					<ViewTransition name="slide-title">
						<strong className="font-mono text-6xl">Presivio</strong>
					</ViewTransition>
					?
				</h2>
			</div>
		</Slide>
	);
}
