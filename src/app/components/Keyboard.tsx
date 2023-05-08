import React, { useEffect, useContext } from "react";

import FunctionsKeys from "./keyboradLayouts/FunctionsKeys";
import ModifiersTypewriterKeys from "./keyboradLayouts/ModifiersTypewriterKeys";
import ArrowsNavigationsKeys from "./keyboradLayouts/ArrowsNavigationsKeys";
import EspecialKeys from "./keyboradLayouts/EspecialKeys";
import NumpadKeys from "./keyboradLayouts/NumpadKeys";

import handleKeyPress from "@/libs/handleKeyPress";
import { KeysContext } from "../context/KeysContext";

export default function Keyboard() {
	const keysContext = useContext(KeysContext);

	useEffect(() => {
		handleKeyPress(keysContext);
	});

	return (
		<div className="flex">
			<h2 className="text-9xl"></h2>
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
