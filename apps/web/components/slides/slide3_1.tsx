"use client";

import { Slide, ViewTransition } from "presivio";
import { CopyCodeArrow } from "../copy-code-arrow";

export function Slide3_1() {
	return (
		<Slide>
			<div className="grid place-content-center h-full pr-16">
				<h4 className="text-white text-2xl mb-8">
					<ViewTransition name="title">
						<span>You can make this:</span>
					</ViewTransition>
				</h4>
				<ViewTransition name="copy-code">
					<CopyCodeArrow />
				</ViewTransition>
			</div>
		</Slide>
	);
}
