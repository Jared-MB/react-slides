import Link from "next/link";

export default function DocsPage() {
	return (
		<main className="space-y-8">
			<h2 className="text-4xl font-bold font-mono">Getting started</h2>
			Still working, just go to{" "}
			<Link href="/1" className="underline">
				demo
			</Link>{" "}
			or check the{" "}
			<Link href="/docs/installation" className="underline">
				installation
			</Link>
		</main>
	);
}
