import { Screen } from "@repo/slides";

export default async function SlideLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ slide: string }>;
}>) {
	return (
		<Screen currentSlide={Number((await params).slide)}>{children}</Screen>
	);
}
