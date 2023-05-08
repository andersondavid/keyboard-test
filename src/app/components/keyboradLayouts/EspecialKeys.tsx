import React from "react";
import Key from "../subcomponents/Key";

export default function EspecialKeys() {
	return (
		<div className="inline-block">
			<div className="mb-4">
				<Key keyValue="PRT" code=''/>
				<Key keyValue="SCL" code='ScrollLock'/>
				<Key keyValue="PAS" code='Pause'/>
			</div>
			<div>
				<Key keyValue="INS" code='Insert'/>
				<Key keyValue="HOM" code='Home' />
				<Key keyValue="PGU" code='PageUp' />
			</div>
			<div>
				<Key keyValue="DEL" code='Delete' />
				<Key keyValue="END" code='End' />
				<Key keyValue="PGD" code='PageDown' />
			</div>
		</div>
	);
}
