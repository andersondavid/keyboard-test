import { RefObject } from "react";

function handleKeyPress(keysContext: RefObject<HTMLDivElement>[]): void {
	document.addEventListener('keydown', (e) => {
		e.preventDefault()
		let pressedKey = keysContext.find((key) => key.current?.id === e.code);
		pressedKey?.current?.classList.add("pressed");
	})
	document.addEventListener('keyup', (e) => {
		e.preventDefault()
		let pressedKey = keysContext.find((key) => key.current?.id === e.code);
		pressedKey?.current?.classList.remove("pressed");
		pressedKey?.current?.classList.add("pressing");
	})
}

export default handleKeyPress
