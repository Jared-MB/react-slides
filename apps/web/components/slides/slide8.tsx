import { Slide, ViewTransition } from "presivio";

export function Slide8() {
	return (
		<Slide>
			<div className="grid place-content-center h-full pr-16">
				<h2 className="text-white text-8xl mb-4">
					<ViewTransition name="power">
						<span>All the power of</span>
						<br />
					</ViewTransition>
					<ViewTransition name="react">
						<strong className="text-blue-400 text-9xl">React</strong>
					</ViewTransition>
				</h2>
			</div>
		</Slide>
	);
}
