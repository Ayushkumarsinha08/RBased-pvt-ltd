"use client";
import { useState, useEffect } from 'react';

export default function Content() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const features = [
    {
      title: "RBASED SERVICES PVT LTD",
      description: "Navigate through our intuitive interface with ease",
      image:"/map-img.jpg" // You'll need to add these images to your public folder
    },
    {
      title: "RBASED SERVICES PVT LTD",
      description: "Access professional-grade tools designed for efficiency",
      image: "/easy.jpg"
    },
    {
      title: "RBASED SERVICES PVT LTD",
      description: "Join thousands of satisfied users in our growing community",
      image: "/background-img.jpg"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-300 py-12 px-4">
      
      {/* Carousel */}
      <div className=" w-full h-[90vh] pt-12 max-w-full mb-16">
        <div className="overflow-hidden rounded-lg shadow-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div 
                  className="relative h-64 md:h-[80vh]"
                  style={{
                    backgroundImage: `url(${feature.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-black/40">
                    {feature.title}
                  </div>
                </div>
                <div className="p-6 bg-black">
                    <h1 className="text-3xl font-extrabold tracking-tight mb-4 text-center pt-4">{feature.title}</h1>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-r-lg hover:bg-black/70"
        >
          &#10094;
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-l-lg hover:bg-black/70"
        >
          &#10095;
        </button>
        
        {/* Dots indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {features.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)} 
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
      
      
    </div>
  );
}