import Layouts from "@/components/layouts";
import { PageTitle } from "@/components/page-title";
import { ViewTransition } from "presivio";

export default function SlidePage() {
	return (
		<Layouts.Docs>
			<PageTitle>
				<ViewTransition name="slide-component-title">
					<span>Slide Component</span>
				</ViewTransition>
			</PageTitle>
		</Layouts.Docs>
	);
}
