import React from "react";
import FunctionsKeys from "./keyboradLayouts/FunctionsKeys";
import ModifiersTypewriterKeys from "./keyboradLayouts/ModifiersTypewriterKeys";
import ArrowsNavigationsKeys from "./keyboradLayouts/ArrowsNavigationsKeys";
import EspecialKeys from "./keyboradLayouts/EspecialKeys";
import NumpadKeys from "./keyboradLayouts/NumpadKeys";
export default function Keyboard() {
	return (
		<div className="flex gap-4">
			<div>
				<div className="mb-4">
					<FunctionsKeys />
				</div>
				<div>
					<ModifiersTypewriterKeys />
				</div>
			</div>
			<div>
				<div className="mb-4">
					<EspecialKeys />
				</div>
				<div className="self-end">
					<ArrowsNavigationsKeys />
				</div>
			</div>
			<div>
				<NumpadKeys />
			</div>
		</div>
	);
}
