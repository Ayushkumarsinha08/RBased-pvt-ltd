"use client";

import { Feature } from "@/components/ui/feature-section-with-grid";
import Footer from "@/components/ui/Footer";
import MultiStepForm from "@/components/ui/multi-step";
import { Navbar } from "@/components/ui/NavBar";

export default function Services() {




    return (
        <div className="w-full">
            <Navbar />
            <div className="">
            <Feature />
            </div>
            <hr/>
            <div className="flex justify-center items-center bg-black">
                <MultiStepForm />
            </div>
            
            <Footer />
        </div>
    );
}
