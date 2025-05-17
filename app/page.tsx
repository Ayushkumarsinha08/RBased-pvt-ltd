

import Content from "@/components/ui/firstpage-content"
import { Navbar } from "@/components/ui/NavBar"
import { div } from "framer-motion/client"

export default function Home (){
    return (
        <div> 
        <div>
            <Navbar/>
            </div>
            <div>
            <Content/>
        </div>
        </div>
    )
}
