"use client";

import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useFullScreen } from "presivio";

export function Header() {
	const { isFullScreen } = useFullScreen();

	if (isFullScreen) {
		return null;
	}

	return (
		<header className="h-20 flex items-center px-6 justify-between">
			<h1 className="text-2xl font-bold font-mono">
				<Link href="/">Presivio</Link>
			</h1>
			<nav className="flex gap-4 items-center text-sm">
				<Link href="/docs" className="hover:underline">
					Go docs
				</Link>
				<Link href="/1" className="hover:underline flex items-center gap-1">
					View example <ExternalLink className="size-3" />
				</Link>
				<Button variant="ghost" asChild size="icon">
					<Link
						href="https://github.com/Jared-MB/react-slides"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github className="size-4" />
					</Link>
				</Button>
			</nav>
		</header>
	);
}
