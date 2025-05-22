import Footer from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/NavBar";
import MapComponent from "@/components/ui/MapContainer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <div className="container mx-auto py-12 px-4 flex-grow">
        <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>

        {/* Contact form section */}
        <div className="bg-white h-screen rounded-lg shadow-md p-1 max-w-3xl mx-auto mb-16">
          <div className="w-full h-[100vh]">
            <iframe
              src={process.env.GOOGLE_FORM_URL}
              className="w-full h-full"
              title="Contact Form"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
            >
              Loading...
            </iframe>
          </div>
        </div>

        {/* Map section */}
        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold text-center mb-6">Find Us</h2>
          <div className="h-[50vh] w-full max-w-8xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <MapComponent />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full border-white/20" />

      {/* Footer */}
      <Footer />
    </div>
  );
}

