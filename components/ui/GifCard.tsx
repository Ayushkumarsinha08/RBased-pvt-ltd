import Image from 'next/image';

interface GifCardProps {
  src: string;
  title: string;
  description: string;
}

export default function GifCard({ src, title, description }: GifCardProps) {
    return (
        <div className="rounded-lg sm:w-full md:w-full lg:w-full shadow-lg overflow-hidden">
            <div className="relative">
                
                <div>
                    <video 
                        src={src} 
                        className="w-full h-screen relative object-cover" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    >
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center p-4 text-center">
                    <h2 className="text-cyan-300 font-extralight mb-4 text-4xl sm:text-4xl md:text-7xl">{title}</h2>
                    <p className="text-white text-xl sm:text-2xl md:text-4xl font-extralight max-w-3xl">{description}</p>
                </div>

            </div>
           
        </div>
    )
};