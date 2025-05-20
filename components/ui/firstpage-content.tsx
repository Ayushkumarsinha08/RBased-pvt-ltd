"use client";
import { useState, useEffect } from 'react';

export default function Content() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const features = [
    {
      title: "Seamless Experience",
      description: "Navigate through our intuitive interface with ease",
      image:"/public/background-img.jpg" // You'll need to add these images to your public folder
    },
    {
      title: "Powerful Tools",
      description: "Access professional-grade tools designed for efficiency",
      image: "/images/tools.jpg"
    },
    {
      title: "Community Support",
      description: "Join thousands of satisfied users in our growing community",
      image: "/images/community.jpg"
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
      <div className=" w-full h-screen max-w-full mb-16">
        <div className="overflow-hidden rounded-lg shadow-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="relative h-64 md:h-screen bg-muted">
                  {/* You can replace this with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                    {feature.title}
                  </div>
                </div>
                <div className="bg-muted p-6">
                  <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
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
      
      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mb-12">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-3 text-blue-400">Time Saving</h2>
          <p>Our app streamlines your workflow, saving you valuable time on everyday tasks.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-3 text-green-400">Cost Effective</h2>
          <p>Get premium features at competitive prices with flexible subscription options.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-3 text-purple-400">User Friendly</h2>
          <p>Designed with you in mind, our intuitive interface makes complex tasks simple.</p>
        </div>
      </div> 
    </div>
  );
}