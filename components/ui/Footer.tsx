import Image from 'next/image';
import MapComponent from "@/components/ui/MapContainer";
export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-10 text-white w-full py-10">
      <div className="container-fluid max-w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Information */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/logo.jpg" alt="RBS Logo" width={80} height={60} className="h-10 w-auto" />
              <span className="font-bold text-2xl">RBased Services Pvt. Ltd</span>
            </div>
            <p className="text-sm flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              B-28 A, RAJIV NAGAR, BEGUMPUR,<br />
              OPP. ROHINI SECTOR-22, DELHI-110008 
            </p>
            <div className="text-sm space-y-1">
              <p className='flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:office@rbasedservices.in" className="hover:underline">office@rbasedservices.in</a>
              </p>
              <p className='flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:rbasedservices@outlook.com" className="hover:underline">rbasedservices@outlook.com</a>
              </p>
              <p className='flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:rbasedservice@gmail.com" className="hover:underline">rbasedservice@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Column 2: Contact Us */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-2xl">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>8005390053, 7017879339</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>office@rbasedservices.in</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Delhi, India</span>
              </p>
            </div>
          </div>

          {/* Column 3: Map */}
          <div className="flex flex-col space-y-4">
            <h3 className="flex items-center font-bold text-2xl">Visit Us</h3>
            <div className="w-90 h-48 bg-gray-800 rounded overflow-hidden">
              <MapComponent />
              
            </div>
          </div>

          {/* Column 4: Reach Out (Google Form) */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-2xl">Reach Out</h3>
            <p className="w-100 text-sm mb-2">Have questions? Fill out our quick contact form, and we will get back to you shortly.</p>
            <div className="w-100 h-48 bg-gray-800 rounded overflow-hidden">
              <iframe 
                src={process.env.GOOGLE_FORM_URL}
                className="w-100 h-48 border-0" 
                title="Contact Form"
              >Loading form...</iframe>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-10 bg-black text-center text-sm">
          <p>© {new Date().getFullYear()} RBased Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
