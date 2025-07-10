"use client";

import { Slide, ViewTransition } from "presivio";
import { CopyCode } from "../copy-code";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";

export function Slide3_1() {
	const ref = useRef<HTMLDivElement>(null);

	return (
		<Slide>
			<div className="grid place-content-center h-full pr-16">
				<h4 className="text-white text-2xl mb-8">
					<ViewTransition name="title">
						<span>You can make this:</span>
					</ViewTransition>
				</h4>
				<ViewTransition name="copy">
					<CopyCode ref={ref} />
				</ViewTransition>
				<ViewTransition name="click">
					<div
						style={{
							top: (ref.current?.offsetTop ?? 0) + 8,
							left:
								(ref.current?.offsetLeft ?? 0) +
								(ref.current?.offsetWidth ?? 0) -
								36 -
								8,
						}}
						className="absolute flex gap-2 items-center pointer-events-none"
					>
						<div className="size-9 border-2 border-black rounded-md"></div>
						<div className="text-white">
							<ArrowLeft />
						</div>
						<div className="text-white">Click here</div>
					</div>
				</ViewTransition>
			</div>
		</Slide>
	);
}
