import React from "react";
import { SignupForm } from "@/components/ui/signup-form";
import { Navbar } from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

export default function Signup() {
  return (
    <div className="bg-black ">  
        <Navbar />
    <div className=" pt-10">
      <div className="h-[70rem] w-full flex items-center justify-center">
        <SignupForm />
      </div>
    </div>
    <hr className="w-full border-white/20" />
    <Footer />
    </div>
  );
}
