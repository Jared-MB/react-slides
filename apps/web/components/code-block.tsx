import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Code } from "./code";
import { cn } from "@/lib/utils";

SyntaxHighlighter.registerLanguage("jsx", jsx);

export function CodeBlock({
	code,
	language,
	className,
	title,
}: {
	code: string;
	language?: string;
	className?: string;
	title?: string;
}) {
	return (
		<article className="bg-zinc-200 rounded-md border">
			{title && (
				<header>
					<Code className="p-4 italic text-zinc-800 font-semibold">
						{title}
					</Code>
				</header>
			)}
			<SyntaxHighlighter
				language={language ?? "jsx"}
				style={coldarkCold}
				className={cn(
					"border-t !rounded-t-none !my-0 !bg-zinc-100 code-block",
					className,
				)}
			>
				{code}
			</SyntaxHighlighter>
		</article>
	);
}
