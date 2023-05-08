import React from "react";
import Key from "../subcomponents/Key";

export default function ArrowsNavigationsKey() {
	return (
		<div className="inline-block mt-[3em]">
			<div>
				<Key keyValue="⮝" className="mx-[4.25em]" code='ArrowUp' />
			</div>
			<div>
				<Key keyValue="⮜" code='ArrowLeft' />
				<Key keyValue="⮟" code='ArrowDown' />
				<Key keyValue="⮞" code='ArrowRight' />
			</div>
		</div>
	);
}
