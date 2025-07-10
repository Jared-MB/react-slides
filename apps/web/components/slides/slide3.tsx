import { Slide } from "presivio";
import { CopyCode } from "../copy-code";

export function Slide3() {
	return (
		<Slide>
			<div className="grid place-content-center h-full pr-16">
				<h4 className="text-white text-2xl mb-8">You can make this:</h4>
				<CopyCode />
			</div>
		</Slide>
	);
}
