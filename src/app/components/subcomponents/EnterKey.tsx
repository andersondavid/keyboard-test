import React, { useContext, useRef } from "react";
import { KeysContext } from "@/app/context/KeysContext";

type PropType = {
	keyValue: string;
	className?: React.ComponentProps<"div">["className"];
	code: string;
};

export default function KeyEnter(props: PropType) {
	const { keyValue, className, code } = props;
	const ref = useRef<HTMLDivElement>(null);
	const context = useContext(KeysContext);

	context.push(ref);

	return (
		<div className="absolute bottom-0 right-0">
			<div
				className={`h-[7.5em] w-16 px-2 py-1 rounded-lg rounded-tl-none border-2 border-white m-1 inline-block ${className}`}
				ref={ref}
				id={code}
			>
				<span className="border-2 border-white border-r-0 absolute top-1 h-14 -left-3 w-[1.125em] rounded-lg rounded-e-none bg-black enter"></span>
				<span className="font-bold font-goldman text-3xl">{keyValue}</span>
			</div>
		</div>
	);
}
