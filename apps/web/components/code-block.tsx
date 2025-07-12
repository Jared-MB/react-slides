import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

export function CodeBlock({
	code,
	language,
	className,
}: {
	code: string;
	language?: string;
	className?: string;
}) {
	return (
		<SyntaxHighlighter
			language={language ?? "jsx"}
			style={dracula}
			className={className}
		>
			{code}
		</SyntaxHighlighter>
	);
}
