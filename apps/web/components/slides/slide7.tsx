"use client";

import { Slide, ViewTransition } from "presivio";
import { useState, startTransition } from "react";
import { Button } from "../ui/button";

export function Slide7() {
	const [hide, setHide] = useState(true);

	const onClick = () => {
		startTransition(() => {
			setHide(!hide);
		});
	};

	return (
		<Slide>
			<div className="grid place-content-center h-full pr-16">
				<h4 className="text-white text-2xl mb-8">Conditional rendering</h4>
				<div className="flex gap-8 items-center">
					<Button
						onClick={onClick}
						type="button"
						className="active:scale-95 hover:scale-105 transition-transform duration-200 cursor-pointer"
					>
						{hide ? "Show" : "Hide"}
					</Button>
					<ViewTransition name="hide">
						{hide ? null : <p className="text-white">Hi 👋</p>}
					</ViewTransition>
				</div>
			</div>
		</Slide>
	);
}
