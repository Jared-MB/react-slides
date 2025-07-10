"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState, startTransition } from "react";
import { ViewTransition } from "presivio";

export function Copy({ text }: { text: string }) {
	const [isCopied, setIsCopied] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const copy = () =>
		startTransition(() => {
			navigator.clipboard.writeText(text);
			setIsCopied(true);
			setIsHovered(true);
			setTimeout(() => {
				startTransition(() => {
					setIsCopied(false);
					setIsHovered(false);
				});
			}, 4000);
		});

	return (
		<Tooltip open={isHovered} onOpenChange={setIsHovered}>
			<TooltipTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="hover:bg-card"
					onClick={copy}
				>
					<ViewTransition name="icon">
						{isCopied ? <CheckIcon /> : <CopyIcon />}
					</ViewTransition>
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				{isCopied ? "Copied" : "Copy to clipboard"}
			</TooltipContent>
		</Tooltip>
	);
}
