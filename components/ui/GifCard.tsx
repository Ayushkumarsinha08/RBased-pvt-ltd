import Image from 'next/image';

interface GifCardProps {
  src: string;
  title: string;
  description: string;
}

export default function GifCard({ src, title, description }: GifCardProps) {
    return (
        <div className="bg-black rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
                <div className="w-full h-screen relative">
                    <Image 
                        src={src} 
                        alt={title} 
                        fill 
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center p-4 text-center">
                    <h2 className="text-cyan-500 text-6xl font-extralight mb-4">{title}</h2>
                    <p className="text-white text-2xl font-extralight max-w-md">{description}</p>
                </div>

            </div>
           
        </div>
    )
};