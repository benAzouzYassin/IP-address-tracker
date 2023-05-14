import { useContext, useEffect } from 'react'
import { ipDataContext } from "../context/ipDataContext"
function getTimeZone(zone: string) {
    const date = new Date();
    const utcTimeformatter = new Intl.DateTimeFormat("en-US", { timeZone: "UTC", hour: "2-digit" });
    const ipTimeformatter = new Intl.DateTimeFormat("en-US", { timeZone: zone, hour: "2-digit" });
    const utcTime = parseInt(utcTimeformatter.format(date).substring(0, 2));
    const ipTime = parseInt(ipTimeformatter.format(date).substring(0, 2));
    const diff = Math.round((ipTime - utcTime) * 10) / 10;
    if (diff > 0) {
        return `UTC +${diff}:00`
    } else if (diff < 0) {
        return `UTC -${diff}:00`
    } else {
        return `UTC ${diff}:00`
    }
}
function Data() {
    const { updateIp, ip, ipData, updateIpData, updateIpLocation } = useContext(ipDataContext)
    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                updateIp!(data.ip)
            }
            );
        fetch(`http://ip-api.com/json/${ip}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    updateIpData!(data)
                    updateIpLocation!([data.lat, data.lon])
                }
            })
    }, [])
    ipData?.timezone && getTimeZone(ipData?.timezone)
    return (
        <div className='z-[1000] left-[20%] bg-white shadow-xl w-3/5 absolute top-1/3 h-44 rounded-2xl p-8 grid grid-cols-4 '>
            <div className=''><h3 className='text-xs  text-gray-500 font-semibold'>IP ADDRESS</h3><p className='text-2xl mt-6 font-semibold'>{ip}</p></div>
            <div className='border-l-2 border-solid pl-10'><h3 className='text-xs  text-gray-500 font-semibold'>LOCATION</h3><p className='text-2xl mt-6 font-semibold'>{ipData?.country}</p></div>
            <div className='border-l-2 border-solid pl-10'><h3 className='text-xs  text-gray-500 font-semibold'>TIMEZONE</h3><p className='text-2xl mt-6 font-semibold'>{ipData?.timezone && getTimeZone(ipData?.timezone)}</p></div>
            <div className='border-l-2 border-solid pl-10'><h3 className='text-xs  text-gray-500 font-semibold'>ISP</h3><p className='text-2xl mt-6 font-semibold'>{ipData?.isp}</p></div>
        </div>
    )
}

export default Data