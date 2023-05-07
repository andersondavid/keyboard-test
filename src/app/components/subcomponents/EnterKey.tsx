import React from "react";
import Key from "./Key";

type PropType = {
	keyValue: string;
	className?: React.ComponentProps<"div">["className"];
	isIcon?: boolean;
};

export default function KeyEnter(props: PropType) {
	const { keyValue, className, isIcon } = props;
	return (
		<div className="absolute bottom-0 right-0 ">
			<div
				className={`h-[7.5em] w-16 px-2 py-1 rounded-lg rounded-tl-none border-2 border-white m-1 inline-block ${className}`}
			>
				<span className="border-2 border-white border-r-0 absolute top-1 h-14 -left-3 w-[1.125em] rounded-lg rounded-e-none bg-black"></span>
				<span className={`font-bold font-goldman text-3xl`}>
					{keyValue}
				</span>
			</div>
		</div>
	);
}
