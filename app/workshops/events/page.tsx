import EventRegistration from "@/components/ui/Event-registration";
import Footer from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/NavBar"

export default function EventsPage() {
  return (
    <div>
        <Navbar />
      <div className="pt-45 h-screen">
      <EventRegistration /> 
      </div>
      {/* Add your event cards or content here */}
      <Footer />
    </div>
  );
}