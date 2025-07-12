import { CodeBlock } from "@/components/code-block";
import { CopyCode } from "@/components/copy-code";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import Link from "next/link";

const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    viewTransition: true,
  },
}
 
module.exports = nextConfig
`;

export default function InstallationPage() {
	return (
		<main className="space-y-8">
			<div className="flex flex-col gap-4">
				<h2 className="text-4xl font-bold font-mono">Installation</h2>
				<CopyCode />
			</div>
			<div className="flex flex-col gap-2">
				<h3 className="text-2xl font-bold font-mono">You also may need:</h3>
				<ul className="list-inside list-disc text-sm">
					<li>react@experimental</li>
					<li>react-dom@experimental</li>
				</ul>
				<h4 className="text-xl font-bold font-mono">
					And turn on this{" "}
					<Link
						href="https://nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition"
						rel="noopener noreferrer"
						target="_blank"
						className="underline"
					>
						NextJS feature
					</Link>{" "}
					on your next.config.js:
				</h4>
				<CodeBlock code={nextConfig} language="js" className="max-w-xl" />
			</div>
			<div className="flex flex-col gap-2">
				<h4 className="text-xl font-bold font-mono text-destructive">
					Warning!
				</h4>
				<Alert variant="destructive" className="max-w-xl">
					<AlertCircleIcon />
					<AlertTitle>
						This packages uses experimental features of React 19
					</AlertTitle>
					<AlertDescription>
						<p className="text-pretty">
							Since experimental versions of React may contain bugs.{" "}
							<strong>Don’t use</strong> them in <strong>production</strong> or{" "}
							<strong>business critical applications</strong>.
						</p>
						<h5>Some of the experimental features used are:</h5>
						<ul className="list-inside list-disc text-sm underline">
							<li>
								<Link
									href="https://react.dev/reference/react/ViewTransition"
									rel="noopener noreferrer"
									target="_blank"
								>
									{"<ViewTransition />"}
								</Link>
							</li>
							<li>
								<Link
									href="https://react.dev/reference/react/Activity"
									rel="noopener noreferrer"
									target="_blank"
								>
									{"<Activity />"}
								</Link>
							</li>
						</ul>
					</AlertDescription>
				</Alert>
			</div>
		</main>
	);
}
