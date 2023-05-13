import { ReactElement, createContext, useState } from "react";

interface Props {
    children: ReactElement
}
interface contextType {
    ipData?: unknown
    updateIpData?: (data: unknown) => void
}

export const ipDataContext = createContext<contextType>({})


export function IpDataProvider(props: Props) {
    //gonna create a function that updates the ip data context 

    const [ipData, setIpData] = useState<unknown>({ idk: "465" })
    const updateIpData = (data: unknown) => {
        setIpData(data)
    }
    const contextValue = { ipData, updateIpData }

    return (
        <ipDataContext.Provider value={contextValue}>
            {props.children}
        </ipDataContext.Provider>
    )
}