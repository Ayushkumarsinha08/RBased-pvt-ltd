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
                        src="/pic-rbased/gis-system.jpg"
                        title={"Research Based Solution"}
                        description={"hi thsere here we write some thing about the site"}
                        
                    />
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mask-linear-from-neutral-500 text-center">Introduction</h2>
                        <p className="text-xl md:text-2xl lg:text-3xl font-medium px-6 pt-4 leading-relaxed">
                        A Geographic Information System (GIS) is a computer-based tool for mapping and analyzing
feature & events on earth. GIS technology integrates common database operations, such as
query and statistical analysis, with maps. It manages location-based information and provides
tools for display and analysis of various statistics, including population characteristics, economic
development opportunities, and vegetation types.

                        </p>
                        <p className="text-base font-medium px-6 leading-relaxed">
                            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes.
                        </p>
                    </div>
                </div>
                
                {/* Second Section - Text on left, Card on right */}
                <div className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 pt-8">  
                    <div className=" space-y-4 md:order-last">
                        <Card 
                            src={"/pic-rbased/enery-sec.jpg"}
                            title={"Research Based Solution"}
                            description={"hi thsere here we write some thing about the site"}
                        />
                    </div>
                    <div className="bg-black flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mask-linear-from-neutral-500 text-center">GIS Sensing</h2>
                        <p className="text-xl md:text-2xl lg:text-3xl font-medium px-6 pt-4 leading-relaxed">
                        Remote sensing is the art and science of making measurements of earth using air based and
space-based sensors. These sensors collect data in the form of images and provide specialized
capabilities for manipulating, analyzing, and visualizing those images. Remotely sensed images
are integrated with a GIS system bring out useful analysis and visualizations.
The need of the hour is to bring this highly useful technology into application. As it has got big
potential to analyzed and solve many real life problems, both in developing and developed
nations
                        </p>
                        <p className="text-base font-medium  leading-relaxed">
                            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes.
                        </p>
                    </div>
                </div>
                
                {/* Third Section - Card with video on left, Text on right */}
                <div className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 pt-8">
                    <Card 
                        src={"/images/research-img.jpg"}
                        videoSrc={"/map-video.mp4"}
                        title={"Research Based Solution"}
                        description={"hi thsere here we write some thing about the site"}
                    />
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mask-linear-from-neutral-500 text-center">RBased Services</h2>
                        <p className="text-xl md:text-2xl lg:text-3xl font-medium px-6 pt-4 leading-relaxed">
RBased Services is an innovative step taken by the researchers and alumni of top technical
institutes and pioneer institute or Remote Sensing and GIS in India, Indian Institute of Remote
Sensing, ISRO Dehradun which is aimed at providing, Research Based Solution to Real Life
Problems. 
                        </p>
                        <p className="text-base font-medium px-6 leading-relaxed">
                            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes.
                        </p>
                    </div>
                </div>



   {/* Second Section - Text on left, Card on right */}
                <div className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 pt-8">  
                    <div className=" space-y-4 md:order-last">
                        <Card 
                            src={"/images/bihar.jpg"}
                            videoSrc={"/demo2.mp4"}
                            title={"Research Based Solution"}
                            description={"hi thsere here we write some thing about the site"}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mask-linear-from-neutral-500 text-center">Company Overview</h2>
                        <p className="text-xl md:text-2xl lg:text-3xl font-medium px-6 pt-4 leading-relaxed">
                        Our team at RBased comprises the experts from multiple domains like Remote
Sensing, Geographic Information System, Hydrology, Agriculture, Forestry, Environmental
Studies, Climatology, Photogrammetry and Urban studies. The team is well experienced in the
latest cutting edge technology&apos;s like Drone data accusation and processing, D-GPS surveys,
latest software&apos;s and modeling techniques.
                        </p>
                        <p className="text-base font-medium  leading-relaxed">
                            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes.
                        </p>
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
