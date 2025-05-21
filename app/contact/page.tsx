import Footer from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/NavBar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center pb-8">Contact Us</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
          <div className="w-full h-[90vh]">
            <iframe 
              src={process.env.GOOGLE_FORM_URL} // Replace with your Google Form URL
              className="w-full h-full"
              title="Contact Form"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </div>
      <hr className="w-full border-white/20 " />
      <Footer/>
    </div>
  );
}