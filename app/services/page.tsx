"use client";
import { Feature } from "@/components/ui/feature-section-with-grid"
import Footer from "@/components/ui/Footer"
import { Navbar } from "@/components/ui/NavBar"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Services(){
    const router = useRouter();
    const [istoken, setistoken] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login"); // Redirect to login if token is not present
        } else{
            setistoken(true);
        }
    }, []);

    if (!istoken) {
        return <p>Loading...</p>; // Fixed typo in loading message
    }

    return(
        <div>
             <div className="w-full">
                <Navbar/>
               <Feature />
               <hr className="w-full border-white/20 " />
               <Footer/>

    </div>
        </div>
    )
}