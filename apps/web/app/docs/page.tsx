import Link from "next/link";
import Layouts from "@/components/layouts";
import { PageTitle } from "@/components/page-title";

export default function DocsPage() {
	return (
		<Layouts.Docs>
			<PageTitle>
				<span>Getting started</span>
			</PageTitle>
			Still working, just go to{" "}
			<Link href="/1" className="underline">
				demo
			</Link>{" "}
			or check the{" "}
			<Link href="/docs/installation" className="underline">
				installation
			</Link>
		</Layouts.Docs>
	);
}
