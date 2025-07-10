"use client";

import { Slide, ViewTransition } from "presivio";

export function Slide9() {
	return (
		<Slide>
			<div className="grid place-content-center h-full pr-16">
				<h2 className="text-white text-5xl mb-4">
					<ViewTransition name="power">
						<span>All the power of</span>
						<br />
					</ViewTransition>
					<ViewTransition name="react">
						<strong className="text-blue-400 text-6xl">React</strong>
					</ViewTransition>
				</h2>
				<p className="text-white text-2xl text-pretty">
					Driven by new{" "}
					<button
						onClick={() =>
							window.open(
								"https://react.dev/reference/react/ViewTransition",
								"_blank",
							)
						}
						type="button"
					>
						<strong className="text-blue-400 text-4xl underline cursor-pointer">
							{`<ViewTransition/>`}
						</strong>
					</button>{" "}
					API
				</p>
			</div>
		</Slide>
	);
}
