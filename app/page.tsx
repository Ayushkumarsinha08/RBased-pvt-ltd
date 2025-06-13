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
                        src={"/images/research-img.jpg"}
                        title={"Research Based Solution"}
                        description={"hi thsere here we write some thing about the site"}
                        
                    />
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mask-linear-from-neutral-500 text-center">Hi there</h2>
                        <p className="text-xl md:text-2xl lg:text-3xl font-medium px-6 pt-4 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus vel justo commodo, a pulvinar nunc tristique.
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
                            title={"Research Based Solution"}
                            description={"hi thsere here we write some thing about the site"}
                        />
                    </div>
                    <div className="bg-black flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mask-linear-from-neutral-500 text-center">Hi there</h2>
                        <p className="text-xl md:text-2xl lg:text-3xl font-medium px-6 pt-4 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus vel justo commodo, a pulvinar nunc tristique.
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
                        videoSrc={"/demo.mp4"}
                        title={"Research Based Solution"}
                        description={"hi thsere here we write some thing about the site"}
                    />
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mask-linear-from-neutral-500 text-center">Hi there</h2>
                        <p className="text-xl md:text-2xl lg:text-3xl font-medium px-6 pt-4 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus vel justo commodo, a pulvinar nunc tristique.
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
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mask-linear-from-neutral-500 text-center">Hi there</h2>
                        <p className="text-xl md:text-2xl lg:text-3xl font-medium px-6 pt-4 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus vel justo commodo, a pulvinar nunc tristique.
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
