import { useContext, useState } from "react"
import { ipDataContext } from "../context/ipDataContext"

function SearchBar() {
    const { updateIp, updateIpData, updateIpLocation, ipLocation } = useContext(ipDataContext)
    const [ipField, setIpField] = useState("")
    const updateIpField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIpField(e.target.value)
    }
    const searchIpLocation = () => {
        updateIp!(ipField)
        fetch(`http://ip-api.com/json/${ipField}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    updateIpData!(data)
                    updateIpLocation!([data.lat, data.lon])
                }
            })
    }
    return (
        <div className='bg-[url("./images/pattern-bg-desktop.png")] bg-cover bg-center w-full h-80 pt-10 flex flex-col'>
            <h1 className="text-4xl font-semibold text-white text-center">IP Adress Tracker</h1>
            <div className="justify-center pt-10 flex ">
                <input className="w-1/4 p-3 rounded-l-xl focus:outline-none " type="text" value={ipField} onChange={updateIpField} placeholder="Search for any IP adress or domain" />
                <button className="bg-black py-3 px-4 rounded-r-xl h-full hover:bg-gray-800 " onClick={searchIpLocation}><img src="/images/icon-arrow.svg" alt="search IP" width="100%" height="100%" /></button>
            </div>
        </div>
    )
}

export default SearchBar