import React from "react";
import FunctionsKeys from "./keyboradLayouts/FunctionsKeys";
import ModifiersTypewriterKeys from "./keyboradLayouts/ModifiersTypewriterKeys";
import ArrowsNavigations from "./keyboradLayouts/ArrowsNavigations";
export default function Keyboard() {
	return (
		<div className="grid grid-flow-col gap-x-2">
			<div className="col-span-2">
				<FunctionsKeys />
			</div>
			<div className="col-span-2">
				<ModifiersTypewriterKeys />
			</div>
			<div className="row-span-2">
				<ArrowsNavigations />
			</div>
		</div>
	);
}
