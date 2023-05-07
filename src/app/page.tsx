"use client";
import About from "./components/About";
import Keyboard from "./components/Keyboard";
import Title from "./components/Title";
import KeysContextProvider from "./context/KeysContext";

export default function Home() {
	return (
		<KeysContextProvider>
			<div className="max-w-max m-auto pt-20">
				<Title />
				<Keyboard />
				<About />
			</div>
		</KeysContextProvider>
	);
}
