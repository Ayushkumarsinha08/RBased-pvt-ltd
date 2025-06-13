import ContactCard from "@/components/ui/Contact-card";
import Footer from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/NavBar";
export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <Navbar />
<div className="pb-20">
<ContactCard />
</div>
     
      <Footer />
    </div>
  );
}

