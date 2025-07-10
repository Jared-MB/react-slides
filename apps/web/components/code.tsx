export function Code({ children }: { children: string }) {
	return (
		<code
			lang="bash"
			className="flex items-center gap-3 w-full p-2 pr-1 rounded-md font-mono text-sm"
		>
			{children}
		</code>
	);
}
