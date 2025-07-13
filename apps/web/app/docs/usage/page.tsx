import Code from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { type File, FileTree } from "@/components/file-tree";
import Layouts from "@/components/layouts";
import { PageTitle } from "@/components/page-title";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle } from "lucide-react";

const files: File[] = [
	{
		name: "app",
		files: [
			{
				name: "...",
			},
			{
				name: "[slide]",
				files: [
					{
						name: "layout.tsx",
					},
					{
						name: "page.tsx",
					},
				],
			},
		],
	},
	{
		name: "...",
	},
];

const layout = `import { Presentation, SlidesPreview } from "presivio";
import { slides } from "../slides";

export default function SlidesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Presentation slides={slides}>
			<SlidesPreview />
			{children}
		</Presentation>
	);
}
`;

const page = `import { Screen } from "presivio";

export default function SlidePage() {
	return <Screen />;
}
`;

const slides = `import type { Slide } from "presivio/types";
import { Slide1 } from "../slides/slide1";
import { Slide2 } from "../slides/slide2";
import { Slide3 } from "../slides/slide3";

export const slides: Slide[] = [
	{
		name: "slide-1",
		component: <Slide1 />,
	},
	{
		name: "slide-2",
		component: <Slide2 />,
	},
	{
		name: "slide-3",
		component: <Slide3 />,
	}
]
`;

const slideExample = `import { Slide, ViewTransition } from "presivio";

export function SimpleSlide() {
	return (
		<Slide>
			<div className="grid place-content-center h-full">
				<h2 className="text-white text-4xl">
					What is <br />
					<ViewTransition name="slide-title">
						<strong className="font-mono text-6xl">Presivio</strong>
					</ViewTransition>
					?
				</h2>
			</div>
		</Slide>
	);
}
`;

const slideComplexExample = `"use client";

import { Slide, ViewTransition } from "presivio";
import { CopyCode } from "../copy-code";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function ComplexSlide() {
	const [value, setValue] = useState("");

	useEffect(() => {
		if (value.includes("install")) {
			toast("Thanks for install presivio", {
				icon: "🎉",
			});
		}
	}, [value]);

	return (
		<Slide>
			<div className="grid place-content-center h-full pr-16">
				<h4 className="text-white text-2xl mb-8">
					<ViewTransition name="title">
						<span>You can make this:</span>
					</ViewTransition>
				</h4>
				<div className="flex gap-8 items-center">
					<ViewTransition name="copy-code">
						<CopyCode />
					</ViewTransition>
					<div className="flex flex-col gap-2 text-white">
						<label htmlFor="code" className="font-semibold text-sm">
							You can paste it here
						</label>
						<Input
							id="code"
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
					</div>
				</div>
			</div>
		</Slide>
	);
}

`;

export default function UsagePage() {
	return (
		<Layouts.Docs>
			<PageTitle>
				<span>Usage</span>
			</PageTitle>
			<div className="space-y-4">
				<p>
					Since this package is in top of NextJS, you need to create the
					following folder structure:
				</p>
				<ul className="list-disc ml-4 flex flex-col gap-2">
					<li>
						Create a folder called
						<Code.Line>[slide]</Code.Line>
						on your app directory.
					</li>
					<li>
						Inside the folder add a<Code.Line>layout.tsx</Code.Line>
						and <Code.Line>page.tsx</Code.Line> to the folder.
					</li>
				</ul>
				<p>So the folder structure should be like this:</p>
				<div className="flex flex-col gap-2">
					<FileTree files={files} open />
					<small>
						We are working to no depend on NextJS to make it just a React
						package.
					</small>
				</div>
				<p>
					Your <Code.Line>layout.tsx</Code.Line> should look like this:
				</p>
				<CodeBlock code={layout} language="jsx" title="[slide]/layout.tsx" />
				<p>
					As you can see, we are using the{" "}
					<Code.Line>{"<Presentation />"}</Code.Line> component to wrap the
					slides. This component is the main component of the package. It
					receives the slides as a prop and it is the one that will handle the
					navigation between slides.
				</p>
				<p>
					The <Code.Line>{"<SlidesPreview />"}</Code.Line> component is
					optional. It is a component that shows a preview of the slides.
				</p>
				<p>The slides array should have the following structure:</p>
				<CodeBlock code={slides} language="js" title="slides.ts" />
				<p>Here is an quick example of how you can build your slides:</p>
				<Tabs defaultValue="slide1">
					<TabsList>
						<TabsTrigger value="slide1">simple-slide.tsx</TabsTrigger>
						<TabsTrigger value="slide2">complex-slide.tsx</TabsTrigger>
					</TabsList>
					<TabsContent value="slide1">
						<CodeBlock code={slideExample} language="jsx" />
					</TabsContent>
					<TabsContent value="slide2">
						<CodeBlock code={slideComplexExample} language="jsx" />
					</TabsContent>
				</Tabs>
				<p>
					You can make an slide as complex or simple as you want. Just be
					creative!
				</p>
				<Alert>
					<AlertCircle />
					<AlertDescription className="block">
						Make sure every slide has as root element a{" "}
						<Code.Line>{"<Slide />"}</Code.Line>
					</AlertDescription>
				</Alert>
				<p>
					And your <Code.Line>page.tsx</Code.Line> should look like this:
				</p>
				<CodeBlock code={page} language="jsx" title="[slide]/page.tsx" />
				<p>
					And finally, you can use the <Code.Line>{"<Screen />"}</Code.Line>{" "}
					component, here is where the slides will be rendered.
				</p>
			</div>
		</Layouts.Docs>
	);
}
