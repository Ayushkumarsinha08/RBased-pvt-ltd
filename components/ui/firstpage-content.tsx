"use client";
import { useState, useEffect, useCallback } from 'react';

export default function Content() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
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
    }, 4000);
    
    return () => clearInterval(interval);
  }, [features.length]);
  
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  }, [features.length]);
  
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  }, [features.length]);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center relative text-gray-300">
      
      {/* Carousel */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[70vh] lg:h-[70vh] max-w-full mb-4 sm:mb-8 md:mb-12 lg:mb-16">
        <div className="h-full overflow-hidden rounded-lg shadow-2xl">
          <div 
            className="flex h-full transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {features.map((feature, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${feature.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 backdrop-blur-[2px] px-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-white mb-2 sm:mb-3 text-center font-serif max-w-[90%] leading-tight">
                    {feature.title}
                  </h1>
                  <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mb-2 sm:mb-4"></div>
                  <h2 className="text-base sm:text-lg md:text-xl mb-2 pb-2 text-center text-white max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
                    Research-Based Solutions to Real-Life Problems through Remote Sensing and GIS
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows - Hidden on small screens */}
        <button 
          onClick={prevSlide}
          aria-label="Previous slide"
          className="hidden sm:block absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-r-lg hover:bg-black/70 z-10"
        >
          &#10094;
        </button>
        <button 
          onClick={nextSlide}
          aria-label="Next slide"
          className="hidden sm:block absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-l-lg hover:bg-black/70 z-10"
        >
          &#10095;
        </button>
        
        {/* Dots indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 z-10">
          {features.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
      
      
    </div>
  );
}