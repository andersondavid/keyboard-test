import React from "react";
import Key from "../subcomponents/Key";

export default function FunctionsKeys() {
	return (
		<div>
			<Key keyValue="ESC" />
			<Key keyValue="null" className="opacity-0" />
			<Key keyValue="F1" />
			<Key keyValue="F2" />
			<Key keyValue="F3" />
			<Key keyValue="F4" className="mr-7"/>
			<Key keyValue="F5" />
			<Key keyValue="F6" />
			<Key keyValue="F7" />
			<Key keyValue="F8" className="mr-7" />
			<Key keyValue="F9" />
			<Key keyValue="F10" />
			<Key keyValue="F11" />
			<Key keyValue="F12" />
		</div>
	);
}
