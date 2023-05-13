import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import Data from "./components/Data"
import Map from "./components/Map"
import SearchBar from "./components/SearchBar"


function App() {
  //gonna take the data of the current adress and set it to the context
  return (
    <div className="relative flex flex-col">
      <SearchBar />
      <Data />
      <Map />
    </div>
  )
}

export default App
