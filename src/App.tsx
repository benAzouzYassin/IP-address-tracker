import Data from "./components/Data"
import Map from "./components/Map"
import SearchBar from "./components/SearchBar"
import { IpDataProvider } from "./context/ipDataContext"

function App() {
  //gonna take the data of the current adress and set it to the context
  return (
    <IpDataProvider>
      <div className="relative flex flex-col">
        <SearchBar />
        <Data />
        <Map />
      </div>
    </IpDataProvider>
  )
}

export default App
