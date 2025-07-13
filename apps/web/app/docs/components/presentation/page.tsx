import { CodeBlock } from "@/components/code-block";
import Layouts from "@/components/layouts";
import { PageTitle } from "@/components/page-title";
import { type Prop, PropsTable } from "@/components/props-table";
import Titles from "@/components/ui/titles";
import { ViewTransition } from "presivio";

const layout = `import { Presentation } from "presivio";
import { slides } from "../slides";

export default function SlidesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Presentation slides={slides}>
			{children}
		</Presentation>
	);
}
`;

const props: Prop[] = [
	{
		name: "slides",
		type: "Slide[]",
		description: "Array of slides to render",
		required: true,
	},
	{
		name: "children",
		type: "React.ReactNode",
		description: "Children of the component",
		required: false,
	},
];

export default function PresentationPage() {
	return (
		<Layouts.Docs>
			<PageTitle>
				<ViewTransition name="presentation-component-title">
					<span>Presentation Component</span>
				</ViewTransition>
			</PageTitle>
			<div className="space-y-4">
				<p>
					The Presentation component is the main component of the package. It
					receives the slides as a prop and it is the one that will handle the
					navigation between slides.
				</p>
				<CodeBlock code={layout} language="jsx" title="[slide]/layout.tsx" />
			</div>
			<Titles.H3>Reference</Titles.H3>
			<Titles.H4>Props</Titles.H4>
			<div className="space-y-4">
				<PropsTable props={props} />
			</div>
		</Layouts.Docs>
	);
}
