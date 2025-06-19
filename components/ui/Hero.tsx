import Link from "next/link";
import ContactCard from "./Contact-card";
import EventRegistration from "./Event-registration";

type VideoCardProps = {
  title: string;
  description: string;
  videoId?: string;
  videoUrl?: string;
}

const VideoCard = ({ title, description, videoId, videoUrl }: VideoCardProps) => {
  return (
    <div className="bg-muted rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative pb-[56.25%] h-0">
        {videoId ? (
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : videoUrl ? (
          <video 
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl} 
            controls
          />
        ) : (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900">
            <span className="text-gray-400">No video available</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default function Hero() {
  // Sample video data - easily modifiable
  const videos: {title: string; description: string; videoId?: string; videoUrl?: string}[] = [
    {
      title: "4 Days Workshop on Introduction to Python | RBased Service Private Limited | Online Workshops",
      description: "Learn about everything we offer and how we can help you succeed.",
      videoId: "b2Ntt5oE_LU", // YouTube video ID
    },
    {
      title: "Mumbai Cyclone Nisarga - A Case Study | Google Earth Engine | RBased Services Private Limited",
      description: "Hear from our satisfied clients about their experiences working with us.",
      videoId: "YIZ4IVlQJGo",
    },
    {
      title: "Application of Google Earth Engine | RBased Services Pvt. Ltd. |",
      description: "Take a look at our process and meet our dedicated team.",
      videoId: "7--e2elA_GE", // Custom video URL
    },
    {
      title: "2nd Establishment Day Celebration | RBased Services Private Limited",
      description: "Check out our most recent work and innovative solutions.",
      videoId: "DRKGlyrhrLw",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4 text-white">
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-600">
          Discover Amazing Content
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore our collection of curated videos that showcase our expertise, projects, and vision. 
          Dive into a world of innovation and creativity.
        </p>
      </div>
      
      {/* Video Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  ">
        {videos.map((video, index) => (
          <VideoCard 
            key={index}
            title={video.title}
            description={video.description}
            videoId={video.videoId}
            videoUrl={video.videoUrl}
          />
        ))}
      </div>
      
      {/* Additional Content Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mt-16 mb-8">Join Our Upcoming Events</h2>
        <p className="text-center text-gray-300 mb-10">
          Stay updated with our latest workshops and events. Register now to secure your spot!
        </p>
      </div>
      <EventRegistration />

      {/* Call to Action Section */}
      
      {/* Additional Section */}
      <div className="max-w-8xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-muted p-6 rounded-lg">
            <div className="text-blue-400 text-3xl mb-3 hover:underline"><Link href="/contact">Contact Us</Link></div>
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-300">Contact Us for more information.</p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <div className="text-blue-500 text-3xl mb-3 hover:underline"><Link href="/workshops/events">Event Booking</Link>
            </div>
            <h3 className="text-xl font-semibold mb-2">Book your Events here</h3>
            <p className="text-gray-300">To quickly Book your events, please visit our events page for more details.</p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <Link href="https://www.youtube.com/@RBasedServicesPvtLtd" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-3xl mb-3 hover:underline">YouTube Channel</Link>
            <h3 className="text-xl font-semibold mb-2">Know More</h3>
            <p className="text-gray-300">To Know More Visit YouTube channel </p>
          </div>
        </div>
      </div>
      </div>
    
  );
}
