import Card from "@/components/ui/Card"
import ContactCard from "@/components/ui/Contact-card"
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
                
                {/* First Section - Card on left, Text on right */}
                <div className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 pt-8">  
                    <Card 
                        src="/pic-rbased/capacity.jpg"
                        title={"Research Based Services"}
                        description={"This is a Real Life Problems Through GIS and RBASED solutions."}
                    />
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mask-linear-from-neutral-500 underline text-center">Research Based Services</h2>
                        <p className="text-xl md:text-lg lg:text-2xl font-medium px-6 pt-4 leading-relaxed">
                        A Geographic Information System (GIS) is a computer-based tool for mapping and analyzing
feature & events on earth. GIS technology integrates common database operations, such as
query and statistical analysis, with maps. It manages location-based information and provides
tools for display and analysis of various statistics, including population characteristics, economic
development opportunities, and vegetation types.
                        </p>
                       
                    </div>
                </div>
                
                {/* Second Section - Text on left, Card on right */}
                <div className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 pt-8">  
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mask-linear-from-neutral-500 underline text-center">Real Life Problems Through</h2>
                        <p className="text-xl md:text-2xl lg:text-2xl font-medium px-6 pt-4 leading-relaxed">
                        Remote sensing is the art and science of making measurements of earth using air based and
space-based sensors. These sensors collect data in the form of images and provide specialized
capabilities for manipulating, analyzing, and visualizing those images. Remotely sensed images
are integrated with a GIS system bring out useful analysis and visualizations.
The need of the hour is to bring this highly useful technology into application. As it has got big
potential to analyzed and solve many real life problems, both in developing and developed
nations
                        </p> 
                    </div>
                    <div className="space-y-4">
                        <Card 
                            src={"/pic-rbased/enery-sec.jpg"}
                            title={"Real Life Problems Through"}
                            description={"This is a Real Life Problems Through GIS and RBASED solutions."}
                        />
                    </div>
                </div>
{/*third sttarts here*/}
<div className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 pt-8">  
                    <Card 
                        src="/pic-rbased/gis-system.jpg"
                        title={"Remote Sensing and GIS"}
                        description={"This is a Real Life Problems Through GIS and RBASED solutions."}
                    />
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mask-linear-from-neutral-500 underline text-center">Remote Sensing and GIS</h2>
                        <p className="text-xl md:text-2xl lg:text-2xl font-medium px-6 pt-4 leading-relaxed">
                        A Geographic Information System (GIS) is a computer-based tool for mapping and analyzing
feature & events on earth. GIS technology integrates common database operations, such as
query and statistical analysis, with maps. It manages location-based information and provides
tools for display and analysis of various statistics, including population characteristics, economic
development opportunities, and vegetation types.
                        </p>
                    </div>
                </div>
                {/* Our Projects Section Header */}
                <hr />
                <div className="pb-8 pt-8 text-center text-5xl bg-black font-bold underline">Our Projects</div>               
                {/* Third Section - Card with video on left, Text on right */}
                <div className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 pt-8">
                    <Card 
                        src={"/images/research-img.jpg"}
                        videoSrc={"/map-video.mp4"}
                        title={"Udanti Sitanadi Drone Visualization App"}
                        description={"This is a Real Life Problems Through GIS and RBASED solutions."}
                    />
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mask-linear-from-neutral-500 text-center">Drone Visualization App</h2>
                        <p className="text-xl md:text-2xl lg:text-2xl font-medium px-6 pt-4 leading-relaxed">
RBased Services is an innovative step taken by the researchers and alumni of top technical
institutes and pioneer institute or Remote Sensing and GIS in India, Indian Institute of Remote
Sensing, ISRO Dehradun which is aimed at providing, Research Based Solution to Real Life
Problems. 
                        </p>
                                  </div>
                </div>
                {/* Fourth Section - Text on left, Card on right */}
                <div className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 pt-8">  
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mask-linear-from-neutral-500 text-center">Digital Info System</h2>
                        <p className="text-xl md:text-2xl lg:text-2xl font-medium px-6 pt-4 leading-relaxed">
                        Our team at RBased comprises the experts from multiple domains like Remote
Sensing, Geographic Information System, Hydrology, Agriculture, Forestry, Environmental
Studies, Climatology, Photogrammetry and Urban studies. The team is well experienced in the
latest cutting edge technologies like Drone data acquisition and processing, D-GPS surveys,
latest softwares and modeling techniques.
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
            
            <div className="pb-20 bg-black">
                <ContactCard/>
            </div>
        
            <Footer/>
        </div>
    )
}
