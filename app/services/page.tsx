"use client";

import { Feature } from "@/components/ui/feature-section-with-grid";
import Footer from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/NavBar";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Loading } from "./loading";

export default function Services() {
    const router = useRouter();
    const [isTokenValid, setIsTokenValid] = useState(false);
    const session = useSession();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = session.data?.user ;
        if (!token || (!user)) {
            router.push("/login"); // Redirect to login if token is not present
        }
        else{
            setIsTokenValid(true);
        }
    }, []);

    if (!isTokenValid) {
        return <Loading />; // Fixed typo in loading message
    }

    return (
        <div className="w-full">
            <Navbar />
            <Feature />
            <Footer />
        </div>
    );
}
