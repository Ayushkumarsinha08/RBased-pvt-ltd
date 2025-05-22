import { Navbar } from "@/components/ui/NavBar";
import Hero from "@/components/ui/Hero";
import Footer from "@/components/ui/Footer";
export default function Projects() {
  return (
  <div>   
    <div>
      <Navbar />
      </div>
      <div className="pt-10">
      <Hero />
    </div>
    <hr className="w-full border-white/20" />
<Footer/>
    </div>
  );
}

