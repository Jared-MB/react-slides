import Code from "./code";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";

export interface Prop {
	name: string;
	type: string;
	description: string;
	required: boolean;
}

export function PropsTable({ props }: { props: Prop[] }) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Type</TableHead>
					<TableHead>Description</TableHead>
					<TableHead>Required</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{props.map((prop) => (
					<TableRow key={prop.name}>
						<TableCell>
							<Code.Line lang="js" className="text-xs" href={`#` + prop.name}>
								{prop.name}
							</Code.Line>
						</TableCell>
						<TableCell>
							<Code.Line lang="js" className="text-xs">
								{prop.type}
							</Code.Line>
						</TableCell>
						<TableCell>{prop.description}</TableCell>
						<TableCell>{prop.required ? "Yes" : "No"}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
