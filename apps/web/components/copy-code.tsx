"use client";

import { Copy } from "./copy";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Code } from "./code";
import { useState } from "react";

const tabs = {
	pnpm: "pnpm install presivio",
	npm: "npm install presivio",
	yarn: "yarn add presivio",
};

export function CopyCode({
	ref,
}: {
	ref?: React.RefObject<HTMLDivElement | null>;
}) {
	const [value, setValue] = useState<"pnpm" | "npm" | "yarn">("pnpm");

	return (
		<div className="border bg-muted rounded-md max-w-lg">
			<Tabs
				value={value}
				onValueChange={(e) => setValue(e as "pnpm" | "npm" | "yarn")}
				className="gap-0"
			>
				<div className="p-2 flex items-center justify-between" ref={ref}>
					<TabsList>
						<TabsTrigger value="pnpm">pnpm</TabsTrigger>
						<TabsTrigger value="npm">npm</TabsTrigger>
						<TabsTrigger value="yarn">yarn</TabsTrigger>
					</TabsList>
					<Copy text={tabs[value]} />
				</div>
				<Separator />
				<div className="p-2">
					<TabsContent value="pnpm">
						<Code>{tabs[value]}</Code>
					</TabsContent>
					<TabsContent value="npm">
						<Code>{tabs[value]}</Code>
					</TabsContent>
					<TabsContent value="yarn">
						<Code>{tabs[value]}</Code>
					</TabsContent>
				</div>
			</Tabs>
		</div>
	);
}
