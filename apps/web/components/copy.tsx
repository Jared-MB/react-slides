"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

export function Copy({ text }: { text: string }) {
	const [isCopied, setIsCopied] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const copy = () => {
		navigator.clipboard.writeText(text);
		setIsCopied(true);
		setIsHovered(true);
		setTimeout(() => {
			setIsCopied(false);
			setIsHovered(false);
		}, 4000);
	};

	return (
		<Tooltip open={isHovered} onOpenChange={setIsHovered}>
			<TooltipTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="hover:bg-card"
					onClick={copy}
				>
					{isCopied ? <CheckIcon /> : <CopyIcon />}
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				{isCopied ? "Copied" : "Copy to clipboard"}
			</TooltipContent>
		</Tooltip>
	);
}
