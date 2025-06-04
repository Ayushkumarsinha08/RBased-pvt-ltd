import React from "react";
import { SignupForm } from "@/components/ui/signup-form";
import { Navbar } from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

export default function Signup() {
  return (
    <div> 
      <div className="min-h-screen relative overflow-hidden">
      {/* Half-circle gradient background element */}
      <div className="absolute w-[110%] h-[100%] -top-1/2 -left-1/2 rounded-full bg-gradient-to-br from-blue-950 to-black opacity-70" /> 
{/* Second overlapping half-circle for more depth */}
<div className="absolute w-[100%] h-[100%] -bottom-1/2 -right-1/2 rounded-full bg-gradient-to-tl from-gray-100 to-black opacity-60" />
        <Navbar />
        <div className="h-screen flex justify-center items-center relative z-10">   
    <div className="pt-13" >
      <div className="h-[80rem] w-full flex items-center justify-center">
        <div className="border border-white/20 rounded-lg p-15 bg-gradient-to-b from-gray-950">
          <SignupForm />
        </div>
      </div>
      </div>
    </div>
    </div>
    <Footer />
    </div>
  );
}
