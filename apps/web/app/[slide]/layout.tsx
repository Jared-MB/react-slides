import { Presentation, SlidesPreview } from "presivio";
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
