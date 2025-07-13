import Layouts from "@/components/layouts";
import { PageTitle } from "@/components/page-title";
import { ViewTransition } from "presivio";

export default function SlidesPreviewPage() {
	return (
		<Layouts.Docs>
			<PageTitle>
				<ViewTransition name="slidespreview-component-title">
					<span>SlidesPreview Component</span>
				</ViewTransition>
			</PageTitle>
		</Layouts.Docs>
	);
}
