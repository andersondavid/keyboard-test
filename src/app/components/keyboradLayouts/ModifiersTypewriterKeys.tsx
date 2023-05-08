import React from "react";
import Key from "../subcomponents/Key";
import KeyEnter from "../subcomponents/EnterKey";

export default function ModifiersTypewriterKeys() {
	return (
		<div className="inline-block">
			<div>
				<Key keyValue={`' "`} code="Backquote" />
				<Key keyValue="1 !" code="Digit1" />
				<Key keyValue="2 @" code="Digit2" />
				<Key keyValue="3 #" code="Digit3" />
				<Key keyValue="4 $" code="Digit4" />
				<Key keyValue="5 %" code="Digit5" />
				<Key keyValue="6 ¨" code="Digit6" />
				<Key keyValue="7 &" code="Digit7" />
				<Key keyValue="8 *" code="Digit8" />
				<Key keyValue="9 (" code="Digit9" />
				<Key keyValue="0 )" code="Digit0" />
				<Key keyValue="- _" code="Minus" />
				<Key keyValue="= +" code="Equal" />
				<Key keyValue="⬅" className="w-[104px]" code="Backspace" />
			</div>
			<div>
				<Key keyValue="TAB" className="w-20" code="Tab" />
				<Key keyValue="Q" code="KeyQ" />
				<Key keyValue="W" code="KeyW" />
				<Key keyValue="E" code="KeyE" />
				<Key keyValue="R" code="KeyR" />
				<Key keyValue="T" code="KeyT" />
				<Key keyValue="Y" code="KeyY" />
				<Key keyValue="U" code="KeyU" />
				<Key keyValue="I" code="KeyI" />
				<Key keyValue="O" code="KeyO" />
				<Key keyValue="P" code="KeyP" />
				<Key keyValue="´`" code="BracketLeft" />
				<Key keyValue="[ {" code="BracketRight" />
			</div>
			<div className="relative block">
				<Key keyValue="CAPSLK" className="w-24" code="CapsLock" />
				<Key keyValue="A" code="KeyA" />
				<Key keyValue="S" code="KeyS" />
				<Key keyValue="D" code="KeyD" />
				<Key keyValue="F" code="KeyF" />
				<Key keyValue="G" code="KeyG" />
				<Key keyValue="H" code="KeyH" />
				<Key keyValue="J" code="KeyJ" />
				<Key keyValue="K" code="KeyK" />
				<Key keyValue="L" code="KeyL" />
				<Key keyValue="Ç" code="Semicolon" />
				<Key keyValue="~ ^" code="Quote" />
				<Key keyValue="] }" code="Backslash" />
				<KeyEnter keyValue="↵" code="Enter" />
			</div>
			<div>
				<Key keyValue="SHIFT" className="w-20" code="ShiftLeft" />
				<Key keyValue="\|" code="IntlBackslash" />
				<Key keyValue="Z" code="KeyZ" />
				<Key keyValue="X" code="KeyX" />
				<Key keyValue="C" code="KeyC" />
				<Key keyValue="V" code="KeyV" />
				<Key keyValue="B" code="KeyB" />
				<Key keyValue="N" code="KeyN" />
				<Key keyValue="M" code="KeyM" />
				<Key keyValue=", <" code="Comma" />
				<Key keyValue=". >" code="Period" />
				<Key keyValue="; :" code="Slash" />
				<Key keyValue="/ ?" code="IntlRo" />
				<Key keyValue="SHIFT" className="w-20" code="ShiftRight" />
			</div>
			<div className="flex">
				<Key keyValue="CRTL" className="w-20" code="ControlLeft" />
				<Key keyValue="❖" className="w-20" code="MetaLeft" />
				<Key keyValue="ALT" className="w-20" code="AltLeft" />
				<Key keyValue="" className="w-80" code="Space" />
				<Key keyValue="ALT" className="w-20" code="AltRight" />
				<Key keyValue="FN" className="w-20" code="" />
				<Key keyValue="☰" className="w-20" code="ContextMenu" />
				<Key keyValue="CRTL" className="w-20" code="ControlRight" />
			</div>
		</div>
	);
}
