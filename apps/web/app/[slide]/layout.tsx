import { Screen } from "@repo/slides";

export default async function SlideLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Screen>{children}</Screen>;
}
