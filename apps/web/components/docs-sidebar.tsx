import {
	Sidebar,
	SidebarContent,
	SidebarProvider,
} from "@/components/ui/sidebar";
import { GettingStarted, gettingStartedPages } from "./docs/getting-started";
import { ApiReference, apiReferencePages } from "./docs/api-reference";

export function DocsSidebar() {
	return (
		<SidebarProvider>
			<Sidebar>
				<SidebarContent>
					<GettingStarted />
					<ApiReference />
				</SidebarContent>
			</Sidebar>
		</SidebarProvider>
	);
}

export const pages = [...gettingStartedPages, ...apiReferencePages];
