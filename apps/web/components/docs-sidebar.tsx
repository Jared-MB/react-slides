import {
	Sidebar,
	SidebarContent,
	SidebarProvider,
} from "@/components/ui/sidebar";
import { GettingStarted } from "./docs/getting-started";

export function DocsSidebar() {
	return (
		<SidebarProvider>
			<Sidebar>
				<SidebarContent>
					<GettingStarted />
				</SidebarContent>
			</Sidebar>
		</SidebarProvider>
	);
}
