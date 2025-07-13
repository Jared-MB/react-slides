import Layouts from "@/components/layouts";
import { ViewTransition } from "presivio";
import { PageTitle } from "@/components/page-title";

export default function ScreenPage() {
	return (
		<Layouts.Docs>
			<PageTitle>
				<ViewTransition name="screen-component-title">
					<span>Screen Component</span>
				</ViewTransition>
			</PageTitle>
		</Layouts.Docs>
	);
}
