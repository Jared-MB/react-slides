import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export const gettingStartedPages = [
	{
		name: "Introduction",
		href: "/docs",
	},
	{
		name: "Installation",
		href: "/docs/installation",
	},
	{
		name: "Usage",
		href: "/docs/usage",
	},
];

export function GettingStarted() {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Getting started</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{gettingStartedPages.map((item) => (
						<SidebarMenuItem key={item.name}>
							<SidebarMenuButton asChild>
								<Link href={item.href}>{item.name}</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
