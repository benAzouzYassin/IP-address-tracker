import { createContext, useState } from "react";

export const ipDataContext = createContext<any>("")

export function IpDataProvider() {
    //gonna create a function that updates the ip data context 

    const [ipData, setIpData] = useState<any>()
    return
}