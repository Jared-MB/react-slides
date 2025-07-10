import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const navigation = [
	{
		name: "Introduction",
		href: "/docs",
	},
	{
		name: "Installation",
		href: "/docs/installation",
	},
];

export function GettingStarted() {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Getting started</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{navigation.map((item) => (
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
