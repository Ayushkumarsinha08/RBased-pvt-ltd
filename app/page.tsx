import Card from "@/components/ui/Card"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 pt-5">  
            <Card title={"Research Based Solution"} description={"hi thsere here we write some thing about the site"}/>
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-6xl mask-linear-from-neutral-500 text-center pt-20">Hi there</h2>
              <p className="text-3xl font-medium px-6 pt-10 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus vel justo commodo, a pulvinar nunc tristique. Etiam feugiat enim vitae magna tincidunt, in egestas massa molestie. Ut venenatis augue sed metus ultricies, eget elementum odio suscipit.
              </p>
              <p className="text-base font-medium px-6 leading-relaxed">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 pt-5">  
            <div className="flex flex-col items-center space-y-4 md:order-first">
              <h2 className="text-6xl mask-linear-from-neutral-500 text-center pt-20">Hi there</h2>
              <p className="text-3xl font-medium px-6 pt-10 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus vel justo commodo, a pulvinar nunc tristique. Etiam feugiat enim vitae magna tincidunt, in egestas massa molestie. Ut venenatis augue sed metus ultricies, eget elementum odio suscipit.
              </p>
              <p className="text-base font-medium px-6 leading-relaxed">
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
            <Card title={"Research Based Solution"} description={"hi thsere here we write some thing about the site"}/>
            </div>
            </div>
            <div className="flex flex-col justify-end items-center">
                <hr className="w-full border-white/20 " />
                <Footer/>
            </div>  </div>
    )
}
