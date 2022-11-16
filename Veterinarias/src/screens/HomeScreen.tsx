import { useContext } from "react"
import { MapView } from "../components"
import { PlacesContext } from "../context"

export const HomeScreen = () => {

    const { isLoading, userLocation}= useContext(PlacesContext)
    
    return (
    <div>
        <MapView />
    </div>


    )
}