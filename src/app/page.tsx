import { Inter } from "next/font/google";
import Keyboard from "./components/Keyboard";
const inter = Inter({ subsets: ["latin"] });



export default function Home() {
	return (
		<div className="flex justify-center">
			<div className="">
				<Keyboard />
			</div>
		</div>
	);
}
