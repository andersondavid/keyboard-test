import React from "react";
import Key from "../subcomponents/Key";

export default function ArrowsNavigationsKey() {
	return (
		<div className="inline-block mt-[3em]">
			<div>
				<Key keyValue="⮝" className="mx-[4.25em]"/>
			</div>
			<div>
				<Key keyValue="⮜" />
				<Key keyValue="⮟" />
				<Key keyValue="⮞" />
			</div>
		</div>
	);
}
