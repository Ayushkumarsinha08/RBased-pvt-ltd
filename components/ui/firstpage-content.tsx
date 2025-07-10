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
      image: "/pic-rbased/capacity.jpg"
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
    }, 9000);
    
    return () => clearInterval(interval);
  }, [features.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="flex flex-col items-center justify-center relative text-gray-300">
      
      {/* Carousel */}
      <div className=" w-340 h-150 pt-2 max-w-full relative overflow-hidden rounded-2xl">
        <div className="overflow-hidden rounded-lg shadow-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <div 
                  className="relative h-64 md:h-[80vh]"
                  style={{
                    backgroundImage: `url(${feature.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                </div>
                <div className="absolute top-0 left-120 right-20 bottom-0 flex flex-col justify-center items-center bg-black/10 backdrop-blur-sm">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wide text-white mb-3 text-center font-serif">
                    {feature.title}
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mb-4"></div>
                  <h2 className="text-xl mb-2 pb-2 text-center text-white">Research-Based Solutions to Real-Life Problems through Remote Sensing and GIS</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-r-lg hover:bg-black/70"
        >
          &#10094;
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-l-lg hover:bg-black/70"
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