"use client";

import { Slide, ViewTransition } from "presivio";
import { useState, startTransition } from "react";
import { Button } from "../ui/button";

export function Slide6() {
	const [count, setCount] = useState(0);

	return (
		<Slide>
			<div className="grid place-content-center h-full pr-16">
				<h4 className="text-white text-2xl mb-8">Manage states</h4>
				<Button
					onClick={() => startTransition(() => setCount((prev) => prev + 1))}
					type="button"
					className="active:scale-95 hover:scale-105 transition-transform duration-200 cursor-pointer"
				>
					<ViewTransition name="count" default="counter">
						<span>{count}</span>
					</ViewTransition>
				</Button>
			</div>
		</Slide>
	);
}
