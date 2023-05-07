import { RefObject, createContext, ReactElement } from "react";

type PropTypes = {
	children: JSX.Element;
};
export const KeysContext = createContext<RefObject<HTMLDivElement>[]>([]);

export default function defaultKeysContextProvider({ children }: PropTypes) {
	return <KeysContext.Provider value={[]}>{children}</KeysContext.Provider>;
}
