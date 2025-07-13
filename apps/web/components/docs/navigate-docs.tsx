"use client";

import { usePathname } from "next/navigation";
import { pages } from "@/components/docs-sidebar";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function NavigateDocs() {
	const pathname = usePathname();
	const page = pages.find((page) => page.href === pathname);

	if (!page) {
		return null;
	}

	const index = pages.indexOf(page);
	const prev = pages[index - 1];
	const next = pages[index + 1];

	return (
		<footer className="p-16 pb-8">
			<div className="flex justify-between gap-4">
				{prev && (
					<Link
						href={prev.href}
						className="flex flex-col gap-1 items-end group"
					>
						<span className="font-medium text-zinc-500 group-hover:text-black transition-colors">
							Previous
						</span>
						<div className="flex gap-2 items-center">
							<ArrowLeft className="text-zinc-600 group-hover:text-black transition-colors" />
							<span className="font-semibold text-xl">{prev.name}</span>
						</div>
					</Link>
				)}
				{next && (
					<Link
						href={next.href}
						className="flex flex-col gap-1 items-start group"
					>
						<span className="font-medium text-zinc-500 group-hover:text-black transition-colors">
							Next
						</span>
						<div className="flex gap-2 items-center">
							<span className="font-semibold text-xl">{next.name}</span>
							<ArrowRight className="text-zinc-600 group-hover:text-black transition-colors" />
						</div>
					</Link>
				)}
			</div>
		</footer>
	);
}
