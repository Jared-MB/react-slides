"use client";

import { Slide, ViewTransition } from "presivio";
import { CopyCode } from "../copy-code";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function Slide3_2() {
	const [value, setValue] = useState("");

	useEffect(() => {
		if (value.includes("install")) {
			toast("Thanks for install presivio", {
				icon: "🎉",
			});
		}
	}, [value]);

	return (
		<Slide>
			<div className="grid place-content-center h-full pr-16">
				<h4 className="text-white text-2xl mb-8">
					<ViewTransition name="title">
						<span>You can make this:</span>
					</ViewTransition>
				</h4>
				<div className="flex gap-8 items-center">
					<ViewTransition name="copy">
						<CopyCode />
					</ViewTransition>
					<div className="flex flex-col gap-2 text-white">
						<label htmlFor="code" className="font-semibold text-sm">
							You can paste it here
						</label>
						<Input
							id="code"
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
					</div>
				</div>
			</div>
		</Slide>
	);
}
