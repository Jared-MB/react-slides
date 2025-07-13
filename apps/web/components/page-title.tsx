import { ViewTransition } from "presivio";
import Titles from "./ui/titles";

export function PageTitle({ children }: { children: React.ReactNode }) {
	return (
		<Titles.H2>
			<ViewTransition name="component-title" default="component-title">
				{children}
			</ViewTransition>
		</Titles.H2>
	);
}
