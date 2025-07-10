import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex max-w-2xl items-start justify-center flex-col mx-auto gap-10 h-[calc(100dvh-10rem)]">
			<div className="flex flex-col gap-2">
				<h2 className="text-5xl font-bold text-balance">React driven slides</h2>
				<p className="text-muted-foreground text-pretty max-w-[48ch]">
					A simple and easy to use library to create slides with React for
					developers.
				</p>
			</div>
			<div className="flex gap-4">
				<Button>
					<Link href="/docs">View docs</Link>
				</Button>
				<Button variant="outline" asChild>
					<Link href="/1">Go to example</Link>
				</Button>
			</div>
		</main>
	);
}
