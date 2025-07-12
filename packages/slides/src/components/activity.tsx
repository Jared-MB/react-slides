/** @ts-ignore: unstable_Activity is not detected by typescript but its currently available in React 19 experimental version */
import { unstable_Activity as UnstableActivity } from "react";

export function Activity({
	children,
	mode,
}: {
	children: React.ReactNode;
	mode?: "visible" | "hidden";
}) {
	return <UnstableActivity mode={mode}>{children}</UnstableActivity>;
}
