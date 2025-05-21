import { Feature } from "@/components/ui/feature-section-with-grid"
import Footer from "@/components/ui/Footer"
import { Navbar } from "@/components/ui/NavBar"


export default function Solution(){
    return(
        <div>
             <div className="w-full">
                <Navbar/>
               <Feature />
               <hr className="w-full border-white/20 " />
               <Footer/>

    </div>
        </div>
    )
}