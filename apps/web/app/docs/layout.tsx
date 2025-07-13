import { DocsSidebar } from "@/components/docs-sidebar";
import { NavigateDocs } from "@/components/docs/navigate-docs";

export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="grid grid-cols-[auto_1fr] border h-[calc(100dvh-5rem)] overflow-y-scroll">
			<DocsSidebar />
			<div className="p-8">
				{children}
				<NavigateDocs />
			</div>
		</div>
	);
}
