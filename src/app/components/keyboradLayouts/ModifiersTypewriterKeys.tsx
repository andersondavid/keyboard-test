import React from "react";
import Key from "../subcomponents/Key";
import KeyEnter from "../subcomponents/EnterKey";

export default function ModifiersTypewriterKeys() {
	return (
		<div className="inline-block">
			<div>
				<Key keyValue={`' "`} />
				<Key keyValue="1 !" />
				<Key keyValue="2 @" />
				<Key keyValue="3 #" />
				<Key keyValue="4 $" />
				<Key keyValue="5 %" />
				<Key keyValue="6 ¨" />
				<Key keyValue="7 &" />
				<Key keyValue="8 *" />
				<Key keyValue="9 (" />
				<Key keyValue="0 )" />
				<Key keyValue="- _" />
				<Key keyValue="= +" />
				<Key keyValue="⬅" className="w-[104px]" />
			</div>
			<div>
				<Key keyValue="TAB" className="w-20" />
				<Key keyValue="Q" />
				<Key keyValue="W" />
				<Key keyValue="E" />
				<Key keyValue="R" />
				<Key keyValue="T" />
				<Key keyValue="Y" />
				<Key keyValue="U" />
				<Key keyValue="I" />
				<Key keyValue="O" />
				<Key keyValue="P" />
				<Key keyValue="´`" />
				<Key keyValue="[ {" />
			</div>
			<div className="relative block">
				<Key keyValue="CAPSLK" className="w-24" />
				<Key keyValue="A" />
				<Key keyValue="S" />
				<Key keyValue="D" />
				<Key keyValue="F" />
				<Key keyValue="G" />
				<Key keyValue="H" />
				<Key keyValue="J" />
				<Key keyValue="K" />
				<Key keyValue="L" />
				<Key keyValue="Ç" />
				<Key keyValue="~ ^" />
				<Key keyValue="] }" />
				<KeyEnter keyValue="↵" />
			</div>
			<div>
				<Key keyValue="SHIFT" className="w-20" />
				<Key keyValue="\|" />
				<Key keyValue="Z" />
				<Key keyValue="X" />
				<Key keyValue="C" />
				<Key keyValue="V" />
				<Key keyValue="B" />
				<Key keyValue="N" />
				<Key keyValue="M" />
				<Key keyValue=", <" />
				<Key keyValue=". >" />
				<Key keyValue="; :" />
				<Key keyValue="/ ?" />
				<Key keyValue="SHIFT" className="w-20" />
			</div>
			<div className="flex">
				<Key keyValue="CRTL" className="w-20" />
				<Key keyValue="❖" className="w-20" />
				<Key keyValue="ALT" className="w-20" />
				<Key keyValue="" className="w-80" />
				<Key keyValue="ALT" className="w-20" />
				<Key keyValue="FN" className="w-20" />
				<Key keyValue="☰" className="w-20" />
				<Key keyValue="CRTL" className="w-20" />
			</div>
		</div>
	);
}
