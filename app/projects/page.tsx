
import { Navbar } from "@/components/ui/NavBar";
import MapComponent from "@/components/ui/MapContainer";
export default function Previous(){
    return(
        <div>
            <Navbar/>
            <main className="h-screen w-full">
      <MapComponent />
      
    </main>
        </div>
    )
}