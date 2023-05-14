import { useContext } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { ipDataContext } from '../context/ipDataContext'
function Map() {
    const { ipLocation } = useContext(ipDataContext)

    return (
        <div>
            {ipLocation && <MapContainer center={ipLocation} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Locater />
                {/* <Marker position={ipLocation!}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </MapContainer>}
        </div>
    )
}
function Locater() {
    const { ipLocation } = useContext(ipDataContext)

    const map = useMap()
    map.flyTo(ipLocation!)
    return null
}

export default Map