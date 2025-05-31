import React from "react";
import { SignupForm } from "@/components/ui/signup-form";
import { Navbar } from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

export default function Signup() {
  return (
    <div className="bg-black ">  
        <Navbar />
    <div className="pt-10">
      <div className="h-[70rem] w-full flex items-center justify-center">
        <div className="border border-white/20 rounded-lg p-15 bg-gradient-to-b from-gray-950 overflow-hidden shadow-lg transition-transform hover:scale-105">
          <SignupForm />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
