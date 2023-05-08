import React from "react";
import Key from "../subcomponents/Key";

export default function NumpadKeys() {
	return (
		<div className="flex mt-[5em]">
			<div className="inline-block">
				<div>
					<Key keyValue="NLK" code="NumLock" />
					<Key keyValue="/" code="NumpadDivide" />
					<Key keyValue="*" code="NumpadMultiply" />
				</div>
				<div>
					<Key keyValue="7" code="Numpad7" />
					<Key keyValue="8" code="Numpad8" />
					<Key keyValue="9" code="Numpad9" />
				</div>
				<div>
					<Key keyValue="4" code="Numpad4" />
					<Key keyValue="5" code="Numpad5" />
					<Key keyValue="6" code="Numpad6" />
				</div>

				<div>
					<Key keyValue="1" code="Numpad1" />
					<Key keyValue="2" code="Numpad2" />
					<Key keyValue="3" code="Numpad3" />
				</div>
				<div>
					<Key keyValue="0" className={"w-[7.5em]"} code="Numpad0" />
					<Key keyValue="." code='NumpadDecimal'/>
				</div>
			</div>
			<div className="col-start-2 flex flex-col">
				<Key keyValue="-" code='NumpadSubtract'/>
				<Key keyValue="+" code='NumpadAdd'/>
				<Key keyValue="." code='NumpadComma'/>
				<Key keyValue="↵" className={"h-[7.5em]"} code='NumpadEnter'/>
			</div>
		</div>
	);
}
