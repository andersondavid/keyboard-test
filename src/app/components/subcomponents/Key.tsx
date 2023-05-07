import React, { useContext, useRef } from "react";
import { KeysContext } from "@/app/context/KeysContext";

type PropType = {
	keyValue: string;
	className?: React.ComponentProps<"div">["className"];
	code: string;
};

export default function Key(props: PropType) {
	const { keyValue, className, code } = props;
	const ref = useRef<HTMLDivElement>(null);
	const context = useContext(KeysContext);

	context.push(ref);

	return (
		<div
			ref={ref}
			id={code}
			className={`h-14 w-14 px-2 py-1 rounded-lg border-2 border-white m-1 inline-block ${className}`}
		>
			<span className="font-bold text-lg font-goldman">{keyValue}</span>
		</div>
	);
}
