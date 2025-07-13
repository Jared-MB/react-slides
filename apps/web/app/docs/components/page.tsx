import Layouts from "@/components/layouts";
import Titles from "@/components/ui/titles";

import { apiReferencePages } from "@/components/docs/api-reference";
import Link from "next/link";
import { ViewTransition } from "presivio";

const componentsPages = apiReferencePages.filter(
	(page) => page.href !== "/docs/components",
);

export default function ComponentsPage() {
	return (
		<Layouts.Docs>
			<Titles.H2>Components</Titles.H2>
			<main className="grid grid-cols-2 gap-4">
				{componentsPages.map((page) => (
					<section
						key={page.name}
						className="border rounded-md p-6 flex flex-col gap-2"
					>
						<Titles.H3>
							<Link href={page.href}>
								<ViewTransition
									name={`${page.name.toLowerCase().replace(" ", "-")}-title`}
								>
									<span>{page.name}</span>
								</ViewTransition>
							</Link>
						</Titles.H3>
						<p className="text-sm text-zinc-500">{page.description}</p>
					</section>
				))}
			</main>
		</Layouts.Docs>
	);
}
