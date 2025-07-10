import Image from 'next/image';

interface GifCardProps {
  src: string;
  title: string;
  description: string;
}

export default function GifCard({ src, title, description }: GifCardProps) {
    return (
        <div className="rounded-lg shadow-lg overflow-hidden">
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
                    <h2 className="text-cyan-300 text-7xl font-extralight mb-4">{title}</h2>
                    <p className="text-white text-4xl font-extralight max-w-3xl">{description}</p>
                </div>

            </div>
           
        </div>
    )
};