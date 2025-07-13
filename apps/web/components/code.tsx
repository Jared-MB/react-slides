import { cn } from "@/lib/utils";
import Link from "next/link";

export function Code({
	children,
	className,
}: {
	children: string;
	className?: string;
}) {
	return (
		<code
			lang="bash"
			className={cn(
				"flex items-center gap-3 w-full p-2 pr-1 rounded-md font-mono text-sm",
				className,
			)}
		>
			{children}
		</code>
	);
}

export function CodeLine({
	children,
	lang,
	className,
	href,
}: {
	children: string;
	lang?: string;
	className?: string;
	href?: string;
}) {
	const classNames = cn(
		"font-mono font-semibold text-sm bg-zinc-100 p-1 rounded mx-2 border text-zinc-800",
		className,
	);

	if (href) {
		return (
			<Link href={href}>
				<code
					lang={lang}
					className={cn(classNames, "text-blue-700 hover:underline")}
				>
					{children}
				</code>
			</Link>
		);
	}

	return (
		<code lang={lang} className={classNames}>
			{children}
		</code>
	);
}

export default {
	Block: Code,
	Line: CodeLine,
};
