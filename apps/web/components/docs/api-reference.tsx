import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export const apiReferencePages = [
	{
		name: "Components",
		href: "/docs/components",
		description: "Components",
	},
	{
		name: "Presentation Component",
		href: "/docs/components/presentation",
		description:
			"Encapsulates the slides and provides the presentation functionality.",
	},
	{
		name: "Screen Component",
		href: "/docs/components/screen",
		description: "Where the slides are rendered.",
	},
	{
		name: "Slide Component",
		href: "/docs/components/slide",
		description: "Represents a single slide in the presentation.",
	},
	{
		name: "SlidesPreview Component",
		href: "/docs/components/slides-preview",
		description: "Preview of the slides.",
	},
];

export function ApiReference() {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>API Reference</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link href={apiReferencePages[0]?.href ?? ""}>
								{apiReferencePages[0]?.name}
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuSub>
						{apiReferencePages.slice(1).map((item) => (
							<SidebarMenuSubItem key={item.name}>
								<SidebarMenuSubButton asChild>
									<Link href={item.href}>{item.name}</Link>
								</SidebarMenuSubButton>
							</SidebarMenuSubItem>
						))}
					</SidebarMenuSub>
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
