import React from "react";
import Key from "../subcomponents/Key";

export default function FunctionsKeys() {
	return (
		<div className="inline-block">
			<Key keyValue="ESC" code="Escape" />
			<Key keyValue="null" className="opacity-0" />
			<Key keyValue="F1" code="F1" />
			<Key keyValue="F2" code="F2" />
			<Key keyValue="F3" code="F3" />
			<Key keyValue="F4" className="mr-7" code="F4" />
			<Key keyValue="F5" code="F5" />
			<Key keyValue="F6" code="F6" />
			<Key keyValue="F7" code="F7" />
			<Key keyValue="F8" className="mr-7" code="F8" />
			<Key keyValue="F9" code="F9" />
			<Key keyValue="F10" code="F10" />
			<Key keyValue="F11" code="F11" />
			<Key keyValue="F12" code="F12" />
		</div>
	);
}
