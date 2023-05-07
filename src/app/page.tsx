import About from "./components/About";
import Keyboard from "./components/Keyboard";
import Title from "./components/Title";
export default function Home() {
	return (
		<div className="max-w-max m-auto pt-20">
			<Title />
			<Keyboard />
			<About />
		</div>
	);
}
