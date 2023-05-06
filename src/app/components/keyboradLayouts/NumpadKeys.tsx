import React from "react";
import Key from "../subcomponents/Key";

export default function NumpadKeys() {
	return (
		<div className="flex mt-[5em]">
			<div className="inline-block">
				<div>
					<Key keyValue="NLK" />
					<Key keyValue="/" />
					<Key keyValue="*" />
				</div>
				<div>
					<Key keyValue="7" />
					<Key keyValue="8" />
					<Key keyValue="9" />
				</div>
				<div>
					<Key keyValue="4" />
					<Key keyValue="5" />
					<Key keyValue="6" />
				</div>

				<div>
					<Key keyValue="1" />
					<Key keyValue="2" />
					<Key keyValue="3" />
				</div>
				<div>
					<Key keyValue="0" />
					<Key keyValue="." className={"w-[7.5em]"} />
				</div>
			</div>
			<div className="col-start-2 flex flex-col">
				<Key keyValue="-" />
				<Key keyValue="+" className={"h-[7.5em]"} />
				<Key keyValue="↵" className={"h-[7.5em]"} />
			</div>
		</div>
	);
}
