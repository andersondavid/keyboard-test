import React from 'react'
import FunctionsKeys from './keyboradLayouts/FunctionsKeys'
import ModifiersTypewriterKeys from './keyboradLayouts/ModifiersTypewriterKeys'
export default function Keyboard() {
	return (
		<div>
			<FunctionsKeys />
			<ModifiersTypewriterKeys />
		</div>
	)
}
