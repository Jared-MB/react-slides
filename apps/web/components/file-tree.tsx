"use client";

import { Folder, FolderOpen } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";
import { useId, useState, createContext, useContext, useEffect } from "react";
import { ReactIcon } from "./icons/react";
import { cn } from "@/lib/utils";

interface FileTreeContextProps {
	value: Set<string>;
	setValue: React.Dispatch<React.SetStateAction<Set<string>>>;
	open?: boolean;
}

const FileTreeContext = createContext<FileTreeContextProps | null>(null);
const useFileTree = () => {
	const context = useContext(FileTreeContext);
	if (!context) {
		throw new Error("useFileTree must be used within a FileTree");
	}
	return context;
};

export type File = {
	name: string;
	files?: File[];
};

export function FileTree({ files, open }: { files: File[]; open?: boolean }) {
	const [value, setValue] = useState<Set<string>>(new Set());

	return (
		<FileTreeContext value={{ value, setValue, open }}>
			<Accordion
				type="multiple"
				value={Array.from(value)}
				onValueChange={(value) => setValue(new Set(value))}
				className="bg-zinc-100 border p-4 rounded-md max-w-lg"
			>
				{files.map((file) => (
					<FileTreeItem key={file.name} file={file} />
				))}
			</Accordion>
		</FileTreeContext>
	);
}

function FileTreeItem({ file }: { file: File }) {
	const id = useId();
	const { value: files, open, setValue } = useFileTree();

	useEffect(() => {
		if (open) {
			setValue((prev: Set<string>) => new Set([...Array.from(prev), id]));
		}
	}, [id]);

	const isFile = file.name.includes("tsx");
	const isOpen = files.has(id);

	return (
		<AccordionItem value={id} key={id}>
			<AccordionTrigger
				showArrow={false}
				className={cn(
					"rounded-none py-2",
					isFile && "hover:[text-decoration:none]",
				)}
			>
				<div className="flex items-center gap-2">
					{isFile ? (
						<ReactIcon className="size-5" />
					) : isOpen ? (
						<FolderOpen className="size-5" />
					) : (
						<Folder className="size-5" />
					)}
					{file.name}
				</div>
			</AccordionTrigger>
			{file.files && (
				<AccordionContent className="ml-4 pb-0">
					{file.files.map((child) => (
						<FileTreeItem key={`${child.name}-${id}`} file={child} />
					))}
				</AccordionContent>
			)}
		</AccordionItem>
	);
}
