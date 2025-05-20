

import Content from "@/components/ui/firstpage-content"
import Footer from "@/components/ui/Footer"
import { Navbar } from "@/components/ui/NavBar"

export default function Home (){
    return (
        <div> 
        <div className="">
            <Navbar/>
            </div>
            <div>
            <Content/>
            <Footer/>
        </div>
        </div>
    )
}
