import ServicePage from "@/components/Service-content";
import Footer from "@/components/ui/Footer";
import MultiStepForm from "@/components/ui/multi-step";
import { Navbar } from "@/components/ui/NavBar";
export default function Services() {
    return ( 
    <div>
            <Navbar />
            <div>
            <ServicePage/>
            </div>
            <hr/>
            <div className="flex justify-center items-center">
                <MultiStepForm />
            </div>
            <Footer />
        </div>
    );
}
