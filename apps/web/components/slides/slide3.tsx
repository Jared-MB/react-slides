"use client";

import { Slide, ViewTransition } from "presivio";
import { useState } from "react";

export function Slide3() {
	const [hide, setHide] = useState(false);

	return (
		<Slide>
			<div className="flex items-end justify-between flex-col w-full h-full">
				<ViewTransition name="square-1">
					<div className="size-12 bg-purple-500" />
				</ViewTransition>
				<ViewTransition name="square-2">
					<div className="size-12 bg-purple-500" />
				</ViewTransition>
				<ViewTransition name="square-3">
					<div className="size-20 bg-purple-500" />
				</ViewTransition>
				<button onClick={() => setHide(!hide)} type="button">
					Hide
				</button>
				{hide && <div className="size-20 bg-purple-500" />}
			</div>
		</Slide>
	);
}
