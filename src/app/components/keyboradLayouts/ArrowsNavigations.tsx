import React from "react";
import Key from "../subcomponents/Key";

export default function ArrowsNavigations() {
	return (
		<div className="inline-block">
		<div>
			<Key keyValue="PRT" />
			<Key keyValue="SCL" />
			<Key keyValue="PAS" />
		</div>
			<div>
				<Key keyValue="INS" />
				<Key keyValue="HOM" />
				<Key keyValue="PGU" />
			</div>
			<div className="mb-16">
				<Key keyValue="DEL" />
				<Key keyValue="END" />
				<Key keyValue="PGD" />
			</div>
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
