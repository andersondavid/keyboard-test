import React from "react";
import Key from "../subcomponents/Key";

export default function EspecialKeys() {
	return (
		<div className="inline-block">
			<div className="mb-4">
				<Key keyValue="PRT" />
				<Key keyValue="SCL" />
				<Key keyValue="PAS" />
			</div>
			<div>
				<Key keyValue="INS" />
				<Key keyValue="HOM" />
				<Key keyValue="PGU" />
			</div>
			<div>
				<Key keyValue="DEL" />
				<Key keyValue="END" />
				<Key keyValue="PGD" />
			</div>
		</div>
	);
}
