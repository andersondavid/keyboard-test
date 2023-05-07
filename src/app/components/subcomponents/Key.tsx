import React from "react";

type PropType = {
	keyValue: string;
	className?: React.ComponentProps<'div'>['className']
};

export default function Key(props: PropType) {
	const { keyValue, className } = props;
	return (
		<div className={`h-14 w-14 px-2 py-1 rounded-lg border-2 border-white m-1 inline-block ${className}`}>
			<span className="font-bold text-lg font-goldman">{keyValue}</span>
		</div>
	);
}
