import { LatLngTuple } from "leaflet";
import { ReactElement, createContext, useState } from "react";

interface Props {
    children: ReactElement;
}
interface ipDataType {
    as?: string;
    city?: string;
    country?: string;
    countryCode?: string;
    isp?: string;
    lat?: number;
    lon?: number;
    org?: number;
    query?: string;
    region?: string;
    regionName?: string;
    status?: string;
    timezone?: string;
    zip?: string;
}

interface contextType {
    ip?: string;
    ipData?: ipDataType;
    ipLocation?: LatLngTuple;
    updateIpData?: (data: ipDataType) => void;
    updateIp?: (newIp: string) => void;
    updateIpLocation?: (newLocation: LatLngTuple) => void
}

export const ipDataContext = createContext<contextType>({});

export function IpDataProvider(props: Props) {

    const [ip, setIp] = useState("");
    const [ipData, setIpData] = useState<ipDataType>({});
    const [ipLocation, setIpLocation] = useState<LatLngTuple>()

    const updateIpData = (data: ipDataType) => setIpData(data);
    const updateIp = (newIp: string) => setIp(newIp);
    const updateIpLocation = (newLocation: LatLngTuple) => setIpLocation(newLocation)


    const contextValue = { ipData, updateIpData, updateIp, ip, ipLocation, updateIpLocation };

    return (
        <ipDataContext.Provider value={contextValue}>
            {props.children}
        </ipDataContext.Provider>
    );
}
