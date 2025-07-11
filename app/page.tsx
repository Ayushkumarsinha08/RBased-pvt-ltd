import About from "@/components/ui/About"
import Card from "@/components/ui/Card"
import ContactCard from "@/components/ui/Contact-card"
import Content from "@/components/ui/firstpage-content"
import Footer from "@/components/ui/Footer"
import GifCard from "@/components/ui/GifCard"
import { Navbar } from "@/components/ui/NavBar"

export default function Home ( ){
    return (
        <div> 
            <div className="">
                <Navbar/>
            </div>
            <div className="">
            <GifCard 
                src="/vid.mp4" // Try using this image that works in your Card component
                title="Bringing out of this world opportunities to you"
                description="We develop cutting edge Earth observatory imaging solutions that will revolutionise your business"
            />
            </div>
            <hr />
            <div>
           <hr /> 
            <About/>
            <hr />
<p className="text-6xl font-extralight pb-8 pt-8 text-center">SOLUTIONS</p>
                <Content/>


                {/* Our Projects Section Header */}
                <div className="pt-20 text-center text-6xl font-extralight">OUR PROJECTS</div>               
                {/* Third Section - Card with video on left, Text on right */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:p-30">
                    <Card 
                        src={"/images/research-img.jpg"}
                        videoSrc={"/map-video.mp4"}
                        title={"Udanti Sitanadi Drone Visualization App"}
                        description={"This is a Real Life Problems Through GIS and RBASED solutions."}
                    />
                    <div className="flex flex-col items-center pt-15  space-y-4">
                        <h2 className="text-4xl font-extralight md:text-2xl lg:text-6xl text-center">Drone Visualization App</h2>
                        <p className="text-xl md:text-xl lg:text-2xl font-extralight px-6 pt-4 leading-relaxed">
                        The Data Visualization App is a powerful, interactive web-based platform designed to help 
stakeholders easily manage, visualize, and analyze drone-captured and geospatial data. 
It transforms complex environmental data into intuitive visual insights through dynamic 
mapping, real-time overlays, and user-friendly dashboards.
                        </p>
                                  </div>
                </div>
                {/* Fourth Section - Text on left, Card on right */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:p-30 pt-8">  
                    <div className="flex flex-col items-center pt-20 space-y-4">
                        <h2 className="text-4xl font-extralight md:text-5xl lg:text-6xl text-center">West Bengal Digital Info System</h2>
                        <p className="text-xl md:text-2xl lg:text-2xl font-extralight px-6 pt-4 leading-relaxed">
                        The Digital Information System (DIS) for Industrial Estates in WestBengal is a web-based platform designed to streamline and bring transparency to the industrial plot allocation process. It introduces a bidding mechanism that promotes fair competition and ease of access. 
                        </p>
                                   </div>
                    <div className="space-y-4">
                        <Card 
                            src={"/images/bihar.jpg"}
                            videoSrc={"/demo2.mp4"}
                            title={"Digital Information System for West Bengal"}
                            description={"This is a Real Life Problems Through GIS and RBASED solutions."}
                        />
                    </div>
                </div>
            </div>
            <hr/>
            <div className="pb-20 bg-black">
                <ContactCard/>
            </div>
        
            <Footer/>
        </div>
    )
}
